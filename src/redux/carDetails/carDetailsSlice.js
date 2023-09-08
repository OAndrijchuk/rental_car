import { createSlice } from '@reduxjs/toolkit';
import { fetchCarDetails } from './operations';

const initialState = {
  carDetails: {},
  isModalLoading: false,
  isModalOpen: false,
  isMobileMenuOpen: false,
};

const carDetailsSlice = createSlice({
  name: 'carDetails',
  initialState,
  reducers: {
    closeModal: state => {
      state.isModalOpen = false;
      state.isMobileMenuOpen = false;
    },
    mobileMenuOpen: state => {
      state.isMobileMenuOpen = true;
    },
    modalOpen: state => {
      state.isModalOpen = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCarDetails.fulfilled, (state, { payload }) => {
        state.carDetails = payload;
        state.isModalLoading = false;
      })
      .addCase(fetchCarDetails.pending, state => {
        state.isModalLoading = true;
      })
      .addCase(fetchCarDetails.rejected, state => {
        state.isModalLoading = false;
      });
  },
});

export const carDetailsReducer = carDetailsSlice.reducer;
export const { closeModal, mobileMenuOpen, modalOpen } =
  carDetailsSlice.actions;
