'use client';

import { useFormState } from 'react-dom';
import { signInAction } from './actions';

export default function SignInForm() {
  const [state, action] = useFormState(signInAction, { errorMessage: '' });

  return (
    <form className="space-y-6" action={action}>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-slate-800"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            required
            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-slate-800"
        >
          Password
        </label>

        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            required
            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      {state.errorMessage && (
        <p className="font-semibold text-red-500">{state.errorMessage}</p>
      )}

      <div>
        <button
          type="submit"
          className="w-full rounded-md bg-orange-400 px-4 py-2 text-sm font-semibold leading-6 text-slate-50 shadow-sm duration-300 hover:bg-orange-500  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}
