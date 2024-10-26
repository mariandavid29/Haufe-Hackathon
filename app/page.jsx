import { signIn } from "@/auth";
import { signOut } from "@/auth";

export default function Home() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/dashboard" });
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </>
  );
}
