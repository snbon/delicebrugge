import { Routes, Route, NavLink, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import HomePage from './pages/HomePage.jsx';
import MenuPage from './pages/MenuPage.jsx';
import ReservePage from './pages/ReservePage.jsx';
import GroupMenuPage from './pages/GroupMenuPage.jsx';
import GroupBookingPage from './pages/GroupBookingPage.jsx';
import TravelGuidesPage from './pages/TravelGuidesPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, getLanguageFromPath, getPathWithoutLanguage, buildLocalizedUrl } from './utils/languageUtils.js';
import './App.css';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = getPathWithoutLanguage(location.pathname);
  
  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'nl', label: 'NL' },
    { code: 'fr', label: 'FR' },
    { code: 'de', label: 'DE' },
    { code: 'es', label: 'ES' },
  ];
  
  const changeLang = (code) => {
    console.log('Language switcher - changing to:', code);
    console.log('Current path:', location.pathname);
    console.log('Current path without language:', currentPath);
    
    i18n.changeLanguage(code);
    localStorage.setItem('lang', code);
    document.documentElement.lang = code;
    
    // Navigate to the localized URL using React Router
    const newUrl = buildLocalizedUrl(currentPath, code);
    console.log('New URL:', newUrl);
    
    if (newUrl !== location.pathname) {
      console.log('Navigating to:', newUrl);
      navigate(newUrl);
    } else {
      console.log('No navigation needed, URL is the same');
    }
  };
  
  return (
    <div className="flex items-center gap-2">
      {languages.map((lng) => (
        <button
          key={lng.code}
          onClick={() => changeLang(lng.code)}
          className={`text-xs font-semibold px-2 py-1 rounded border ${
            i18n.language === lng.code
              ? 'bg-neutral-900 text-white border-neutral-900'
              : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-50'
          }`}
        >
          {lng.label}
        </button>
      ))}
    </div>
  );
}

