import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../feature/bookSlice";
import { categoryApi } from "../api/api";



export const store = configureStore({
  reducer: {
    book: bookSlice,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware),
});
