import BookCard from "@/components/module/books/BookCard";
import { selectBooks } from "@/redux/features/book/bookSlice";
import { useAppSelector } from "@/redux/hook";

function AllBooks() {

    const books = useAppSelector(selectBooks);
    console.log(books);
    

    return (
        <div className="mx-auto max-w-7xl mt-20">
            <h1>This is All Books Here</h1>
            <BookCard />
        </div>
    );
}

export default AllBooks;