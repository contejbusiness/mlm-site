import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  balance: number;
  myRefferalCode: number;
  referredById: string | null;
  createdAt: string;
  updatedAt: string;
  planId: string | null;
}

type Store = {
  user: User | null;
  setUser: (user: any) => void;
};

const useUser = create<Store>()((set) => ({
  user: null,
  setUser: (user: any) => set({ user }),
}));

export default useUser;
