import type { IBorrowSummary } from "@/types";

interface IProps {
    borrow: IBorrowSummary
};

function BorrowCard({borrow}: IProps) {

    return (
        <div className="border shadow-xl rounded-2xl p-10">
            <div className="items-center justify-center">
                <div className="mb-5">
                    <h1 className="text-2xl font-bold">{borrow.book.title}</h1>
                </div>
                <div className="space-y-0.5">
                    <h1 className=""> <span className="font-bold">ISBN: </span>{borrow.book.isbn}</h1>
                    <p className=""> <span className="font-bold">Total Quantity: </span>{borrow.totalQuantity}</p>
                </div>
            </div>
            
        </div >
    );
}

export default BorrowCard;