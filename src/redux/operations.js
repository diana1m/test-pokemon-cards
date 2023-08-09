import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';

export const fetchPokemons = createAsyncThunk(
  'pokemons/fetchPokemons',
  async ({page = 1, perPage = 10}, thunkAPI) => {
    try {
      
      const response = await axios.get(`pokemon?limit=${perPage}&offset=${page*perPage-perPage}`);
      
      return response.data;
    } catch (e) {
        thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getPokemonData = createAsyncThunk(
  'pokemons/getPokemonData',
  async (result, thunkAPI) => {
    try {
      const pokemonArr = [];
      await Promise.all(
        result.map((pokemonItem) => {
            return axios
                .get(`https://pokeapi.co/api/v2/pokemon/${pokemonItem.name}`)
                .then((result) => {

                    pokemonArr.push(result.data);
                });
        }))
      return pokemonArr;
    } catch (e) {
        thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const getTypes = createAsyncThunk(
  'pokemons/getTypes',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/type');
      const types = data.results.map(item => item.name);
      return types;
    } catch (e) {
        thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getPokemonByName = createAsyncThunk(
  'pokemons/getPokemonByName',
  async (name, thunkAPI) => {
    try {
      const { data } = await axios.get(`/pokemon/${name}`);
      return data;
    } catch (e) {
        thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getPokemonsByTypes = createAsyncThunk(
  'pokemons/getPokemonByTypes',
  async ({page = 1, perPage = 10, type}, thunkAPI) => {
    try {
      
      const { data } = await axios.get(`/type/${type}`);
      const pokemonArr = data.pokemon.map(p => p.pokemon)
      const currentItems = pokemonArr.slice((page*perPage-perPage), page*perPage);
      const results = {
        currentItems,
        count: data.pokemon.length
      }
      console.log(results)
      return results;
    } catch (e) {
        thunkAPI.rejectWithValue(e.message);
    }
  }
);