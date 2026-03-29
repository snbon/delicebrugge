import { useState, useReducer } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs.js';
import Header from '../components/Header.jsx';
import TGStep0Welcome from '../components/travelGuides/TGStep0Welcome.jsx';
import TGStep1CourseSelection from '../components/travelGuides/TGStep1CourseSelection.jsx';
import TGStep2DishSelection from '../components/travelGuides/TGStep2DishSelection.jsx';
import TGStep3Quantities from '../components/travelGuides/TGStep3Quantities.jsx';
import TGStep4UserDetails from '../components/travelGuides/TGStep4UserDetails.jsx';
import TGStep5Summary from '../components/travelGuides/TGStep5Summary.jsx';
import TGStep6ThankYou from '../components/travelGuides/TGStep6ThankYou.jsx';
import menuData from '../data/menu.json';


const initialState = {
  // Step 1: Course selection
  selectedCourses: {
    starters: false,
    mainCourse: true,
    desserts: false,
    drink: false
  },

  // Step 2: Dish selection
  selectedDishes: {
    starters: [],
    mains: [],
    desserts: []
  },

  // Step 3: Quantities
  quantities: {},

  // Step 4: User details
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '18:00',
  guests: 10,
  depositAgreement: false,

  // Step 5: Confirmation
  confirmAgreement: false,

  // Form state
  errors: {},
  isSubmitting: false
};

function tgReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };

    case 'TOGGLE_COURSE': {
      if (action.course === 'mainCourse') return state;
      const newVal = !state.selectedCourses[action.course];
      let newSelectedDishes = { ...state.selectedDishes };
      let newQuantities = { ...state.quantities };

      if (!newVal) {
        const courseKey = action.course === 'starters' ? 'starters' : action.course === 'desserts' ? 'desserts' : null;
        if (courseKey) {
          const removed = state.selectedDishes[courseKey] || [];
          newSelectedDishes = { ...newSelectedDishes, [courseKey]: [] };
          removed.forEach(id => delete newQuantities[id]);
        }
      }

      return {
        ...state,
        selectedCourses: { ...state.selectedCourses, [action.course]: newVal },
        selectedDishes: newSelectedDishes,
        quantities: newQuantities
      };
    }

    case 'SELECT_DISH': {
      const { course, dishId, selected } = action;
      const current = state.selectedDishes[course] || [];
      const updated = selected
        ? (current.includes(dishId) ? current : [...current, dishId])
        : current.filter(id => id !== dishId);
      return {
        ...state,
        selectedDishes: { ...state.selectedDishes, [course]: updated }
      };
    }

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        quantities: { ...state.quantities, [action.dishId]: action.value }
      };

    case 'SET_ERRORS':
      return { ...state, errors: action.errors };

    case 'CLEAR_ERRORS':
      return { ...state, errors: {} };

    case 'SET_SUBMITTING':
      return { ...state, isSubmitting: action.value };

    case 'RESET_FORM':
      return { ...initialState };

    default:
      return state;
  }
}

