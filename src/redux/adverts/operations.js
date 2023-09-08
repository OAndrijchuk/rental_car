import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://64f62d9d2b07270f705e3fea.mockapi.io',
});

// const token = {
//   set(token) {
//     API.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   remove() {
//     API.defaults.headers.common.Authorization = '';
//   },
// };

export const fetchAdverts = createAsyncThunk(
  'fetch/adverts',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get('/adverts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
