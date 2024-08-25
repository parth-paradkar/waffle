import { useState, useContext } from "react";

import { Input } from "./ui/input";
import { ItemsContext } from "@/context/items";
import { Button } from "./ui/button";
import { BsTrash3 } from "react-icons/bs";
import { MultiUserSelect } from "./MultiUserSelect";
import { Option } from "./ui/multiselect";

export function ItemEditLine({ index }: { index: number }) {
  const { items, updateItem, removeItem } = useContext(ItemsContext);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const item = items[index];
    updateItem(index, { ...item, name: e.target.value });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const item = items[index];
    updateItem(index, { ...item, price: Number(e.target.value) });
  };

  const handleUsersAdd = (options: Option[]) => {
    const item = items[index];
    const users = options.map((option) => option.value);
    updateItem(index, { ...item, users });
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 my-4">
        <div className="w-full sm:w-auto">
          <Input
            placeholder="Name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleNameChange(e)
            }
            value={items[index].name}
          />
        </div>
        <div className="w-full sm:w-auto">
          <Input
            placeholder="Price"
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handlePriceChange(e)
            }
            value={items[index].price}
          />
        </div>
        <div className="w-full sm:w-auto">
          <MultiUserSelect
            onChange={handleUsersAdd}
            value={items[index].users.map((user) => ({
              value: user,
              label: user,
            }))}
          />
        </div>
      <Button
        onClick={() => {
          removeItem(index);
        }}
        variant="destructive"
        className="ml-2"
      >
        <BsTrash3 />
      </Button>
    </div>
  );
}
