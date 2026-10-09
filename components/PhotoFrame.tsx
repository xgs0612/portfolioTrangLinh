import Image from "next/image";
import type { Photo } from "@/data/content";

// Fixed 4:5 frame; `position` lets you choose which part of the photo stays visible.
export default function PhotoFrame({ photo, sizes = "(min-width: 768px) 33vw, 100vw" }: { photo: Photo; sizes?: string }) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-leaf">
      <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="object-cover" style={{ objectPosition: photo.position ?? "50% 50%" }} />
    </div>
  );
}
