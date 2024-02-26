"use client";
import { Fragment, useState, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { IconChevronDown } from "@tabler/icons-react";
import Logo from "../assets/images/logo/jhub-logo-new.svg"

export const navTopLinks = [
  {
    name: "About JHUB",
    href: "/about-jhub",
  },
  {
    name: "Projects & Innovation",
    href: "/jhub-projects",
  },
  {
    name: "Consultancy",
    href: "/consulatation-request",
  },
  {
    name: "Innovator Portal",
    href: "/dashboard",
  },
];

export const navBottomLinks = [
  {
    name: "Events",
    href: "/jhub-events",
  },
  {
    name: "Team Members",
    href: "/",
  },
  {
    name: "Training Programs",
    href: "/training-programs",
  },
  {
    name: "Technology & Sustainability",
    href: "/technology-sustainability",
  },
  {
    name: "Data Protection",
    href: "/data-protection-details",
  },
];

export default function NavBar() {
  const [showUpperDropdown, setShowUpperDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const trigger = useRef<any>(null);
  const _dropdown = useRef<any>(null);

  const { pathname } = useLocation();
  const isDashboardPage = pathname === "/dashboard";

  const toggleDropdown = () => {
    setShowDropdown((prevDropdownState) => !prevDropdownState);
  };

  const toggleUpperDropdown = () => {
    setShowUpperDropdown((prevUpperDropdownState) => !prevUpperDropdownState);
  };

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!showDropdown || keyCode !== 27) return;
      setShowDropdown(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  // TODO USE ROUTER TO
  return isDashboardPage ? null : (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-main text-whiter text-sm py-3 sm:py-0 dark:bg-slate-900">
        <nav
          className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link
              className="flex-none text-3xl font-semibold"
              to="/"
              aria-label="jhub Suite Brand"
            >
              <LazyLoadImage
                effect="blur"
                src={Logo}
                width={100}
                height={100}
                alt="JHUB logo"
              />
            </Link>

            {/* <Menu as="div" className="relative inline-block text-left ml-18">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-success shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Services
                  <IconChevronDown
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-main shadow-lg ring-1 ring-success ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Training Programs
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Training & Workshops
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Mentorship
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Business Incubators
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Maximum Digital
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          AgriTech
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Propose a Service
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu> */}

            <div className="sm:hidden">
              <button
                type="button"
                onClick={toggleUpperDropdown}
                className="hs-collapse-toggle w-9 h-9 text-white flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200  hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block flex-shrink-0 hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="navbar-collapse-with-animation"
            className={`hs-collapse ${
              showUpperDropdown ? "" : "hidden"
            } overflow-hidden transition-all duration-300 basis-full grow sm:block`}
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              {navTopLinks.map((link, i) => (
                <Link
                  to={link?.href}
                  key={i}
                  className="font-semibold text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                >
                  {link?.name}{" "}
                </Link>
              ))}

              <Link
                className="flex items-center gap-x-2 font-semibold text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
                to="/auth/signin"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Account
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <nav className="w-full md:max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-end flex-1 bg-success  py-4">
        <div className="relative flex flex-row justify-between items-center gap-x-8 border-t py-4 sm:py-0 dark:border-whiter">
          <div className="flex items-center w-full sm:w-[auto]">
            <span className="font-semibold text-main whitespace-nowrap text-xl border-white sm:border-transparent pe-4 me-4 sm:py-3.5 dark:text-white">
              JHUB Sections:
            </span>

            <div className="w-full sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle text-white group w-full inline-flex justify-between items-center gap-2 rounded-lg font-medium text-gray-600 border border-gray-200 align-middle py-1.5 px-2 focus:outline-none focus:ring-2  transition"
                data-hs-collapse="#secondary-nav-toggle"
                aria-controls="secondary-nav-toggle"
                aria-label="Toggle navigation"
                onClick={toggleDropdown}
              >
                Overview
                <svg
                  className="hs-dropdown-open:rotate-180 flex-shrink-0 w-4 h-4 transition "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="secondary-nav-toggle"
            className={`bg-success  text-white ${
              showDropdown ? "" : "hidden"
            } hs-collapse overflow-hidden transition-all duration-300 absolute top-16 end-0 w-full rounded-lg sm:block sm:static sm:top-0 sm:w-full sm:max-h-full sm:bg-transparent sm:overflow-visible`}
          >
            <div className="ml-6 flex flex-col py-2 sm:flex-row sm:justify-end sm:gap-y-0 sm:gap-x-6 sm:py-0">
              {navBottomLinks.map((link, i) => (
                <Link
                  key={i}
                  className="text-sm font-medium text-white sm:border-b-2 border-b-transparent py-2 sm:py-3.5 dark:text-gray-400 "
                  to={link?.href}
                >
                  {link?.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
