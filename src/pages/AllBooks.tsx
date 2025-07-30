import BookCard from "@/components/module/books/BookCard";
import { Button } from "@/components/ui/button";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { IBooks } from "@/types";
import { Loader, Plus } from "lucide-react";

import { Link } from "react-router";

function AllBooks() {

    const { data, isLoading } = useGetBooksQuery(undefined, {
        refetchOnReconnect: true,
        refetchOnMountOrArgChange: true,
    });
    // console.log({data, isLoading, isError});

    if (isLoading) {
        return <Loader className="flex items-center justify-center m-auto" />;
    }


    return (
        <div className="items-center mt-10">
            <div className="flex items-center justify-center">
                <h1 className="text-3xl md:text-4xl font-semibold">Discover Your Next Book</h1>
            </div>
            <div className="flex justify-center mt-5 lg:mt-0 lg:justify-end ">
                <Button
                    variant="outline"
                >
                <Link to="/create-book">Add Book</Link> <Plus />
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {!isLoading && data.data.map((book: IBooks) => (
                    <BookCard book={book} key={book._id} />
                ))}
            </div>
        </div>
    );
}

export default AllBooks;