import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header.jsx';
import { NavLink } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import MenuCard from '../components/MenuCard.jsx';
import GalleryCarousel from '../components/GalleryCarousel.jsx';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="overflow-x-hidden">
      <Header transparent />
      <Hero />

      <Section title={t('common.about.heading')} muted>
        <div className="surface-soft p-6 sm:p-8">
          <div className="typography max-w-3xl">
            <p>{t('common.about.copy')}</p>
            <p>{t('common.about.extraSeo')}</p>
          </div>
        </div>
      </Section>

      <Section title={t('common.home.featuresHeading')}>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-neutral-700">
          {t('common.home.features', { returnObjects: true }).map((f, i) => (
            <li key={i} className="surface p-5 text-sm">{f}</li>
          ))}
        </ul>
      </Section>

      <Section title={t('common.home.recommendationsHeading')}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Pull a few highlights from menu translations */}
          {[
            'common.menu.items.carbonade',
            'common.menu.items.mussels',
            'common.menu.items.rabbitPrunes',
          ].map((key, idx) => {
            const item = t(key, { returnObjects: true });
            return <MenuCard key={idx} title={item.name} description={item.desc} />;
          })}
        </div>
      </Section>

      <Section title={t('common.home.galleryHeading')} muted>
        <GalleryCarousel />
      </Section>

      <Section>
        <div className="surface p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="display-font text-2xl text-neutral-900">{t('common.home.ctaHeading')}</div>
            <div className="text-neutral-700 mt-1">{t('common.home.ctaSub')}</div>
          </div>
          <NavLink to="/reserve" className="btn-primary w-full sm:w-auto text-center">{t('common.cta.bookNow')}</NavLink>
        </div>
      </Section>

      <Section title={t('common.reviews.heading')}>
        <ul className="mt-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t('common.reviews.items', { returnObjects: true }).map((quote, idx) => (
            <li key={idx} className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-700 shadow-sm">
              {quote}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}


