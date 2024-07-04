"use client";

import { signInUser } from "../actions";
import { useFormState } from "react-dom";
import LoginButton from "../components/LoginButton";

const initState = {
  error: "",
};

export default function LoginForm() {
  const [state, formAction] = useFormState(signInUser, initState);

  return (
    <>
      <div className="text-red-600 italic text-sm py-2">{state.error}</div>
      <form action={formAction} autoComplete="off">
        <div className="pb-2">
          <label htmlFor="email">Email ID</label>
          <input
            id="email"
            type="text"
            name="email"
            className="border rounded-md border-slate-500 w-full p-2"
            autoComplete="off"
          />
        </div>
        <div className="pb-4">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            className="border rounded-md border-slate-500 w-full p-2"
          />
        </div>
        <LoginButton />
      </form>
    </>
  );
}
