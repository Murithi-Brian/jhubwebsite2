import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandTwitter,
} from "@tabler/icons-react";
// import DarkModeSwitcher from "./DarkModeSwitcher";

export default function Footer() {
  const { pathname } = useLocation();

  const isDashboardPage = pathname === "/dashboard";
  const currentYear = new Date().getFullYear();

  return isDashboardPage ? null : (
    <footer className="bg-main text-white">
      <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="mb-8">
          <h2 className="text-white text-4xl font-medium text-center">
            <span className="text-success">INVESTING</span> IN digital future
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
          {/* Logo */}
          <div className="col-span-full hidden lg:col-span-1 lg:block">
            <Link
              className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="/"
              aria-label="Brand"
            >
              JHUB Africa
            </Link>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-white dark:text-gray-100">
              Product
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/jhub-pricing"
                >
                  Pricing
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/"
                >
                  Changelog
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/documentation"
                >
                  Docs
                </Link>
              </p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase dark:text-gray-100">
              Company
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/about-jhub"
                >
                  About us
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/contact-us"
                >
                  Contact Us
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/jhub-events"
                >
                  Events
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/jhub-blog"
                >
                  Blog
                </Link>
              </p>

              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/jhub-admissions"
                >
                  Innovations admission
                </Link>{" "}
                <span className="inline text-meta-3">— join us.</span>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/jhub-partnerships"
                >
                  Partnerships
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/jhub-newsroom"
                >
                  Newsroom
                </Link>
              </p>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase dark:text-gray-100">
              Resources
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/jhub-community"
                >
                  Community
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/help-support"
                >
                  Help & Support
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/jhub-legal"
                >
                  Legal
                </Link>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase dark:text-gray-100">
              Developers
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/jhub-ecosystem"
                >
                  JHUB Africa Ecosystem
                </Link>
              </p>
            </div>

            <h4 className="mt-7 text-xs font-semibold text-white uppercase dark:text-gray-100">
              Industries
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/jhub-agriculture-solutions"
                >
                  Agriculture
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/jhub-energy-solutions"
                >
                  Energy
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/jhub-education-training"
                >
                  Education & Training
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/jhub-innovation"
                >
                  Innovation Ecosystem
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/jhub-tech-sustainability"
                >
                  Technology & Sustainability
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
          <div className="sm:flex sm:justify-between sm:items-center sm:space-y-0 space-y-4">
            <div className="flex justify-between items-center gap-x-3">
              <div className="space-x-4 text-sm ms-4">
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/jhub-terms"
                >
                  Terms
                </Link>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/jhub-privacy"
                >
                  Privacy
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">
                © {currentYear} All rights reserved
              </p>
            </div>

            <div className="space-x-4 flex justify-center items-center">
              {/* <DarkModeSwitcher /> */}
              <a href="https://twitter.com/JHUBAfrica" target="_blank">
                <IconBrandTwitter />{" "}
              </a>
              <a
                href="https://www.facebook.com/people/JHUB-Africa/61554202584585/"
                target="_blank"
              >
                <IconBrandFacebook />
              </a>
              <a href="https://www.linkedin.com/in/jhubafrica/" target="_blank">
                <IconBrandLinkedin />
              </a>

              <a href="https://www.tiktok.com/@jhubafrica" target="_blank">
                <IconBrandTiktok />
              </a>
              <a href="https://www.instagram.com/jhubafrica/" target="_blank">
                <IconBrandInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
