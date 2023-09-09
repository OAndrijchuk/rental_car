import { createSelector } from '@reduxjs/toolkit';

export const allPaginationSelector = createSelector(
  [state => state.pagination],
  pagination => pagination
);
export const paginationCardsSelector = createSelector(
  [state => state.pagination],
  pagination => pagination.paginationCards
);
