import { Outlet } from "react-router"
import Navbar from "./components/layout/Navbar"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";

function App() {

  return (
    <div>
      <div className="max-w-7xl mx-auto items-center ">
        <div className="p-1.5">
          <Navbar />
        </div>
        <div className="p-4">
          <ToastContainer position="top-center" autoClose={3000} />
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
