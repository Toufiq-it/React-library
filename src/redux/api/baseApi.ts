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
        // book update
        updateBook: builder.mutation({
            query: ({ id, body }) => ({
                url: `/books/${id}`,
                method: "PUT",
                body
            }),
            invalidatesTags: ["book"]
        }),
        // create borrow
        createBorrow: builder.mutation({
            query: ({body}) => ({
                url: "/borrow",
                method: "POST",
                body,
            }),
            // invalidatesTags: ["book"]
        }),
    }),
});

export const { 
    useGetBooksQuery, 
    useCreateBookMutation, 
    useUpdateBookMutation,
    useCreateBorrowMutation,
 } = baseApi;

