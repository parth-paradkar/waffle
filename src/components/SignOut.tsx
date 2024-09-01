"use client";

import { Button } from "./ui/button";
import { useUser } from "@/context/auth";

export const SignOutButton = () => {
  const { signOut } = useUser();
  return <Button onClick={() => signOut()}>Sign Out</Button>;
};
