import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import HeroImg from "../../../assets/images/hero-img-innovation-hub.jpg";
import {
  jkuates,
  fundingbox,
  impactafrica,
  aedibnet,
  taimba,
} from "../../../assets/images/logo";
import Marquee from "react-fast-marquee";

export const partnershipLogos = [
  {
    name: "JKUAT Enterprises",
    logo: jkuates,
    description: "",
    link: "https://jkuates.co.ke/index.php/",
    // description: `A trailblazer in industry innovation, JKUAT Enterprises pioneers the creation and
    // global commercialization of cutting-edge, research-based solutions. From product innovation to
    // emerging technologies, training, and consultancy, we push boundaries to shape the future, contributing
    // significantly to various industries.`
  },
  {
    name: "FundingBox",
    logo: fundingbox,
    link: "https://fundingbox.com/",
    description: "",
    // description: `At FundingBox, we're not just fostering growth; We are #FundingChampions in every corner of our dynamic ecosystem.
    // Join the ranks of #FundingChampions with FundingBox, where growth meets opportunity. Elevate your trajectory and redefine your future
    // with accessible funding opportunities, exclusive partnerships with global brands.`
  },
  {
    name: "Impact Africa Network",
    logo: impactafrica,
    link: "https://impactafrica.network/",
    description: "",
    // description: `At FundingBox, we're not just fostering growth; We are #FundingChampions in every corner of our dynamic ecosystem.
    // Join the ranks of #FundingChampions with FundingBox, where growth meets opportunity. Elevate your trajectory and redefine your future
    // with accessible funding opportunities, exclusive partnerships with global brands.`
  },
  // ian-logo.png
  {
    name: "AEDIB | NET",
    logo: aedibnet,
    link: "https://aedibnet.eu/",
    description: "",
    // description: `AEDIB|NET aims to fortify a shared African-European digital innovation ecosystem, supporting local digital
    // innovation and start-up ecosystems in Africa. AEDIB|NET mission includes facilitating collaboration between European and African DIHs,
    // contributing to the growth and advancement of digital initiatives that build and prepare new ventures emerging on the continents.`
  },
  {
    name: "TAIMBA",
    logo: taimba,
    link: "https://taimba.co.ke/",
    description: "",
    // description: `Taimba is dedicated to establishing enduring and impactful relationships between farmers and retailers. We realize this
    // vision through an innovative mobile-based cashless business-to-business platform connecting farmers directly to retailers. Our approach
    // revolutionizes the agricultural supply chain, fostering efficiency and sustainability in the farming industry.`
  },
];

function PartnershipLogos() {
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

function LandingHeroSection() {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 text-center z-0">
      <div className="lg:col-span-3">
        <h1 className="block text-3xl font-semibold sm:text-title-xxl dark:text-white">
          Empowering Innovators: Welcome to the Creative Community of JHUB
        </h1>
        <p className="mt-3 text-lg text-secondary-blue dark:text-white">
          We are a one-stop hub offering comprehensive array of digital
          solutions for societal needs
        </p>

        <Link
          className="mt-4 w-full sm:w-54 bg-success py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-2xl border border-success hover:bg-transparent hover:text-success text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          to="/about"
        >
          Get Started
        </Link>
      </div>

      <div className="mt-10">
        <LazyLoadImage
          effect="blur"
          className="w-full rounded-xl"
          src={HeroImg}
          alt="Image Description"
        />
      </div>
      <PartnershipLogos />
    </div>
  );
}

export default LandingHeroSection;
