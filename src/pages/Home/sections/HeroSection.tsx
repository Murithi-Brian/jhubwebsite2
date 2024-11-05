import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import HeroVideo from "../../../assets/images/hero-video.mp4"; // Replace with your video file path
import Marquee from "react-fast-marquee";
import { aedibnet, afraken, assek, fundingbox, impactafrica, jkuates, numeraliot, taimba, yatta } from "../../../assets/images/logo";

// Partner logos data
export const partnershipLogos = [
  {
    name: "JKUAT Enterprises",
    logo: jkuates,
    link: "https://jkuates.co.ke/index.php/",
  },
  {
    name: "FundingBox",
    logo: fundingbox,
    link: "https://fundingbox.com/",
  },
  {
    name: "Impact Africa Network",
    logo: impactafrica,
    link: "https://impactafrica.network/",
  },
  {
    name: "AEDIB | NET",
    logo: aedibnet,
    link: "https://aedibnet.eu/",
  },
  {
    name: "TAIMBA",
    logo: taimba,
    link: "https://taimba.co.ke/",
  },
  {
    name: "NumeralIOT",
    logo: numeraliot,
    link: "https://www.numeraliot.com/",
  },
  {
    name: "ASSEK",
    logo: assek,
    link: "https://assek.ke/",
  },
  {
    name: "AFRAKEN",
    logo: afraken,
    link: "https://afraken.org/",
  },
  {
    name: "Yatta Beekeepers",
    logo: yatta,
    link: "https://yattabeekeepers.co.ke/",
  },
];

export function PartnershipLogos() {
  return (
    <Marquee
      pauseOnHover
      pauseOnClick
      className="mt-10 flex gap-16 items-end w-full"
    >
      {partnershipLogos?.map((partnerLogo) => (
        <a
          key={crypto.randomUUID()}
          href={partnerLogo?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-16"
        >
          <LazyLoadImage
            effect="blur"
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={partnerLogo?.logo}
            alt={partnerLogo?.name}
          />
        </a>
      ))}
    </Marquee>
  );
}

// Main landing hero section component
function LandingHeroSection() {
  return (
    <div className="relative w-[97%] mx-auto px-4 sm:px-6 lg:px-8 mt-10"> 
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          className="w-full h-full object-cover"
        >
          <source src={HeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-[80vh] py-20 bg-gradient-to-b from-black to-transparent bg-opacity-50">
        <h1 className="text-5xl font-extrabold sm:text-title-xxl text-white leading-tight text-center shadow-lg">
          Empowering Africa’s Innovators
        </h1>
        <p className="mt-4 text-lg text-white leading-tight text-center max-w-md shadow-lg">
          We are a one-stop hub offering a comprehensive array of digital solutions for societal needs.
        </p>

        <div className="flex gap-4 mt-6">
          <Link
            className="inline-flex justify-center items-center gap-x-2 bg-success py-3 px-6 text-sm font-semibold text-white rounded-full shadow-md transition duration-300 ease-in-out transform hover:bg-white hover:text-success hover:scale-105"
            to="/about"
          >
            Learn More
          </Link>
          <Link
            className="inline-flex justify-center items-center gap-x-2 border border-white py-3 px-6 text-sm font-semibold text-white rounded-full shadow-md transition duration-300 ease-in-out transform hover:bg-white hover:text-success hover:scale-105"
            to="/get-involved"
          >
            Get Involved
          </Link>
        </div>
      </div>

    
    </div>
  );
}

export default LandingHeroSection;
