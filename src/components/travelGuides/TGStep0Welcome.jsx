import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { buildLocalizedUrl, getLanguageFromPath } from '../../utils/languageUtils.js';

export default function TGStep0Welcome({ onNext }) {
  const { t } = useTranslation();
  const location = useLocation();
  const currentLang = getLanguageFromPath(location.pathname);
  const groupBookingUrl = buildLocalizedUrl('/group-booking', currentLang);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="surface p-4 sm:p-6 lg:p-8"
      >
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🗺️</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
            {t('common.travelGuides.welcome.greeting')}
          </h2>
          <p className="text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            {t('common.travelGuides.welcome.description')}
          </p>
        </motion.div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="grid sm:grid-cols-3 gap-4 mb-8"
        >
          {[
            { step: '1', icon: '🍽️', labelKey: 'step1' },
            { step: '2', icon: '✅', labelKey: 'step2' },
            { step: '3', icon: '📋', labelKey: 'step3' }
          ].map((item) => (
            <div key={item.step} className="flex sm:flex-col items-center sm:justify-center gap-3 sm:gap-1 p-3 sm:p-4 bg-neutral-50 rounded-xl border border-neutral-100">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-600 rounded-full flex items-center justify-center flex-shrink-0 sm:mx-auto sm:mb-1">
                <span className="text-white text-xs sm:text-sm font-bold">{item.step}</span>
              </div>
              <span className="text-lg sm:text-xl sm:mb-1">{item.icon}</span>
              <p className="text-sm text-neutral-700 font-medium sm:text-center">{t(`common.travelGuides.steps.${item.labelKey}`)}</p>
            </div>
          ))}
        </motion.div>

        {/* Alt option notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-3"
        >
          <span className="text-amber-500 text-xl flex-shrink-0">💡</span>
          <div className="flex-1">
            <p className="text-amber-800 text-sm leading-relaxed">
              {t('common.travelGuides.welcome.altOption')}
            </p>
          </div>
          <NavLink
            to={groupBookingUrl}
            className="flex-shrink-0 text-sm font-semibold text-brand-600 hover:text-brand-700 underline underline-offset-2"
          >
            {t('common.travelGuides.welcome.altLink')} →
          </NavLink>
        </motion.div>

        {/* Start button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="text-center"
        >
          <motion.button
            onClick={onNext}
            className="px-10 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('common.travelGuides.welcome.startNow')}
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
