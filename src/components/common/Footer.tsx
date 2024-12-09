//import Link from "next/link";
//import React from "react";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTiktok, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo/jhub-logo.png";


type FooterLinks = {
  name: string;
  href: string;
};

function renderLinks(links: FooterLinks[]) {
  return links.map((link, index) => (
    <li key={index}>
      <Link
        className="block text-gray-600 hover:text-success hover:underline dark:text-gray-400 dark:hover:text-gray-200"
        to={"link.href"}      >
        {link.name}
      </Link>
    </li>
  ));
}

const serviceLinks = [
  { name: "Consultancy", href: "/consultancy" },
  { name: "Training and Courses", href: "/courses" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Events", href: "/events" },
  { name: "Career", href: "/career" },
];

const resourceLinks = [
  { name: "Legal", href: "/cookie-policy" },
  { name: "FAQ", href: "/faq" },
  { name: "Documentation", href: "/documentation" },
];

const projectLinks = [
  { name: "Climate Smart Agriculture", href: "/projects/digital-transformation" },
  { name: "Digital Twin Models", href: "/projects/climate-smart-agriculture" },
  { name: "Green Digital Innovation", href: "/projects/green-digital-innovation" },
  { name: "Digital Trade", href: "/projects/digital-twin-models" },
  { name: "Digital Transformation", href: "/projects/digital-trade" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
          className="bg-white text-black py-10" 
          style={{ boxShadow: "0 -4px 6px -1px rgba(0, 0, 0, 0.1)" }}
        >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-start">
          {/* Logo and social media icons */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <Link to="/" className="mb-4">
              <LazyLoadImage src={Logo} alt="JHUB Africa Logo" effect="blur" className="w-32 md:w-40" />
            </Link>
            <div className="flex space-x-4">
              <a href="https://twitter.com/JHUBAfrica" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <IconBrandTwitter />
              </a>
              <a href="https://www.youtube.com/channel/UCHN-H46LsYBXPGoOOsw4ffQ" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <IconBrandYoutube />
              </a>
              <a href="https://www.facebook.com/people/JHUB-Africa/61554202584585/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <IconBrandFacebook />
              </a>
              <a href="https://www.linkedin.com/company/jhubafrica/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <IconBrandLinkedin />
              </a>
              <a href="https://www.tiktok.com/@jhubafrica" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <IconBrandTiktok />
              </a>
              <a href="https://www.instagram.com/jhubafrica/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <IconBrandInstagram />
              </a>
            </div>
          </div>

          {/* Footer navigation links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Services</h4>
              <ul className="space-y-2">
                {renderLinks(serviceLinks)}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Company</h4>
              <ul className="space-y-2">
                {renderLinks(companyLinks)}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Resources</h4>
              <ul className="space-y-2">
                {renderLinks(resourceLinks)}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Projects</h4>
              <ul className="space-y-2">
                {renderLinks(projectLinks)}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <div className="flex justify-between items-center">
            <p className="text-sm">© {currentYear} JHUB Africa. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms</Link>
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
