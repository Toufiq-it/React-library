import BorrowCard from "@/components/module/borrow/BorrowCard";
import { useGetBorrowsQuery } from "@/redux/api/baseApi";
import type { IBorrowSummary } from "@/types";
import { Loader } from "lucide-react";


function BorrowSummary() {

    const {data, isLoading} = useGetBorrowsQuery(undefined);

    if (isLoading) {
        return <Loader className="flex items-center justify-center m-auto" />;
    };
    

    return (
        <div className="items-center mt-10">
            <div className="flex items-center justify-center">
                <h1 className="text-3xl md:text-4xl font-semibold">Borrow Summary</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {!isLoading && data.data.map((borrow: IBorrowSummary) => (
                    <BorrowCard borrow={borrow} key={borrow.book.isbn} />
                ))}
            </div>
        </div>
    );
}

export default BorrowSummary;