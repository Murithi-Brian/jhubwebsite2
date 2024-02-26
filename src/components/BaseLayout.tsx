import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <NavBar />
        <main>
          <div className="p-4 md:p-0">
            <Outlet/>
            <Footer />
          </div>
        </main>
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
