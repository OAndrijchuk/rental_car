import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const initialState = {
  adverts: [],
  favoritesAdverts: [],
  loading: false,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    addToFavoritesAdverts: (state, { payload }) => {
      state.favoritesAdverts.push(payload);
    },
    removeFromFavoritesAdverts: (state, { payload }) => {
      state.favoritesAdverts = state.favoritesAdverts.reduce((acc, el) => {
        if (el.id !== payload.id) {
          acc.push(el);
        }
        return acc;
      }, []);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.fulfilled, (state, { payload }) => {
        state.adverts = payload;
        state.loading = false;
      })
      .addCase(fetchAdverts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchAdverts.rejected, state => {
        state.loading = false;
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
export const { addToFavoritesAdverts, removeFromFavoritesAdverts } =
  advertsSlice.actions;
