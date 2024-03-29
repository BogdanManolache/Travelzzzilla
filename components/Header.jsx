import { Barlow_Condensed } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { HiUser } from 'react-icons/hi2';
import { FiLogOut } from 'react-icons/fi';
import { signOutAction } from '@/app/sign-in/actions';
import { getSessionToken } from '@/lib/auth';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700'],
});

export default async function Header() {
  const userToken = await getSessionToken();

  return (
    <header className="col-span-2 col-start-1 flex items-center justify-between border-b-2 pl-6 sm:col-span-1  sm:col-start-1 md:col-span-2 md:col-start-1 md:border-none">
      <Link href="/" className="flex items-center">
        <Image src="/logo.png" width={64} height={64} alt="Logo" />
        <span
          className={`${barlowCondensed.className} inline-block text-2xl font-bold sm:hidden  md:inline-block md:text-4xl`}
        >
          Travelzzzilla
        </span>
      </Link>
      {!userToken?.email ? (
        <Link href="/sign-in" className="mr-6">
          <Button type="secondary">
            Sign In
            <HiUser />
          </Button>
        </Link>
      ) : (
        <form action={signOutAction} className="mr-6">
          <Button type="secondary">
            Sign Out
            <FiLogOut />
          </Button>
        </form>
      )}
    </header>
  );
}
