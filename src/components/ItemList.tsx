import axios from 'axios';
import { ItemsContext } from "@/context/items";
import { useContext, useState } from "react";
import { ItemEditLine } from "./ItemLine";
import { Button } from "./ui/button";
import ImageUploader from "./ImageUploader";


export const ItemList = () => {
  const { items, addItem, setItems } = useContext(ItemsContext);

  const addEmptyItem = () => {
    addItem({ name: "", price: 0, users: [] });
    console.log("Inside addEmptyItem", items);
  };

  return (
    <div className="my-8">
      <ImageUploader />
      {items.map((item, index) => (
        <ItemEditLine key={index} index={index} />
      ))}
      <Button onClick={() => addEmptyItem()}>Add Item</Button>
    </div>
  );
};
