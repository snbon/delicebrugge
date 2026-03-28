import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Step0WelcomeMessage({ onNext }) {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="surface p-6 sm:p-8 lg:p-10">


        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="mb-8">
            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              {t('common.groupBooking.welcome.greeting')}
            </p>
            <p className="text-neutral-700 leading-relaxed">
              {t('common.groupBooking.welcome.description')}
            </p>
          </div>

          {/* Menu Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
            {/* Option 1 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-500"></div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center flex-shrink-0 border border-brand-100">
                  <span className="text-xl font-bold text-brand-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                  {t('common.groupBooking.welcome.option1.title')}
                </h3>
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {t('common.groupBooking.welcome.option1.description')}
              </p>
            </div>

            {/* Option 2 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-500"></div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center flex-shrink-0 border border-brand-100">
                  <span className="text-xl font-bold text-brand-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                  {t('common.groupBooking.welcome.option2.title')}
                </h3>
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {t('common.groupBooking.welcome.option2.description')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Proceed Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={onNext}
            className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            {t('common.groupBooking.welcome.bookNow')}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
