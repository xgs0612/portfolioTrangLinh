import { featured, profile, sections } from "@/data/content";
import GroupBlock from "@/components/GroupBlock";
import PhotoFrame from "@/components/PhotoFrame";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main>
      <header className="mx-auto max-w-3xl px-5 pt-16 md:pt-28">
        <h1 className="font-serif text-5xl leading-tight text-green md:text-7xl">{profile.name}</h1>
        <p className="mt-4 text-lg text-muted">{profile.school}</p>
        <p className="text-muted">{profile.location}</p>
        <p className="mt-8 max-w-xl font-serif text-2xl leading-snug">{profile.intro}</p>
      </header>

      <section aria-label="Three sides of me" className="mx-auto mt-14 grid max-w-5xl gap-6 px-5 md:grid-cols-3">
        {featured.map((f) => (
          <figure key={f.photo.src}>
            <PhotoFrame photo={f.photo} />
            <figcaption className="mt-3 text-sm leading-relaxed text-muted">{f.caption}</figcaption>
          </figure>
        ))}
      </section>

      <Section id="timeline" title="2022 to now">
        <Timeline />
      </Section>

      {sections.map((s) => (
        <Section key={s.id} id={s.id} number={s.number} title={s.title}>
          {s.groups.map((g) => <GroupBlock key={g.guide} group={g} />)}
        </Section>
      ))}

      <footer className="bg-leaf/50 px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <p className="font-serif text-2xl">Get in touch</p>
          <a href={`mailto:${profile.email}`} className="mt-2 inline-block text-red underline underline-offset-4">{profile.email}</a>
          <p className="mt-8 text-sm text-muted">Photo of Rewind35: 38 Studio.</p>
        </div>
      </footer>
    </main>
  );
}
