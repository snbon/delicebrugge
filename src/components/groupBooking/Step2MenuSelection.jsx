import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Step2MenuSelection({ state, dispatch, errors, onNext, onBack }) {
  const { t } = useTranslation();

  const handleMenuSelection = (option) => {
    dispatch({ type: 'SET_MENU_OPTION', value: option });
  };

  const getErrorMessage = (field) => {
    if (!errors[field]) return null;
    return t(`common.groupBooking.validation.${errors[field]}`);
  };

  const isFormValid = () => {
    return state.menuOption !== null;
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="surface p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 sm:mb-6 text-center">
          {t('common.groupBooking.menuSelection.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Option 1: À la Carte */}
          <motion.div
            className={`cursor-pointer transition-all duration-300 ${
              state.menuOption === 'aLaCarte' ? 'ring-2 ring-brand-500 rounded-3xl' : ''
            }`}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className={`surface p-6 h-full ${
                state.menuOption === 'aLaCarte'
                  ? 'border-brand-500 bg-brand-50'
                  : 'hover:shadow-lg'
              }`}
              onClick={() => handleMenuSelection('aLaCarte')}
            >
              <div className="text-left">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-brand-600">1</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-900 leading-tight">
                    {t('common.groupBooking.menuSelection.option1.title')}
                  </h3>
                </div>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  {t('common.groupBooking.menuSelection.option1.description')}
                </p>
                <div className="text-sm text-neutral-500">
                  {state.menuOption === 'aLaCarte' && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-medium mt-2">
                      {t('common.groupBooking.menuSelection.select')}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Option 2: Group Menu */}
          <motion.div
            className={`cursor-pointer transition-all duration-300 ${
              state.menuOption === 'groupMenu' ? 'ring-2 ring-brand-500 rounded-3xl' : ''
            }`}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className={`surface p-6 h-full ${
                state.menuOption === 'groupMenu'
                  ? 'border-brand-500 bg-brand-50'
                  : 'hover:shadow-lg'
              }`}
              onClick={() => handleMenuSelection('groupMenu')}
            >
              <div className="text-left">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-brand-600">2</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-900 leading-tight">
                    {t('common.groupBooking.menuSelection.option2.title')}
                  </h3>
                </div>
                <p className="text-neutral-600 leading-relaxed mb-3">
                  {t('common.groupBooking.menuSelection.option2.description')}
                </p>
                <div className="text-sm sm:text-base font-semibold text-brand-600 mb-3 mt-4">
                  {t('common.groupBooking.menuSelection.option2.price')}
                </div>
                <div className="text-sm text-neutral-500">
                  {state.menuOption === 'groupMenu' && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-medium mt-1">
                      {t('common.groupBooking.menuSelection.select')}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Error Message */}
        {errors.menuOption && (
          <div className="text-center mb-6">
            <p className="text-sm text-red-600">{getErrorMessage('menuOption')}</p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
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
            {t('common.groupBooking.menuSelection.next')}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
