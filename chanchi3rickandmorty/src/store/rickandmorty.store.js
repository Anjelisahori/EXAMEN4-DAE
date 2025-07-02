import { create } from "zustand";
import { getCharacters } from "../services/rickandmorty.services";
import { adaptRickData } from "../utils/rickandmorty.util"; 

export const useRickStore = create((set) => ({
    characters: [],
    getCharacters: async () => {
        const charactersData = await getCharacters();
        set({ characters: charactersData.map(adaptRickData) }); 
    }
}));
