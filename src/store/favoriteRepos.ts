import create from "zustand";
import { persist } from "zustand/middleware";

type favoriteReposState = {
  favoritereposIds: number[],
    addFavoriteRepo: (id: number) => void,
    removeFavoriteRepo: (id: number) => void

};

export const useFavoriteRepos = create(persist<favoriteReposState>(
    (set) => ({
        favoritereposIds: [],
        addFavoriteRepo: (id: number) => set((state) => ({ favoritereposIds: [...state.favoritereposIds, id] })),
        removeFavoriteRepo: (id: number) => set((state) => ({ favoritereposIds: state.favoritereposIds.filter((repoId) => repoId !== id) })),
    }),
    {
        name: "favorite-repos",
        getStorage: () => localStorage,
    } 

    
));

