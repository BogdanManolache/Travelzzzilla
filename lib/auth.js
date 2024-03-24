import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_COOKIE = 'travelzzzillaToken';
const JWT_DURATION = 24 * 60 * 60 * 1000;
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export function authenticateUser(email, password) {
  return email === 'travelzzzilla@test.com' && password === 'Brasov2024';
}

export async function setSessionCookie(userEmail) {
  const expirationDate = new Date(Date.now() + JWT_DURATION);

  const sessionToken = await new SignJWT({ email: userEmail })
    .setProtectedHeader({
      alg: 'HS256',
    })
    .setExpirationTime(expirationDate)
    .sign(JWT_SECRET);

  cookies().set(JWT_COOKIE, sessionToken, {
    expires: expirationDate,
    httpOnly: true,
    sameSite: 'lax',
  });
}

export async function getSessionToken() {
  const sessionToken = cookies().get(JWT_COOKIE)?.value;

  if (sessionToken) {
    try {
      const { payload } = await jwtVerify(sessionToken, JWT_SECRET);
      return payload;
    } catch (error) {
      console.warn('Invalid Token!');
    }
  }
}

export function deleteSessionCookie() {
  cookies().delete(JWT_COOKIE);
}
