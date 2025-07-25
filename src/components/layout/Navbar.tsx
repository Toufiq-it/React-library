import { Link } from "react-router";
import { ModeToggle } from "../mode-toggler";

function Navbar() {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex justify-between items-center gap-3 px-5">
            <div className="flex items-center">
                <h1 className="font-bold text-2xl pr-10">Library </h1>
            </div>

                <Link to="/books">All Books</Link>
                <Link to="/create-book">Add Book</Link>
                <Link to="/borrow-summary">Borrow Summary</Link>
            <div className="ml-auto">
                <ModeToggle />
            </div>
        </nav>
    );
}

export default Navbar;