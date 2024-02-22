import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../feature/bookSlice";
import { bookApi } from "../api/api";

export const store = configureStore({
  reducer: {
    book: bookSlice,
    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});
