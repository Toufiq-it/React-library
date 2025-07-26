import type { RootState } from '@/redux/store';
import type { IBooks } from '@/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    books: IBooks[];
}

const initialState: InitialState = {
    books: [],
}

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<IBooks>) => {
            const id = uuidv4();
            const bookData = {
                ...action.payload,
                id,
                available: true,
            }
            state.books.push(bookData)
        },
        deleteBook: (state, action)=>{
            state.books = state.books.filter((book)=> book.id !== action.payload);
        },
    },
});


export const selectBooks = (state: RootState) => {
    return state.library.books;
};

export const { addBook, deleteBook } = bookSlice.actions;

export default bookSlice.reducer;