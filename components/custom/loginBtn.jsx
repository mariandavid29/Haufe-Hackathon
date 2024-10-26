"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

export default function LoginBtn() {
  return (
    <Button onClick={() => signIn("google", { redirectTo: "/dashboard" })}>
      Log in
    </Button>
  );
}
