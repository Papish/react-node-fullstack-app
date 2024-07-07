"use client";

import { useFormStatus } from "react-dom";

export default function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="p-2 border border-blue-800 bg-blue-400 w-full rounded-md text-white disabled:bg-blue-200"
    >
      {pending ? "...signing" : "Login"}
    </button>
  );
}
