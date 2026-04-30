'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NAV_ITEMS = [
  { name: 'Home', icon: 'ic-home.svg', href: '/' },
  { name: 'Search', icon: 'ic-search.svg', href: '/search' },
  { name: 'Coming Soon', icon: 'ic-comingsoon.svg', href: '/coming-soon' },
  { name: 'Downloads', icon: 'ic-downloads.svg', href: '/downloads' },
  { name: 'More', icon: 'ic-more.svg', href: '/more' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-grey-900 fixed right-0 bottom-0 left-0 z-50 w-full">
      <div className="flex items-center justify-around py-5">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              href={item.href}
              key={item.name}
              className="flex cursor-pointer flex-col items-center gap-4"
            >
              <div className={`relative h-6 w-6 ${isActive ? '' : 'opacity-40'}`}>
                <Image
                  src={`/assets/icons/${item.icon}`}
                  alt={item.name}
                  fill
                  className={isActive ? '' : 'brightness-[0.55]'}
                />
              </div>
              <span className={`text-caption2 ${isActive ? 'text-white' : 'text-grey-700'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
