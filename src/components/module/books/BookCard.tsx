import { Button } from "@/components/ui/button";
import { SquarePen, Trash2 } from "lucide-react";

function BookCard() {
    return (
        <div className="border-2 border-primary rounded-md p-8">
            <div>
                <p className="text-xl font-bold">A new Book</p>
                <p className="text-xl font-bold">A new Book</p>
                <p className="text-xl font-bold">A new Book</p>

            </div>
            <div>
                <Button
                    // onClick={() => dispatch(deleteUser(user.id))}
                    className=' text-blue-500 cursor-pointer'
                    variant="link"
                >
                    <SquarePen />
                </Button>
                <Button
                    // onClick={() => dispatch(deleteUser(user.id))}
                    className=' text-green-500 cursor-pointer'
                    variant="secondary"
                >
                    Add To Borrow
                </Button>
                <Button
                    // onClick={() => dispatch(deleteUser(user.id))}
                    className=' text-red-500 cursor-pointer'
                    variant="link"
                >
                    <Trash2 />
                </Button>
            </div>
        </div >
    );
}

export default BookCard;