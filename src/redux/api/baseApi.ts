import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ["book"],
    endpoints: (builder) => ({
        // get all book
        getBooks: builder.query({
            query: () => "/books",
            providesTags: ["book"]
        }),
        // create book
        createBook: builder.mutation({
            query: (bookData) => ({
                url: "/books",
                method: "POST",
                body: bookData,
            }),
            invalidatesTags: ["book"]
        }),
        // update book
        updateBook: builder.mutation({
            query: ({ id, body }) => ({
                url: `/books/${id}`,
                method: "PUT",
                body
            }),
            invalidatesTags: ["book"]
        }),
        // delete book
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags : ["book"],
        }),

        // create borrow
        createBorrow: builder.mutation({
            query: (borrowData) => ({
                url: "/borrow",
                method: "POST",
                body: borrowData,
            }),
            invalidatesTags: ["book"]
        }),
        // borrow summary
        getBorrows : builder.query({
            query: () => "/borrow",
            providesTags: ["book"],
        }),
    }),
});

export const { 
    useGetBooksQuery, 
    useCreateBookMutation, 
    useUpdateBookMutation,
    useDeleteBookMutation,
    useCreateBorrowMutation,
    useGetBorrowsQuery,
 } = baseApi;

