import { create } from "zustand";
import { Car } from "@prisma/client";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "@/components/ui/use-toast";

interface UseLovedCarsType {
  lovedItems: Car[];
  addLoveItem: (data: Car) => void;
  removeLovedItem: (id: string) => void;
}

export const useLovedCars = create(
  persist<UseLovedCarsType>(
    (set, get) => ({
      lovedItems: [],
      addLoveItem: (data: Car) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find(
          (item) => item.id === data.id
        );

        if (existingItem) {
          return toast({
            title: "Car is already in your list ❎",
          });
        }

        set({
          lovedItems: [...get().lovedItems, data],
        });

        toast({
          title: "Car added to your list ✅",
        });
      },

      removeLovedItem: (id: string) => {
        set({
          lovedItems: [...get().lovedItems.filter((item) => item.id !== id)],
        });
        toast({
          title: "Car removed from your list ❎",
        });
      },
    }),
    {
      name: "loved-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
