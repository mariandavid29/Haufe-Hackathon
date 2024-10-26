import Logo from "@/public/Logo.png";
import LoginBtn from "@/components/custom/loginBtn";
import Image from "next/image";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session?.user) redirect("/dashboard");
  return (
    <main className="mx-auto w-11/12 max-w-screen-xl 2xl:max-w-screen-2xl">
      <nav className="flex h-36 items-center justify-between">
        <div className="flex items-center justify-center gap-5">
          <Image alt="PartyPal Logo" width={75} height={75} src={Logo} />
          <h1 className="text-2xl md:text-3xl xl:text-4xl">
            <span className="font-bold">Party</span>Pal
          </h1>
        </div>
        <LoginBtn />
      </nav>
    </main>
  );
}
