import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => {
        return {
          url: "/products",
          method: "GET",
          params,
        };
      },
      providesTags: ["products"],
    }),

    getProduct: build.query({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),

    getFeaturedProducts: build.query({
      query: () => {
        return {
          url: "/featured-products",
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetFeaturedProductsQuery,
} = productApi;
