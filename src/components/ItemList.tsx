import axios from 'axios';
import { ItemsContext } from "@/context/items";
import { useContext } from "react";
import { ItemEditLine } from "./ItemLine";
import { Button } from "./ui/button";
import ImageUploader from "./ImageUploader";

type ApiItem = {
  QUANTITY: number;
  ITEM: string;
  PRICE: number;
}

export const ItemList = () => {
  const { items, addItem, setItems } = useContext(ItemsContext);

  const addEmptyItem = () => {
    addItem({ name: "", price: 0, users: [] });
    console.log("Inside addEmptyItem", items);
  };

  const processImage = async (imageStr: string) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const headers = {
      "Content-Type": "application/json",
    }
    if (!apiUrl) return;
    const response = await axios.post<ApiItem[]>(apiUrl, { image: imageStr }, {
      headers
    });
    const itemsList = response.data.map((item) => {
      return {
        name: item.ITEM,
        price: item.PRICE * item.QUANTITY,
        users: []
      }
    })
    setItems(itemsList)
  }

  return (
    <div className="my-8">
      <ImageUploader onUpload={processImage}/>
      {items.map((item, index) => (
        <ItemEditLine key={index} index={index} />
      ))}
      <Button onClick={() => addEmptyItem()}>Add Item</Button>
    </div>
  );
};
