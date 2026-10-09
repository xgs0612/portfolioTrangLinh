"use client";
import { useState } from "react";
import { timeline } from "@/data/content";

const PREVIEW = 3; // lines shown per year before "Show all"

function Year({ year, items }: { year: string; items: string[] }) {
  const [all, setAll] = useState(false);
  const shown = all ? items : items.slice(0, PREVIEW);
  return (
    <li className="relative grid gap-2 border-l-2 border-pink pb-10 pl-6 md:grid-cols-[6rem_1fr] md:gap-6">
      <span aria-hidden className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-red" />
      <h3 className="font-serif text-3xl text-red">{year}</h3>
      <div>
        <ul className="space-y-2.5 leading-relaxed">{shown.map((t) => <li key={t}>{t}</li>)}</ul>
        {items.length > PREVIEW && (
          <button type="button" aria-expanded={all} onClick={() => setAll(!all)} className="mt-3 text-sm font-medium text-green underline underline-offset-4">
            {all ? "Show less" : `Show all ${items.length}`}
          </button>
        )}
      </div>
    </li>
  );
}

export default function Timeline() {
  return (
    <ol className="ml-1">
      {timeline.map((y) => <Year key={y.year} {...y} />)}
      <li className="relative border-l-2 border-transparent pl-6">
        <span aria-hidden className="absolute -left-[7px] top-2 h-3 w-3 rounded-full border-2 border-red bg-paper" />
        <p className="font-serif text-2xl text-muted">Present</p>
      </li>
    </ol>
  );
}
