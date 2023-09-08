import { createSelector } from '@reduxjs/toolkit';

export const isModalOpenSelector = createSelector(
  [state => state.carDetails],
  carDetails => carDetails.isModalOpen
);
export const isMobileMenuOpenSelector = createSelector(
  [state => state.carDetails],
  carDetails => carDetails.isMobileMenuOpen
);
export const isModalLoadingSelector = createSelector(
  [state => state.carDetails],
  carDetails => carDetails.isModalLoading
);
export const carDetailsSelector = createSelector(
  [state => state.carDetails],
  carDetails => carDetails.carDetails
);
