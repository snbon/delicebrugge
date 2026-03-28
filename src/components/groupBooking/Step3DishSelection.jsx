import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import menuData from '../../data/menu.json';

export default function Step3DishSelection({ state, dispatch, errors, onNext, onBack }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Get actual menu data from menu.json
  const getMenuItems = (sectionId) => {
    const section = menuData.sections.find(s => s.id === sectionId);
    if (!section || !section.items) return [];
    
    return section.items.map(item => {
      // Handle cases where item.names might not exist
      let name = 'Unknown Dish';
      if (item.names) {
        name = item.names[currentLang] || item.names.en || 'Unknown Dish';
      }
      
      return {
        id: item.id,
        name: name,
        price: item.price
      };
    });
  };

  // Get starters and mains from actual menu data
  const starters = getMenuItems('voorgerechten');
  
  // Get mains by category for better organization
  const vleesgerechten = getMenuItems('vlees-burgers');
  const visgerechten = getMenuItems('vis-mosselen');
  const pasta = getMenuItems('pasta');
  
  // Debug logging to see what we're getting
  console.log('Menu data loaded:', {
    starters: starters.length,
    vleesgerechten: vleesgerechten.length,
    visgerechten: visgerechten.length,
    pasta: pasta.length
  });
  
  // Extract kids dishes from pasta section (they're mixed in there)
  const kids = getMenuItems('pasta').filter(item => 
    item.id.includes('kids') || 
    item.name.toLowerCase().includes('kids')
  );
  
  // Filter out kids dishes from pasta
  const pastaOnly = getMenuItems('pasta').filter(item => 
    !item.id.includes('kids') && 
    !item.name.toLowerCase().includes('kids')
  );
  
  // Combine all mains
  const mains = (vleesgerechten || []).concat(visgerechten || []).concat(pastaOnly || []).concat(kids || []);
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
        state.selectedDishes.starters.length >= 1 &&
        state.selectedDishes.mains.length >= 1 &&
        state.selectedDishes.starters.length <= 5 &&
        state.selectedDishes.mains.length <= 5
      );
    } else if (state.menuOption === 'groupMenu') {
      // For group menu, no dish selection required in Step 3
      return true;
    }
    return false;
  };

  const renderDishGrid = (course, dishes, maxSelection = null) => {
    const selectedDishes = state.selectedDishes[course] || [];
    const isAtMax = maxSelection && selectedDishes.length >= maxSelection;

    // Safety check for empty dishes array
    if (!dishes || dishes.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-neutral-500">No dishes available in this category</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dishes.map((dish) => {
          const isSelected = selectedDishes.includes(dish.id);
          const canSelect = !maxSelection || selectedDishes.length < maxSelection || isSelected;

          return (
            <motion.div
              key={dish.id}
              className={`cursor-pointer transition-all duration-300 ${
                isSelected ? 'ring-2 ring-brand-500 rounded-3xl' : ''
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

  const renderGroupMenuDishes = (course, dishes) => {
    // Safety check for empty dishes array
    if (!dishes || dishes.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-neutral-500">No dishes available in this category</p>
        </div>
      );
    }

    const renderDishCard = (dish) => (
      <div key={dish.id} className="surface p-3 sm:p-5 min-h-[5rem] sm:min-h-[6rem] flex flex-col justify-center w-full lg:flex-1 max-w-[18rem] lg:max-w-none shadow-sm border border-neutral-100">
        <div className="text-center">
          <h4 className="font-semibold text-neutral-900 text-sm sm:text-base leading-tight px-2">{dish.name}</h4>
        </div>
      </div>
    );

    const renderOr = (key) => (
      <span key={key} className="text-brand-500 font-medium text-lg italic my-1 md:my-0">
        {t('common.groupBooking.dishSelection.groupMenu.or')}
      </span>
    );

    if (dishes.length === 2) {
      return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-4xl mx-auto">
          {renderDishCard(dishes[0])}
          {renderOr('or-1')}
          {renderDishCard(dishes[1])}
        </div>
      );
    }

    if (dishes.length === 3) {
      return (
        <div className="flex flex-col items-center gap-4 lg:gap-6 w-full max-w-6xl mx-auto">
          {/* Desktop Single Row */}
          <div className="hidden lg:flex flex-row items-center justify-center gap-6 w-full">
            {renderDishCard(dishes[0])}
            {renderOr('or-1-desk')}
            {renderDishCard(dishes[1])}
            {renderOr('or-2-desk')}
            {renderDishCard(dishes[2])}
          </div>

          {/* Tablet/Mobile 2-Row Layout */}
          <div className="flex lg:hidden flex-col items-center gap-4 md:gap-6 w-full">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full">
              {renderDishCard(dishes[0])}
              {renderOr('or-1-mob')}
              {renderDishCard(dishes[1])}
            </div>
            {renderOr('or-2-mob')}
            {renderDishCard(dishes[2])}
          </div>
        </div>
      );
    }

    // Default fallback
    return (
      <div className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-4 md:gap-6 w-full max-w-4xl mx-auto">
        {dishes.map((dish, index) => (
          <React.Fragment key={dish.id}>
            {index > 0 && renderOr(`or-${index}`)}
            {renderDishCard(dish)}
          </React.Fragment>
        ))}
      </div>
    );
  };

  const renderMainDishesWithCategories = () => {
    const categories = [
      { title: t('common.groupBooking.dishSelection.sections.vleesgerechten'), items: vleesgerechten || [], icon: '🥩', clickable: true },
      { title: t('common.groupBooking.dishSelection.sections.visgerechtenMosselen'), items: visgerechten || [], icon: '🐟', clickable: true },
      { title: t('common.groupBooking.dishSelection.sections.pasta'), items: pastaOnly || [], icon: '🍝', clickable: true },
      { title: t('common.groupBooking.dishSelection.sections.kidsMenu'), items: kids || [], icon: '👶', clickable: true }
    ];

    return (
      <div className="space-y-6">
        {categories.map((category, index) => (
          <div key={index} className="space-y-4">
            {/* Category Header */}
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{category.icon}</span>
              <h4 className="text-lg font-semibold text-neutral-800">{category.title}</h4>
              <div className="flex-1 h-px bg-neutral-200"></div>
            </div>
            
            {/* Category Items */}
            {category.items.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {category.items.map((dish) => {
                  const isSelected = (state.selectedDishes.mains || []).includes(dish.id);
                  
                  // Check if this specific dish should be disabled (like "Side dishes")
                  const isSideDish = dish.name.toLowerCase().includes('side') || 
                                   dish.name.toLowerCase().includes('extra') ||
                                   dish.id.includes('sides');
                  
                  const canSelect = category.clickable && !isSideDish && 
                                  ((state.selectedDishes.mains || []).length < 5 || isSelected);

                  return (
                    <motion.div
                      key={dish.id}
                      className={`transition-all duration-300 ${
                        canSelect ? 'cursor-pointer' : 'cursor-default'
                      } ${isSelected ? 'ring-2 ring-brand-500 rounded-3xl' : ''}`}
                      whileHover={canSelect ? { y: -2 } : {}}
                      whileTap={canSelect ? { scale: 0.98 } : {}}
                    >
                      <div
                        className={`surface p-3 h-full ${
                          isSelected
                            ? 'border-brand-500 bg-brand-50'
                            : canSelect
                            ? 'hover:shadow-lg'
                            : 'opacity-60 cursor-not-allowed'
                        }`}
                        onClick={() => canSelect && handleDishSelection('mains', dish.id, !isSelected)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h5 className="font-semibold text-neutral-900 mb-1 text-sm">{dish.name}</h5>
                            {dish.price && (
                              <p className="text-xs text-brand-600 font-medium">€{dish.price.toFixed(2)}</p>
                            )}
                          </div>
                          <div className="ml-2">
                            {canSelect ? (
                              isSelected ? (
                                <div className="w-5 h-5 bg-brand-600 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs">✓</span>
                                </div>
                              ) : (
                                <div className="w-5 h-5 border-2 border-neutral-300 rounded-full"></div>
                              )
                            ) : (
                              <div className="w-5 h-5 bg-neutral-200 rounded-full flex items-center justify-center">
                                <span className="text-neutral-500 text-xs">-</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-neutral-500 italic">No items available in this category</p>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderALaCarteSelection = () => (
    <div className="space-y-8">
      {/* Starters */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <h3 className="text-xl font-semibold text-neutral-900">
            {t('common.groupBooking.dishSelection.starters')}
          </h3>
          <div className="bg-brand-50 border border-brand-100 rounded-lg py-1.5 px-3">
            <p className="text-brand-800 font-medium text-sm">
              {t('common.groupBooking.dishSelection.selectUpTo')} <span className="font-bold">5</span> {t('common.groupBooking.dishSelection.items')} 
              <span className="inline-block ml-2 px-2 py-0.5 bg-brand-600 text-white text-xs rounded-full font-semibold tracking-wide">
                MIN 1 PER COURSE
              </span>
            </p>
          </div>
        </div>
        {renderDishGrid('starters', starters || [], 5)}
        {errors.starters && (
          <p className="mt-2 text-sm text-red-600">{getErrorMessage('starters')}</p>
        )}
      </div>

      {/* Main Dishes */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <h3 className="text-xl font-semibold text-neutral-900">
            {t('common.groupBooking.dishSelection.mains')}
          </h3>
          <div className="bg-brand-50 border border-brand-100 rounded-lg py-1.5 px-3">
            <p className="text-brand-800 font-medium text-sm">
              {t('common.groupBooking.dishSelection.selectUpTo')} <span className="font-bold">5</span> {t('common.groupBooking.dishSelection.items')} 
              <span className="inline-block ml-2 px-2 py-0.5 bg-brand-600 text-white text-xs rounded-full font-semibold tracking-wide">
                MIN 1 PER COURSE
              </span>
            </p>
          </div>
        </div>
        {renderMainDishesWithCategories()}
        {errors.mains && (
          <p className="mt-2 text-sm text-red-600">{getErrorMessage('mains')}</p>
        )}
      </div>
    </div>
  );

  const renderGroupMenuSelection = () => {
    const isDelice = state.groupMenuType === 'delice';
    const activeDishes = isDelice ? deliceMenuDishes : groupMenuDishes;

    return (
      <div className="space-y-8">
        {/* Toggle UI */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-neutral-100 p-1 rounded-xl">
            <button
              onClick={() => dispatch({ type: 'SET_GROUP_MENU_TYPE', value: 'standard' })}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                !isDelice
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Group Menu (€38)
            </button>
            <button
              onClick={() => dispatch({ type: 'SET_GROUP_MENU_TYPE', value: 'delice' })}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                isDelice
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              {t('common.groupBooking.dishSelection.deliceMenu.heading')}
            </button>
          </div>
        </div>

        {/* Appetizer */}
        <div>
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              {t('common.groupBooking.dishSelection.groupMenu.appetizer')}
            </h3>
            <div className="w-20 h-0.5 bg-brand-600 mx-auto"></div>
          </div>
          {renderGroupMenuDishes('starters', activeDishes.starters)}
        </div>

        {/* Main Course */}
        <div className="mt-12">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              {t('common.groupBooking.dishSelection.groupMenu.mainCourse')}
            </h3>
            <div className="w-20 h-0.5 bg-brand-600 mx-auto"></div>
          </div>
          {renderGroupMenuDishes('mains', activeDishes.mains)}
        </div>

        {/* Dessert */}
        <div className="mt-12">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              {t('common.groupBooking.dishSelection.groupMenu.dessert')}
            </h3>
            <div className="w-20 h-0.5 bg-brand-600 mx-auto"></div>
          </div>
          {renderGroupMenuDishes('desserts', activeDishes.desserts)}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="surface p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2 text-center">
          {t('common.groupBooking.dishSelection.title')}
        </h2>
        
        <div className="mb-6 sm:mb-8 text-center bg-brand-50 border border-brand-100 rounded-lg py-3 px-4 max-w-2xl mx-auto">
          <p className="text-brand-800 font-medium">
            {t('common.groupBooking.dishSelection.subtitle')}
          </p>
        </div>

        {state.menuOption === 'aLaCarte' && renderALaCarteSelection()}
        {state.menuOption === 'groupMenu' && renderGroupMenuSelection()}

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
            {t('common.groupBooking.dishSelection.next')}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
