import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://64f62d9d2b07270f705e3fea.mockapi.io',
});

export const fetchAdverts = createAsyncThunk(
  'fetch/adverts',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get('/adverts');
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
