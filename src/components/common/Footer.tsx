import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Logo from "../../assets/images/logo/jhub-logo-new.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

type FooterLinks = {
  name: string;
  href: string;
};

function renderLinks(links: FooterLinks[]) {
  return links.map((link, index) => (
    <p key={index}>
      <Link
        className="inline-flex gap-x-2 text-gray-600 hover:text-success hover:underline dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        to={link.href}
      >
        {link.name}
      </Link>
    </p>
  ));
}

const serviceLinks = [
  { name: "Consultancy", href: "/consultancy" },
  { name: "Training and Courses", href: "/courses" },
];

const companyLinks = [
  { name: "About us", href: "/about" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Events", href: "/events" },
  { name: "Career", href: "/career" },
  // { name: "Innovations admission — join us.", href: "/admissions" },
];

const resourceLinks = [
  { name: "Legal", href: "/cookie-policy" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "FAQ", href: "/faq" },
  { name: "Documentation", href: "/documentation" },
];

const projectLinks = [
  {
    name: "Climate Smart Agriculture",
    href: "/projects/digital-transformation",
  },
  { name: "Digital Twin Models", href: "/projects/climate-smart-agriculture" },
  {
    name: "Green Digital Innovation",
    href: "/projects/green-digital-innovation",
  },
  { name: "Digital Trade", href: "/projects/digital-twin-models" },
  { name: "Digital Transformation", href: "/projects/digital-trade" },
];

export default function Footer() {
  const { pathname } = useLocation();

  const isDashboardPage = pathname === "/dashboard";
  const currentYear = new Date().getFullYear();

  if (isDashboardPage) {
    return null;
  }

  return (
    <footer className="bg-main text-white">
      <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="mb-8">
          <h2 className="text-white text-4xl font-medium text-center">
            <span className="text-success">INVESTING</span> IN digital future
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
          {/* Logo */}
          <div className="col-span-full lg:col-span-1">
            <Link
              className="hidden lg:block flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="/"
              aria-label="Brand"
            >
              <LazyLoadImage effect="blur" src={Logo} alt="JHUB Africa" />
            </Link>
            {/* social media */}
            <div className="space-x-4 flex justify-center items-center">
              {/* <DarkModeSwitcher /> */}
              <a
                href="https://twitter.com/JHUBAfrica"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandTwitter />{" "}
              </a>
              <a
                href="https://www.youtube.com/channel/UCHN-H46LsYBXPGoOOsw4ffQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandYoutube />{" "}
              </a>
              <a
                href="https://www.facebook.com/people/JHUB-Africa/61554202584585/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandFacebook />
              </a>
              <a
                href="https://www.linkedin.com/company/jhubafrica/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandLinkedin />
              </a>

              <a
                href="https://www.tiktok.com/@jhubafrica"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandTiktok />
              </a>
              <a
                href="https://www.instagram.com/jhubafrica/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandInstagram />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-white dark:text-gray-100">
              Services
            </h4>
            <div className="mt-3 grid space-y-3 text-base">
              {renderLinks(serviceLinks)}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase dark:text-gray-100">
              Company
            </h4>
            <div className="mt-3 grid space-y-3 text-base">
              {renderLinks(companyLinks)}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase dark:text-gray-100">
              Resources
            </h4>
            <div className="mt-3 grid space-y-3 text-base">
              {renderLinks(resourceLinks)}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase dark:text-gray-100">
              Projects
            </h4>
            <div className="mt-3 grid space-y-3 text-base">
              {renderLinks(projectLinks)}
            </div>
          </div>
        </div>

        <div className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
          <div className="sm:flex sm:justify-between sm:items-center sm:space-y-0 space-y-4">
            <div className="flex justify-center sm:justify-between items-center gap-x-3">
              <div className="space-x-4 text-base ms-4">
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-success hover:underline dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/legal"
                >
                  Terms
                </Link>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-success hover:underline dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/legal"
                >
                  Privacy
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs sm:text-base text-gray-600 dark:text-gray-400 text-center">
                © {currentYear} All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
