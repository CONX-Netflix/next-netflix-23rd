import Image from 'next/image';

export default function TopNav() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-transparent">
      <div className="flex items-center justify-between px-7 py-3">
        <div className="flex items-center gap-6">
          <Image src="/assets/icons/ic-netfilx.svg" alt="Netflix" width={56} height={56} />
          <ul className="text-body1 flex gap-4 text-white">
            <li className="cursor-pointer">TV Shows</li>
            <li className="cursor-pointer">Movies</li>
            <li className="cursor-pointer">My List</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
