import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';

export const fetchPokemons = createAsyncThunk(
  'pokemons/fetchPokemons',
  async (page = 1, thunkAPI) => {
    const pokemons = []
    try {
      for (let i = page*50-49; i <= page*50; i ++) {
        const id = i+"";
        const { data } = await axios.get(`/pokemon/${id}`)
      pokemons.push(data);
      }
      
      // console.log(pokemons);
      return pokemons;
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

