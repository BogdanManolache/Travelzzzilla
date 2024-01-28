import { Barlow_Condensed } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700'],
});

export default function Header() {
  return (
    <header className="col-span-2 col-start-1 flex items-center justify-between border-b-2 pl-6 sm:col-span-1 sm:col-start-1  md:col-span-2 md:col-start-1 md:border-none">
      <Link href="/" className="flex items-center">
        <Image src="/logo.png" width={64} height={64} alt="Logo" />
        <span className={`${barlowCondensed.className} text-4xl  font-bold`}>
          Travelzzzilla
        </span>
      </Link>
    </header>
  );
}
