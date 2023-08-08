import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';

export const fetchPokemons = createAsyncThunk(
  'pokemons/fetchPokemons',
  async ({page = 1, perPage = 10}, thunkAPI) => {
    try {
      const response = await axios.get(`pokemon?limit=${perPage}&offset=${page*perPage-perPage}`);
      console.log(response.data);
      
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

