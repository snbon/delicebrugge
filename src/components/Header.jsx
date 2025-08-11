import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState, useRef } from 'react';

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
    <div className="flex items-center gap-1">
      {languages.map((lng) => (
        <button
          key={lng.code}
          onClick={() => changeLang(lng.code)}
          className={`text-[11px] font-semibold px-2 py-1 rounded border ${
            i18n.language === lng.code
              ? 'bg-neutral-900 text-white border-neutral-900'
              : 'bg-white/70 text-neutral-800 border-neutral-300 hover:bg-white'
          }`}
        >
          {lng.label}
        </button>
      ))}
    </div>
  );
}

export default function Header({ transparent = false }) {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastYRef = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    lastYRef.current = window.scrollY || 0;
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        setScrolled(y > 4);
        const delta = y - lastYRef.current;
        const threshold = 10;
        if (y <= 0) {
          setHidden(false);
        } else if (!open) {
          if (delta > threshold && y > 64) setHidden(true);
          else if (delta < -threshold) setHidden(false);
        }
        lastYRef.current = y;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [open]);

  useEffect(() => {
    if (open) setHidden(false);
  }, [open]);

  return (
    <header className={`sticky top-0 z-50 overflow-x-hidden transition-transform duration-300 will-change-transform ${hidden ? '-translate-y-full' : 'translate-y-0'} ${
      transparent && !scrolled ? 'bg-transparent' : 'backdrop-blur bg-white/80 border-b border-neutral-200'
    }`}>
      <div className="container-responsive h-14 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src="/logodelice.png" alt={t('common.brandName')} className="h-11 md:h-15 lg:h-18 w-auto" />
          <span className="sr-only">{t('common.brandName')}</span>
        </NavLink>
        <nav className="flex items-center gap-4">
          <NavLink to="/" className={({ isActive }) => `hidden sm:inline text-sm font-semibold hover:text-brand-700 ${isActive ? 'text-brand-700' : 'text-neutral-800'}`}>{t('common.nav.home')}</NavLink>
          <NavLink to="/menu" className={({ isActive }) => `hidden sm:inline text-sm font-semibold hover:text-brand-700 ${isActive ? 'text-brand-700' : 'text-neutral-800'}`}>{t('common.nav.menu')}</NavLink>
          <NavLink to="/groupmenu" className={({ isActive }) => `hidden sm:inline text-sm font-semibold hover:text-brand-700 ${isActive ? 'text-brand-700' : 'text-neutral-800'}`}>{t('common.nav.groupMenu')}</NavLink>
          <NavLink to="/reserve" className={({ isActive }) => `hidden sm:inline text-sm font-semibold hover:text-brand-700 ${isActive ? 'text-brand-700' : 'text-neutral-800'}`}>{t('common.nav.reserve')}</NavLink>
          <div className="hidden md:block"><LanguageSwitcher /></div>
          {/* Desktop book now */}
          <div className="hidden md:block">
            <NavLink to="/reserve" className="btn-primary">{t('common.cta.bookNow')}</NavLink>
          </div>
          {/* Mobile book now */}
          <div className="md:hidden">
            <NavLink to="/reserve" className="btn-primary px-4 py-2 text-xs">{t('common.cta.bookNow')}</NavLink>
          </div>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white/80 relative"
          >
            <span className="absolute w-4 h-0.5 bg-neutral-900 -translate-y-2"></span>
            <span className="absolute w-4 h-0.5 bg-neutral-900"></span>
            <span className="absolute w-4 h-0.5 bg-neutral-900 translate-y-2"></span>
          </button>
        </nav>
      </div>
      {/* Mobile drawer */}
      <div className={`md:hidden transition-all ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white/95 border-t border-neutral-200`}> 
        <div className="container-responsive py-4 flex flex-col gap-3">
          <NavLink onClick={() => setOpen(false)} to="/" className="text-base font-semibold text-neutral-900">{t('common.nav.home')}</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/menu" className="text-base font-semibold text-neutral-900">{t('common.nav.menu')}</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/groupmenu" className="text-base font-semibold text-neutral-900">{t('common.nav.groupMenu')}</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/reserve" className="text-base font-semibold text-neutral-900">{t('common.nav.reserve')}</NavLink>
          <div className="pt-2"><LanguageSwitcher /></div>
        </div>
      </div>
    </header>
  );
}


