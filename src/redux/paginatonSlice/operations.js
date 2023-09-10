import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'redux/adverts/operations';
import { toast } from 'react-toastify';

export const fetchPage = createAsyncThunk(
  'fetch/paginaton',
  async (pageNumber, thunkAPI) => {
    try {
      const { data } = await API.get(`/pagination`, {
        params: { pageNumber: pageNumber },
      });
      return data[0];
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
