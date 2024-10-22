import { TracingBeam } from '@/components/ui/tracing-beam';
import Link from 'next/link';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <div className="relative z-10 w-full max-w-5xl">
        <TracingBeam>
          <h1 className="text-4xl font-bold mb-8 text-center">Welcome to My Art Portfolio & Shop</h1>
          <p className="text-xl mb-12 text-center">Discover unique artworks and bring creativity into your space</p>
          <div className="flex justify-center space-x-4 mb-16">
            <Link href="/portfolio" className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                View Portfolio
              </div>
            </Link>
            <Link href="/shop" className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Shop Now
              </div>
            </Link>
          </div>

          <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </TracingBeam>
      </div>
    </main>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "Latest Artwork",
    description: "Check out my most recent creations and artistic explorations.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Artist's Statement",
    description: "Learn about my artistic vision and creative process.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Upcoming Exhibition",
    description: "Details about my next gallery showing and featured pieces.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Shop Highlights",
    description: "Featured items currently available in my online store.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Art Blog",
    description: "Read my latest thoughts on art, creativity, and inspiration.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];