import { create } from "zustand";

export const useCounterStore = create((set) => ({
  counter: 0,
  increase: () => set((state) => ({ counter: state.counter + 1 })),
  reset: () => set({ counter: 0 }),
  updateCounter: (counter) => set({ counter }),
}));

export const useUsersStore = create(() => ({
  ATL: 1,
  ATM: 2,
  ORG: 3,
}));
