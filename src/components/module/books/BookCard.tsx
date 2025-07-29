import { Button } from "@/components/ui/button";
// import { deleteBook } from "@/redux/features/book/bookSlice";
// import { useAppDispatch } from "@/redux/hook";
import type { IBooks } from "@/types";
import { Trash2 } from "lucide-react";
import { AddBorrow } from "../borrow/AddBorrow";
import { UpdateBook } from "./UpdateBook";

interface IProps {
    book: IBooks,
}

function BookCard({ book }: IProps) {

    // const dispatch = useAppDispatch();

    return (
        <div className="border shadow-xl rounded-2xl p-10">
            <div className="items-center justify-center">
                <div className="mb-5">
                    <h1 className="text-2xl font-bold">{book.title}</h1>
                </div>
                <div className="space-y-0.5">
                    <h1 className=""> <span className="font-bold">Author: </span>{book.author}</h1>
                    <p className=""> <span className="font-bold">Genre: </span>{book.genre}</p>
                    <p className=""> <span className="font-bold">ISBN: </span>{book.isbn}</p>
                    <p className=""> <span className="font-bold">Copies: </span>{book.copies}</p>
                    <p className=""> <span className="font-bold">Availability: </span>
                        {book.available !== true ? 
                        <span className="text-red-500">Not Available</span> :
                        <span className="text-green-500">Available</span>  
                        }
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-between mt-5">
                
                <UpdateBook book={book} key={book._id} />
                <AddBorrow book={book} />
                <Button
                    // onClick={() => dispatch(deleteBook(book.id))}
                    className=' text-red-500 cursor-pointer hover:bg-red-500 hover:text-white'
                    variant="outline"
                >
                    Delete <Trash2 />
                </Button>
            </div>
        </div >
    );
}

export default BookCard;