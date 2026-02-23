import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import menuData from '../../data/menu.json';

export default function Step6ThankYou({ state }) {
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

  const calculateTotalPrice = () => {
    if (state.menuOption === 'groupMenu') {
      return state.guests * 38.00;
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
      const allDishes = [...groupMenuDishes.starters, ...groupMenuDishes.mains, ...groupMenuDishes.desserts];
      return allDishes.find(d => d.id === dishId)?.name || dishId;
    }
  };

  const renderSummarySection = (title, children) => (
    <div className="bg-neutral-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-neutral-900 mb-4">{title}</h3>
      {children}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="surface p-8">
        {/* Thank You Message */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <span className="text-4xl">✓</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-neutral-900 mb-4"
          >
            {t('common.groupBooking.thankYou.title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed"
          >
            {t('common.groupBooking.thankYou.message')}
          </motion.p>
        </div>

        {/* Booking Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-bold text-neutral-900 mb-6 text-center">
            {t('common.groupBooking.thankYou.summary')}
          </h3>

          <div className="space-y-6">
            {/* Guest Information */}
            {renderSummarySection(t('common.groupBooking.summary.guestInfo'), (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-neutral-600">Name</p>
                  <p className="font-medium text-neutral-900">{state.name}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">Email</p>
                  <p className="font-medium text-neutral-900">{state.email}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">Phone</p>
                  <p className="font-medium text-neutral-900">{state.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">Number of Guests</p>
                  <p className="font-medium text-neutral-900">{state.guests}</p>
                </div>
              </div>
            ))}

            {/* Booking Details */}
            {renderSummarySection(t('common.groupBooking.summary.bookingDetails'), (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-neutral-600">Date</p>
                  <p className="font-medium text-neutral-900">{formatDate(state.date)}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">Time</p>
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
                    : t('common.groupBooking.menuSelection.option2.title')
                  }
                </p>
                {state.menuOption === 'groupMenu' && (
                  <p className="text-sm text-neutral-600 mt-1">
                    {t('common.groupBooking.menuSelection.option2.price')}
                  </p>
                )}
              </div>
            ))}

            {/* Dishes & Quantities */}
            {renderSummarySection(t('common.groupBooking.summary.dishes'), (
              <div className="space-y-6">
                {/* Starters */}
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-3 text-brand-600 border-b border-brand-200 pb-1">
                    Starters
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(state.quantities)
                      .filter(([dishId]) => state.selectedDishes.starters?.includes(dishId))
                      .map(([dishId, quantity]) => (
                        <div key={dishId} className="flex justify-between items-center py-2 px-3 bg-neutral-50 rounded">
                          <span className="font-medium text-neutral-900">
                            {getDishName(dishId)}
                          </span>
                          <span className="text-neutral-600 font-semibold">
                            {quantity}x
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Main Dishes */}
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-3 text-brand-600 border-b border-brand-200 pb-1">
                    Main Dishes
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(state.quantities)
                      .filter(([dishId]) => state.selectedDishes.mains?.includes(dishId))
                      .map(([dishId, quantity]) => (
                        <div key={dishId} className="flex justify-between items-center py-2 px-3 bg-neutral-50 rounded">
                          <span className="font-medium text-neutral-900">
                            {getDishName(dishId)}
                          </span>
                          <span className="text-neutral-600 font-semibold">
                            {quantity}x
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Desserts (for Group Menu) */}
                {state.menuOption === 'groupMenu' && (
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-3 text-brand-600 border-b border-brand-200 pb-1">
                      Desserts
                    </h4>
                    <div className="space-y-2">
                      {Object.entries(state.quantities)
                        .filter(([dishId]) => state.selectedDishes.desserts?.includes(dishId))
                        .map(([dishId, quantity]) => (
                          <div key={dishId} className="flex justify-between items-center py-2 px-3 bg-neutral-50 rounded">
                            <span className="font-medium text-neutral-900">
                              {getDishName(dishId)}
                            </span>
                            <span className="text-neutral-600 font-semibold">
                              {quantity}x
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

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
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-neutral-900">
                  Total for {state.guests} guests
                </span>
                <span className="text-2xl font-bold text-brand-600">
                  €{calculateTotalPrice().toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
            <p className="text-blue-800 text-sm leading-relaxed">
              Our team will review your booking request and contact you within 24 hours to confirm your reservation and discuss deposit requirements. 
              Please check your email for updates.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
