import clsx from 'classnames';

export default function SectionTabs({ sections, activeId, onChange }) {
  return (
    <div className="max-w-full min-w-0">
      {/* Mobile: horizontal, scrollable only within this strip */}
      <div className="lg:hidden w-full scroll-x-tabs no-scrollbar max-w-full min-w-0">
        <div className="inline-flex gap-2 w-max whitespace-nowrap pr-4 py-1">
          {sections.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              className={clsx(
                'whitespace-nowrap pill snap-start',
                activeId === tab.id && 'pill-active'
              )}
              role="tab"
              aria-selected={activeId === tab.id}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop: vertical list (no horizontal overflow) */}
      <div className="hidden lg:block sticky top-20 space-y-2 max-w-full min-w-0">
        {sections.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={clsx('w-full text-left pill', activeId === tab.id && 'pill-active')}
            role="tab"
            aria-selected={activeId === tab.id}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
}


