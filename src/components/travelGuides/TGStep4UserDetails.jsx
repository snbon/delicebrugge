import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function TGStep4UserDetails({ state, dispatch, errors, onNext, onBack }) {
  const { t, i18n } = useTranslation();
  const [dayError, setDayError] = useState('');

  const LEAVE_PERIODS = [
    { start: '', end: '' } // ADD VACATION DATES HERE!
  ];

  const handleInputChange = (field, value) => {
    if (field === 'date' && value) {
      const selectedDate = new Date(value);
      const selectedTime = selectedDate.getTime();
      let leaveEndDateStr = null;

      for (const period of LEAVE_PERIODS) {
        if (!period.start || !period.end) continue;
        const startTime = new Date(period.start).getTime();
        const endTime = new Date(period.end).getTime();
        if (selectedTime >= startTime && selectedTime <= endTime) {
          const parts = period.end.split('-');
          leaveEndDateStr = `${parts[2]}/${parts[1]}/${parts[0]}`;
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

      if (selectedDate.getDay() === 3) {
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
    return t(`common.travelGuides.validation.${errors[field]}`) || errors[field];
  };

  const isFormValid = () => {
    return (
      state.name.trim() &&
      state.email.trim() &&
      state.phone.trim() &&
      state.date &&
      !dayError &&
      state.time &&
      state.guests >= 10 &&
      state.guests <= 30 &&
      state.depositAgreement
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="surface p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-6 text-center">
          {t('common.travelGuides.userDetails.title')}
        </h2>

        <div className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="tg-name" className="block text-sm font-medium text-neutral-700 mb-1.5">
              {t('common.travelGuides.userDetails.name')} *
            </label>
            <input
              type="text"
              id="tg-name"
              value={state.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`w-full px-4 py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${errors.name ? 'border-red-500' : 'border-neutral-300'}`}
              placeholder={t('common.travelGuides.userDetails.name')}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{getErrorMessage('name')}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="tg-email" className="block text-sm font-medium text-neutral-700 mb-1.5">
              {t('common.travelGuides.userDetails.email')} *
            </label>
            <input
              type="email"
              id="tg-email"
              value={state.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${errors.email ? 'border-red-500' : 'border-neutral-300'}`}
              placeholder={t('common.travelGuides.userDetails.email')}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{getErrorMessage('email')}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="tg-phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
              {t('common.travelGuides.userDetails.phone')} *
            </label>
            <input
              type="tel"
              id="tg-phone"
              value={state.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`w-full px-4 py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${errors.phone ? 'border-red-500' : 'border-neutral-300'}`}
              placeholder={t('common.travelGuides.userDetails.phone')}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{getErrorMessage('phone')}</p>
            )}
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="tg-date" className="block text-sm font-medium text-neutral-700 mb-1.5">
                {t('common.travelGuides.userDetails.date')} *
              </label>
              <input
                type="date"
                id="tg-date"
                value={state.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                min={getTomorrowDate()}
                className={`w-full px-4 py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 appearance-none touch-manipulation ${(errors.date || dayError) ? 'border-red-500' : 'border-neutral-300'}`}
                style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none', minHeight: '44px' }}
              />
              {dayError && <p className="mt-1 text-sm text-red-600">{dayError}</p>}
              {errors.date && !dayError && <p className="mt-1 text-sm text-red-600">{getErrorMessage('date')}</p>}
            </div>

            <div>
              <label htmlFor="tg-time" className="block text-sm font-medium text-neutral-700 mb-1.5">
                {t('common.travelGuides.userDetails.time')} *
              </label>
              <select
                id="tg-time"
                value={state.time}
                onChange={(e) => handleInputChange('time', e.target.value)}
                className={`w-full px-4 py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${errors.time ? 'border-red-500' : 'border-neutral-300'}`}
              >
                {Array.from({ length: 21 }, (_, i) => {
                  const hour = Math.floor(i / 2) + 11;
                  const minute = (i % 2) * 30;
                  const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                  return <option key={time} value={time}>{time}</option>;
                })}
              </select>
              {errors.time && <p className="mt-1 text-sm text-red-600">{getErrorMessage('time')}</p>}
            </div>
          </div>

          {/* Guests */}
          <div>
            <label htmlFor="tg-guests" className="block text-sm font-medium text-neutral-700 mb-1.5">
              {t('common.travelGuides.userDetails.guests')} *
            </label>
            <select
              id="tg-guests"
              value={state.guests}
              onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
              className={`w-full px-4 py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${errors.guests ? 'border-red-500' : 'border-neutral-300'}`}
            >
              {Array.from({ length: 21 }, (_, i) => i + 10).map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
            <p className="mt-1 text-sm text-neutral-600">{t('common.travelGuides.userDetails.minGuests')}</p>
            {errors.guests && <p className="mt-1 text-sm text-red-600">{getErrorMessage('guests')}</p>}
          </div>

          {/* Deposit Agreement */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={state.depositAgreement}
                onChange={(e) => handleInputChange('depositAgreement', e.target.checked)}
                className="mt-1 w-4 h-4 text-brand-600 border-neutral-300 rounded focus:ring-brand-500 flex-shrink-0"
              />
              <span className="text-sm text-neutral-700 leading-relaxed">
                {t('common.travelGuides.userDetails.depositAgreement')}
              </span>
            </label>
            {errors.depositAgreement && (
              <p className="mt-2 text-sm text-red-600">{getErrorMessage('depositAgreement')}</p>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6">
          <button
            onClick={onBack}
            className="order-2 sm:order-1 px-6 py-3 border border-neutral-300 rounded-lg text-neutral-700 hover:bg-neutral-50 font-medium transition-colors"
          >
            {t('common.travelGuides.navigation.back')}
          </button>
          <motion.button
            onClick={onNext}
            disabled={!isFormValid()}
            className={`order-1 sm:order-2 px-8 py-3 rounded-lg font-semibold text-white transition-all ${isFormValid() ? 'bg-brand-600 hover:bg-brand-700' : 'bg-neutral-300 cursor-not-allowed'}`}
            whileHover={isFormValid() ? { scale: 1.02 } : {}}
            whileTap={isFormValid() ? { scale: 0.98 } : {}}
          >
            {t('common.travelGuides.userDetails.next')}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
