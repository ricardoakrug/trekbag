import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";

export function useItemsContext() {
  const context = useContext(ItemsContext);
  return context;
}
