import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import menuData from '../../data/menu.json';

export default function TGStep5Summary({ state, dispatch, errors, onBack, onSubmit }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Build dish lookup map
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

  const getDishName = (id) => dishLookup[id]?.name || id;
  const getDishPrice = (id) => dishLookup[id]?.price || 0;
  const getQty = (id) => state.quantities[id] || 0;

  const { selectedCourses, selectedDishes, guests } = state;
  const starterIds = selectedCourses.starters ? selectedDishes.starters : [];
  const mainIds = selectedDishes.mains;
  const dessertIds = selectedCourses.desserts ? selectedDishes.desserts : [];

  const calcSubtotal = (ids) => ids.reduce((sum, id) => sum + getQty(id) * getDishPrice(id), 0);
  const startersTotal = calcSubtotal(starterIds);
  const mainsTotal = calcSubtotal(mainIds);
  const dessertsTotal = calcSubtotal(dessertIds);
  const drinkTotal = selectedCourses.drink ? 5 * guests : 0;
  const grandTotal = startersTotal + mainsTotal + dessertsTotal + drinkTotal;

  const SummarySection = ({ title, children }) => (
    <div className="bg-neutral-50 p-4 sm:p-5 rounded-xl">
      <h3 className="text-base font-semibold text-neutral-900 mb-3">{title}</h3>
      {children}
    </div>
  );

  const SummaryRow = ({ label, value }) => (
    <div className="flex justify-between items-start gap-2 py-1">
      <span className="text-sm text-neutral-500">{label}</span>
      <span className="text-sm font-medium text-neutral-900 text-right">{value}</span>
    </div>
  );

  const CourseItems = ({ label, icon, dishIds }) => {
    if (!dishIds || dishIds.length === 0) return null;
    return (
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm">{icon}</span>
          <span className="text-sm font-semibold text-neutral-700">{label}</span>
        </div>
        <div className="space-y-1 pl-6">
          {dishIds.map(id => (
            <div key={id} className="flex justify-between items-center py-1 px-3 bg-white rounded-lg border border-neutral-100">
              <span className="text-sm text-neutral-700">{getDishName(id)}</span>
              <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                <span className="text-xs text-neutral-500">{getQty(id)}×</span>
                <span className="text-xs text-brand-600 font-medium">€{(getQty(id) * getDishPrice(id)).toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="surface p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-6 text-center">
          {t('common.travelGuides.summary.title')}
        </h2>

        <div className="space-y-4">
          {/* Contact Info */}
          <SummarySection title={t('common.travelGuides.summary.contactInfo')}>
            <SummaryRow label={t('common.travelGuides.summary.labels.name')} value={state.name} />
            <SummaryRow label={t('common.travelGuides.summary.labels.email')} value={state.email} />
            <SummaryRow label={t('common.travelGuides.summary.labels.phone')} value={state.phone} />
            <SummaryRow label={t('common.travelGuides.summary.labels.guests')} value={`${state.guests}`} />
          </SummarySection>

          {/* Booking Details */}
          <SummarySection title={t('common.travelGuides.summary.bookingDetails')}>
            <SummaryRow label={t('common.travelGuides.summary.labels.date')} value={state.date} />
            <SummaryRow label={t('common.travelGuides.summary.labels.time')} value={state.time} />
          </SummarySection>

          {/* Dishes & Quantities */}
          <SummarySection title={t('common.travelGuides.summary.dishesQuantities')}>
            <CourseItems label={t('common.travelGuides.courseSelection.starters')} icon="🥗" dishIds={starterIds} />
            <CourseItems label={t('common.travelGuides.courseSelection.mainCourse')} icon="🍖" dishIds={mainIds} />
            <CourseItems label={t('common.travelGuides.courseSelection.desserts')} icon="🍮" dishIds={dessertIds} />
            {selectedCourses.drink && (
              <div className="flex items-center gap-2 py-1 px-3 bg-white rounded-lg border border-neutral-100">
                <span className="text-sm">🍷</span>
                <span className="text-sm text-neutral-700 flex-1">
                  {t('common.travelGuides.courseSelection.drink')}
                </span>
                <span className="text-xs text-brand-600 font-medium">€{drinkTotal.toFixed(2)}</span>
              </div>
            )}
          </SummarySection>

          {/* Pricing */}
          <SummarySection title={t('common.travelGuides.summary.pricingBreakdown')}>
            {selectedCourses.starters && starterIds.length > 0 && (
              <SummaryRow label={t('common.travelGuides.quantities.startersSubtotal')} value={`€${startersTotal.toFixed(2)}`} />
            )}
            {mainIds.length > 0 && (
              <SummaryRow label={t('common.travelGuides.quantities.mainsSubtotal')} value={`€${mainsTotal.toFixed(2)}`} />
            )}
            {selectedCourses.desserts && dessertIds.length > 0 && (
              <SummaryRow label={t('common.travelGuides.quantities.dessertsSubtotal')} value={`€${dessertsTotal.toFixed(2)}`} />
            )}
            {selectedCourses.drink && (
              <SummaryRow
                label={t('common.travelGuides.quantities.drinkTotal', { guests })}
                value={`€${drinkTotal.toFixed(2)}`}
              />
            )}
            <div className="border-t border-neutral-300 pt-2 mt-2 flex justify-between items-start">
              <span className="font-bold text-neutral-900">{t('common.travelGuides.quantities.grandTotal')}</span>
              <div className="text-right">
                <div className="font-bold text-brand-600 text-lg">€{grandTotal.toFixed(2)}</div>
                <div className="text-xs text-neutral-500">€{(grandTotal / state.guests).toFixed(2)} {t('common.travelGuides.quantities.perPerson')}</div>
              </div>
            </div>
          </SummarySection>

          {/* Deposit note */}
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
            <span className="text-amber-500 flex-shrink-0">💰</span>
            <p className="text-sm text-amber-800 leading-relaxed">
              {t('common.travelGuides.summary.depositNote')}
            </p>
          </div>

          {/* Confirmation checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={state.confirmAgreement}
                onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'confirmAgreement', value: e.target.checked })}
                className="mt-1 w-4 h-4 text-brand-600 border-neutral-300 rounded focus:ring-brand-500 flex-shrink-0"
              />
              <span className="text-sm text-neutral-700 leading-relaxed">
                {t('common.travelGuides.summary.confirmAgreement')}
              </span>
            </label>
            {errors?.confirmAgreement && (
              <p className="mt-2 text-sm text-red-600">
                {t(`common.travelGuides.validation.${errors.confirmAgreement}`) || errors.confirmAgreement}
              </p>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
          <button
            onClick={onBack}
            disabled={state.isSubmitting}
            className="order-2 sm:order-1 px-6 py-3 border border-neutral-300 rounded-lg text-neutral-700 hover:bg-neutral-50 font-medium transition-colors disabled:opacity-50"
          >
            {t('common.travelGuides.navigation.back')}
          </button>
          <motion.button
            onClick={onSubmit}
            disabled={!state.confirmAgreement || state.isSubmitting}
            className="order-1 sm:order-2 px-8 py-3 bg-brand-600 hover:bg-brand-700 disabled:bg-neutral-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2"
            whileHover={state.confirmAgreement && !state.isSubmitting ? { scale: 1.02 } : {}}
            whileTap={state.confirmAgreement && !state.isSubmitting ? { scale: 0.98 } : {}}
          >
            {state.isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                {t('common.travelGuides.summary.submitting')}
              </>
            ) : (
              t('common.travelGuides.summary.submit')
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
