/** Verify a reCAPTCHA v2 token server-side with Google. */
export async function verifyRecaptcha(token: string | undefined | null): Promise<boolean> {
  if (!token) return false;
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return false;

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}
