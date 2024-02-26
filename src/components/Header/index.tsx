'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import DarkModeSwitcher from './DarkModeSwitcher';
import DropdownMessage from './DropdownMessage';
import DropdownNotification from './DropdownNotification';
import DropdownUser from './DropdownUser';
import DashboardHelp from '../Dashboard/_components/DashboardHelp';
import SearchModal from '../Search/ModalSearch';

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
  isDashboard?: boolean;
}) => {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const isAuthenticated = false;

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!w-full delay-300'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && 'delay-400 !w-full'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!w-full delay-500'
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!h-0 !delay-[0]'
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!h-0 !delay-200'
                  }`}
                ></span>
              </span>
            </span>
          </button>

          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image
              width={32}
              height={32}
              src={'/images/logo/logo-icon.svg'}
              alt="Logo"
            />
          </Link>
        </div>
        {props.isDashboard ? (
          <div className="hidden sm:block">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div>
                {searchModalOpen ? (
                  ''
                ) : (
                  <button
                    className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full ml-3 ${'bg-slate-200'}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSearchModalOpen(true);
                    }}
                    aria-controls="search-modal"
                  >
                    <span className="sr-only bg-success">Search</span>
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-current text-slate-500 dark:text-slate-400"
                        d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                      />
                      <path
                        className="fill-current text-slate-400 dark:text-slate-500"
                        d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                      />
                    </svg>
                  </button>
                )}
                <SearchModal
                  id="search-modal"
                  searchId="search"
                  modalOpen={searchModalOpen}
                  setModalOpen={setSearchModalOpen}
                />
              </div>
            </form>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <Link href={'/'}>
              <h1 className="text-3xl font-semibold text-gray-600">
                JHUB Innovation
              </h1>
            </Link>
          </div>
        )}

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {props.isDashboard ? (
              <>
                <DarkModeSwitcher />

                <DropdownNotification />
                <DropdownMessage />
                <DashboardHelp />
              </>
            ) : (
              <ul className="flex items-center gap-2 2xsm:gap-4">
                <li>
                  <Link href={'/pricing'}>Pricing</Link>
                </li>
                <li>Services</li>
                <li>
                  <Link href={'/jhub-projects'}>JHUB Projects</Link>
                </li>
              </ul>
            )}
          </ul>

          {props.isDashboard ? (
            <DropdownUser />
          ) : (
            <div className="flex gap-2 items-center">
              <Link href="/consulatation-request">Consultancy</Link>

              <Link
                href="/auth/signin"
                className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-4 text-center text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="inline-flex items-center justify-center rounded-md bg-meta-3 py-2 px-4 text-center  text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
