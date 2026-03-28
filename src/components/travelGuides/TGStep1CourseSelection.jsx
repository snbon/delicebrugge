import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function TGStep1CourseSelection({ state, dispatch, errors, onNext, onBack }) {
  const { t } = useTranslation();

  const courses = [
    { key: 'starters', icon: '🥗', mandatory: false },
    { key: 'mainCourse', icon: '🍖', mandatory: true },
    { key: 'desserts', icon: '🍮', mandatory: false },
    { key: 'drink', icon: '🍷', mandatory: false }
  ];

  const toggleCourse = (courseKey) => {
    if (courseKey === 'mainCourse') return;
    dispatch({ type: 'TOGGLE_COURSE', course: courseKey });
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="surface p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2 text-center">
          {t('common.travelGuides.courseSelection.title')}
        </h2>
        <p className="text-sm text-neutral-600 text-center mb-8">
          {t('common.travelGuides.courseSelection.subtitle')}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {courses.map((course, index) => {
            const isSelected = state.selectedCourses[course.key];
            const isMandatory = course.mandatory;

            return (
              <motion.div
                key={course.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`relative cursor-pointer transition-all duration-200 ${
                  isSelected ? 'ring-2 ring-brand-500 rounded-3xl' : ''
                } ${isMandatory ? 'cursor-default' : ''}`}
                onClick={() => toggleCourse(course.key)}
                whileHover={!isMandatory ? { y: -2 } : {}}
                whileTap={!isMandatory ? { scale: 0.98 } : {}}
              >
                <div className={`surface p-5 h-full ${
                  isSelected ? 'border-brand-500 bg-brand-50' : 'hover:shadow-lg'
                }`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isSelected ? 'bg-brand-100' : 'bg-neutral-100'
                    }`}>
                      <span className="text-2xl">{course.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-neutral-900">
                          {t(`common.travelGuides.courseSelection.${course.key}`)}
                        </h3>
                        {isMandatory && (
                          <span className="text-xs font-medium px-2 py-0.5 bg-brand-100 text-brand-800 rounded-full">
                            {t('common.travelGuides.courseSelection.mainRequired')}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="ml-auto flex-shrink-0">
                      {isMandatory ? (
                        <div className="w-6 h-6 bg-brand-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">✓</span>
                        </div>
                      ) : isSelected ? (
                        <div className="w-6 h-6 bg-brand-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">✓</span>
                        </div>
                      ) : (
                        <div className="w-6 h-6 border-2 border-neutral-300 rounded-full"></div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <button
            onClick={onBack}
            className="order-2 sm:order-1 px-6 py-3 border border-neutral-300 rounded-lg text-neutral-700 hover:bg-neutral-50 font-medium transition-colors"
          >
            {t('common.travelGuides.navigation.back')}
          </button>
          <motion.button
            onClick={onNext}
            className="order-1 sm:order-2 px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors shadow-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('common.travelGuides.courseSelection.next')}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
