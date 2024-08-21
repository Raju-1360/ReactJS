import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'products', // Name of your slice in the store
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }), // Base URL for API requests
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => '/products', // API endpoint to fetch products
    }),
    getProductById: builder.query({

        query: (id) => `/products/${id}`, // API endpoint to fetch a single product by ID
    }),


  }),
});

// Export the auto-generated hook for the `getAllProduct` query endpoint
export const { useGetAllProductQuery,useGetProductByIdQuery } = productApi;
