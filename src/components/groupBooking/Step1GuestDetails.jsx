import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Step1GuestDetails({ state, dispatch, errors, onNext }) {
  const { t } = useTranslation();

  const handleInputChange = (field, value) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getErrorMessage = (field) => {
    if (!errors[field]) return null;
    return t(`common.groupBooking.validation.${errors[field]}`);
  };

  const isFormValid = () => {
    return (
      state.name.trim() &&
      state.email.trim() &&
      state.phone.trim() &&
      state.date &&
      state.time &&
      state.guests >= 6 &&
      state.depositAgreement
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="surface p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 sm:mb-6 text-center">
          {t('common.groupBooking.guestDetails.title')}
        </h2>

        <div className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
              {t('common.groupBooking.guestDetails.name')} *
            </label>
            <input
              type="text"
              id="name"
              value={state.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${
                errors.name ? 'border-red-500' : 'border-neutral-300'
              }`}
              placeholder={t('common.groupBooking.guestDetails.name')}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{getErrorMessage('name')}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
              {t('common.groupBooking.guestDetails.email')} *
            </label>
            <input
              type="email"
              id="email"
              value={state.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${
                errors.email ? 'border-red-500' : 'border-neutral-300'
              }`}
              placeholder={t('common.groupBooking.guestDetails.email')}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{getErrorMessage('email')}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
              {t('common.groupBooking.guestDetails.phone')} *
            </label>
            <input
              type="tel"
              id="phone"
              value={state.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${
                errors.phone ? 'border-red-500' : 'border-neutral-300'
              }`}
              placeholder={t('common.groupBooking.guestDetails.phone')}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{getErrorMessage('phone')}</p>
            )}
          </div>

          {/* Date and Time Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-2">
                {t('common.groupBooking.guestDetails.date')} *
              </label>
              <input
                type="date"
                id="date"
                value={state.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                min={getTomorrowDate()}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${
                  errors.date ? 'border-red-500' : 'border-neutral-300'
                }`}
              />
              {errors.date && (
                <p className="mt-1 text-sm text-red-600">{getErrorMessage('date')}</p>
              )}
            </div>

            {/* Time */}
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-neutral-700 mb-2">
                {t('common.groupBooking.guestDetails.time')} *
              </label>
              <select
                id="time"
                value={state.time}
                onChange={(e) => handleInputChange('time', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${
                  errors.time ? 'border-red-500' : 'border-neutral-300'
                }`}
              >
                {Array.from({ length: 21 }, (_, i) => {
                  const hour = Math.floor(i / 2) + 11;
                  const minute = (i % 2) * 30;
                  const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                  return (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  );
                })}
              </select>
              {errors.time && (
                <p className="mt-1 text-sm text-red-600">{getErrorMessage('time')}</p>
              )}
            </div>
          </div>

          {/* Number of Guests */}
          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-neutral-700 mb-2">
              {t('common.groupBooking.guestDetails.guests')} *
            </label>
            <input
              type="number"
              id="guests"
              value={state.guests}
              onChange={(e) => handleInputChange('guests', parseInt(e.target.value) || 6)}
              min="6"
              max="50"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${
                errors.guests ? 'border-red-500' : 'border-neutral-300'
              }`}
            />
            <p className="mt-1 text-sm text-neutral-600">
              {t('common.groupBooking.guestDetails.minGuests')}
            </p>
            {errors.guests && (
              <p className="mt-1 text-sm text-red-600">{getErrorMessage('guests')}</p>
            )}
          </div>

          {/* Deposit Agreement */}
          <div className="pt-4">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={state.depositAgreement}
                onChange={(e) => handleInputChange('depositAgreement', e.target.checked)}
                className="mt-1 w-4 h-4 text-brand-600 border-neutral-300 rounded focus:ring-brand-500"
              />
              <span className="text-sm text-neutral-700 leading-relaxed">
                {t('common.groupBooking.guestDetails.depositAgreement')}
              </span>
            </label>
            {errors.depositAgreement && (
              <p className="mt-2 text-sm text-red-600">{getErrorMessage('depositAgreement')}</p>
            )}
          </div>

          {/* Next Button */}
          <div className="pt-6">
            <motion.button
              onClick={onNext}
              disabled={!isFormValid()}
              className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold text-white transition-all text-sm sm:text-base ${
                isFormValid()
                  ? 'bg-brand-600 hover:bg-brand-700 cursor-pointer'
                  : 'bg-neutral-300 cursor-not-allowed'
              }`}
              whileHover={isFormValid() ? { scale: 1.02 } : {}}
              whileTap={isFormValid() ? { scale: 0.98 } : {}}
            >
              {t('common.groupBooking.guestDetails.next')}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
