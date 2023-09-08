import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filteredAdverts: [],
  carBrand: '',
  maxPrice: 0,
  // maxMileage: 0,
  // minMileage: 0,
  isFiltered: false,
};

const currencySlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setMaxPrice: (state, { payload }) => {
      state.maxPrice = payload;
    },
    setMaxMileage: (state, { payload }) => {
      state.maxMileage = payload;
    },
    setMinMileage: (state, { payload }) => {
      state.minMileage = payload;
    },
    setCarBrand: (state, { payload }) => {
      state.carBrand = payload;
    },
    setFilteredAdverts: (state, { payload }) => {
      state.filteredAdverts = payload;
      state.isFiltered = true;
    },
    clearFilter: (state, { payload }) => {
      state.filteredAdverts = [];
      state.carBrand = '';
      state.maxPrice = 0;
      state.isFiltered = false;
    },
  },
  //   extraReducers: builder => {
  //     builder
  //       .addCase(fetchAdverts.fulfilled, (state, { payload }) => {
  //         state.adverts = payload;
  //         console.log(payload);
  //         state.loading = false;
  //       })
  //       .addCase(fetchAdverts.pending, state => {
  //         state.loading = true;
  //       })
  //       .addCase(fetchAdverts.rejected, state => {
  //         state.loading = false;
  //       });
  //   },
});

export const filterReducer = currencySlice.reducer;
export const {
  setMaxPrice,
  setMaxMileage,
  setMinMileage,
  setCarBrand,
  setFilteredAdverts,
  clearFilter,
} = currencySlice.actions;
