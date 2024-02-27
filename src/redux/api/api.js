import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
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
