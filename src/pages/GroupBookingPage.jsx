import { useState, useReducer } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs.js';
import Header from '../components/Header.jsx';
import Section from '../components/Section.jsx';
import Step0WelcomeMessage from '../components/groupBooking/Step0WelcomeMessage.jsx';
import Step1GuestDetails from '../components/groupBooking/Step1GuestDetails.jsx';
import Step2MenuSelection from '../components/groupBooking/Step2MenuSelection.jsx';
import Step3DishSelection from '../components/groupBooking/Step3DishSelection.jsx';
import Step4Quantities from '../components/groupBooking/Step4Quantities.jsx';
import Step5Summary from '../components/groupBooking/Step5Summary.jsx';
import Step6ThankYou from '../components/groupBooking/Step6ThankYou.jsx';

// Initial state for the booking form
const initialState = {
  // Step 1: Guest Details
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '18:00',
  guests: 6,
  depositAgreement: false,
  
  // Step 2: Menu Selection
  menuOption: null, // 'aLaCarte' or 'groupMenu'
  groupMenuType: 'standard', // 'standard' (38) or 'delice' (55)
  
  // Step 3: Dish Selection
  selectedDishes: {
    starters: [],
    mains: [],
    desserts: []
  },
  
  // Step 4: Quantities & Special Requests
  quantities: {},
  specialRequests: '',
  
  // Step 5: Summary & Confirmation
  confirmAgreement: false,
  
  // Form validation
  errors: {},
  isSubmitting: false
};

// Action types for the reducer
const ACTIONS = {
  UPDATE_FIELD: 'UPDATE_FIELD',
  SET_MENU_OPTION: 'SET_MENU_OPTION',
  SET_GROUP_MENU_TYPE: 'SET_GROUP_MENU_TYPE',
  SELECT_DISH: 'SELECT_DISH',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  SET_ERRORS: 'SET_ERRORS',
  CLEAR_ERRORS: 'CLEAR_ERRORS',
  SET_SUBMITTING: 'SET_SUBMITTING',
  RESET_FORM: 'RESET_FORM'
};

// Reducer function to manage form state
function bookingReducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_FIELD:
      return {
        ...state,
        [action.field]: action.value
      };
    
    case ACTIONS.SET_GROUP_MENU_TYPE: {
      const isDelice = action.value === 'delice';
      return {
        ...state,
        groupMenuType: action.value,
        selectedDishes: {
          starters: isDelice ? ['delice-soup', 'delice-cheese', 'delice-shrimp'] : ['cheese-croquettes', 'shrimp-croquettes'],
          mains: isDelice ? ['delice-chicken', 'delice-rabbit', 'delice-salmon'] : ['natural-steak', 'baked-salmon'],
          desserts: isDelice ? ['delice-mousse', 'delice-dame'] : ['coffee-tea', 'dame-blanche']
        },
        quantities: {}
      };
    }

    case ACTIONS.SET_MENU_OPTION:
      if (action.value === 'groupMenu') {
        const isDelice = state.groupMenuType === 'delice';
        // For Group Menu, automatically select all dishes
        return {
          ...state,
          menuOption: action.value,
          selectedDishes: {
            starters: isDelice ? ['delice-soup', 'delice-cheese', 'delice-shrimp'] : ['cheese-croquettes', 'shrimp-croquettes'],
            mains: isDelice ? ['delice-chicken', 'delice-rabbit', 'delice-salmon'] : ['natural-steak', 'baked-salmon'],
            desserts: isDelice ? ['delice-mousse', 'delice-dame'] : ['coffee-tea', 'dame-blanche']
          },
          quantities: {}
        };
      } else {
        // For À la Carte, reset dish selection
        return {
          ...state,
          menuOption: action.value,
          selectedDishes: {
            starters: [],
            mains: [],
            desserts: []
          },
          quantities: {}
        };
      }
    
    case ACTIONS.SELECT_DISH:
      const { course, dishId, isSelected } = action.payload;
      const currentSelection = state.selectedDishes[course] || [];
      
      let newSelection;
      if (isSelected) {
        // Add dish if not already selected
        if (!currentSelection.includes(dishId)) {
          newSelection = [...currentSelection, dishId];
        } else {
          newSelection = currentSelection;
        }
      } else {
        // Remove dish
        newSelection = currentSelection.filter(id => id !== dishId);
      }
      
      return {
        ...state,
        selectedDishes: {
          ...state.selectedDishes,
          [course]: newSelection
        }
      };
    
    case ACTIONS.UPDATE_QUANTITY:
      return {
        ...state,
        quantities: {
          ...state.quantities,
          [action.dishId]: action.quantity
        }
      };
    
    case ACTIONS.SET_ERRORS:
      return {
        ...state,
        errors: action.errors
      };
    
    case ACTIONS.CLEAR_ERRORS:
      return {
        ...state,
        errors: {}
      };
    
    case ACTIONS.SET_SUBMITTING:
      return {
        ...state,
        isSubmitting: action.value
      };
    
    case ACTIONS.RESET_FORM:
      return initialState;
    
    default:
      return state;
  }
}