function FooterLanguageSwitcher() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = getPathWithoutLanguage(location.pathname);
  
  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'nl', label: 'Nederlands', flag: '🇧🇪' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];
  
  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];
  
  const changeLang = (code) => {
    console.log('Footer language switcher - changing to:', code);
    console.log('Current path:', location.pathname);
    console.log('Current path without language:', currentPath);
    
    i18n.changeLanguage(code);
    localStorage.setItem('lang', code);
    document.documentElement.lang = code;
    
    // Navigate to the localized URL using React Router
    const newUrl = buildLocalizedUrl(currentPath, code);
    console.log('New URL:', newUrl);
    
    if (newUrl !== location.pathname) {
      console.log('Navigating to:', newUrl);
      navigate(newUrl);
    } else {
      console.log('No navigation needed, URL is the same');
    }
    
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.relative')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-xs text-neutral-600 hover:text-neutral-900 transition-colors border border-neutral-200 rounded-md hover:border-neutral-300"
      >
        <span>{currentLang.flag}</span>
        <span className="font-medium">{currentLang.code.toUpperCase()}</span>
        <svg className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 mb-2 w-48 bg-white border border-neutral-200 rounded-lg shadow-lg z-10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLang(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2 text-left text-sm hover:bg-neutral-50 transition-colors ${
                i18n.language === lang.code ? 'bg-brand-50 text-brand-700' : 'text-neutral-700'
              } ${lang.code === 'en' ? 'rounded-t-lg' : ''} ${lang.code === 'es' ? 'rounded-b-lg' : ''}`}
            >
              <span className="text-base">{lang.flag}</span>
              <span className="font-medium">{lang.label}</span>
              {i18n.language === lang.code && (
                <svg className="w-4 h-4 ml-auto text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  const { t, i18n, ready } = useTranslation();
  const location = useLocation();
  
  // Show loading state while i18n is initializing
  if (!ready) {
    return (
      <div className="min-h-dvh flex items-center justify-center bg-spotlight">
        <div className="text-center">
          <div className="text-lg text-neutral-600">Loading...</div>
        </div>
      </div>
    );
  }
  
  useEffect(() => {
    document.title = t('common.seo.title');
  }, [t]);

  // Handle language initialization from URL
  useEffect(() => {
    const urlLanguage = getLanguageFromPath(location.pathname);
    const savedLanguage = localStorage.getItem('lang');
    
    // Priority: URL language > saved language > default
    const languageToUse = urlLanguage !== DEFAULT_LANGUAGE ? urlLanguage : (savedLanguage || DEFAULT_LANGUAGE);
    
    console.log('Language initialization:', {
      urlLanguage,
      savedLanguage,
      languageToUse,
      currentI18nLanguage: i18n.language,
      pathname: location.pathname
    });
    
    // If we're on the root URL (/) and the current language is not English,
    // force switch to English
    if (location.pathname === '/' && i18n.language !== DEFAULT_LANGUAGE) {
      console.log('On root URL, forcing switch to English');
      i18n.changeLanguage(DEFAULT_LANGUAGE);
      localStorage.setItem('lang', DEFAULT_LANGUAGE);
      document.documentElement.lang = DEFAULT_LANGUAGE;
    }
    // Otherwise, use the normal logic
    else if (languageToUse !== i18n.language) {
      console.log('Changing language from', i18n.language, 'to', languageToUse);
      i18n.changeLanguage(languageToUse);
      localStorage.setItem('lang', languageToUse);
      document.documentElement.lang = languageToUse;
    }
  }, [i18n, location.pathname]);

  return (
    <div className="min-h-dvh flex flex-col bg-spotlight overflow-x-hidden">
      <ScrollToTop />

      <main className="flex-1">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Routes>
            {/* English routes (default) */}
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reserve" element={<ReservePage />} />
            <Route path="/groupmenu/:optionId?" element={<GroupMenuPage />} />
            <Route path="/group-booking" element={<GroupBookingPage />} />
            {/* TODO: reactivate TravelGuidesPage — replace <NotFoundPage /> with <TravelGuidesPage /> */}
            <Route path="/travelguides" element={<NotFoundPage />} />

            {/* Localized routes for other languages */}
            {SUPPORTED_LANGUAGES.filter(lang => lang !== DEFAULT_LANGUAGE).map(language => (
              <Route key={language} path={`/${language}`} element={<Navigate to={`/${language}/`} replace />} />
            ))}
            
            {SUPPORTED_LANGUAGES.filter(lang => lang !== DEFAULT_LANGUAGE).map(language => (
              <Route key={language} path={`/${language}/`} element={<HomePage />} />
            ))}
            
            {SUPPORTED_LANGUAGES.filter(lang => lang !== DEFAULT_LANGUAGE).map(language => (
              <Route key={language} path={`/${language}/menu`} element={<MenuPage />} />
            ))}
            
            {SUPPORTED_LANGUAGES.filter(lang => lang !== DEFAULT_LANGUAGE).map(language => (
              <Route key={language} path={`/${language}/reserve`} element={<ReservePage />} />
            ))} 
            
            {SUPPORTED_LANGUAGES.filter(lang => lang !== DEFAULT_LANGUAGE).map(language => (
              <Route key={language} path={`/${language}/groupmenu/:optionId?`} element={<GroupMenuPage />} />
            ))}
            
            {SUPPORTED_LANGUAGES.filter(lang => lang !== DEFAULT_LANGUAGE).map(language => (
              <Route key={language} path={`/${language}/group-booking`} element={<GroupBookingPage />} />
            ))}

            {/* TODO: reactivate TravelGuidesPage — replace <NotFoundPage /> with <TravelGuidesPage /> */}
            {SUPPORTED_LANGUAGES.filter(lang => lang !== DEFAULT_LANGUAGE).map(language => (
              <Route key={language} path={`/${language}/travelguides`} element={<NotFoundPage />} />
            ))}

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </motion.div>
      </main>

      <footer className="mt-12 border-t border-neutral-200">
        <div className="container-responsive py-10 text-sm text-neutral-600">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <div className="font-semibold mb-1">{t('common.address.heading')}</div>
              <div>
                <a className="hover:text-brand-700" target="_blank" rel="noreferrer noopener" href="https://maps.google.com/?q=Wijngaardstraat+21+8000+Brugge">{t('common.address.street')}</a>
              </div>
              <div>{t('common.address.city')}</div>
              <div className="mt-2">{t('common.address.openHours')}</div>
              <div>{t('common.address.closed')}</div>
              <div className="mt-2">
                <span className="font-semibold mr-1">{t('common.address.phone')}:</span>
                <a className="hover:text-brand-700" href={`tel:${t('common.address.phone1')}`}>{t('common.address.phone1')}</a>
              </div>
              <div className="mt-1">
                <a className="hover:text-brand-700" href={`mailto:${t('common.address.email')}`}>{t('common.address.email')}</a>
              </div>
            </div>
            <div className="sm:text-right">
              <div className="font-semibold mb-1">{t('common.travellersChoice')}</div>
              <div className="mt-2">{t('common.footer.rights')} © {new Date().getFullYear()} · {t('common.brandName')} · {t('common.footer.btw')} BE07 5691 4556</div>
              <div className="mt-4 flex justify-center sm:justify-end">
                <FooterLanguageSwitcher />
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-100 mt-6 pt-4 text-center text-xs text-neutral-400">
            built by <a href="https://baghlabs.com" target="_blank" rel="noreferrer noopener" className="font-bold underline underline-offset-2 hover:text-neutral-600">baghlabs</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
