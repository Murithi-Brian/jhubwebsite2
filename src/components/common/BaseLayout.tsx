import React from "react"
import NavBar from "./NavBar";
import Footer from "./Footer";
// import { Outlet } from "react-router-dom";

const BaseLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          
          <NavBar />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;