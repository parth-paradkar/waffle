"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "./ui/badge";
import { RxCross1 } from "react-icons/rx";

import { useState } from "react";

import { useContext } from "react";
import { UsersContext } from "@/context/users";

function UserTags({
  names,
  onRemove,
}: {
  names: string[];
  onRemove: (name: string) => void;
}) {
  return (
    <div className="flex flex-wrap">
      {names.map((name) => (
        <Badge key={name} variant="outline">
          {name}
          <button className="ml-2 text-red-500" onClick={() => onRemove(name)}>
            <RxCross1 />
          </button>
        </Badge>
      ))}
    </div>
  );
}

export function AddUsers() {
  const { users: names, addUser, removeUser } = useContext(UsersContext);

  const [name, setName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAdd = () => {
    addUser(name);
    setName("");
  };

  return (
    <div>
      <div className="flex items-center space-x-2 my-4">
        <div className="grow-0">
          <Input placeholder="Name" onChange={handleChange} value={name} />
        </div>
        <Button type="submit" onClick={handleAdd}>
          Add
        </Button>
      </div>
      <UserTags names={names} onRemove={removeUser} />
    </div>
  );
}
