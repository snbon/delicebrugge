import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import HomePage from './pages/HomePage.jsx';
import MenuPage from './pages/MenuPage.jsx';
import ReservePage from './pages/ReservePage.jsx';
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
  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'nl', label: 'NL' },
    { code: 'fr', label: 'FR' },
    { code: 'de', label: 'DE' },
    { code: 'es', label: 'ES' },
  ];
  const changeLang = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('lang', code);
    document.documentElement.lang = code;
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

function App() {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = t('common.seo.title');
  }, [t]);

  return (
    <div className="min-h-dvh flex flex-col bg-spotlight overflow-x-hidden">
      <ScrollToTop />
      {/* Header moved into individual pages for sticky/blur effect */}

      <main className="flex-1">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reserve" element={<ReservePage />} />
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
                <span className="mx-2">·</span>
                <a className="hover:text-brand-700" href={`tel:${t('common.address.phone2')}`}>{t('common.address.phone2')}</a>
              </div>
              <div className="mt-1">
                <a className="hover:text-brand-700" href={`mailto:${t('common.address.email')}`}>{t('common.address.email')}</a>
              </div>
            </div>
            <div className="sm:text-right">
              <div className="font-semibold mb-1">{t('common.travellersChoice')}</div>
              <div className="mt-2">{t('common.footer.rights')} © {new Date().getFullYear()} · {t('common.brandName')} · {t('common.footer.btw')} BE07 5691 4556</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
