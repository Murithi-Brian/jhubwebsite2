import { useState, Fragment } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useLocation } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import { IconChevronDown } from "@tabler/icons-react";
import Logo from "../../assets/images/logo/jhub-logo-new.svg";

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

const navLinks = [
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
  {
    name: "Services",
    href: "/services",
    subMenu: [
      { name: "Request Consultation", href: "/consultancy" },
      { name: "Propose a Service", href: "/contact-us" },
    ],
  },
  { name: "Blog", href: "/blog" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/official.techhub.community",
    icon: IoLogoFacebook,
  },
  {
    href: "https://www.instagram.com/techhub_community/",
    icon: IoLogoInstagram,
  },
  {
    href: "https://www.twitter.com/_techhub/",
    icon: IoLogoTwitter,
  },
  {
    href: "https://www.linkedin.com/company/techhub-community",
    icon: IoLogoLinkedin,
  },
];

const DropDownMenu = ({ item }: ItemType) => (
  <Menu as="div" className="relative">
    <Menu.Button className="flex items-center text-blue-900 hover:text-green-600 font-semibold">
      {item.name}
      <IconChevronDown className="ml-1 h-4 w-4" />
    </Menu.Button>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10">
        {item.subMenu?.map((subItem, subIndex) => (
          <Menu.Item key={subIndex}>
            {({ active }) => (
              <Link
                to={subItem.href}
                className={`block px-4 py-2 text-sm ${
                  active ? "text-green-600" : "text-gray-700"
                }`}
              >
                {subItem.name}
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Transition>
  </Menu>
);

const NavBar = () => {
  const { pathname } = useLocation();
  const isDashboardPage = pathname === "/dashboard";
  const [menuOpen, setMenuOpen] = useState(false);

  if (isDashboardPage) return null;

  return (
    <header className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center text-4xl font-bold text-green-800">
          <LazyLoadImage 
            src={Logo} 
            alt="JHUB Logo" 
            className="w-24 h-24 mr-2" 
          />
        </Link>


        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((item, index) =>
            item.subMenu ? (
              <DropDownMenu key={index} item={item} />
            ) : (
              <Link
                key={index}
                to={item.href}
                className="text-blue-900 hover:text-green-600 font-semibold"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        {/* Social Links */}
        <div className="hidden md:flex space-x-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 hover:text-green-500 text-xl"
            >
              <link.icon />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 md:hidden">
          <ul className="space-y-4">
            {navLinks.map((item, index) =>
              item.subMenu ? (
                <DropDownMenu key={index} item={item} />
              ) : (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="block text-blue-900 hover:text-green-600 font-semibold"
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
