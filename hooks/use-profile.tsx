import { User } from "@/types";
import { create } from "zustand";

type Store = {
  user: User | null;
  setUser: (user: any) => void;
};

const useUser = create<Store>()((set) => ({
  user: null,
  setUser: (user: any) => set({ user }),
}));

export default useUser;
