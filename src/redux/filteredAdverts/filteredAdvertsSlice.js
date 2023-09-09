import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filteredAdverts: [],
  carBrand: '',
  maxPrice: 0,
  maxMileage: 0,
  minMileage: 0,
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
    },
    setIsFiltered: (state, { payload }) => {
      state.isFiltered = true;
    },
    clearFilter: (state, { payload }) => {
      state.filteredAdverts = [];
      state.isFiltered = false;
    },
  },
});

export const filterReducer = currencySlice.reducer;
export const {
  setMaxPrice,
  setMinMileage,
  setMaxMileage,
  setCarBrand,
  setFilteredAdverts,
  clearFilter,
  setIsFiltered,
} = currencySlice.actions;
