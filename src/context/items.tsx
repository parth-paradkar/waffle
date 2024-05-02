"use client";

import { Item } from "@/types/main";
import React, { createContext, useEffect, useState } from "react";

type ItemsContextType = {
  items: Item[];
  addItem: (item: Item) => void;
  setItems: (items: Item[]) => void;
  updateItem: (index: number, item: Item) => void;
  removeItem: (index: number) => void;
};

const ItemsContext = createContext({
  items: [],
  addItem: (item: Item) => {},
  setItems: (items: Item[]) => {},
  updateItem: (index: number, item: Item) => {},
  removeItem: (index: number) => {},
} as ItemsContextType);

const ItemsProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setItems([...items, item]);
    console.log(items);
  };

  const removeItem = (index: number) => {
    setItems([
      ...items.slice(0, index),
      ...items.slice(index + 1, items.length),
    ]);
  };

  const updateItem = (index: number, item: Item) => {
    const newItems = [
      ...items.slice(0, index),
      item,
      ...items.slice(index + 1, items.length),
    ];
    setItems(newItems);
  };

  const value = {
    items,
    addItem,
    setItems,
    updateItem,
    removeItem,
  };

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};

export { ItemsContext, ItemsProvider };
