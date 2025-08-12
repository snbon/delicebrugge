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
      return state.guests * 36.50;
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
    const isStarterValid = starterQuantities === state.guests;
    const isMainValid = mainQuantities === state.guests;

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-neutral-900 mb-4">
          {t('common.groupBooking.quantities.title')}
        </h3>
        
        <div className="bg-neutral-50 p-4 rounded-lg">
          <p className="text-sm text-neutral-600 mb-4">
            For à la carte selections, you can specify quantities for each dish based on your group's preferences.
          </p>
        </div>

        {/* Quantity Validation for À la Carte */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg border ${
            isStarterValid ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
          }`}>
            <p className="text-sm font-medium text-neutral-900 mb-1">
              Starters: {starterQuantities} / {state.guests}
            </p>
            {!isStarterValid && (
              <p className="text-xs text-red-600">
                {starterQuantities < state.guests ? 'Need more quantities' : 'Too many quantities'}
              </p>
            )}
          </div>
          <div className={`p-4 rounded-lg border ${
            isMainValid ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
          }`}>
            <p className="text-sm font-medium text-neutral-900 mb-1">
              Main Dishes: {mainQuantities} / {state.guests}
            </p>
            {!isMainValid && (
              <p className="text-xs text-red-600">
                {mainQuantities < state.guests ? 'Need more quantities' : 'Too many quantities'}
              </p>
            )}
          </div>
        </div>

        {/* Starters Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
            Starters
          </h4>
          {allSelectedDishes.filter(({ course }) => course === 'starters').map(({ id, name, course }) => 
            renderDishQuantityRow(id, name, course)
          )}
        </div>

        {/* Main Dishes Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
            Main Dishes
          </h4>
          {allSelectedDishes.filter(({ course }) => course === 'mains').map(({ id, name, course }) => 
            renderDishQuantityRow(id, name, course)
          )}
        </div>
      </div>
    );
  };

  const renderGroupMenuQuantities = () => {
    // For Group Menu, show ALL dishes with quantity inputs
    const allGroupMenuDishes = [
      ...groupMenuDishes.starters.map(dish => ({ id: dish.id, name: dish.name, course: 'starters' })),
      ...groupMenuDishes.mains.map(dish => ({ id: dish.id, name: dish.name, course: 'mains' })),
      ...groupMenuDishes.desserts.map(dish => ({ id: dish.id, name: dish.name, course: 'desserts' }))
    ];

    // For Group Menu, each course should have quantities equal to guest count
    const starterQuantities = getCourseQuantities('starters');
    const mainQuantities = getCourseQuantities('mains');
    const dessertQuantities = getCourseQuantities('desserts');
    
    const isStarterValid = starterQuantities === state.guests;
    const isMainValid = mainQuantities === state.guests;
    const isDessertValid = dessertQuantities === state.guests;
    
    const isQuantityValid = isStarterValid && isMainValid && isDessertValid;

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-neutral-900 mb-4">
          {t('common.groupBooking.quantities.title')}
        </h3>

        {/* Price Note */}
        <div className="bg-brand-50 p-4 rounded-lg border border-brand-200">
          <p className="text-sm text-brand-800">
            {t('common.groupBooking.quantities.priceNote')}
          </p>
        </div>

        {/* Course Quantity Validation */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className={`p-4 rounded-lg border ${
            isStarterValid ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
          }`}>
            <p className="text-sm font-medium text-neutral-900 mb-1">
              Appetizers: {starterQuantities} / {state.guests}
            </p>
            {!isStarterValid && (
              <p className="text-xs text-red-600">
                {starterQuantities < state.guests ? 'Need more quantities' : 'Too many quantities'}
              </p>
            )}
          </div>
          <div className={`p-4 rounded-lg border ${
            isMainValid ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
          }`}>
            <p className="text-sm font-medium text-neutral-900 mb-1">
              Main Dishes: {mainQuantities} / {state.guests}
            </p>
            {!isMainValid && (
              <p className="text-xs text-red-600">
                {mainQuantities < state.guests ? 'Need more quantities' : 'Too many quantities'}
              </p>
            )}
          </div>
          <div className={`p-4 rounded-lg border ${
            isDessertValid ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
          }`}>
            <p className="text-sm font-medium text-neutral-900 mb-1">
              Desserts: {dessertQuantities} / {state.guests}
            </p>
            {!isDessertValid && (
              <p className="text-xs text-red-600">
                {dessertQuantities < state.guests ? 'Need more quantities' : 'Too many quantities'}
              </p>
            )}
          </div>
        </div>

        {/* Quantity Validation Error */}
        {!isQuantityValid && (
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <p className="text-sm text-red-800">
              Each course must have quantities equal to the total guest count ({state.guests})
            </p>
          </div>
        )}

        {/* Dish Quantities */}
        {/* Starters Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
            Appetizers
          </h4>
          {allGroupMenuDishes.filter(({ course }) => course === 'starters').map(({ id, name, course }) => 
            renderDishQuantityRow(id, name, course)
          )}
        </div>

        {/* Main Dishes Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
            Main Dishes
          </h4>
          {allGroupMenuDishes.filter(({ course }) => course === 'mains').map(({ id, name, course }) => 
            renderDishQuantityRow(id, name, course)
          )}
        </div>

        {/* Desserts Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
            Desserts
          </h4>
          {allGroupMenuDishes.filter(({ course }) => course === 'desserts').map(({ id, name, course }) => 
            renderDishQuantityRow(id, name, course)
          )}
        </div>

        {/* Total Price */}
        <div className="bg-neutral-50 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium text-neutral-900">
              {t('common.groupBooking.summary.totalPrice')}:
            </span>
            <span className="text-xl font-bold text-brand-600">
              €{calculateTotalPrice().toFixed(2)}
            </span>
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
            className="px-4 sm:px-6 py-3 border border-neutral-300 rounded-lg text-neutral-700 hover:bg-neutral-50 transition-colors text-sm sm:text-base"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('common.groupBooking.navigation.back')}
          </motion.button>

          <motion.button
            onClick={onNext}
            disabled={!isFormValid()}
            className={`px-4 sm:px-6 py-3 rounded-lg font-semibold text-white transition-all text-sm sm:text-base ${
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
