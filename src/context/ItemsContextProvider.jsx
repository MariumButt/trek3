import { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/constants";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    return saved ? JSON.parse(saved) : initialItems;
  });

  
  const handleAddItem = (text) => {
    const newItem = {
      id: Date.now(),
      name: text,
      packed: false,
    };

    setItems((prev) => [...prev, newItem]);
  };


  const handleDeleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  
  const handleToggleItem = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleRemoveAllItems = () => setItems([]);
  const handleResetToInitial = () => setItems(initialItems);

  const handleMarkAllAsComplete = () => {
    setItems((prev) => prev.map((item) => ({ ...item, packed: true })));
  };

  const handleMarkAllAsInComplete = () => {
    setItems((prev) => prev.map((item) => ({ ...item, packed: false })));
  };

  
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAllAsComplete,
        handleMarkAllAsInComplete,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}