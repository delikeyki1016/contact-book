import { create } from "zustand";

const usePhoneBookStore = create((set) => ({
    phoneBook: [],
    addContact: (name, phoneNumber) =>
        set((state) => ({
            phoneBook: [
                ...state.phoneBook,
                { id: Date.now(), name, phoneNumber },
            ],
        })),
    searchKeyword: "",
    setSearchKeyword: (keyword) => set({ searchKeyword: keyword }),
}));

export default usePhoneBookStore;
