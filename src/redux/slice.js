import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemons, getTypes } from "./operations";

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemons: [],
    types: [],
    filterName: "",
    filterTags: [],
    page: 1,
    isLoading: false,
    isLoadingPokemons: false,
  },
  reducers: {
    changePage(state, action) {
      state.page = action.payload;
    },
    changeFilterName(state, action) {
      state.filterName = action.payload;
    },
    changeFilterTags(state, action){
      state.filterTags = state.filterTags.includes(action.payload) 
      ? state.filterTags.filter((t) => t !== action.payload) 
      : [...state.filterTags, action.payload]
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.isLoadingPokemons = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.page === 1 
        ? state.pokemons = action.payload 
        : state.pokemons = [...state.pokemons, ...action.payload]
        state.isLoadingPokemons = false;
    })
      .addCase(getTypes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTypes.fulfilled, (state, action) => {
        state.types = action.payload;
        state.isLoading = false;
      })
    }
});

export const { changePage, changeFilterName, changeFilterTags } = pokemonsSlice.actions;
export const pokemonsReducer = pokemonsSlice.reducer;