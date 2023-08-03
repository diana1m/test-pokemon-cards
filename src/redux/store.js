import { configureStore } from "@reduxjs/toolkit";
import { pokemonsReducer } from "./slice";

export const store = configureStore({
    reducer: {
      pokemons: pokemonsReducer,
    }
});