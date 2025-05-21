import { baseApi } from "./baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => {
        return {
          url: "/categories",
          method: "GET",
        };
      },
      providesTags: ["categories"],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
