import { create } from "zustand";
import { persist, createJSONStorage  } from "zustand/middleware";

export const useCounterStore = create(
  persist(
    (set, get) => ({
      counter: 0,
      increase: () => set((state) => ({ counter: get().counter + 1 })),
      reset: () => set({ counter: 0 }),
      updateCounter: (counter) => set({ counter }),
    }),
    {
      name: 'counter-storage', // name of the item in the storage (must be unique)
      //storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  )
);