export default function GroupBookingPage() {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  // Get tomorrow's date for the default date picker
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  // Initialize date if not set
  if (!state.date) {
    dispatch({ type: ACTIONS.UPDATE_FIELD, field: 'date', value: getTomorrowDate() });
  }

  // Navigation functions
  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
      // Smooth scroll to top on mobile for better UX
      if (window.innerWidth < 768) { // md breakpoint
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      // Smooth scroll to top on mobile for better UX
      if (window.innerWidth < 768) { // md breakpoint
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  };

  // Validation functions
  const validateStep1 = () => {
    const errors = {};
    
    if (!state.name.trim()) errors.name = 'required';
    if (!state.email.trim()) errors.email = 'required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) errors.email = 'invalidEmail';
    
    if (!state.phone.trim()) errors.phone = 'required';
    if (!state.date) errors.date = 'invalidDate';
    else {
      const selectedDate = new Date(state.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate <= today) errors.date = 'invalidDate';
    }
    
    if (!state.time) errors.time = 'invalidTime';
    if (state.guests < 6) errors.guests = 'minGuests';
    if (!state.depositAgreement) errors.depositAgreement = 'agreementRequired';
    
    return errors;
  };

  const validateStep2 = () => {
    const errors = {};
    if (!state.menuOption) errors.menuOption = 'selectMenuOption';
    return errors;
  };

  const validateStep3 = () => {
    const errors = {};
    
    if (state.menuOption === 'aLaCarte') {
      if (state.selectedDishes.starters.length < 1) {
        errors.starters = 'selectDishes';
      }
      if (state.selectedDishes.mains.length < 1) {
        errors.mains = 'selectDishes';
      }
    } else if (state.menuOption === 'groupMenu') {
      // For group menu, we need at least one option selected for each course
      if (state.selectedDishes.starters.length === 0) {
        errors.starters = 'selectDishes';
      }
      if (state.selectedDishes.mains.length === 0) {
        errors.mains = 'selectDishes';
      }
      if (state.selectedDishes.desserts.length === 0) {
        errors.desserts = 'selectDishes';
      }
    }
    
    return errors;
  };

  const validateStep4 = () => {
    const errors = {};
    
    if (state.menuOption === 'groupMenu') {
      // For group menu, validate that each course has quantities equal to guest count
      const starterQuantities = Object.entries(state.quantities)
        .filter(([dishId]) => state.selectedDishes.starters?.includes(dishId))
        .reduce((sum, [, qty]) => sum + (qty || 0), 0);
      
      const mainQuantities = Object.entries(state.quantities)
        .filter(([dishId]) => state.selectedDishes.mains?.includes(dishId))
        .reduce((sum, [, qty]) => sum + (qty || 0), 0);
      
      const dessertQuantities = Object.entries(state.quantities)
        .filter(([dishId]) => state.selectedDishes.desserts?.includes(dishId))
        .reduce((sum, [, qty]) => sum + (qty || 0), 0);
      
      if (starterQuantities !== state.guests || mainQuantities !== state.guests || dessertQuantities !== state.guests) {
        errors.quantities = 'quantitiesMismatch';
      }
    }
    
    return errors;
  };

  const validateStep5 = () => {
    const errors = {};
    if (!state.confirmAgreement) errors.confirmAgreement = 'agreementRequired';
    return errors;
  };

  // Handle step validation and navigation
  const handleNext = () => {
    let errors = {};
    
    switch (currentStep) {
      case 1:
        errors = validateStep1();
        break;
      case 2:
        errors = validateStep2();
        break;
      case 3:
        errors = validateStep3();
        break;
      case 4:
        errors = validateStep4();
        break;
      case 5:
        errors = validateStep5();
        break;
      default:
        break;
    }
    
    if (Object.keys(errors).length === 0) {
      dispatch({ type: ACTIONS.CLEAR_ERRORS });
      
      nextStep();
    } else {
      dispatch({ type: ACTIONS.SET_ERRORS, errors });
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    dispatch({ type: ACTIONS.SET_SUBMITTING, value: true });
    
    try {
      // Check if EmailJS is properly configured
      if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' || 
          EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
          EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        
        console.warn('EmailJS not configured. Please set up your credentials in src/config/emailjs.js');
        
        // For testing purposes, simulate email sending
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Simulated email sent (EmailJS not configured)');
        
        // Move to thank you step
        nextStep();
        return;
      }

      // Prepare email data for EmailJS template
      const emailData = {
        to_name: 'Delice Brugge Team',
        from_name: state.name,
        from_email: state.email,
        from_phone: state.phone,
        booking_date: state.date,
        booking_time: state.time,
        number_of_guests: state.guests,
        menu_option: state.menuOption === 'aLaCarte' ? 'À la Carte' : (state.groupMenuType === 'delice' ? 'Delice Group Menu (€55)' : 'Standard Group Menu (€38)'),

        quantities_summary: `Starters:\n${Object.entries(state.quantities || {})
          .filter(([dish]) => state.selectedDishes.starters?.includes(dish))
          .map(([dish, qty]) => `  ${qty}x ${dish}`).join('\n')}\n\nMains:\n${Object.entries(state.quantities || {})
          .filter(([dish]) => state.selectedDishes.mains?.includes(dish))
          .map(([dish, qty]) => `  ${qty}x ${dish}`).join('\n')}${state.menuOption === 'groupMenu' ? `\n\nDesserts:\n${Object.entries(state.quantities || {})
          .filter(([dish]) => state.selectedDishes.desserts?.includes(dish))
          .map(([dish, qty]) => `  ${qty}x ${dish}`).join('\n')}` : ''}`,
        special_requests: state.specialRequests || 'None',
        total_price: state.menuOption === 'groupMenu' 
          ? `€${(state.guests * (state.groupMenuType === 'delice' ? 55.00 : 38.00)).toFixed(2)}` 
          : 'À la carte pricing'
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        emailData,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      
      // Move to thank you step
      nextStep();
    } catch (error) {
      console.error('Error sending email:', error);
      // Show error to user
      alert('There was an error sending your booking request. Please try again or contact us directly.');
    } finally {
      dispatch({ type: ACTIONS.SET_SUBMITTING, value: false });
    }
  };

  // Render the appropriate step component
  const renderStep = () => {
    const stepProps = {
      state,
      dispatch,
      errors: state.errors,
      onNext: handleNext,
      onBack: prevStep,
      onSubmit: handleSubmit,
      isSubmitting: state.isSubmitting
    };

    switch (currentStep) {
      case 0:
        return <Step0WelcomeMessage onNext={handleNext} />;
      case 1:
        return <Step1GuestDetails {...stepProps} />;
      case 2:
        return <Step2MenuSelection {...stepProps} />;
      case 3:
        return <Step3DishSelection {...stepProps} />;
      case 4:
        return <Step4Quantities {...stepProps} />;
      case 5:
        return <Step5Summary {...stepProps} />;
      case 6:
        return <Step6ThankYou {...stepProps} />;
      default:
        return <Step0WelcomeMessage onNext={handleNext} />;
    }
  };

  // Step indicator component
  const StepIndicator = () => {
    const steps = [
      t('common.groupBooking.steps.step1'),
      t('common.groupBooking.steps.step2'),
      t('common.groupBooking.steps.step3'),
      t('common.groupBooking.steps.step4'),
      t('common.groupBooking.steps.step5'),
      t('common.groupBooking.steps.step6')
    ];

    const effectiveStep = currentStep === 0 ? 1 : currentStep;
    
    // On mobile, show only 3 steps around current step
    const getVisibleSteps = () => {
      if (window.innerWidth < 640) { // sm breakpoint
        const visibleSteps = 3;
        let startStep = Math.max(0, effectiveStep - Math.floor(visibleSteps / 2) - 1);
        let endStep = Math.min(steps.length, startStep + visibleSteps);
        
        // Adjust if we're near the end
        if (endStep === steps.length) {
          startStep = Math.max(0, steps.length - visibleSteps);
        }
        
        return { startStep, endStep, showEllipsis: true };
      }
      return { startStep: 0, endStep: steps.length, showEllipsis: false };
    };

    const { startStep, endStep, showEllipsis } = getVisibleSteps();
    const visibleSteps = steps.slice(startStep, endStep);

    return (
      <div className="mb-3 sm:mb-4">
        <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-2 overflow-x-auto">
          {/* Show ellipsis if there are steps before */}
          {showEllipsis && startStep > 0 && (
            <div className="flex items-center flex-shrink-0">
              <span className="text-neutral-400 text-xs sm:text-sm px-1 sm:px-2">...</span>
              <div className="w-8 sm:w-12 h-0.5 bg-neutral-200" />
            </div>
          )}
          
          {visibleSteps.map((step, index) => {
            const stepNumber = startStep + index + 1;
            const isCurrentStep = stepNumber === effectiveStep;
            const isCompleted = stepNumber < effectiveStep;
            
            return (
              <div key={stepNumber} className="flex items-center flex-shrink-0">
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold ${
                  isCurrentStep
                    ? 'bg-brand-600 text-white'
                    : isCompleted
                    ? 'bg-green-500 text-white'
                    : 'bg-neutral-200 text-neutral-600'
                }`}>
                  {isCompleted ? '✓' : stepNumber}
                </div>
                {stepNumber < steps.length && (
                  <div className={`w-8 sm:w-12 h-0.5 mx-1 sm:mx-2 ${
                    isCompleted ? 'bg-green-500' : 'bg-neutral-200'
                  }`} />
                )}
              </div>
            );
          })}
          
          {/* Show ellipsis if there are steps after */}
          {showEllipsis && endStep < steps.length && (
            <div className="flex items-center flex-shrink-0">
              <div className="w-8 sm:w-12 h-0.5 bg-neutral-200" />
              <span className="text-neutral-400 text-xs sm:text-sm px-1 sm:px-2">...</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="overflow-x-hidden">
      <Header />
      
      <main className="pt-20">
        <div className="container-responsive py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="py-4 sm:py-6">
            <div className="text-center mb-4 sm:mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <div className="inline-block mb-3">
                  <h1 className="display-font text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-neutral-900 mb-2">
                    {t('common.groupBooking.heading')}
                  </h1>
                  <p className="text-xs sm:text-sm text-neutral-600 mb-2">
                    {t('common.groupBooking.subtitle')}
                  </p>
                  <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-brand-500 to-brand-600 mx-auto rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Step Indicator - Only show after welcome step */}
          {currentStep > 0 && (
            <div className="mb-4">
              <StepIndicator />
            </div>
          )}

          {/* Step Content */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
