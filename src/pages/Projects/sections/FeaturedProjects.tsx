import ProjectItem from "../../../components/Projects/ProjectItem";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { classNames } from "../../../utils/classes";
import DLCLaptop from "../../../assets/projects/dlcLaptop.png";
import MushroomFarm from "../../../assets/projects/mushroomFarm.png";
import SearchingGif from "../../../assets/projects/searching.gif";
import AgroManna from "../../../assets/projects/agromanna.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const FeaturedProjects = () => {
  const [projects] = useState({
    "Digital Transformation": [
      {
        tags: [
          "Data Protection Act",
          "Progressive Web Application",
          "Large Language Model",
        ],
        title: "Data Law Companion",
        description:
          "DLC is a comprehensive platform designed to help users navigate the complexities of data protection laws in Kenya, Uganda, and Rwanda. It features a dynamic website with a Large Language Model (LLM)-powered Q&A system, a summarization function, and an interactive chatbot, all aimed at providing precise, region-specific information and fostering efficient user engagement.",
        href: "https://datalawcompanion.org/",
        imageURL: DLCLaptop,
      },
    ],
    "Climate Smart Agriculture": [
      {
        tags: ["Smart Farm"],
        title: "Green Mushroom Smartfarm and Spawns",
        description:
          "Mushroom cultivation to reduce deforestation and create alternate forest income.",
        href: "",
        imageURL: MushroomFarm,
      },
    ],
    "Green Digital Innovation": [
      {
        tags: ["Solar Energy", "Automated Irrigation System",],
        title: "Agro Manna ",
        description:
          "Agro Manna is a sensor-based automated irrigation system for effective use of water in semi-arid areas. It aims at increasing the acreage of farms. Powered by Solar energy",
        href: "https://agromanna.jhubafrica.com/",
        imageURL: AgroManna,
      },
    ],
    "Digital Twin Models": [],
    "Digital Trade": [],
  });

  return (
    <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="block text-3xl font-semibold sm:text-title-xxl dark:text-white">
          Explore our diverse range of innovative products
        </h1>
        <p className="mt-3 text-lg text-secondary-blue dark:text-white">
          From cutting-edge solutions to sustainable innovations, our products
          embody our commitment to excellence, fostering growth and progress in
          every endeavor
        </p>
      </div>

      <div className="">
        <h2 className="mt-12 mb-4 text-2xl font-medium text-success dark:text-white text-center">
          Projects
        </h2>
        <Tab.Group>
          <Tab.List className="flex gap-8 overflow-x-auto">
            {Object.keys(projects).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-2xl py-2 px-4",
                    selected
                      ? "bg-main text-white"
                      : "text-main bg-[#ECEEF1] hover:bg-main/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-2">
            {Object.values(projects).map((projectItems, idx) => (
              <>
                {/* <h3 className="sm:text-title-xl text-3xl font-semibold mb-4 dark:text-white text-center">
                  {ProjectInfo[idx][Object.keys(projects)[idx]].tagline}
                </h3>
                <p className="text-center">
                  {ProjectInfo[idx][Object.keys(projects)[idx]].description}
                </p> */}
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  {projectItems.length > 0 ? (
                    <ul className="space-y-5">
                      {projectItems.map((projectItem) => (
                        <li key={crypto.randomUUID()}>
                          <ProjectItem ProjectItemProps={projectItem} />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div
                      className="flex flex-col gap-4 items-center justify-center py-20"
                      key={crypto.randomUUID()}
                    >
                      <LazyLoadImage
                        effect="blur"
                        src={SearchingGif}
                        alt="Searching gif by ILLI Design on Dribbble"
                        width={450}
                      />
                      <p className="text-center text-main font-semibold text-xl">
                        We're on the look out for new innovations!
                      </p>
                      <p>
                        <Link
                          to="/contact-us"
                          className="underline hover:no-underline text-success"
                        >
                          Contact us
                        </Link>{" "}
                        for more information.
                      </p>
                    </div>
                  )}
                </Tab.Panel>
              </>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default FeaturedProjects;
