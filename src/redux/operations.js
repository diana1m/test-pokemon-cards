import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';

export const fetchPokemons = createAsyncThunk(
  'pokemons/fetchPokemons',
  async (page = 1, thunkAPI) => {
    let pokemons = []
    try {
      for (let i = page*20-19; i <= page*20; i ++) {
        const id = i+"";
        const { data } = await axios.get(`/pokemon/${id}`)
        // params: {
        //   limit: 20,
        //   offset: (page-1)*20,
        // },
      // }); 
      pokemons.push(data);
      }
      
      console.log(pokemons);
      return pokemons;
    } catch (e) {
        thunkAPI.rejectWithValue(e.message);
    }
  }
);
