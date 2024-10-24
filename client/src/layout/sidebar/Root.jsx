import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Heading from "../components/header/Heading";
import Sidebar from "./sidebar/Sidebar";

const Root = () => {
  return (
    <>
      <div className="main-content container mx-auto px-20 " // style={{
        //   backgroundImage: `url(${imageBG})`,
        // }}
      >
        <Header />
        <Heading />
        <div className="content bg-white pb-32 pt-5 bg-repeat-x  w-full bg-left-bottom bg-contain " // style={{
          //   backgroundImage: `url(${footImage})`,
          // }}
        >
          <div className="flex justify-between gap-7">
            <div className="pages basis-3/4 ">
              <Outlet />
            </div>
            <div className="sidebar w-full basis-1/4">
              <Sidebar />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Root;
