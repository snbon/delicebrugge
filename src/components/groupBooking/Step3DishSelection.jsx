import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import menuData from '../../data/menu.json';

export default function Step3DishSelection({ state, dispatch, errors, onNext, onBack }) {
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

  const handleDishSelection = (course, dishId, isSelected) => {
    dispatch({
      type: 'SELECT_DISH',
      payload: { course, dishId, isSelected }
    });
  };

  const getErrorMessage = (field) => {
    if (!errors[field]) return null;
    return t(`common.groupBooking.validation.${errors[field]}`);
  };

  const isFormValid = () => {
    if (state.menuOption === 'aLaCarte') {
      return (
        state.selectedDishes.starters.length === 5 &&
        state.selectedDishes.mains.length === 5
      );
    } else if (state.menuOption === 'groupMenu') {
      // For group menu, we need at least one option selected for each course
      return (
        state.selectedDishes.starters.length > 0 &&
        state.selectedDishes.mains.length > 0 &&
        state.selectedDishes.desserts.length > 0
      );
    }
    return false;
  };

  const renderDishGrid = (course, dishes, maxSelection = null) => {
    const selectedDishes = state.selectedDishes[course] || [];
    const isAtMax = maxSelection && selectedDishes.length >= maxSelection;

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dishes.map((dish) => {
          const isSelected = selectedDishes.includes(dish.id);
          const canSelect = !maxSelection || selectedDishes.length < maxSelection || isSelected;

          return (
            <motion.div
              key={dish.id}
              className={`cursor-pointer transition-all duration-300 ${
                isSelected ? 'ring-2 ring-brand-500' : ''
              }`}
              whileHover={canSelect ? { y: -2 } : {}}
              whileTap={canSelect ? { scale: 0.98 } : {}}
            >
              <div
                className={`surface p-4 h-full ${
                  isSelected
                    ? 'border-brand-500 bg-brand-50'
                    : canSelect
                    ? 'hover:shadow-lg'
                    : 'opacity-50 cursor-not-allowed'
                }`}
                onClick={() => canSelect && handleDishSelection(course, dish.id, !isSelected)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-900 mb-1">{dish.name}</h4>
                    {dish.price && (
                      <p className="text-sm text-brand-600 font-medium">€{dish.price.toFixed(2)}</p>
                    )}
                  </div>
                  <div className="ml-3">
                    {isSelected ? (
                      <div className="w-6 h-6 bg-brand-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                    ) : (
                      <div className="w-6 h-6 border-2 border-neutral-300 rounded-full"></div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    );
  };

  const renderALaCarteSelection = () => (
    <div className="space-y-8">
      {/* Starters */}
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-4">
          {t('common.groupBooking.dishSelection.starters')}
        </h3>
        <p className="text-sm text-neutral-600 mb-4">
          {t('common.groupBooking.dishSelection.selectExactly')} 5 {t('common.groupBooking.dishSelection.items')}
        </p>
        {renderDishGrid('starters', starters, 5)}
        {errors.starters && (
          <p className="mt-2 text-sm text-red-600">{getErrorMessage('starters')}</p>
        )}
      </div>

      {/* Main Dishes */}
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-4">
          {t('common.groupBooking.dishSelection.mains')}
        </h3>
        <p className="text-sm text-neutral-600 mb-4">
          {t('common.groupBooking.dishSelection.selectExactly')} 5 {t('common.groupBooking.dishSelection.items')}
        </p>
        {renderDishGrid('mains', mains, 5)}
        {errors.mains && (
          <p className="mt-2 text-sm text-red-600">{getErrorMessage('mains')}</p>
        )}
      </div>
    </div>
  );

  const renderGroupMenuSelection = () => (
    <div className="space-y-8">
      {/* Appetizer */}
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-4">
          {t('common.groupMenu.appetizer.title')}
        </h3>
        <p className="text-sm text-neutral-600 mb-4">
          {t('common.groupBooking.dishSelection.groupMenu.chooseOne')}
        </p>
        {renderDishGrid('starters', groupMenuDishes.starters, 1)}
        {errors.starters && (
          <p className="mt-2 text-sm text-red-600">{getErrorMessage('starters')}</p>
        )}
      </div>

      {/* Main Course */}
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-4">
          {t('common.groupMenu.mainCourse.title')}
        </h3>
        <p className="text-sm text-neutral-600 mb-4">
          {t('common.groupBooking.dishSelection.groupMenu.chooseOne')}
        </p>
        {renderDishGrid('mains', groupMenuDishes.mains, 1)}
        {errors.mains && (
          <p className="mt-2 text-sm text-red-600">{getErrorMessage('mains')}</p>
        )}
      </div>

      {/* Dessert */}
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-4">
          {t('common.groupMenu.dessert.title')}
        </h3>
        <p className="text-sm text-neutral-600 mb-4">
          {t('common.groupBooking.dishSelection.groupMenu.chooseOne')}
        </p>
        {renderDishGrid('desserts', groupMenuDishes.desserts, 1)}
        {errors.desserts && (
          <p className="mt-2 text-sm text-red-600">{getErrorMessage('desserts')}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="surface p-8">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
          {t('common.groupBooking.dishSelection.title')}
        </h2>

        {state.menuOption === 'aLaCarte' && renderALaCarteSelection()}
        {state.menuOption === 'groupMenu' && renderGroupMenuSelection()}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <motion.button
            onClick={onBack}
            className="px-6 py-3 border border-neutral-300 rounded-lg text-neutral-700 hover:bg-neutral-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('common.groupBooking.navigation.back')}
          </motion.button>

          <motion.button
            onClick={onNext}
            disabled={!isFormValid()}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-all ${
              isFormValid()
                ? 'bg-brand-600 hover:bg-brand-700 cursor-pointer'
                : 'bg-neutral-300 cursor-not-allowed'
            }`}
            whileHover={isFormValid() ? { scale: 1.02 } : {}}
            whileTap={isFormValid() ? { scale: 0.98 } : {}}
          >
            {t('common.groupBooking.dishSelection.next')}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
