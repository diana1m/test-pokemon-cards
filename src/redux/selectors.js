export const selectPokemons= state => state.pokemons.pokemons;

export const selectPage= state => state.pokemons.page;

export const selectIsLoading = state => state.pokemons.isLoading;

export const selectIsLoadingPokemons = state => state.pokemons.isLoadingPokemons;

export const selectTypes = state => state.pokemons.types;

export const selectFilterName = state => state.pokemons.filterName;

export const selectFilterTags = state => state.pokemons.filterTags;