import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import menuData from '../../data/menu.json';

export default function TGStep6ThankYou({ state }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

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
  const drinkTotal = selectedCourses.drink ? 5 * guests : 0;
  const grandTotal = calcSubtotal(starterIds) + calcSubtotal(mainIds) + calcSubtotal(dessertIds) + drinkTotal;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="surface p-4 sm:p-6 lg:p-8">
        {/* Success header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span className="text-4xl">✅</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3"
          >
            {t('common.travelGuides.thankYou.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="text-neutral-600 max-w-2xl mx-auto leading-relaxed"
          >
            {t('common.travelGuides.thankYou.message')}
          </motion.p>
        </div>

        {/* Booking summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="text-lg font-bold text-neutral-900 mb-4 text-center">
            {t('common.travelGuides.thankYou.summaryTitle')}
          </h3>

          <div className="space-y-4">
            {/* Contact & Booking */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-neutral-50 p-4 rounded-xl">
                <h4 className="text-sm font-semibold text-neutral-700 mb-2">{t('common.travelGuides.summary.contactInfo')}</h4>
                <div className="space-y-1 text-sm text-neutral-600">
                  <div>{state.name}</div>
                  <div>{state.email}</div>
                  <div>{state.phone}</div>
                  <div>{guests} guests</div>
                </div>
              </div>
              <div className="bg-neutral-50 p-4 rounded-xl">
                <h4 className="text-sm font-semibold text-neutral-700 mb-2">{t('common.travelGuides.summary.bookingDetails')}</h4>
                <div className="space-y-1 text-sm text-neutral-600">
                  <div>{state.date}</div>
                  <div>{state.time}</div>
                </div>
              </div>
            </div>

            {/* Dishes */}
            <div className="bg-neutral-50 p-4 rounded-xl">
              <h4 className="text-sm font-semibold text-neutral-700 mb-3">{t('common.travelGuides.summary.dishesQuantities')}</h4>
              <div className="space-y-3">
                {starterIds.length > 0 && (
                  <div>
                    <div className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-1">🥗 {t('common.travelGuides.courseSelection.starters')}</div>
                    {starterIds.map(id => (
                      <div key={id} className="flex justify-between items-center py-1 px-3 bg-white rounded-lg border border-neutral-100 mb-1">
                        <span className="text-sm text-neutral-700">{getDishName(id)}</span>
                        <span className="text-sm text-neutral-500 font-semibold">{getQty(id)}×</span>
                      </div>
                    ))}
                  </div>
                )}
                {mainIds.length > 0 && (
                  <div>
                    <div className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-1">🍖 {t('common.travelGuides.courseSelection.mainCourse')}</div>
                    {mainIds.map(id => (
                      <div key={id} className="flex justify-between items-center py-1 px-3 bg-white rounded-lg border border-neutral-100 mb-1">
                        <span className="text-sm text-neutral-700">{getDishName(id)}</span>
                        <span className="text-sm text-neutral-500 font-semibold">{getQty(id)}×</span>
                      </div>
                    ))}
                  </div>
                )}
                {dessertIds.length > 0 && (
                  <div>
                    <div className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-1">🍮 {t('common.travelGuides.courseSelection.desserts')}</div>
                    {dessertIds.map(id => (
                      <div key={id} className="flex justify-between items-center py-1 px-3 bg-white rounded-lg border border-neutral-100 mb-1">
                        <span className="text-sm text-neutral-700">{getDishName(id)}</span>
                        <span className="text-sm text-neutral-500 font-semibold">{getQty(id)}×</span>
                      </div>
                    ))}
                  </div>
                )}
                {selectedCourses.drink && (
                  <div className="flex items-center gap-2 py-1 px-3 bg-white rounded-lg border border-neutral-100">
                    <span className="text-sm">🍷</span>
                    <span className="text-sm text-neutral-700 flex-1">{t('common.travelGuides.courseSelection.drink')}</span>
                    <span className="text-sm text-neutral-500 font-semibold">{guests}×</span>
                  </div>
                )}
              </div>
              <div className="mt-3 pt-3 border-t border-neutral-200 flex justify-between">
                <span className="text-sm font-bold text-neutral-900">{t('common.travelGuides.quantities.grandTotal')}</span>
                <span className="text-lg font-bold text-brand-600">€{grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What happens next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-6 p-5 bg-blue-50 rounded-xl border border-blue-200"
        >
          <h4 className="font-semibold text-blue-900 mb-2">
            {t('common.travelGuides.thankYou.whatNext')}
          </h4>
          <p className="text-blue-800 text-sm leading-relaxed">
            {t('common.travelGuides.thankYou.whatNextDescription')}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
