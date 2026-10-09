export default function Section({ id, number, title, children }: { id: string; number?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <h2 id={`${id}-title`} className="mb-10 font-serif text-3xl text-green md:text-4xl">
        {number && <span className="mr-3 text-red">{number}</span>}{title}
      </h2>
      <div className="space-y-14">{children}</div>
    </section>
  );
}
