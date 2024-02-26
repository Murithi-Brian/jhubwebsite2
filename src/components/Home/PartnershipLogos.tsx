import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { jkuates, fundingbox, impactafrica, aedibnet, taimba } from "../../assets/images/logo";

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
    <div className="border rounded-md border-gray-300 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Some & Innovative Notabale Brands we Work With.
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {partnershipLogos?.map((partnerLogo, i) => (
            <Link key={i} to={partnerLogo?.link}>
              <LazyLoadImage
                effect="blur"
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={partnerLogo?.logo}
                alt="Transistor"
                width={178}
                height={76}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartnershipLogos;
