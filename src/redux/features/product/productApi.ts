import { baseApi } from "@/redux/api/baseApi";
import { Product, Category } from "@/types/types";

const product = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetProduct: builder.query<Product[], void>({
      query: () => ({
        url: "/products/",
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    getSingleProduct: builder.query<Product, string | string[]>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    getCategories: builder.query<Category[], void>({
      query: () => ({
        url: "/categories/",
        method: "GET",
      }),
      providesTags: ["categories"],
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetCategoriesQuery,
  useGetSingleProductQuery,
} = product;
