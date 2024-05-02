"use client";

import { UsersContext } from "@/context/users";
import { useContext } from "react";
import { Button } from "./ui/button";
import { VscSparkle } from "react-icons/vsc";
import { ItemsContext } from "@/context/items";
import { useRouter } from "next/navigation";

export const CalculateSplit = () => {
  const router = useRouter();
  const { users } = useContext(UsersContext);
  const { items } = useContext(ItemsContext);
  return (
    <Button
      disabled={users.length === 0 || items.length === 0}
      onClick={() => router.push("/split")}
    >
      {" "}
      Calculate <VscSparkle size={16} className="ms-1" />
    </Button>
  );
};
