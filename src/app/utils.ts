import { Item } from "@/types/main";

const itemSplit = (item: Item) => {
  return item.price / item.users.length;
};
