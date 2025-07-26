import { Button } from "@/components/ui/button";
import { deleteBook } from "@/redux/features/book/bookSlice";
import { useAppDispatch } from "@/redux/hook";
import type { IBooks } from "@/types";
import { BookmarkPlus, SquarePen, Trash2 } from "lucide-react";

interface IProps {
    book: IBooks;
}

function BookCard({ book }: IProps) {

    const dispatch = useAppDispatch();

    return (
        <div className="border shadow-xl rounded-2xl p-10">
            <div className="items-center justify-center">
                <div className="mb-5">
                    <h1 className="text-2xl font-bold">{book.title}</h1>
                </div>
                <div className="space-y-0.5">
                    <p className=""> <span className="font-bold">Author: </span>{book.author}</p>
                    <p className=""> <span className="font-bold">Genre: </span>{book.genre}</p>
                    <p className=""> <span className="font-bold">ISBN: </span>{book.isbn}</p>
                    <p className=""> <span className="font-bold">Copies: </span>{book.copies}</p>
                    <p className=""> <span className="font-bold">Availability: </span>
                        {book.available === true ? 
                        <span className="text-green-500">Available</span> : 
                        <span className="text-red-500">Not Available</span>}
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-between mt-5">
                <Button
                    // onClick={() => dispatch(deleteUser(user.id))}
                    className=' text-blue-500 cursor-pointer'
                    variant="outline"
                >
                    Edit <SquarePen />
                </Button>
                <Button
                    // onClick={() => dispatch(deleteUser(user.id))}
                    className=' text-green-500 cursor-pointer'
                    variant="outline"
                >
                    Borrow <BookmarkPlus />
                </Button>
                <Button
                    onClick={() => dispatch(deleteBook(book.id))}
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