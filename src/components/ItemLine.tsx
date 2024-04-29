import { useState, useContext } from "react";

import { Input } from "./ui/input";
import { ItemsContext } from "@/context/items";

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

  return (
    <div className="flex">
      <div className="flex items-center space-x-2 my-4">
        <div className="grow-0">
          <Input
            placeholder="Name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleNameChange(e)
            }
            value={items[index].name}
          />
        </div>
        <Input
          placeholder="Price"
          type="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handlePriceChange(e)
          }
          value={items[index].price}
        />
      </div>
      <button
        onClick={() => {
          removeItem(index);
        }}
      >
        Remove
      </button>
    </div>
  );
}
