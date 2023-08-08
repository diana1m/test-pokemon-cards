import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemons, getPokemonData, getTypes } from "./operations";

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemons: [],
    result: [],
    count: [],
    types: [],
    filterName: "",
    filterTags: [],
    page: 1,
    perPage: 10,
    isLoading: false,
    isLoadingPokemons: false,
  },
  reducers: {
    changePage(state, action) {
      state.page = action.payload;
    },
    changePerPage(state, action) {
      state.perPage = action.payload;
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
        state.count = action.payload.count;
        state.result = action.payload.results;
        state.isLoadingPokemons = false;
    })
      .addCase(getTypes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTypes.fulfilled, (state, action) => {
        state.types = action.payload;
        state.isLoading = false;
      })
      .addCase(getPokemonData.pending, (state) => {
        state.isLoadingPokemons = true;
      })
      .addCase(getPokemonData.fulfilled, (state, action) => {
        // state.page === 1 
        // ? state.pokemons = action.payload 
        // : state.pokemons = [...state.pokemons, ...action.payload];
        state.pokemons = action.payload;
        state.isLoadingPokemons = false;
      })
    }
});

export const { changePage, changeFilterName, changeFilterTags, changePerPage } = pokemonsSlice.actions;
export const pokemonsReducer = pokemonsSlice.reducer;