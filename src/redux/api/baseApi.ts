import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ["book"],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "/books",
            providesTags: ["book"]
        }),
        createBook: builder.mutation({
            query: (bookData) => ({
                url: "/books",
                method: "POST",
                body: bookData,
            }),
            invalidatesTags: ["book"]
        }),
        updateBook: builder.mutation({
            query: ({ id, body }) => ({
                url: `/books/${id}`,
                method: "PUT",
                body
            }),
            invalidatesTags: ["book"]
        })
    }),
});

export const { useGetBooksQuery, useCreateBookMutation, useUpdateBookMutation } = baseApi;

