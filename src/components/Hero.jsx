import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import heroImage from '../assets/delicebrugge-tagliatellekip.JPG';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50" />
      </div>
      <div className="container-responsive pt-28 pb-28 sm:pt-32 sm:pb-44">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="display-font text-5xl sm:text-7xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          >
            {t('common.home.heroTagline')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-neutral-100/90 max-w-xl"
          >
            {t('common.home.subTagline')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 flex items-center gap-3"
          >
            <NavLink className="btn-primary" to="/reserve">{t('common.cta.bookNow')}</NavLink>
            <NavLink className="btn-secondary" to="/menu">{t('common.cta.viewMenu')}</NavLink>
          </motion.div>
          <div className="mt-6 text-sm text-neutral-200">{t('common.travellersChoice')}</div>
        </div>
      </div>
    </section>
  );
}


