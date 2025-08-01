
const Footer = () => {
    return (
        <div>
            <footer className="flex items-center justify-center bg-neutral-300 text-black p-4 md:p-8 mt-20">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Minimal Library</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;