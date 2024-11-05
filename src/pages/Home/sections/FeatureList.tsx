import {
  IconAB,
  IconCash,
  IconBulb,
  IconDeviceLaptop,
  IconStarsFilled,
  IconRocket,
} from "@tabler/icons-react";
import { PartnershipLogos } from "./HeroSection";

const featureList = [
  {
    title: "Support To Find Investment",
    icon: (
      <IconCash size={"40px"} className="text-success dark:text-gray-400" />
    ),
    description:
      "We provide dedicated support to help you find the right investments for your digital initiatives.",
  },
  {
    title: "Digital Innovation Hub",
    icon: (
      <IconBulb size={"40px"} className="text-success dark:text-gray-400" />
    ),
    description:
      "Our platform provides a collaborative space for visionaries to incubate, and implement digital solutions.",
  },
  {
    title: "Skills and Training",
    icon: (
      <IconStarsFilled
        size={"40px"}
        className="text-success dark:text-gray-400"
      />
    ),
    description:
      "We offer comprehensive skills development and training programs to enhance digital literacy and proficiency.",
  },
  {
    title: "Facilitating Technology Transfer",
    icon: (
      <IconRocket size={"40px"} className="text-success dark:text-gray-400" />
    ),
    description:
      "JHUB serves as a catalyst for technology transfer, facilitating the seamless exchange of knowledge.",
  },
  {
    title: "Test Before Invest",
    icon: <IconAB size={"40px"} className="text-success dark:text-gray-400" />,
    description:
      "Before you make significant investments, we offer a comprehensive testing framework to evaluate the viability of digital solutions.",
  },
  {
    title: "Diffusion of New Technologies",
    icon: (
      <IconDeviceLaptop
        size={"40px"}
        className="text-success dark:text-gray-400"
      />
    ),
    description:
      "Our experts work tirelessly to bridge the gap between innovation and implementation, ensuring that technologies become accessible.",
  },
];

export default function FeatureList() {
  return (
    <section className="sm:my-20 dark:bg-gray-900 max-w-[80rem] mx-auto py-20">
      <div className="mb-8 text-center">
        <h2 className="mb-4 text-xl font-medium text-success dark:text-white">
          Services
        </h2>
        <h3 className="text-3xl font-bold mb-4 dark:text-white">
          The Best Digital Solutions
        </h3>
        <p className="sm:text-lg dark:text-gray-400">
          At JHUB, we are dedicated to fostering innovation and transforming digital landscapes. Experience the power of technology-driven solutions with JHUB, where every service is tailored to meet the dynamic needs of a rapidly evolving digital era.
        </p>
      </div>

      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        {featureList.map((feature) => (
          <div className="flip-card bg-transparent" key={crypto.randomUUID()}>
            <div className="flip-card-inner">
              <div className="flip-card-front flex flex-col justify-center items-center bg-card-grey z-[2] p-6 transition-transform duration-500 transform hover:scale-105">
                <div className="flex justify-center items-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 dark:text-white">
                  {feature.title}
                </h4>
              </div>
              <div className="flip-card-back flex flex-col justify-center items-center z-1 bg-card-grey p-6 transition-transform duration-500 transform hover:scale-105">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

     

      <style>
        {`
          .flip-card {
            width: 100%;
            perspective: 1000px;
            margin: 0 auto; /* Center the card */
          }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }
          .flip-card-front,
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            border-radius: 0.5rem; /* Rounded corners */
          }
          .flip-card-back {
            transform: rotateY(180deg);
          }
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
        `}
      </style>
    </section>
  );
}
