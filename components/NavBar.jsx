import Link from 'next/link';

import {
  HiMagnifyingGlass,
  HiOutlineHome,
  HiOutlineMap,
  HiOutlineStar,
} from 'react-icons/hi2';

export default function NavBar() {
  const linkClass =
    'flex items-center gap-2 px-4 py-2 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-200';

  return (
    <nav>
      <ul className="flex gap-0 text-xs  md:flex-col  md:gap-4 md:text-base">
        <li>
          <Link href="/" className={linkClass}>
            <HiOutlineHome className="stroke-orange-400" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/search" className={linkClass}>
            <HiMagnifyingGlass className="fill-orange-400" />
            <span>Search</span>
          </Link>
        </li>
        <li>
          <Link href="/favourites" className={linkClass}>
            <HiOutlineStar className="stroke-orange-400" />
            <span>Favourites</span>
          </Link>
        </li>
        <li>
          <Link href="/map" className={linkClass}>
            <HiOutlineMap className="stroke-orange-400" />
            <span>Map</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
