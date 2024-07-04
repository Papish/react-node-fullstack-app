"use client";

import { runMe } from "./actions";

export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <button
        type="button"
        onClick={async () => {
          runMe();
        }}
      >
        Click Me!
      </button>
    </div>
  );
}
