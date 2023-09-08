import { createSelector } from '@reduxjs/toolkit';

export const filteredAdvertsSelector = createSelector(
  [state => state.filter],
  filter => filter.filteredAdverts
);
export const filterAllSelector = createSelector(
  [state => state.filter],
  filter => filter
);
