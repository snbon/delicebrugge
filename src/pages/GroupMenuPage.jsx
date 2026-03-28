import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useParams, useLocation } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Section from '../components/Section.jsx';

export default function GroupMenuPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const { optionId } = useParams();
  const location = useLocation();
  const queryOption = new URLSearchParams(location.search).get('option');

  const getInitialMenu = () => {
    const rawOption = optionId || queryOption;
    return rawOption === '2' ? 'delice' : 'standard';
  };

  const [selectedMenu, setSelectedMenu] = useState(getInitialMenu());

  useEffect(() => {
    setSelectedMenu(getInitialMenu());
  }, [optionId, queryOption]);
  const menuKey = selectedMenu === 'standard' ? 'groupMenu' : 'deliceMenu';

  const MenuChoice = ({ options, courseTitle }) => {
    // Get translated names for current language
    const getTranslatedName = (option) => {
      // The name field contains the text in the current language section
      if (!option) return '';
      return option.name || (option.translations && (option.translations[currentLang] || option.translations.en));
    };

    const gridColsClass = options.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';

    return (
      <div className="space-y-6">
        {/* Course Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-neutral-900 mb-2">
            {courseTitle}
          </h3>
          <p className="text-lg font-normal text-brand-600 mb-3">
            {t(`common.${menuKey}.chooseOne`)}
          </p>
          <div className="w-20 h-0.5 bg-brand-600 mx-auto"></div>
        </div>

        {/* Options Grid */}
        <div className={`grid gap-6 md:gap-8 ${gridColsClass}`}>
          {options.map((option, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="surface p-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden h-full flex flex-col justify-center min-h-[140px]">
                {/* Choice Indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-brand-100 text-brand-700 text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </div>

                <div className="text-center mt-2">
                  <div className="font-bold text-xl text-neutral-900 group-hover:text-brand-700 transition-colors">
                    {getTranslatedName(option)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="overflow-x-hidden">
      <Header />

      <main className="pt-5">
        <div className="container-responsive py-8 sm:py-12 lg:py-16">

          {/* Menu Toggle */}
          <div className="flex justify-center mb-2">
            <div className="bg-neutral-100 p-1 rounded-xl inline-flex shadow-inner items-center">
              <button
                onClick={() => setSelectedMenu('standard')}
                className={`px-4 sm:px-6 py-1 rounded-lg text-sm sm:text-base font-bold transition-all duration-300 ${selectedMenu === 'standard'
                  ? 'bg-white text-brand-700 shadow-sm transform scale-100 relative z-10'
                  : 'text-neutral-500 hover:text-neutral-700'
                  }`}
              >
                {currentLang === 'nl' ? 'Optie 1' : currentLang === 'es' ? 'Opción 1' : 'Option 1'}
              </button>
              <button
                onClick={() => setSelectedMenu('delice')}
                className={`px-4 sm:px-6 py-1 rounded-lg text-sm sm:text-base font-bold transition-all duration-300 ${selectedMenu === 'delice'
                  ? 'bg-white text-brand-700 shadow-sm transform scale-100 relative z-10'
                  : 'text-neutral-500 hover:text-neutral-700'
                  }`}
              >
                {currentLang === 'nl' ? 'Optie 2' : currentLang === 'es' ? 'Opción 2' : 'Option 2'}
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMenu}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Section */}
              <Section>
                <div className="text-center mb-6 sm:mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                  >
                    <div className="inline-block mb-4">
                      <h1 className="display-font text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 mb-2">
                        {t(`common.${menuKey}.heading`)}
                      </h1>
                      <p className="text-sm text-neutral-600 mb-2">
                        {t(`common.${menuKey}.perPerson`)}
                      </p>
                      <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-brand-600 mx-auto rounded-full"></div>
                    </div>
                    <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                      {t(`common.${menuKey}.heroDescription`)}
                    </p>
                  </motion.div>
                </div>
              </Section>

              {/* Appetizer Course */}
              <Section title="" className="mb-10 sm:mb-10">
                <div className="surface p-6 sm:p-8 lg:p-10">
                  <MenuChoice
                    options={
                      selectedMenu === 'standard'
                        ? [
                          t(`common.groupMenu.appetizer.option1`, { returnObjects: true }),
                          t(`common.groupMenu.appetizer.option2`, { returnObjects: true })
                        ]
                        : [
                          t(`common.deliceMenu.appetizer.option1`, { returnObjects: true }),
                          t(`common.deliceMenu.appetizer.option2`, { returnObjects: true }),
                          t(`common.deliceMenu.appetizer.option3`, { returnObjects: true })
                        ]
                    }
                    courseTitle={t(`common.${menuKey}.appetizer.title`)}
                  />
                </div>
              </Section>

              {/* Main Course */}
              <Section title="" className="mb-16 sm:mb-20">
                <div className="surface p-6 sm:p-8 lg:p-10">
                  <MenuChoice
                    options={
                      selectedMenu === 'standard'
                        ? [
                          t(`common.groupMenu.mainCourse.option1`, { returnObjects: true }),
                          t(`common.groupMenu.mainCourse.option2`, { returnObjects: true })
                        ]
                        : [
                          t(`common.deliceMenu.mainCourse.option1`, { returnObjects: true }),
                          t(`common.deliceMenu.mainCourse.option2`, { returnObjects: true }),
                          t(`common.deliceMenu.mainCourse.option3`, { returnObjects: true })
                        ]
                    }
                    courseTitle={t(`common.${menuKey}.mainCourse.title`)}
                  />
                </div>
              </Section>

              {/* Dessert Course */}
              <Section title="" className="mb-16 sm:mb-20">
                <div className="surface p-6 sm:p-8 lg:p-10">
                  <MenuChoice
                    options={[
                      t(`common.${menuKey}.dessert.option1`, { returnObjects: true }),
                      t(`common.${menuKey}.dessert.option2`, { returnObjects: true })
                    ]}
                    courseTitle={t(`common.${menuKey}.dessert.title`)}
                  />
                </div>
              </Section>

              {/* Included Drinks for Delice Menu */}
              {selectedMenu === 'delice' && (
                <Section title="" className="mb-16 sm:mb-20">
                  <div className="surface p-6 sm:p-8 lg:p-10 text-center">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                      {t('common.deliceMenu.drink.title')}
                    </h3>
                    <div className="w-20 h-0.5 bg-brand-600 mx-auto mb-6"></div>
                    <div className="text-lg font-medium text-neutral-700 whitespace-pre-line leading-relaxed">
                      {t('common.deliceMenu.drink.description')}
                    </div>
                  </div>
                </Section>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Group Booking Information */}
          <Section>
            <div className="surface-soft p-8 sm:p-10 lg:p-12">
              <div className="text-center max-w-4xl mx-auto">
                <div className="mb-8 sm:mb-10">
                  <div className="text-sm font-bold text-brand-600 tracking-wider uppercase mb-3">
                    {t('common.groupMenu.bookingSection.title')}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
                    {t('common.groupMenu.bookingSection.heading')}
                  </h2>
                  <div className="typography mb-6">
                    <p className="mb-4 text-lg">{t('common.groupMenu.description')}</p>
                    <p className="font-semibold text-xl text-neutral-800 mb-4">{t('common.groupMenu.contactInfo')}</p>
                    <p className="text-base text-neutral-700 leading-relaxed">
                      {t('common.groupMenu.bookingSection.detailsIntro')}
                    </p>
                    <ul className="text-base text-neutral-700 leading-relaxed mt-2 space-y-1">
                      {(t('common.groupMenu.bookingSection.detailsList', { returnObjects: true }) || []).map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-center">
                  <motion.a
                    href={`mailto:${t('common.address.email')}?subject=${encodeURIComponent(t(`common.${menuKey}.bookingSection.emailSubject`))}&body=${encodeURIComponent(t(`common.${menuKey}.bookingSection.emailBody`))}`}
                    className="btn-secondary inline-flex items-center justify-center text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t(`common.${menuKey}.bookingSection.emailButton`)}
                  </motion.a>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
}
