import { Outlet } from "react-router-dom";

import Nav from "../components/NavBar";
import Footer from "../components/Footer";


function Layout() {

  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;