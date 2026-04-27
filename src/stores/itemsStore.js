import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialItems } from "../lib/constants";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,

      addItem: (text) => {
        const newItem = {
          id: Date.now(),
          name: text,
          packed: false,
        };

        set((state) => ({
          items: [...state.items, newItem],
        }));
      },

      deleteItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      toggleItem: (id) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? { ...item, packed: !item.packed }
              : item
          ),
        }));
      },

      removeAllItems: () => set({ items: [] }),

      resetToInitial: () => set({ items: initialItems }),

      markAllAsInComplete: () =>
        set((state) => ({
          items: state.items.map((item) => ({
            ...item,
            packed: false,
          })),
        })),

      markAllAsComplete: () =>
        set((state) => ({
          items: state.items.map((item) => ({
            ...item,
            packed: true,
          })),
        })),
    }),
    {
      name: "items-storage",
    }
  )
);