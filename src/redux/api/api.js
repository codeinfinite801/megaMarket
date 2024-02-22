import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://maga-market-server-eta.vercel.app",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => {
        return {
          url: "/allBooks",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetBooksQuery } = bookApi;
