import { deleteSession } from "@/_lib";
import { signOutUser } from "@/app/user/login/actions";
import { redirect } from "next/navigation";

export default function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        deleteSession();
        redirect("/user/login");
      }}
    >
      <button type="submit">Logout</button>
    </form>
  );
}
