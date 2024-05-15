import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className=" w-full" style={{
      fontFamily: 'Poppins'
    }}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
