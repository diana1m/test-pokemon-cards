import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemons, getPokemonByName, getPokemonData, getPokemonsByTypes, getTypes } from "./operations";

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
    isFilterNamePokemon: false,
  },
  reducers: {
    changePage(state, action) {
      state.page = action.payload;
    },
    changePerPage(state, action) {
      state.perPage = action.payload;
    },
    changeFilterName(state, action) {
      state.filterTags = '';
      state.filterName = action.payload;
    },
    changeFilterTags(state, action){
      state.filterName = '';
      state.filterTags = state.filterTags.includes(action.payload) 
      ? state.filterTags.filter((t) => t !== action.payload) 
      : [action.payload]
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
        state.types = action.payload.filter(type => type !== "unknown" && type !== "shadow");
        state.isLoading = false;
      })
      .addCase(getPokemonData.pending, (state) => {
        state.isLoadingPokemons = true;
      })
      .addCase(getPokemonData.fulfilled, (state, action) => {
        state.pokemons = action.payload;
        state.isLoadingPokemons = false;
        state.isFilterNamePokemon = false;
      })
      .addCase(getPokemonByName.pending, (state) => {
        state.isLoadingPokemons = true;
      })
      .addCase(getPokemonByName.fulfilled, (state, action) => {
        state.pokemons = [action.payload];
        state.isLoadingPokemons = false;
        state.isFilterNamePokemon = true;
      })
      .addCase(getPokemonsByTypes.pending, (state) => {
        state.isLoadingPokemons = true;
      })
      .addCase(getPokemonsByTypes.fulfilled, (state, action) => {
        // if (state.filterTags.length === 0) {
          state.result = action.payload.currentItems;
        // } else {
        //   state.result = [...state.result, ...action.payload.pokemon.map(p => p.pokemon)];
        // }
        state.count = action.payload.count;
        state.isLoadingPokemons = false;
      })
    }
});

export const { changePage, changeFilterName, changeFilterTags, changePerPage } = pokemonsSlice.actions;
export const pokemonsReducer = pokemonsSlice.reducer;