export default function TravelGuidesPage() {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [state, dispatch] = useReducer(tgReducer, initialState);

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  if (!state.date) {
    dispatch({ type: 'UPDATE_FIELD', field: 'date', value: getTomorrowDate() });
  }

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(s => s + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(s => s - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Validation
  const validateStep1 = () => {
    // Main course always selected, so this step is always valid
    return {};
  };

  const validateStep2 = () => {
    const errors = {};
    const { selectedCourses, selectedDishes } = state;
    if (selectedCourses.starters && selectedDishes.starters.length === 0) errors.starters = 'selectDishes';
    if (selectedDishes.mains.length === 0) errors.mains = 'selectDishes';
    if (selectedCourses.desserts && selectedDishes.desserts.length === 0) errors.desserts = 'selectDishes';
    return errors;
  };

  const validateStep3 = () => {
    const errors = {};
    const { selectedCourses, selectedDishes, quantities, guests } = state;

    const sumQty = (ids) => ids.reduce((s, id) => s + (quantities[id] || 0), 0);

    if (selectedCourses.starters && selectedDishes.starters.length > 0) {
      if (sumQty(selectedDishes.starters) !== guests) errors.quantities = 'quantitiesMismatch';
    }
    if (selectedDishes.mains.length > 0) {
      if (sumQty(selectedDishes.mains) !== guests) errors.quantities = 'quantitiesMismatch';
    }
    if (selectedCourses.desserts && selectedDishes.desserts.length > 0) {
      if (sumQty(selectedDishes.desserts) !== guests) errors.quantities = 'quantitiesMismatch';
    }

    return errors;
  };

  const validateStep4 = () => {
    const errors = {};
    if (!state.name.trim()) errors.name = 'required';
    if (!state.email.trim()) errors.email = 'required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) errors.email = 'invalidEmail';
    if (!state.phone.trim()) errors.phone = 'required';
    if (!state.date) errors.date = 'invalidDate';
    else {
      const selected = new Date(state.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected <= today) errors.date = 'invalidDate';
    }
    if (!state.time) errors.time = 'invalidDate';
    if (state.guests < 10 || state.guests > 30) errors.guests = 'minGuests';
    if (!state.depositAgreement) errors.depositAgreement = 'agreementRequired';
    return errors;
  };

  const validateStep5 = () => {
    const errors = {};
    if (!state.confirmAgreement) errors.confirmAgreement = 'agreementRequired';
    return errors;
  };

  const handleNext = () => {
    let errors = {};
    switch (currentStep) {
      case 1: errors = validateStep4(); break; // User details first
      case 2: errors = validateStep1(); break; // Course selection
      case 3: errors = validateStep2(); break; // Dish selection
      case 4: errors = validateStep3(); break; // Quantities
      default: break;
    }

    if (Object.keys(errors).length === 0) {
      dispatch({ type: 'CLEAR_ERRORS' });
      nextStep();
    } else {
      dispatch({ type: 'SET_ERRORS', errors });
    }
  };

  // Build dish name lookup for email
  const buildDishLookup = () => {
    const lookup = {};
    menuData.sections.forEach(section => {
      if (section.items) {
        section.items.forEach(item => {
          lookup[item.id] = {
            name: item.names ? (item.names.en || item.id) : item.id,
            price: item.price || 0
          };
        });
      }
    });
    return lookup;
  };

  const handleSubmit = async () => {
    const errors = validateStep5();
    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ERRORS', errors });
      return;
    }

    dispatch({ type: 'SET_SUBMITTING', value: true });

    try {
      const dishLookup = buildDishLookup();
      const { selectedCourses, selectedDishes, quantities, guests } = state;

      const formatCourse = (label, ids) => {
        if (!ids || ids.length === 0) return '';
        const lines = ids.map(id => {
          const dish = dishLookup[id] || { name: id, price: 0 };
          return `  ${quantities[id] || 0}x ${dish.name} (€${dish.price.toFixed(2)})`;
        });
        return `${label}:\n${lines.join('\n')}`;
      };

      const starterIds = selectedCourses.starters ? selectedDishes.starters : [];
      const mainIds = selectedDishes.mains;
      const dessertIds = selectedCourses.desserts ? selectedDishes.desserts : [];

      const sections = [
        formatCourse('Starters', starterIds),
        formatCourse('Main Courses', mainIds),
        formatCourse('Desserts', dessertIds),
        selectedCourses.drink ? `Drinks: 1 glass per person × ${guests} = €${(5 * guests).toFixed(2)}` : ''
      ].filter(Boolean);

      const calcSubtotal = (ids) => ids.reduce((s, id) => s + (quantities[id] || 0) * (dishLookup[id]?.price || 0), 0);
      const grandTotal = calcSubtotal(starterIds) + calcSubtotal(mainIds) + calcSubtotal(dessertIds) + (selectedCourses.drink ? 5 * guests : 0);

      const emailData = {
        to_name: 'Delice Brugge Team',
        from_name: state.name,
        from_email: state.email,
        from_phone: state.phone,
        booking_date: state.date,
        booking_time: state.time,
        number_of_guests: state.guests,
        menu_option: 'Travel Guide Custom Menu',
        quantities_summary: sections.join('\n\n'),
        special_requests: 'Travel Guide Booking',
        total_price: `€${grandTotal.toFixed(2)} (estimated)`
      };

      if (
        EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' ||
        EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
        EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
      ) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Simulated email (EmailJS not configured):', emailData);
      } else {
        const result = await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          emailData,
          EMAILJS_CONFIG.PUBLIC_KEY
        );
        console.log('Email sent:', result);
      }

      nextStep();
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your booking request. Please try again or contact us directly.');
    } finally {
      dispatch({ type: 'SET_SUBMITTING', value: false });
    }
  };

  // Step indicator
  const StepIndicator = () => {
    const steps = [
      t('common.travelGuides.steps.step1'),
      t('common.travelGuides.steps.step2'),
      t('common.travelGuides.steps.step3'),
      t('common.travelGuides.steps.step4'),
      t('common.travelGuides.steps.step5'),
      t('common.travelGuides.steps.step6')
    ];

    const effectiveStep = currentStep === 0 ? 1 : currentStep;

    const getVisibleSteps = () => {
      if (window.innerWidth < 640) {
        const visibleCount = 3;
        let start = Math.max(0, effectiveStep - Math.floor(visibleCount / 2) - 1);
        let end = Math.min(steps.length, start + visibleCount);
        if (end === steps.length) start = Math.max(0, steps.length - visibleCount);
        return { startStep: start, endStep: end, showEllipsis: true };
      }
      return { startStep: 0, endStep: steps.length, showEllipsis: false };
    };

    const { startStep, endStep, showEllipsis } = getVisibleSteps();
    const visible = steps.slice(startStep, endStep);

    return (
      <div className="mb-3 sm:mb-4">
        <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-2 overflow-x-auto">
          {showEllipsis && startStep > 0 && (
            <div className="flex items-center flex-shrink-0">
              <span className="text-neutral-400 text-xs sm:text-sm px-1 sm:px-2">...</span>
              <div className="w-8 sm:w-12 h-0.5 bg-neutral-200" />
            </div>
          )}
          {visible.map((step, index) => {
            const stepNum = startStep + index + 1;
            const isCurrent = stepNum === effectiveStep;
            const isDone = stepNum < effectiveStep;
            return (
              <div key={stepNum} className="flex items-center flex-shrink-0">
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold ${
                  isCurrent ? 'bg-brand-600 text-white' : isDone ? 'bg-green-500 text-white' : 'bg-neutral-200 text-neutral-600'
                }`}>
                  {isDone ? '✓' : stepNum}
                </div>
                {stepNum < steps.length && (
                  <div className={`w-8 sm:w-12 h-0.5 mx-1 sm:mx-2 ${isDone ? 'bg-green-500' : 'bg-neutral-200'}`} />
                )}
              </div>
            );
          })}
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

  const stepProps = {
    state,
    dispatch,
    errors: state.errors,
    onNext: handleNext,
    onBack: prevStep,
    onSubmit: handleSubmit
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0: return <TGStep0Welcome onNext={nextStep} />;
      case 1: return <TGStep4UserDetails {...stepProps} />;
      case 2: return <TGStep1CourseSelection {...stepProps} />;
      case 3: return <TGStep2DishSelection {...stepProps} />;
      case 4: return <TGStep3Quantities {...stepProps} />;
      case 5: return <TGStep5Summary {...stepProps} />;
      case 6: return <TGStep6ThankYou state={state} />;
      default: return <TGStep0Welcome onNext={nextStep} />;
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Header />

      <main className="pt-20">
        <div className="container-responsive py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
          {/* Hero */}
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
                    {t('common.travelGuides.heading')}
                  </h1>
                  <p className="text-xs sm:text-sm text-neutral-600 mb-2">
                    {t('common.travelGuides.subtitle')}
                  </p>
                  <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-brand-500 to-brand-600 mx-auto rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Step Indicator */}
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
