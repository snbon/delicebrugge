export default function MenuCard({ title, description, price, currency = '€' }) {
  return (
    <div className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-brand-200 w-full">
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-3">
          <div className="font-semibold text-neutral-900 truncate">{title}</div>
          {price != null && (
            <div className="ml-auto text-sm font-semibold text-neutral-900 tabular-nums">{currency}{Number(price).toFixed(2)}</div>
          )}
        </div>
        <div className="mt-1 text-sm text-neutral-700 leading-relaxed whitespace-pre-line">{description}</div>
      </div>
    </div>
  );
}


