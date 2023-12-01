import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <div className="grid min-h-full place-items-center bg-slate-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-slate-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mb-10 mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <Link
            href="/"
            className="rounded-md bg-slate-800 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-slate-50 duration-300 hover:bg-slate-200 hover:text-slate-800 focus:outline-none focus-visible:ring focus-visible:ring-slate-400"
          >
            &larr; Go to home
          </Link>
        </div>
      </div>
    </>
  );
}
