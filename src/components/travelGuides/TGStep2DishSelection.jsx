import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import menuData from '../../data/menu.json';

export default function TGStep2DishSelection({ state, dispatch, errors, onNext, onBack }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const getMenuItems = (sectionId) => {
    const section = menuData.sections.find(s => s.id === sectionId);
    if (!section || !section.items) return [];
    return section.items.map(item => ({
      id: item.id,
      name: item.names ? (item.names[currentLang] || item.names.en || 'Unknown') : 'Unknown',
      price: item.price
    }));
  };

  const starters = getMenuItems('voorgerechten');
  const vleesgerechten = getMenuItems('vlees-burgers');
  const visgerechten = getMenuItems('vis-mosselen');
  const pastaAll = getMenuItems('pasta');
  const pastaOnly = pastaAll.filter(item => !item.id.includes('kids') && !item.name.toLowerCase().includes('kids'));
  const desserts = getMenuItems('desserts-ice');

  const handleDishToggle = (course, dishId, selected) => {
    dispatch({ type: 'SELECT_DISH', course, dishId, selected });
  };

  const isFormValid = () => {
    const { selectedCourses, selectedDishes } = state;
    if (selectedCourses.starters && selectedDishes.starters.length === 0) return false;
    if (selectedDishes.mains.length === 0) return false;
    if (selectedCourses.desserts && selectedDishes.desserts.length === 0) return false;
    return true;
  };

  const renderDishGrid = (course, dishes, maxSelection = 5) => {
    const selected = state.selectedDishes[course] || [];
    if (!dishes || dishes.length === 0) {
      return <p className="text-sm text-neutral-500 italic">No items available</p>;
    }
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {dishes.map((dish) => {
          const isSide = dish.id.includes('sides') || dish.name.toLowerCase().includes('side dish') || dish.name.toLowerCase().includes('side ') || dish.name.toLowerCase().startsWith('side');
          const isSelected = selected.includes(dish.id);
          const canSelect = !isSide && (selected.length < maxSelection || isSelected);
          return (
            <motion.div
              key={dish.id}
              className={`transition-all duration-200 ${canSelect ? 'cursor-pointer' : 'cursor-default'} ${isSelected ? 'ring-2 ring-brand-500 rounded-3xl' : ''}`}
              whileHover={canSelect ? { y: -2 } : {}}
              whileTap={canSelect ? { scale: 0.98 } : {}}
              onClick={() => canSelect && handleDishToggle(course, dish.id, !isSelected)}
            >
              <div className={`surface p-3 h-full ${isSelected ? 'border-brand-500 bg-brand-50' : canSelect ? 'hover:shadow-lg' : 'opacity-50 cursor-not-allowed'}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h5 className="font-semibold text-neutral-900 mb-1 text-sm leading-tight">{dish.name}</h5>
                    {dish.price != null && (
                      <p className="text-xs text-brand-600 font-medium">€{dish.price.toFixed(2)}</p>
                    )}
                  </div>
                  <div className="ml-2 flex-shrink-0">
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
                        <span className="text-neutral-400 text-xs">—</span>
                      </div>
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

  const renderMainsWithCategories = () => {
    const categories = [
      { key: 'vleesgerechten', icon: '🥩', items: vleesgerechten },
      { key: 'visgerechtenMosselen', icon: '🐟', items: visgerechten },
      { key: 'pasta', icon: '🍝', items: pastaOnly }
    ];

    return (
      <div className="space-y-6">
        {categories.filter(c => c.items.length > 0).map((category) => (
          <div key={category.key} className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-xl">{category.icon}</span>
              <h4 className="text-base font-semibold text-neutral-800">
                {t(`common.travelGuides.dishSelection.sections.${category.key}`, category.key)}
              </h4>
              <div className="flex-1 h-px bg-neutral-200"></div>
            </div>
            {renderDishGrid('mains', category.items, 5)}
          </div>
        ))}
      </div>
    );
  };

  const SectionHeader = ({ title, courseKey, countLabel }) => {
    const selected = state.selectedDishes[courseKey] || [];
    return (
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        <div className="bg-brand-50 border border-brand-100 rounded-lg py-1.5 px-3">
          <p className="text-brand-800 font-medium text-sm">
            {selected.length}/5 {t('common.travelGuides.dishSelection.infoNote').split('.')[0].split('5')[1]?.trim() || 'selected'}
            {' — '}
            <span className="text-neutral-600 font-normal text-xs">{t('common.travelGuides.dishSelection.infoNote')}</span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="surface p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2 text-center">
          {t('common.travelGuides.dishSelection.title')}
        </h2>

        {/* Info note */}
        <div className="bg-brand-50 border border-brand-100 rounded-lg py-3 px-4 mb-8 max-w-2xl mx-auto">
          <p className="text-brand-800 font-medium text-sm text-center">
            {t('common.travelGuides.dishSelection.infoNote')}
          </p>
        </div>

        <div className="space-y-10">
          {/* Starters */}
          {state.selectedCourses.starters && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {t('common.travelGuides.dishSelection.sections.starters')}
                </h3>
                <div className="flex-1 h-px bg-neutral-200"></div>
                <span className="text-sm text-neutral-500">
                  {state.selectedDishes.starters.length}/5
                </span>
              </div>
              {errors?.starters && (
                <p className="text-sm text-red-600 mb-3">{t(`common.travelGuides.validation.${errors.starters}`, errors.starters)}</p>
              )}
              {renderDishGrid('starters', starters, 5)}
            </div>
          )}

          {/* Main Courses (always shown) */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-lg font-semibold text-neutral-900">
                {t('common.travelGuides.courseSelection.mainCourse')}
              </h3>
              <div className="flex-1 h-px bg-neutral-200"></div>
              <span className="text-sm text-neutral-500">
                {state.selectedDishes.mains.length}/5
              </span>
            </div>
            {errors?.mains && (
              <p className="text-sm text-red-600 mb-3">{t(`common.travelGuides.validation.${errors.mains}`, errors.mains)}</p>
            )}
            {renderMainsWithCategories()}
          </div>

          {/* Desserts */}
          {state.selectedCourses.desserts && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🍮</span>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {t('common.travelGuides.dishSelection.sections.desserts')}
                </h3>
                <div className="flex-1 h-px bg-neutral-200"></div>
                <span className="text-sm text-neutral-500">
                  {state.selectedDishes.desserts.length}/5
                </span>
              </div>
              {errors?.desserts && (
                <p className="text-sm text-red-600 mb-3">{t(`common.travelGuides.validation.${errors.desserts}`, errors.desserts)}</p>
              )}
              {renderDishGrid('desserts', desserts, 5)}
            </div>
          )}

          {/* Drink */}
          {state.selectedCourses.drink && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🍷</span>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {t('common.travelGuides.dishSelection.drinkSection')}
                </h3>
                <div className="flex-1 h-px bg-neutral-200"></div>
              </div>
              <div className="surface p-4 border-brand-500 bg-brand-50 ring-2 ring-brand-500 rounded-3xl">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-semibold text-neutral-900 mb-1">
                      {t('common.travelGuides.dishSelection.drinkDescription')}
                    </p>
                    <p className="text-sm text-brand-600 font-medium">
                      {t('common.travelGuides.dishSelection.drinkPrice')}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <div className="w-6 h-6 bg-brand-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
          <button
            onClick={onBack}
            className="order-2 sm:order-1 px-6 py-3 border border-neutral-300 rounded-lg text-neutral-700 hover:bg-neutral-50 font-medium transition-colors"
          >
            {t('common.travelGuides.navigation.back')}
          </button>
          <motion.button
            onClick={onNext}
            disabled={!isFormValid()}
            className="order-1 sm:order-2 px-8 py-3 bg-brand-600 hover:bg-brand-700 disabled:bg-neutral-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors shadow-sm"
            whileHover={isFormValid() ? { scale: 1.02 } : {}}
            whileTap={isFormValid() ? { scale: 0.98 } : {}}
          >
            {t('common.travelGuides.dishSelection.next')}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
