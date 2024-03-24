import Image from 'next/image';
import logoImg from '../../public/logo.png';
import SignInForm from './SignInForm';

export const metadata = {
  title: 'Sign In',
};

export default function SignInPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto h-10 w-auto"
          src={logoImg}
          alt="Travelzzzilla logo"
        />
        <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-slate-800">
          Sign in to your account
        </h2>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <SignInForm />
        <p className="mt-10 text-center text-sm text-slate-500">
          Don&apos;t have an account?{' '}
          <span className="cursor-pointer font-semibold leading-6 text-orange-400 duration-300 hover:text-orange-500">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
