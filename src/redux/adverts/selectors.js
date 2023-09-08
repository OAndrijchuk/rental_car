import { createSelector } from '@reduxjs/toolkit';

export const advertsSelector = createSelector(
  [state => state.adverts],
  adverts => adverts.adverts
);
export const favoritesAdvertsSelector = createSelector(
  [state => state.adverts],
  adverts => adverts.favoritesAdverts
);
