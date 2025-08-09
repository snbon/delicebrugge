export default function Section({ title, children, muted = false }) {
  return (
    <section className={muted ? 'bg-neutral-50 py-12 sm:py-16' : 'py-12 sm:py-16'}>
      <div className="container-responsive">
        {title ? (
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">{title}</h2>
        ) : null}
        <div className={title ? 'mt-4' : ''}>{children}</div>
      </div>
    </section>
  );
}


