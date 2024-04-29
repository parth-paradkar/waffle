"use client";

import Image from "next/image";
import { AddUsers } from "@/components/UsersInput";
import { ItemEditLine } from "@/components/ItemLine";
import { ItemList } from "@/components/ItemList";

export default function Home() {
  const doNothing = () => {};
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AddUsers />
      <ItemList />
    </main>
  );
}
