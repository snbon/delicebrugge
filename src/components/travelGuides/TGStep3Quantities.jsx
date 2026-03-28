import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import menuData from '../../data/menu.json';

export default function TGStep3Quantities({ state, dispatch, errors, onNext, onBack }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Build a lookup map: dishId -> { name, price }
  const dishLookup = {};
  menuData.sections.forEach(section => {
    if (section.items) {
      section.items.forEach(item => {
        dishLookup[item.id] = {
          name: item.names ? (item.names[currentLang] || item.names.en || item.id) : item.id,
          price: item.price || 0
        };
      });
    }
  });

  const getDishName = (dishId) => dishLookup[dishId]?.name || dishId;
  const getDishPrice = (dishId) => dishLookup[dishId]?.price || 0;

  const updateQuantity = (dishId, value) => {
    dispatch({ type: 'UPDATE_QUANTITY', dishId, value: parseInt(value) || 0 });
  };

  const getQty = (dishId) => state.quantities[dishId] || 0;

  // Sum of quantities for a list of dish ids
  const sumQty = (dishIds) =>
    dishIds.reduce((sum, id) => sum + getQty(id), 0);

  // Price subtotal for a list of dish ids
  const calcSubtotal = (dishIds) =>
    dishIds.reduce((sum, id) => sum + getQty(id) * getDishPrice(id), 0);

  const { selectedCourses, selectedDishes, guests } = state;

  const starterIds = selectedCourses.starters ? selectedDishes.starters : [];
  const mainIds = selectedDishes.mains;
  const dessertIds = selectedCourses.desserts ? selectedDishes.desserts : [];

  const startersTotal = calcSubtotal(starterIds);
  const mainsTotal = calcSubtotal(mainIds);
  const dessertsTotal = calcSubtotal(dessertIds);
  const drinkTotal = selectedCourses.drink ? 5 * guests : 0;
  const grandTotal = startersTotal + mainsTotal + dessertsTotal + drinkTotal;

  const renderCourseSection = (label, icon, courseKey, dishIds) => {
    if (!dishIds || dishIds.length === 0) return null;
    const assigned = sumQty(dishIds);
    const isComplete = assigned === guests;

    return (
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xl">{icon}</span>
          <h3 className="text-base font-semibold text-neutral-800 flex-1">{label}</h3>
          <span className={`text-sm font-medium px-2.5 py-1 rounded-full ${
            isComplete ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
          }`}>
            {assigned} / {guests} {t('common.travelGuides.quantities.assigned')}
          </span>
        </div>
        <div className="space-y-0 divide-y divide-neutral-100">
          {dishIds.map(dishId => (
            <div key={dishId} className="flex items-center justify-between py-3">
              <div className="flex-1 min-w-0 pr-4">
                <span className="font-medium text-neutral-900 text-sm">{getDishName(dishId)}</span>
                <span className="ml-2 text-xs text-brand-600">€{getDishPrice(dishId).toFixed(2)}</span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-sm text-neutral-600 hidden sm:inline">
                  {t('common.travelGuides.quantities.quantity')}:
                </span>
                <select
                  value={getQty(dishId)}
                  onChange={(e) => updateQuantity(dishId, e.target.value)}
                  className="w-20 px-2 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm"
                >
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const isFormValid = () => {
    const starterOk = !selectedCourses.starters || sumQty(starterIds) === guests;
    const mainOk = sumQty(mainIds) === guests;
    const dessertOk = !selectedCourses.desserts || sumQty(dessertIds) === guests;
    return starterOk && mainOk && dessertOk;
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="surface p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2 text-center">
          {t('common.travelGuides.quantities.title')}
        </h2>
        <p className="text-sm text-neutral-600 text-center mb-6">
          {t('common.travelGuides.quantities.assignPortions', { guests })}
        </p>

        {errors?.quantities && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6">
            <p className="text-sm text-red-600 font-medium">
              {t(`common.travelGuides.validation.${errors.quantities}`, { guests }) || errors.quantities}
            </p>
          </div>
        )}

        {renderCourseSection(
          t('common.travelGuides.courseSelection.starters'),
          '🥗',
          'starters',
          starterIds
        )}
        {renderCourseSection(
          t('common.travelGuides.courseSelection.mainCourse'),
          '🍖',
          'mains',
          mainIds
        )}
        {renderCourseSection(
          t('common.travelGuides.courseSelection.desserts'),
          '🍮',
          'desserts',
          dessertIds
        )}

        {/* Drink row */}
        {selectedCourses.drink && (
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xl">🍷</span>
              <h3 className="text-base font-semibold text-neutral-800 flex-1">
                {t('common.travelGuides.courseSelection.drink')}
              </h3>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-neutral-100">
              <span className="text-sm font-medium text-neutral-700">
                {t('common.travelGuides.dishSelection.drinkDescription')}
              </span>
              <span className="text-sm text-brand-600 font-medium ml-4">
                {guests} × €5.00 = €{drinkTotal.toFixed(2)}
              </span>
            </div>
          </div>
        )}

        {/* Price breakdown */}
        <div className="bg-neutral-50 rounded-xl p-4 sm:p-6 mt-6">
          <h3 className="text-base font-semibold text-neutral-900 mb-4">
            {t('common.travelGuides.summary.pricingBreakdown')}
          </h3>
          <div className="space-y-2 text-sm">
            {selectedCourses.starters && starterIds.length > 0 && (
              <div className="flex justify-between text-neutral-700">
                <span>{t('common.travelGuides.quantities.startersSubtotal')}</span>
                <span className="font-medium">€{startersTotal.toFixed(2)}</span>
              </div>
            )}
            {mainIds.length > 0 && (
              <div className="flex justify-between text-neutral-700">
                <span>{t('common.travelGuides.quantities.mainsSubtotal')}</span>
                <span className="font-medium">€{mainsTotal.toFixed(2)}</span>
              </div>
            )}
            {selectedCourses.desserts && dessertIds.length > 0 && (
              <div className="flex justify-between text-neutral-700">
                <span>{t('common.travelGuides.quantities.dessertsSubtotal')}</span>
                <span className="font-medium">€{dessertsTotal.toFixed(2)}</span>
              </div>
            )}
            {selectedCourses.drink && (
              <div className="flex justify-between text-neutral-700">
                <span>{t('common.travelGuides.quantities.drinkTotal', { guests })}</span>
                <span className="font-medium">€{drinkTotal.toFixed(2)}</span>
              </div>
            )}
            <div className="border-t border-neutral-300 pt-2 mt-2 flex justify-between items-start">
              <span className="font-bold text-neutral-900 text-base">
                {t('common.travelGuides.quantities.grandTotal')}
              </span>
              <div className="text-right">
                <div className="font-bold text-brand-600 text-xl">€{grandTotal.toFixed(2)}</div>
                <div className="text-xs text-neutral-500">€{(grandTotal / state.guests).toFixed(2)} {t('common.travelGuides.quantities.perPerson')}</div>
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-brand-50 border border-brand-200 rounded-lg flex items-start gap-3">
            <span className="text-brand-600 text-lg flex-shrink-0">ℹ️</span>
            <p className="text-sm text-brand-800 font-medium leading-relaxed">
              {t('common.travelGuides.quantities.priceNote')}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
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
            {t('common.travelGuides.quantities.next')}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
