import { Link } from "react-router";
import { ModeToggle } from "../mode-toggler";

function Navbar() {
    return (
        <nav className="h-16 flex justify-between items-center md:p-4">
            <div className="flex items-center md:gap-6">
                <h1 className="font-bold text-2xl pr-10">
                    <Link to="/">
                        Library
                    </Link>
                </h1>

                <Link className="hover:underline" to="/books">All Books</Link>
                <Link className="hover:underline" to="/create-book">Add Book</Link>
                <Link className="hover:underline" to="/borrow-summary">Borrow Summary</Link>
            </div>
            <div className="ml-auto">
                <ModeToggle />
            </div>
        </nav>
    );
}

export default Navbar;