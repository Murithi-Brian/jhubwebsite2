import React from "react"
import NavBar from "./NavBar";
import Footer from "./Footer";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
// import { Outlet } from "react-router-dom";

const BaseLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <div className="bg-main text-white py-4">
            <div className="space-x-4 flex justify-center sm:justify-end items-center max-w-[85rem] mx-auto">
              {/* <DarkModeSwitcher /> */}
              <a
                href="https://twitter.com/JHUBAfrica"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandTwitter className="h-4 sm:h-full" />{" "}
              </a>
              <a
                href="https://www.youtube.com/channel/UCHN-H46LsYBXPGoOOsw4ffQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandYoutube className="h-4 sm:h-full" />{" "}
              </a>
              <a
                href="https://www.facebook.com/people/JHUB-Africa/61554202584585/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandFacebook className="h-4 sm:h-full" />
              </a>
              <a
                href="https://www.linkedin.com/company/jhubafrica/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandLinkedin className="h-4 sm:h-full" />
              </a>

              <a
                href="https://www.tiktok.com/@jhubafrica"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandTiktok className="h-4 sm:h-full" />
              </a>
              <a
                href="https://www.instagram.com/jhubafrica/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandInstagram className="h-4 sm:h-full" />
              </a>
            </div>
          </div>
          <NavBar />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;