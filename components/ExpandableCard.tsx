"use client";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Item } from "@/data/content";
import PhotoFrame from "./PhotoFrame";

// Items with `body` or `facts` expand in place (state is local to each card). Others render as static cards.
export default function ExpandableCard({ item }: { item: Item }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const expandable = Boolean(item.body?.length || item.facts?.length);

  const head = (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h4 className="font-serif text-xl">{item.title}</h4>
        {item.summary && <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">{item.summary}</p>}
      </div>
      {expandable && <ChevronDown aria-hidden className={`mt-1 h-5 w-5 shrink-0 text-red transition-transform ${open ? "rotate-180" : ""}`} />}
    </div>
  );

  return (
    <article className="rounded-md border border-pink bg-card">
      {item.photo && <div className="p-3 pb-0"><PhotoFrame photo={item.photo} sizes="(min-width: 768px) 700px, 100vw" /></div>}
      {expandable ? (
        <>
          <button type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen(!open)} className="w-full p-5 text-left">
            {head}
          </button>
          {open && (
            <div id={panelId} className="open-in space-y-3 px-5 pb-5 leading-[1.7]">
              {item.body?.map((p) => <p key={p}>{p}</p>)}
              {item.facts && <ul className="list-disc space-y-1.5 pl-5 marker:text-red">{item.facts.map((f) => <li key={f}>{f}</li>)}</ul>}
            </div>
          )}
        </>
      ) : <div className="p-5">{head}</div>}
    </article>
  );
}
