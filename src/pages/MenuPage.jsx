import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header.jsx';
import Section from '../components/Section.jsx';
import MenuCard from '../components/MenuCard.jsx';
import menuData from '../data/menu.json';
import SectionTabs from '../components/SectionTabs.jsx';

const tabs = [
  { key: 'classics', i18nKey: 'common.menu.sections.classics' },
  { key: 'seafood', i18nKey: 'common.menu.sections.seafood' },
  { key: 'pastaVeg', i18nKey: 'common.menu.sections.pastaVeg' },
  { key: 'desserts', i18nKey: 'common.menu.sections.desserts' },
];

export default function MenuPage() {
  const { i18n, t } = useTranslation();
  const [activeTab, setActiveTab] = useState('classics');
  const [menu] = useState(menuData);

  // Build menu tabs from JSON (fallback to translations if JSON missing)
  const fallbackItems = t('common.menu.items', { returnObjects: true });
  const sections = useMemo(() => {
    if (!menu) {
      return [
        {
          id: 'classics',
          title: t('common.menu.sections.classics'),
          items: [fallbackItems.carbonade, fallbackItems.rabbitPrunes],
        },
        {
          id: 'seafood',
          title: t('common.menu.sections.seafood'),
          items: [fallbackItems.mussels, fallbackItems.fishChips, fallbackItems.fishStew, fallbackItems.scampi],
        },
        {
          id: 'pastaVeg',
          title: t('common.menu.sections.pastaVeg'),
          items: [fallbackItems.chickenCream, fallbackItems.vegLasagne],
        },
        {
          id: 'desserts',
          title: t('common.menu.sections.desserts'),
          items: [fallbackItems.chocMousse],
        },
      ];
    }
    const lang = i18n.language || 'en';
    return (menu.sections || []).map((s) => ({
      id: s.id,
      title: (s.titles && (s.titles[lang] || s.titles.en)) || s.id,
      items: (s.items || []).map((it) => {
        const name = (it.names && (it.names[lang] || it.names.en)) || (it.names ? Object.values(it.names)[0] : '');
        const desc = it.descriptions ? (it.descriptions[lang] || it.descriptions.en) : undefined;
        const price = typeof it.price === 'string' ? parseFloat(String(it.price).replace(',', '.')) : it.price;
        return { name, desc, price };
      }),
    }));
  }, [menu, i18n.language, t]);

  useEffect(() => {
    if (sections && sections.length > 0) setActiveTab(sections[0].id);
  }, [JSON.stringify(sections)]);

  return (
    <div>
      <Header />
      <div className="container-responsive py-10 sm:py-16">
        <h1 className="display-font text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">{t('common.menu.heading')}</h1>
      

        <div className="mt-8 grid lg:grid-cols-12 gap-8 max-w-full min-w-0">
          <aside className="lg:col-span-3 max-w-full min-w-0 overflow-hidden">
            <SectionTabs sections={sections} activeId={activeTab} onChange={setActiveTab} />
          </aside>
          <section className="lg:col-span-9 max-w-full min-w-0">
            {/* On mobile we use the horizontal tab strip above */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-full min-w-0">
              {(sections.find((s) => s.id === activeTab)?.items || []).map((it, idx) => (
                <div key={idx} className="rounded-2xl border border-neutral-200 bg-white p-3 sm:p-4 shadow-sm w-full max-w-full">
                  <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-3">
                    <div className="font-semibold text-neutral-900 leading-tight">{it.name}</div>
                    {it.price != null && (
                      <div className="text-sm font-semibold text-neutral-900 tabular-nums whitespace-nowrap justify-self-end">{(menu && menu.currency) || '€'}{Number(String(it.price).replace(',', '.')).toFixed(2)}</div>
                    )}
                  </div>
                  {it.desc && (
                    <div className="mt-1 text-sm text-neutral-700 leading-relaxed">{it.desc}</div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {!menu && (
          <Section>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Placeholder items to allow manual editing later */}
              {Array.from({ length: 6 }).map((_, i) => (
                <MenuCard key={`placeholder-${i}`} title={`Dish ${i + 1}`} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat." />
              ))}
            </div>
          </Section>
        )}
      </div>
    </div>
  );
}


