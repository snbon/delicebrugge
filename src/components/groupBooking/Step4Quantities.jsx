import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import menuData from '../../data/menu.json';

export default function Step4Quantities({ state, dispatch, errors, onNext, onBack }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Get actual menu data from menu.json
  const getMenuItems = (sectionId) => {
    const section = menuData.sections.find(s => s.id === sectionId);
    if (!section) return [];
    
    return section.items.map(item => ({
      id: item.id,
      name: item.names[currentLang] || item.names.en,
      price: item.price
    }));
  };

  // Get starters and mains from actual menu data
  const starters = getMenuItems('voorgerechten');
  const mains = getMenuItems('vlees-burgers').concat(getMenuItems('vis-mosselen')).concat(getMenuItems('pasta'));
  const desserts = getMenuItems('desserts-ice');

  // Group menu dishes from existing group menu structure
  const groupMenuDishes = {
    starters: [
      { 
        id: 'cheese-croquettes', 
        name: t('common.groupMenu.appetizer.option1', { returnObjects: true }).name || 'Homemade cheese croquettes'
      },
      { 
        id: 'shrimp-croquettes', 
        name: t('common.groupMenu.appetizer.option2', { returnObjects: true }).name || 'Homemade shrimp croquettes'
      }
    ],
    mains: [
      { 
        id: 'natural-steak', 
        name: t('common.groupMenu.mainCourse.option1', { returnObjects: true }).name || 'Natural steak'
      },
      { 
        id: 'baked-salmon', 
        name: t('common.groupMenu.mainCourse.option2', { returnObjects: true }).name || 'Baked salmon with béarnaise sauce'
      }
    ],
    desserts: [
      { 
        id: 'coffee-tea', 
        name: t('common.groupMenu.dessert.option1', { returnObjects: true }).name || 'Coffee/Tea'
      },
      { 
        id: 'dame-blanche', 
        name: t('common.groupMenu.dessert.option2', { returnObjects: true }).name || 'Dame Blanche'
      }
    ]
  };

  const deliceMenuDishes = {
    starters: [
      { 
        id: 'delice-soup', 
        name: t('common.groupBooking.dishSelection.deliceMenu.appetizer.option1', { returnObjects: true }).name || 'Soup of the day'
      },
      { 
        id: 'delice-cheese', 
        name: t('common.groupBooking.dishSelection.deliceMenu.appetizer.option2', { returnObjects: true }).name || 'Homemade cheese croquettes'
      },
      { 
        id: 'delice-shrimp', 
        name: t('common.groupBooking.dishSelection.deliceMenu.appetizer.option3', { returnObjects: true }).name || 'Homemade shrimp croquettes'
      }
    ],
    mains: [
      { 
        id: 'delice-chicken', 
        name: t('common.groupBooking.dishSelection.deliceMenu.mainCourse.option1', { returnObjects: true }).name || 'Chicken in cream sauce'
      },
      { 
        id: 'delice-rabbit', 
        name: t('common.groupBooking.dishSelection.deliceMenu.mainCourse.option2', { returnObjects: true }).name || 'Flemish rabbit'
      },
      { 
        id: 'delice-salmon', 
        name: t('common.groupBooking.dishSelection.deliceMenu.mainCourse.option3', { returnObjects: true }).name || 'Baked salmon'
      }
    ],
    desserts: [
      { 
        id: 'delice-mousse', 
        name: t('common.groupBooking.dishSelection.deliceMenu.dessert.option1', { returnObjects: true }).name || 'Chocolate mousse'
      },
      { 
        id: 'delice-dame', 
        name: t('common.groupBooking.dishSelection.deliceMenu.dessert.option2', { returnObjects: true }).name || 'Dame Blanche'
      }
    ]
  };

  const handleQuantityChange = (dishId, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      dishId,
      quantity: parseInt(quantity) || 0
    });
  };

  const handleSpecialRequestsChange = (value) => {
    dispatch({ type: 'UPDATE_FIELD', field: 'specialRequests', value });
  };

  const getErrorMessage = (field) => {
    if (!errors[field]) return null;
    return t(`common.groupBooking.validation.${errors[field]}`);
  };

  const calculateTotalPrice = () => {
    if (state.menuOption === 'groupMenu') {
      return state.guests * (state.groupMenuType === 'delice' ? 51.00 : 38.00);
    }
    return 0; // For à la carte, we don't show total price in this step
  };

  const getTotalQuantities = () => {
    return Object.values(state.quantities).reduce((sum, qty) => sum + (qty || 0), 0);
  };

  const getCourseQuantities = (course) => {
    return Object.entries(state.quantities)
      .filter(([dishId]) => state.selectedDishes[course]?.includes(dishId))
      .reduce((sum, [, qty]) => sum + (qty || 0), 0);
  };

  const isFormValid = () => {
    if (state.menuOption === 'groupMenu') {
      // For Group Menu, each course should have quantities equal to guest count
      const starterQuantities = getCourseQuantities('starters');
      const mainQuantities = getCourseQuantities('mains');
      const dessertQuantities = getCourseQuantities('desserts');
      
      return starterQuantities === state.guests && 
             mainQuantities === state.guests && 
             dessertQuantities === state.guests;
    } else if (state.menuOption === 'aLaCarte') {
      // For à la carte, validate that quantities match guest count for each course
      const starterQuantities = Object.entries(state.quantities)
        .filter(([dishId]) => state.selectedDishes.starters?.includes(dishId))
        .reduce((sum, [, qty]) => sum + (qty || 0), 0);
      
      const mainQuantities = Object.entries(state.quantities)
        .filter(([dishId]) => state.selectedDishes.mains?.includes(dishId))
        .reduce((sum, [, qty]) => sum + (qty || 0), 0);
      
      return starterQuantities === state.guests && mainQuantities === state.guests;
    }
    return true;
  };

  const renderDishQuantityRow = (dishId, dishName, course) => {
    const quantity = state.quantities[dishId] || 0;
    const isSelected = state.selectedDishes[course]?.includes(dishId);

    if (!isSelected) return null;

    return (
      <div key={dishId} className="flex items-center justify-between py-3 border-b border-neutral-200">
        <div className="flex-1">
          <h4 className="font-medium text-neutral-900">{dishName}</h4>
        </div>
        <div className="flex items-center space-x-3">
          <label className="text-sm text-neutral-600">
            {t('common.groupBooking.quantities.quantity')}:
          </label>
          <select
            value={quantity}
            onChange={(e) => handleQuantityChange(dishId, parseInt(e.target.value))}
            className="w-24 px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white"
          >
            {Array.from({ length: 31 }, (_, i) => i).map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
      </div>
    );
  };

  const renderALaCarteQuantities = () => {
    const allSelectedDishes = [
      ...state.selectedDishes.starters.map(id => ({ id, name: starters.find(d => d.id === id)?.name, course: 'starters' })),
      ...state.selectedDishes.mains.map(id => ({ id, name: mains.find(d => d.id === id)?.name, course: 'mains' }))
    ];

    const starterQuantities = getCourseQuantities('starters');
    const mainQuantities = getCourseQuantities('mains');
    const isComplete = starterQuantities === state.guests && mainQuantities === state.guests;

    return (
      <div className="space-y-6">
        {!isComplete && (
          <div className="bg-brand-50 p-4 rounded-lg border border-brand-100 text-center mb-8">
            <p className="text-brand-800 font-medium">
              {t('common.groupBooking.quantities.assignPortions', { guests: state.guests })}
            </p>
          </div>
        )}

        {/* Starters Section */}
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
            <h4 className="text-lg font-semibold text-neutral-900">
              {t('common.groupBooking.dishSelection.groupMenu.appetizer')}
            </h4>
            <span className={`text-sm font-medium px-2.5 py-1 rounded-full ${
              starterQuantities === state.guests ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
            }`}>
              {starterQuantities} / {state.guests} {t('common.groupBooking.quantities.assigned')}
            </span>
          </div>
          {allSelectedDishes.filter(({ course }) => course === 'starters').map(({ id, name, course }) => 
            renderDishQuantityRow(id, name, course)
          )}
        </div>

        {/* Main Dishes Section */}
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
            <h4 className="text-lg font-semibold text-neutral-900">
              {t('common.groupBooking.dishSelection.groupMenu.mainCourse')}
            </h4>
            <span className={`text-sm font-medium px-2.5 py-1 rounded-full ${
              mainQuantities === state.guests ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
            }`}>
              {mainQuantities} / {state.guests} {t('common.groupBooking.quantities.assigned')}
            </span>
          </div>
          {allSelectedDishes.filter(({ course }) => course === 'mains').map(({ id, name, course }) => 
            renderDishQuantityRow(id, name, course)
          )}
        </div>
      </div>
    );
  };

  const renderGroupMenuQuantities = () => {
    const isDelice = state.groupMenuType === 'delice';
    const activeDishes = isDelice ? deliceMenuDishes : groupMenuDishes;

    // For Group Menu, show ALL dishes with quantity inputs
    const allGroupMenuDishes = [
      ...activeDishes.starters.map(dish => ({ id: dish.id, name: dish.name, course: 'starters' })),
      ...activeDishes.mains.map(dish => ({ id: dish.id, name: dish.name, course: 'mains' })),
      ...activeDishes.desserts.map(dish => ({ id: dish.id, name: dish.name, course: 'desserts' }))
    ];

    // For Group Menu, each course should have quantities equal to guest count
    const starterQuantities = getCourseQuantities('starters');
    const mainQuantities = getCourseQuantities('mains');
    const dessertQuantities = getCourseQuantities('desserts');
    const isComplete = starterQuantities === state.guests && mainQuantities === state.guests && dessertQuantities === state.guests;

    return (
      <div className="space-y-6">
        {!isComplete && (
          <div className="bg-brand-50 p-4 rounded-lg border border-brand-100 text-center mb-8">
            <p className="text-brand-800 font-medium">
              {t('common.groupBooking.quantities.assignPortions', { guests: state.guests })}
            </p>
          </div>
        )}

        {/* Dish Quantities */}
        {/* Starters Section */}
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
            <h4 className="text-lg font-semibold text-neutral-900">
              {t('common.groupBooking.dishSelection.groupMenu.appetizer')}
            </h4>
            <span className={`text-sm font-medium px-2.5 py-1 rounded-full ${
              starterQuantities === state.guests ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
            }`}>
              {starterQuantities} / {state.guests} {t('common.groupBooking.quantities.assigned')}
            </span>
          </div>
          {allGroupMenuDishes.filter(({ course }) => course === 'starters').map(({ id, name, course }) => 
            renderDishQuantityRow(id, name, course)
          )}
        </div>

        {/* Main Dishes Section */}
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
            <h4 className="text-lg font-semibold text-neutral-900">
              {t('common.groupBooking.dishSelection.groupMenu.mainCourse')}
            </h4>
            <span className={`text-sm font-medium px-2.5 py-1 rounded-full ${
              mainQuantities === state.guests ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
            }`}>
              {mainQuantities} / {state.guests} {t('common.groupBooking.quantities.assigned')}
            </span>
          </div>
          {allGroupMenuDishes.filter(({ course }) => course === 'mains').map(({ id, name, course }) => 
            renderDishQuantityRow(id, name, course)
          )}
        </div>

        {/* Desserts Section */}
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
            <h4 className="text-lg font-semibold text-neutral-900">
              {t('common.groupBooking.dishSelection.groupMenu.dessert')}
            </h4>
            <span className={`text-sm font-medium px-2.5 py-1 rounded-full ${
              dessertQuantities === state.guests ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
            }`}>
              {dessertQuantities} / {state.guests} {t('common.groupBooking.quantities.assigned')}
            </span>
          </div>
          {allGroupMenuDishes.filter(({ course }) => course === 'desserts').map(({ id, name, course }) => 
            renderDishQuantityRow(id, name, course)
          )}
        </div>

        {/* Total Price */}
        <div className="bg-neutral-50 p-4 rounded-lg mt-8">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-neutral-900">
              {t('common.groupBooking.summary.totalPrice')}:
            </span>
            <span className="text-xl font-bold text-neutral-900">
              €{calculateTotalPrice().toFixed(2)}
            </span>
          </div>
            <div className="mt-4 p-3 sm:p-4 bg-brand-50 border border-brand-200 rounded-lg flex items-start gap-3">
              <svg className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-brand-800 font-medium leading-relaxed">
                {t('common.groupBooking.quantities.priceNote')}
              </p>
            </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="surface p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 sm:mb-6 text-center">
          {t('common.groupBooking.quantities.title')}
        </h2>

        {state.menuOption === 'aLaCarte' && renderALaCarteQuantities()}
        {state.menuOption === 'groupMenu' && renderGroupMenuQuantities()}

        {/* Special Requests */}
        <div className="mt-6 sm:mt-8">
          <label htmlFor="specialRequests" className="block text-sm font-medium text-neutral-700 mb-2">
            {t('common.groupBooking.quantities.specialRequests')}
          </label>
          <textarea
            id="specialRequests"
            value={state.specialRequests}
            onChange={(e) => handleSpecialRequestsChange(e.target.value)}
            rows="4"
            className="w-full px-3 sm:px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm sm:text-base"
            placeholder="Any special dietary requirements, allergies, or other requests..."
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 mt-6 sm:mt-8">
          <motion.button
            onClick={onBack}
            className="px-4 sm:px-6 py-3 border border-neutral-300 rounded-lg text-neutral-700 hover:bg-neutral-50 transition-colors text-sm sm:text-base order-2 sm:order-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('common.groupBooking.navigation.back')}
          </motion.button>

          <motion.button
            onClick={onNext}
            disabled={!isFormValid()}
            className={`px-4 sm:px-6 py-3 rounded-lg font-semibold text-white transition-all text-sm sm:text-base order-1 sm:order-2 ${
              isFormValid()
                ? 'bg-brand-600 hover:bg-brand-700 cursor-pointer'
                : 'bg-neutral-300 cursor-not-allowed'
            }`}
            whileHover={isFormValid() ? { scale: 1.02 } : {}}
            whileTap={isFormValid() ? { scale: 0.98 } : {}}
          >
            {t('common.groupBooking.quantities.next')}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
