import { createSlice } from '@reduxjs/toolkit';
import { fetchPage } from './operations';

const initialState = {
  paginationCards: [],
  totalCards: 0,
  totalPages: 0,
  currentPage: 1,
  isPageLoading: false,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    incCurrentPage: state => {
      if (state.totalPages !== state.currentPage) {
        state.currentPage = state.currentPage + 1;
      }
    },
    resetPagination: state => {
      state.paginationCards = [];
      state.totalCards = 0;
      state.totalPages = 0;
      state.currentPage = 1;
      state.isPageLoading = false;
    },
    setPaginationCards: (state, { payload }) => {
      state.paginationCards = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPage.fulfilled, (state, { payload }) => {
        state.paginationCards = [
          ...state.paginationCards,
          ...payload.pageCards,
        ];
        state.totalCards = payload.totalCards;
        state.totalPages = payload.totalPages;
        state.isPageLoading = false;
      })
      .addCase(fetchPage.pending, state => {
        state.isPageLoading = true;
      })
      .addCase(fetchPage.rejected, state => {
        state.isPageLoading = false;
      });
  },
});

export const paginationReducer = paginationSlice.reducer;
export const { incCurrentPage, setPaginationCards, resetPagination } =
  paginationSlice.actions;
