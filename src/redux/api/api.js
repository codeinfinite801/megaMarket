import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://maga-market-server-eta.vercel.app",
  }),
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => {
        return {
          url: `/category`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetCategoryQuery } = categoryApi;
