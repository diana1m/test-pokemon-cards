import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://6431cc53d4518cfb0e694cf2.mockapi.io/contacts';
axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';

// export const fetchPokemons = createAsyncThunk(
//   'pokemons/fetchPokemons',
//   async (page = 1, thunkAPI) => {
//     try {
//       const { data } = await axios.get("/pokemon", {
//         params: {
//           limit: 20,
//           offset: (page-1)*6,
//         },
//       });

//       console.log(data.results);
//       return data.results;
//     } catch (e) {
//         thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

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
      // console.log(data.results);
      return pokemons;
    } catch (e) {
        thunkAPI.rejectWithValue(e.message);
    }
  }
);
