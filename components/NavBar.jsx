import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

import {
  HiMagnifyingGlass,
  HiOutlineHome,
  HiOutlineMap,
  HiOutlineStar,
} from 'react-icons/hi2';

export default function NavBar() {
  const linkClass =
    'flex items-center gap-2 px-4 py-2 duration-300 hover:bg-slate-200';

  return (
    <nav>
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="/" className={linkClass}>
            <HiOutlineHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/search" className={linkClass}>
            <HiMagnifyingGlass />
            <span>Search</span>
          </Link>
        </li>
        <li>
          <Link href="/favourites" className={linkClass}>
            <HiOutlineStar />
            <span>Favourites</span>
          </Link>
        </li>
        <li>
          <Link href="/map" className={linkClass}>
            <HiOutlineMap />
            <span>Map</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
