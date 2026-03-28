import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import menuData from '../../data/menu.json';

export default function Step5Summary({ state, dispatch, errors, onNext, onBack, onSubmit, isSubmitting }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Get actual menu data from menu.json
  const getMenuItems = (sectionId) => {
    const section = menuData.sections.find(s => s.id === sectionId);
    if (!section) return [];
    
    return section.items.map(item => ({
      id: item.id,
      name: item.names[currentLang] || item.names.en,
      price: item.price
    }));
  };

  // Get starters and mains from actual menu data
  const starters = getMenuItems('voorgerechten');
  const mains = getMenuItems('vlees-burgers').concat(getMenuItems('vis-mosselen')).concat(getMenuItems('pasta'));
  const desserts = getMenuItems('desserts-ice');

  // Group menu dishes from existing group menu structure
  const groupMenuDishes = {
    starters: [
      { 
        id: 'cheese-croquettes', 
        name: t('common.groupMenu.appetizer.option1', { returnObjects: true }).name || 'Homemade cheese croquettes'
      },
      { 
        id: 'shrimp-croquettes', 
        name: t('common.groupMenu.appetizer.option2', { returnObjects: true }).name || 'Homemade shrimp croquettes'
      }
    ],
    mains: [
      { 
        id: 'natural-steak', 
        name: t('common.groupMenu.mainCourse.option1', { returnObjects: true }).name || 'Natural steak'
      },
      { 
        id: 'baked-salmon', 
        name: t('common.groupMenu.mainCourse.option2', { returnObjects: true }).name || 'Baked salmon with béarnaise sauce'
      }
    ],
    desserts: [
      { 
        id: 'coffee-tea', 
        name: t('common.groupMenu.dessert.option1', { returnObjects: true }).name || 'Coffee/Tea'
      },
      { 
        id: 'dame-blanche', 
        name: t('common.groupMenu.dessert.option2', { returnObjects: true }).name || 'Dame Blanche'
      }
    ]
  };

  const deliceMenuDishes = {
    starters: [
      { 
        id: 'delice-soup', 
        name: t('common.groupBooking.dishSelection.deliceMenu.appetizer.option1', { returnObjects: true }).name || 'Soup of the day'
      },
      { 
        id: 'delice-cheese', 
        name: t('common.groupBooking.dishSelection.deliceMenu.appetizer.option2', { returnObjects: true }).name || 'Homemade cheese croquettes'
      },
      { 
        id: 'delice-shrimp', 
        name: t('common.groupBooking.dishSelection.deliceMenu.appetizer.option3', { returnObjects: true }).name || 'Homemade shrimp croquettes'
      }
    ],
    mains: [
      { 
        id: 'delice-chicken', 
        name: t('common.groupBooking.dishSelection.deliceMenu.mainCourse.option1', { returnObjects: true }).name || 'Chicken in cream sauce'
      },
      { 
        id: 'delice-rabbit', 
        name: t('common.groupBooking.dishSelection.deliceMenu.mainCourse.option2', { returnObjects: true }).name || 'Flemish rabbit'
      },
      { 
        id: 'delice-salmon', 
        name: t('common.groupBooking.dishSelection.deliceMenu.mainCourse.option3', { returnObjects: true }).name || 'Baked salmon'
      }
    ],
    desserts: [
      { 
        id: 'delice-mousse', 
        name: t('common.groupBooking.dishSelection.deliceMenu.dessert.option1', { returnObjects: true }).name || 'Chocolate mousse'
      },
      { 
        id: 'delice-dame', 
        name: t('common.groupBooking.dishSelection.deliceMenu.dessert.option2', { returnObjects: true }).name || 'Dame Blanche'
      }
    ]
  };

  const handleConfirmAgreementChange = (value) => {
    dispatch({ type: 'UPDATE_FIELD', field: 'confirmAgreement', value });
  };

  const getErrorMessage = (field) => {
    if (!errors[field]) return null;
    return t(`common.groupBooking.validation.${errors[field]}`);
  };

  const calculateTotalPrice = () => {
    if (state.menuOption === 'groupMenu') {
      return state.guests * (state.groupMenuType === 'delice' ? 51.00 : 38.00);
    }
    return 0; // For à la carte, we don't show total price
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDishName = (dishId, course) => {
    if (state.menuOption === 'aLaCarte') {
      const allDishes = [...starters, ...mains];
      return allDishes.find(d => d.id === dishId)?.name || dishId;
    } else {
      const isDelice = state.groupMenuType === 'delice';
      const activeDishes = isDelice ? deliceMenuDishes : groupMenuDishes;
      const allDishes = [...activeDishes.starters, ...activeDishes.mains, ...activeDishes.desserts];
      return allDishes.find(d => d.id === dishId)?.name || dishId;
    }
  };

  const isFormValid = () => {
    return state.confirmAgreement;
  };

  const renderSummarySection = (title, children) => (
    <div className="bg-neutral-50 p-6 rounded-lg">
      <h3 className="text-sm sm:text-base font-semibold text-neutral-900 mb-3">{title}</h3>
      {children}
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="surface p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-6 text-center">
          {t('common.groupBooking.summary.title')}
        </h2>

        <div className="space-y-6">
          {/* Guest Information */}
          {renderSummarySection(t('common.groupBooking.summary.guestInfo'), (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-neutral-600">{t('common.groupBooking.summary.labels.name')}</p>
                <p className="font-medium text-neutral-900">{state.name}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-600">{t('common.groupBooking.summary.labels.email')}</p>
                <p className="font-medium text-neutral-900">{state.email}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-600">{t('common.groupBooking.summary.labels.phone')}</p>
                <p className="font-medium text-neutral-900">{state.phone}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-600">{t('common.groupBooking.summary.labels.numberOfGuests')}</p>
                <p className="font-medium text-neutral-900">{state.guests}</p>
              </div>
            </div>
          ))}

          {/* Booking Details */}
          {renderSummarySection(t('common.groupBooking.summary.bookingDetails'), (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-neutral-600">{t('common.groupBooking.summary.labels.date')}</p>
                <p className="font-medium text-neutral-900">{formatDate(state.date)}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-600">{t('common.groupBooking.summary.labels.time')}</p>
                <p className="font-medium text-neutral-900">{state.time}</p>
              </div>
            </div>
          ))}

          {/* Menu Option */}
          {renderSummarySection(t('common.groupBooking.summary.menuOption'), (
            <div>
              <p className="font-medium text-neutral-900">
                {state.menuOption === 'aLaCarte' 
                  ? t('common.groupBooking.menuSelection.option1.title')
                  : (state.groupMenuType === 'delice' ? 'Delice Group Menu (€51)' : t('common.groupBooking.menuSelection.option2.title'))
                }
              </p>
              {state.menuOption === 'groupMenu' && (
                <p className="text-sm text-neutral-600 mt-1">
                  {state.groupMenuType === 'delice' ? '€51.00 per person' : t('common.groupBooking.menuSelection.option2.price')}
                </p>
              )}
            </div>
          ))}

          {/* Dishes & Quantities */}
          {renderSummarySection(t('common.groupBooking.summary.dishes'), (
            <div className="space-y-4">
              {Object.entries(state.quantities).map(([dishId, quantity]) => (
                <div key={dishId} className="flex justify-between items-center py-2 border-b border-neutral-200 last:border-b-0">
                  <span className="font-medium text-neutral-900">
                    {getDishName(dishId)}
                  </span>
                  <span className="text-neutral-600">
                    {t('common.groupBooking.summary.labels.quantity')}: {quantity}
                  </span>
                </div>
              ))}
              {Object.keys(state.quantities).length === 0 && (
                <p className="text-neutral-500 italic">No quantities specified</p>
              )}
            </div>
          ))}

          {/* Special Requests */}
          {state.specialRequests && renderSummarySection(t('common.groupBooking.summary.specialRequests'), (
            <p className="text-neutral-900">{state.specialRequests}</p>
          ))}

          {/* Total Price (for Group Menu only) */}
          {state.menuOption === 'groupMenu' && renderSummarySection(t('common.groupBooking.summary.totalPrice'), (
            <div className="space-y-3">
              <div className="flex justify-end">
                <span className="text-xl sm:text-2xl font-bold text-brand-600">
                  €{calculateTotalPrice().toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-neutral-600 text-right">
                {t('common.groupBooking.quantities.priceNote')}
              </p>
            </div>
          ))}

          {/* Confirmation Agreement */}
          <div className="pt-6">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={state.confirmAgreement}
                onChange={(e) => handleConfirmAgreementChange(e.target.checked)}
                className="mt-1 w-4 h-4 text-brand-600 border-neutral-300 rounded focus:ring-brand-500"
              />
              <span className="text-sm text-neutral-700 leading-relaxed">
                {t('common.groupBooking.summary.confirmAgreement')}
              </span>
            </label>
            {errors.confirmAgreement && (
              <p className="mt-2 text-sm text-red-600">{getErrorMessage('confirmAgreement')}</p>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 pt-6">
            <motion.button
              onClick={onBack}
              className="px-6 py-3 border border-neutral-300 rounded-lg text-neutral-700 hover:bg-neutral-50 transition-colors order-2 sm:order-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('common.groupBooking.navigation.back')}
            </motion.button>

            <motion.button
              onClick={onSubmit}
              disabled={!isFormValid() || isSubmitting}
              className={`px-6 py-3 rounded-lg font-semibold text-white transition-all order-1 sm:order-2 ${
                isFormValid() && !isSubmitting
                  ? 'bg-brand-600 hover:bg-brand-700 cursor-pointer'
                  : 'bg-neutral-300 cursor-not-allowed'
              }`}
              whileHover={isFormValid() && !isSubmitting ? { scale: 1.02 } : {}}
              whileTap={isFormValid() && !isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>{t('common.groupBooking.summary.submitting')}</span>
                </div>
              ) : (
                t('common.groupBooking.summary.submit')
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
