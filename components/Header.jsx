import { Barlow_Condensed } from 'next/font/google';
import Image from 'next/image';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700'],
});

export default function Header() {
  return (
    <header className="col-span-2 flex items-center  pl-6">
      <Image src="/logo.png" width={64} height={64} alt="Logo" />
      <span className={`${barlowCondensed.className} text-4xl font-bold`}>
        Travelzilla
      </span>
    </header>
  );
}
