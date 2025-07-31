import { Button } from "@/components/ui/button";
import type { IBooks } from "@/types";
import { Trash2 } from "lucide-react";
import { AddBorrow } from "../borrow/AddBorrow";
import { UpdateBook } from "./UpdateBook";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useDeleteBookMutation } from "@/redux/api/baseApi";
import { toast } from "react-toastify";

interface IProps {
    book: IBooks,
}

function BookCard({ book }: IProps) {
    const [deleteBook] = useDeleteBookMutation();

    const handleDelete = async (id: string) => {
        // console.log(id);

        const res = await deleteBook(id).unwrap();
        console.log("Deleted book", res);
        toast.success("Book Deleted successfully!");
    };

    return (
        <div className="border shadow-xl hover:shadow-blue-100 rounded-2xl p-10">
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

                <UpdateBook book={book} />
                <AddBorrow book={book} key={book._id} />

                {/* // Delete book */}
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                            <Button
                                // onClick={() => dispatch(deleteBook(book.id))}
                                className=' text-red-500 cursor-pointer hover:bg-red-500 hover:text-white'
                                variant="outline"
                            >
                                Delete <Trash2 />
                            </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure detele the Book ?</AlertDialogTitle>
                            <AlertDialogDescription>

                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter className="flex items-center justify-center">
                            <AlertDialogCancel>
                                No
                            </AlertDialogCancel>
                            <AlertDialogAction onClick={()=> handleDelete(book._id)}>
                                Yes
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </div >
    );
}

export default BookCard;