"use client";

import { AddUsers } from "@/components/UsersInput";
import { ItemList } from "@/components/ItemList";

import { ThemeToggle } from "@/components/ThemeToggle";
import { CalculateSplit } from "@/components/CalculateSplit";

import { PayedBySelect } from "@/components/PayedBySelect";

export default function Home() {
  return (
    <div>
      <header className="flex justify-between items-center p-4">
        <ThemeToggle />
      </header>
      <main className="flex min-h-screen flex-col items-center p-24">
        <AddUsers />
        <ItemList />
        <div className="flex">
          <PayedBySelect />
          <CalculateSplit />
        </div>
      </main>
    </div>
  );
}
