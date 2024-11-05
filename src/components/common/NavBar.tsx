import {
  Fragment,
  useState,
  useEffect,
} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useLocation } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { IconChevronDown } from "@tabler/icons-react";
import Logo from "../../assets/images/logo/jhub-logo-new.svg";
import { classNames } from "../../utils/classes";

type ItemType = {
  item: {
    name: string;
    href: string;
    subMenu?: {
      name: string;
      href: string;
    }[];
  };
};

const navTopLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Projects",
    href: "/projects",
    subMenu: [
      { name: "Digital Transformation", href: "/projects/digital-transformation" },
      { name: "Climate Smart Agriculture", href: "/projects/climate-smart-agriculture" },
      { name: "Green Digital Innovation", href: "/projects/green-digital-innovation" },
      { name: "Digital Twin Models", href: "/projects/digital-twin-models" },
      { name: "Digital Trade", href: "/projects/digital-trade" },
    ],
  },
  { name: "Courses", href: "/courses" },
  {
    name: "Events",
    href: "/events",
    subMenu: [
      { name: "Upcoming Events", href: "/events/upcoming" },
      { name: "Past Events", href: "/events/past" },
    ],
  },
  { name: "Blog", href: "/blog" },
];

const serviceLinks = [
  { name: "Request a Consultation", href: "/consultancy" },
  { name: "Propose a Service", href: "/contact-us" },
];

const ServicesTab = () => (
  <div className="inline-block text-right z-10">
    <Menu as="div" className="relative text-left sm:ml-18">
      <div>
        <Menu.Button className="inline-flex bg-white w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-success shadow-sm ring-1 ring-inset ring-success">
          Services
          <IconChevronDown className="-mr-1 h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="absolute mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-success ring-opacity-5 focus:outline-none">
          {serviceLinks.map((item, index) => (
            <div key={index} className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href={item.href}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {item.name}
                  </a>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  </div>
);

const DropDownMenu = ({ item }: ItemType) => (
  <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="inline-flex justify-start gap-x-1.5 w-full py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none hover:text-success hover:underline">
        {item.name}
        <IconChevronDown className="-mr-1 h-5 w-5" aria-hidden="true" />
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
      <Menu.Items className="origin-top-right bg-white absolute block left-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1 divide-y divide-gray-100">
          {item.subMenu?.map((subItem, subIndex) => (
            <Menu.Item key={subIndex}>
              {({ active }) => (
                <a
                  href={subItem.href}
                  className={classNames(
                    active ? "bg-gray-100 text-success" : "text-gray-700",
                    "block px-4 py-3 text-sm hover:text-success"
                  )}
                >
                  {subItem.name}
                </a>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
);

const NavBar = () => {
  const [showUpperDropdown, setShowUpperDropdown] = useState(false);
  const { pathname } = useLocation();
  const isDashboardPage = pathname === "/dashboard";

  const toggleUpperDropdown = () => {
    setShowUpperDropdown(prev => !prev);
  };

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (keyCode === 27) {
        setShowUpperDropdown(false);
      }
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, []);

  if (isDashboardPage) return null;

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-[10000] w-full text-sm py-3 sm:py-0 dark:bg-slate-900">
      <nav
        className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            className="flex-none text-3xl font-semibold"
            to="/"
            aria-label="jhub Brand"
          >
            <LazyLoadImage
              className="w-16 h-16 sm:w-28 sm:h-28"
              effect="blur"
              src={Logo}
              alt="JHUB logo"
            />
          </Link>

          {/* Mobile view */}
          <div className="sm:hidden">
            <button
              type="button"
              onClick={toggleUpperDropdown}
              className="hs-collapse-toggle w-9 h-9 text-main flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.793l2.646-3.147a.5.5 0 1 1 .708.708l-3 3.5a.5.5 0 0 1-.708 0l-3-3.5a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>

        <div className={`sm:flex ${showUpperDropdown ? "block" : "hidden"} flex-col sm:flex-row`}>
          <ul className="flex flex-col gap-y-2 mt-2 sm:mt-0 sm:flex-row sm:gap-x-10 sm:items-center">
            {navTopLinks.map((item, index) => (
              item.subMenu ? (
                <DropDownMenu key={index} item={item} />
              ) : (
                <li key={index}>
                  <Link
                    className="text-gray-700 hover:text-success"
                    to={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            ))}
          </ul>

          <ServicesTab />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
