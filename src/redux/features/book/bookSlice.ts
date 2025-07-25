import type { RootState } from '@/redux/store';
import type { IBooks } from '@/types';
import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
    books: IBooks[];
}

const initialState: InitialState = {
    books: [
        {
            id: "asdfsdg",
            title: "A horor Book",
            author: "a man",
            genre: "FICTION",
            isbn: "135435",
            description: "A bad book",
            copies: 3,
            available: true
        },
    ],
}

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {

    },
})



// export const {  } = bookSlice.actions

export const selectBooks = (state: RootState)=>{
    return state.library.books;
}

export default bookSlice.reducer;