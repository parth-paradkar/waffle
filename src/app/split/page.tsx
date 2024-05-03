"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { ItemsContext } from "@/context/items";
import Footer from "@/components/Footer";

export default function Split() {
  const router = useRouter();
  const { items } = useContext(ItemsContext);

  const shares = (function () {
    const register = Object();
    items.forEach((item) => {
      const perPerson = item.price / item.users.length;
      item.users.forEach((user: string) => {
        if (!register[user]) {
          register[user] = 0;
        }
        register[user] += perPerson;
      });
    });
    return register;
  })();

  return (
    <div>
      <header className="flex justify-between items-center p-4">
        <ThemeToggle />
        <h1>Waffle</h1>
        <Button onClick={() => router.push("/")}>
          <IoArrowBack size={16} /> Go back
        </Button>
      </header>
      <main className="flex min-h-screen flex-col items-center p-24">
        <div>
          {Object.keys(shares).map((user, index) => {
            return (
              <div key={index}>
                {user} owes {shares[user]}
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
