import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Step1GuestDetails({ state, dispatch, errors, onNext }) {
  const { t, i18n } = useTranslation();
  const [dayError, setDayError] = useState('');

  // Define leave periods here (Format: YYYY-MM-DD)
  const LEAVE_PERIODS = [
    { start: '', end: '' } // ADD VACATION DATES HERE! 
  ];

  const handleInputChange = (field, value) => {
    if (field === 'date' && value) {
      const selectedDate = new Date(value);
      const selectedTime = selectedDate.getTime();
      let leaveEndDateStr = null;

      // Check if selected date falls in any leave period
      for (const period of LEAVE_PERIODS) {
        const startTime = new Date(period.start).getTime();
        const endTime = new Date(period.end).getTime();

        if (selectedTime >= startTime && selectedTime <= endTime) {
          const parts = period.end.split('-');
          leaveEndDateStr = `${parts[2]}/${parts[1]}/${parts[0]}`; // DD/MM/YYYY format
          break;
        }
      }

      if (leaveEndDateStr) {
        const msgMap = {
          en: `Sorry, we are on leave until ${leaveEndDateStr}`,
          nl: `Sorry, we zijn met verlof tot ${leaveEndDateStr}`,
          fr: `Désolé, nous sommes en congé jusqu'au ${leaveEndDateStr}`,
          de: `Entschuldigung, wir sind im Urlaub bis zum ${leaveEndDateStr}`,
          es: `Lo sentimos, estamos de vacaciones hasta el ${leaveEndDateStr}`
        };
        const lang = (i18n.language || 'en').split('-')[0];
        setDayError(msgMap[lang] || msgMap.en);
        dispatch({ type: 'UPDATE_FIELD', field, value: '' });
        return;
      }

      if (selectedDate.getDay() === 3) { // 3 = Wednesday
        setDayError(t('common.address.closed') || 'Closed on Wednesday');
        dispatch({ type: 'UPDATE_FIELD', field, value: '' });
        return;
      }
      setDayError('');
    }
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
      !dayError &&
      state.time &&
      state.guests >= 6 &&
      state.depositAgreement
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="surface p-4 sm:p-6 lg:p-8">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 mb-4 sm:mb-6 text-center">
          {t('common.groupBooking.guestDetails.title')}
        </h2>

        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5 sm:mb-2">
              {t('common.groupBooking.guestDetails.name')} *
            </label>
            <input
              type="text"
              id="name"
              value={state.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${errors.name ? 'border-red-500' : 'border-neutral-300'
                }`}
              placeholder={t('common.groupBooking.guestDetails.name')}
            />
            {errors.name && (
              <p className="mt-1 text-xs sm:text-sm text-red-600">{getErrorMessage('name')}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5 sm:mb-2">
              {t('common.groupBooking.guestDetails.email')} *
            </label>
            <input
              type="email"
              id="email"
              value={state.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${errors.email ? 'border-red-500' : 'border-neutral-300'
                }`}
              placeholder={t('common.groupBooking.guestDetails.email')}
            />
            {errors.email && (
              <p className="mt-1 text-xs sm:text-sm text-red-600">{getErrorMessage('email')}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5 sm:mb-2">
              {t('common.groupBooking.guestDetails.phone')} *
            </label>
            <input
              type="tel"
              id="phone"
              value={state.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${errors.phone ? 'border-red-500' : 'border-neutral-300'
                }`}
              placeholder={t('common.groupBooking.guestDetails.phone')}
            />
            {errors.phone && (
              <p className="mt-1 text-xs sm:text-sm text-red-600">{getErrorMessage('phone')}</p>
            )}
          </div>

          {/* Date and Time Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-1.5 sm:mb-2">
                {t('common.groupBooking.guestDetails.date')} *
              </label>
              <input
                type="date"
                id="date"
                value={state.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                min={getTomorrowDate()}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 appearance-none touch-manipulation ${(errors.date || dayError) ? 'border-red-500' : 'border-neutral-300'
                  }`}
                style={{
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                  appearance: 'none',
                  minHeight: '44px'
                }}
              />
              {dayError && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">{dayError}</p>
              )}
              {errors.date && !dayError && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">{getErrorMessage('date')}</p>
              )}
            </div>

            {/* Time */}
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-neutral-700 mb-1.5 sm:mb-2">
                {t('common.groupBooking.guestDetails.time')} *
              </label>
              <select
                id="time"
                value={state.time}
                onChange={(e) => handleInputChange('time', e.target.value)}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${errors.time ? 'border-red-500' : 'border-neutral-300'
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
                <p className="mt-1 text-xs sm:text-sm text-red-600">{getErrorMessage('time')}</p>
              )}
            </div>
          </div>

          {/* Number of Guests */}
          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-neutral-700 mb-1.5 sm:mb-2">
              {t('common.groupBooking.guestDetails.guests')} *
            </label>
            <select
              id="guests"
              value={state.guests}
              onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${errors.guests ? 'border-red-500' : 'border-neutral-300'
                }`}
            >
              {Array.from({ length: 25 }, (_, i) => i + 6).map(guestCount => (
                <option key={guestCount} value={guestCount}>
                  {guestCount}
                </option>
              ))}
            </select>
            <p className="mt-1 text-xs sm:text-sm text-neutral-600">
              {t('common.groupBooking.guestDetails.minGuests')}
            </p>
            {errors.guests && (
              <p className="mt-1 text-xs sm:text-sm text-red-600">{getErrorMessage('guests')}</p>
            )}
          </div>

          {/* Deposit Agreement */}
          <div className="pt-2 sm:pt-4">
            <label className="flex items-start space-x-2 sm:space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={state.depositAgreement}
                onChange={(e) => handleInputChange('depositAgreement', e.target.checked)}
                className="mt-1 w-4 h-4 text-brand-600 border-neutral-300 rounded focus:ring-brand-500 flex-shrink-0"
              />
              <span className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {t('common.groupBooking.guestDetails.depositAgreement')}
              </span>
            </label>
            {errors.depositAgreement && (
              <p className="mt-2 text-xs sm:text-sm text-red-600">{getErrorMessage('depositAgreement')}</p>
            )}
          </div>

          {/* Next Button */}
          <div className="pt-4 sm:pt-6">
            <motion.button
              onClick={onNext}
              disabled={!isFormValid()}
              className={`w-full py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 rounded-lg font-semibold text-white transition-all text-sm sm:text-base ${isFormValid()
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
