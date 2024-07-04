"use server";

import { cookies } from "next/headers";
import { AUTH } from "./constant";

export async function sleep(timeout = 1000) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}

export async function setSession(data: any) {
  const cookieData = JSON.stringify(data);
  const expires = new Date(Date.now() * 10 * 1000);
  cookies().set(AUTH.SESSION, cookieData, { expires, httpOnly: true });
}

export async function getSession() {
  const data = cookies().get(AUTH.SESSION)?.value;
  if (!data) return null;
  return data;
}

export async function deleteSession() {
  cookies().delete(AUTH.SESSION);
}
