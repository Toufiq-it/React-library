import BookCard from "@/components/module/books/BookCard";
import { Button } from "@/components/ui/button";
import { selectBooks } from "@/redux/features/book/bookSlice";
import { useAppSelector } from "@/redux/hook";
import { Link } from "react-router";

function AllBooks() {

    const books = useAppSelector(selectBooks);
    console.log(books);


    return (
        <div className="items-center mt-10">
            <div className="flex items-center justify-center">
                <h1 className="text-3xl font-semibold">This is All Books Here</h1>
            </div>
            <div className="flex justify-end">
                <Button 
                variant="outline"
                >
                <Link to="/create-book">Add Book</Link>
                </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-10">
                {
                    books.map((book) => <BookCard book={book} key={book.id} />)
                }
            </div>
        </div>
    );
}

export default AllBooks;