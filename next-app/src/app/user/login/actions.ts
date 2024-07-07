import { deleteSession, setSession, sleep } from "@/_lib";
import { redirect } from "next/navigation";

export async function signInUser(prevState: any, formData: FormData) {
  const user = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  // auth logic
  if (user.email !== "a" && user.password !== "a") {
    return {
      error: "Invalid credentials",
    };
  }

  await setSession(user);
  redirect("/dashboard");
}

export async function signOutUser() {
  await deleteSession();
}
