import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemons } from "./operations";

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemons: [],
    page: 1,
    isLoading: false,
  },
  reducers: {
    changePage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        // state.page === 1 
        state.pokemons = action.payload 
        // : state.pokemons = [...state.pokemons, ...action.payload]
        state.isLoading = false;
    })
    }
});

export const { changePage } = pokemonsSlice.actions;
export const pokemonsReducer = pokemonsSlice.reducer;