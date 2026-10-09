import type { Group } from "@/data/content";
import ExpandableCard from "./ExpandableCard";
import PhotoFrame from "./PhotoFrame";

// "Guide" sentence + optional photo + cards. Used by every section from page 2 onward.
export default function GroupBlock({ group }: { group: Group }) {
  return (
    <div>
      <h3 className="mb-5 font-serif text-2xl italic text-ink md:text-3xl">{group.guide}</h3>
      {group.photo && <div className="mb-4 max-w-sm"><PhotoFrame photo={group.photo} sizes="384px" /></div>}
      <div className="space-y-3">{group.items.map((i) => <ExpandableCard key={i.title} item={i} />)}</div>
    </div>
  );
}
