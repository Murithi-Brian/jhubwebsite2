//import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Marquee from "react-fast-marquee";
import styles from './hero.module.css';

import { aedibnet, afraken, assek, fundingbox, impactafrica, jkuates, numeraliot, taimba, yatta } from "../../../assets/images/logo";

// Define a type for the partnership logos
type PartnerLogo = {
  name: string;
  logo: string; 
  link: string;
};

// Partner logos data
const partnershipLogos: PartnerLogo[] = [
  { name: "JKUAT Enterprises", logo: jkuates, link: "https://jkuates.co.ke/index.php/" },
  { name: "FundingBox", logo: fundingbox, link: "https://fundingbox.com/" },
  { name: "Impact Africa Network", logo: impactafrica, link: "https://impactafrica.network/" },
  { name: "AEDIB | NET", logo: aedibnet, link: "https://aedibnet.eu/" },
  { name: "TAIMBA", logo: taimba, link: "https://taimba.co.ke/" },
  { name: "NumeralIOT", logo: numeraliot, link: "https://www.numeraliot.com/" },
  { name: "ASSEK", logo: assek, link: "https://assek.ke/" },
  { name: "AFRAKEN", logo: afraken, link: "https://afraken.org/" },
  { name: "Yatta Beekeepers", logo: yatta, link: "https://yattabeekeepers.co.ke/" },
];

export default function CTA() {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaContent}>
        {/* Header Section */}
        <h1 className={styles.ctaHeader}>OUR PARTNERS</h1>

        {/* Partners Section */}
        <div className={styles.partnersContainer}>
          {/* Marquee for Scrolling Logos */}
          <Marquee
            pauseOnHover
            speed={50}
            gradient={false}
            className={styles.marqueeContainer}
          >
            {partnershipLogos.map((partnerLogo) => (
              <a
                key={partnerLogo.name}
                href={partnerLogo.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.partnerLogo}
              >
                <LazyLoadImage
                  effect="blur"
                  className={styles.logoImg}
                  src={partnerLogo.logo}
                  alt={partnerLogo.name}
                />
              </a>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
