export const selectPokemons= state => state.pokemons.pokemons;

export const selectResult = state => state.pokemons.result;

export const selectPage = state => state.pokemons.page;

export const selectPerPage = state => state.pokemons.perPage;

export const selectCount = state => state.pokemons.count;

export const selectIsLoading = state => state.pokemons.isLoading;

export const selectIsLoadingPokemons = state => state.pokemons.isLoadingPokemons;

export const selectTypes = state => state.pokemons.types;

export const selectFilterName = state => state.pokemons.filterName;

export const selectFilterTags = state => state.pokemons.filterTags;