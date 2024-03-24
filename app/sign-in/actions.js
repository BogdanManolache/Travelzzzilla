'use server';

import {
  authenticateUser,
  deleteSessionCookie,
  setSessionCookie,
} from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function signInAction(formState, formData) {
  const email = formData?.get('email');
  const password = formData?.get('password');

  if (!authenticateUser(email, password)) {
    return { errorMessage: 'Invalid credentials!' };
  }

  await setSessionCookie(email);

  redirect('/search');
}

export async function signOutAction() {
  deleteSessionCookie();

  // redirect('/');
}
