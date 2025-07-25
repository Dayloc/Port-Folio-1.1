import { Outlet } from "react-router-dom/dist";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
  return (
    <ScrollToTop>
        <div className="container container-layout ">


      <div className="nav-layout  ">
        <Navbar />
      </div>
      <div className="body-layout ">
        <Outlet />
      </div>

      <div className="footer-layout ">
        <Footer />
      </div>
        </div>
    </ScrollToTop>
  );
};
