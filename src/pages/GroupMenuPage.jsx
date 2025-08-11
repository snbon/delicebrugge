import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header.jsx';
import Section from '../components/Section.jsx';

export default function GroupMenuPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const MenuChoice = ({ option1, option2, courseTitle }) => {
    // Get translated names for current language
    const getTranslatedName = (option) => {
      // The name field contains the text in the current language section
      // So we should always use the name field first, then fallback to translations
      return option.name || option.translations[currentLang] || option.translations.en;
    };

    return (
      <div className="space-y-6">
        {/* Course Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-neutral-900 mb-2">
            {courseTitle}
          </h3>
          <p className="text-lg font-normal text-brand-600 mb-3">
            {t('common.groupMenu.chooseOne')}
          </p>
          <div className="w-20 h-0.5 bg-brand-600 mx-auto"></div>
        </div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Option 1 */}
          <motion.div 
            className="group cursor-pointer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="surface p-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              {/* Choice Indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-brand-100 text-brand-700 text-xs font-bold flex items-center justify-center">
                1
              </div>
              
              <div className="text-center">
                <div className="font-bold text-xl text-neutral-900 mb-4 group-hover:text-brand-700 transition-colors">
                  {getTranslatedName(option1)}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Option 2 */}
          <motion.div 
            className="group cursor-pointer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="surface p-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              {/* Choice Indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-brand-100 text-brand-700 text-xs font-bold flex items-center justify-center">
                2
              </div>
              
              <div className="text-center">
                <div className="font-bold text-xl text-neutral-900 mb-4 group-hover:text-brand-700 transition-colors">
                  {getTranslatedName(option2)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };



  return (
    <div className="overflow-x-hidden">
      <Header />
      
      <main className="pt-20">
        <div className="container-responsive py-8 sm:py-12 lg:py-16">
          {/* Hero Section */}
          <Section>
            <div className="text-center mb-12 sm:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <div className="inline-block mb-4">
                  <h1 className="display-font text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 mb-2">
                    {t('common.groupMenu.heading')}
                  </h1>
                  <p className="text-sm text-neutral-600 mb-2">
                    {t('common.groupMenu.perPerson')}
                  </p>
                  <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-brand-600 mx-auto rounded-full"></div>
                </div>
                <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                  {t('common.groupMenu.heroDescription')}
                </p>
              </motion.div>
            </div>
          </Section>

          {/* Appetizer Course */}
          <Section title="" className="mb-16 sm:mb-20">
            <div className="surface p-6 sm:p-8 lg:p-10">
              <MenuChoice
                option1={t('common.groupMenu.appetizer.option1', { returnObjects: true })}
                option2={t('common.groupMenu.appetizer.option2', { returnObjects: true })}
                courseTitle={t('common.groupMenu.appetizer.title')}
              />
            </div>
          </Section>

          {/* Main Course */}
          <Section title="" className="mb-16 sm:mb-20">
            <div className="surface p-6 sm:p-8 lg:p-10">
              <MenuChoice
                option1={t('common.groupMenu.mainCourse.option1', { returnObjects: true })}
                option2={t('common.groupMenu.mainCourse.option2', { returnObjects: true })}
                courseTitle={t('common.groupMenu.mainCourse.title')}
              />
            </div>
          </Section>

          {/* Dessert Course */}
          <Section title="" className="mb-16 sm:mb-20">
            <div className="surface p-6 sm:p-8 lg:p-10">
              <MenuChoice
                option1={t('common.groupMenu.dessert.option1', { returnObjects: true })}
                option2={t('common.groupMenu.dessert.option2', { returnObjects: true })}
                courseTitle={t('common.groupMenu.dessert.title')}
              />
            </div>
          </Section>

          {/* Group Booking Information */}
          <Section title={t('common.groupMenu.bookingSection.title')} muted>
            <div className="surface-soft p-8 sm:p-10 lg:p-12">
              <div className="text-center max-w-4xl mx-auto">
                <div className="mb-8 sm:mb-10">
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
                      {t('common.groupMenu.bookingSection.detailsList', { returnObjects: true }).map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <motion.a
                    href={`mailto:${t('common.address.email')}?subject=${encodeURIComponent(t('common.groupMenu.bookingSection.emailSubject'))}&body=${encodeURIComponent(t('common.groupMenu.bookingSection.emailBody'))}`}
                    className="btn-secondary inline-flex items-center justify-center text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('common.groupMenu.bookingSection.emailButton')}
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
