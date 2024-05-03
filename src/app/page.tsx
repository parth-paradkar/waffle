"use client";

import { AddUsers } from "@/components/UsersInput";
import { ItemList } from "@/components/ItemList";

import { ThemeToggle } from "@/components/ThemeToggle";
import { CalculateSplit } from "@/components/CalculateSplit";

import { SelectUser } from "@/components/PayedBySelect";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { UsersContext } from "@/context/users";
import { ItemsContext } from "@/context/items";
import { BsTrash3 } from "react-icons/bs";
import Footer from "@/components/Footer";

export default function Home() {
  const { setUsers } = useContext(UsersContext);
  const { setItems } = useContext(ItemsContext);

  const onClear = () => {
    setUsers([]);
    setItems([]);
  };

  return (
    <div>
      <header className="flex justify-between items-center p-4">
        <ThemeToggle />
        <h1>Waffle</h1>
        <Button onClick={onClear} variant="destructive">
          <BsTrash3 />
          Clear
        </Button>
      </header>
      <main className="flex min-h-screen flex-col items-center p-24">
        <AddUsers />
        <ItemList />
        <div className="flex">
          <SelectUser />
          <CalculateSplit />
        </div>
      </main>
      <Footer />
    </div>
  );
}
