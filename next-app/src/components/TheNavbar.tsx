import { getSession } from "@/_lib";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default async function TheNavbar() {
  const isUserLoggedIn = await getSession();

  return (
    <div className="container mx-auto border-b border-blue-600 py-6">
      <div className="flex justify-between ">
        <div>
          <Link href={"/"}>App</Link>
        </div>
        <div>
          {isUserLoggedIn === null ? (
            <ul className="flex gap-20">
              <li>
                <Link href={"/user/register"}>Register</Link>
              </li>
              <li>
                <Link href={"/user/login"}>Login</Link>
              </li>
            </ul>
          ) : (
            <LogoutButton />
          )}
        </div>
      </div>
    </div>
  );
}
