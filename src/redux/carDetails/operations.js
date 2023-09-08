import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'redux/adverts/operations';

export const fetchCarDetails = createAsyncThunk(
  'fetch/carDetails',
  async (id, thunkAPI) => {
    try {
      const { data } = await API.get(`/adverts`, { params: { id: id } });
      return data[0];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
