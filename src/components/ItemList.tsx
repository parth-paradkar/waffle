import { ItemsContext } from "@/context/items";
import { useContext } from "react";
import { ItemEditLine } from "./ItemLine";
import { Button } from "./ui/button";

export const ItemList = () => {
  const { items, addItem } = useContext(ItemsContext);

  const addEmptyItem = () => {
    addItem({ name: "", price: 0, users: [] });
    console.log("Inside addEmptyItem", items);
  };

  return (
    <div className="my-8">
      {items.map((item, index) => (
        <ItemEditLine key={index} index={index} />
      ))}
      <Button onClick={() => addEmptyItem()}>Add Item</Button>
    </div>
  );
};
