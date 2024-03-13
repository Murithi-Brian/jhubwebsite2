import ProjectItem from "../../../components/Projects/ProjectItem";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { classNames } from "../../../utils/classes";
import DLCMobile from "../../../assets/projects/dlcMobile.png";
import DLCLaptop from "../../../assets/projects/dlcLaptop.png";
import DLCTablet from "../../../assets/projects/dlcTablet.png";

const FeaturedProjects = () => {
  const [projects] = useState({
    "Digital Twin Models": [
      {
        tags: [
          "Data Protection Act",
          "Web Application",
          "Large Language Model",
        ],
        title: "Data Law Companion",
        description:
          "Less Doing, More Living was a conference about productivity and entrepreneurship hosted by Ari Meisel, author of two bestselling books: “The Art of Less Doing” and “The Replaceable Founder”.",
        href: "/data-law-companion",
        imageURL: DLCTablet,
      },
    ],
    "Client Smart Agriculture": [
      {
        tags: ["Creative Direction", "UI/UX", "Website Design", "Icon Design"],
        title: "PMR — online platform & responsive website design",
        description:
          "Less Doing, More Living was a conference about productivity and entrepreneurship hosted by Ari Meisel, author of two bestselling books: “The Art of Less Doing” and “The Replaceable Founder”.",
        href: "/data-law-companion",
        imageURL: DLCTablet,
      },
      {
        tags: ["Creative Direction", "UI/UX", "Website Design", "Icon Design"],
        title: "PMR — online platform & responsive website design",
        description:
          "Less Doing, More Living was a conference about productivity and entrepreneurship hosted by Ari Meisel, author of two bestselling books: “The Art of Less Doing” and “The Replaceable Founder”.",
        href: "/data-law-companion",
        imageURL: DLCMobile,
      },
      {
        tags: ["Creative Direction", "UI/UX", "Website Design", "Icon Design"],
        title: "PMR — online platform & responsive website design",
        description:
          "Less Doing, More Living was a conference about productivity and entrepreneurship hosted by Ari Meisel, author of two bestselling books: “The Art of Less Doing” and “The Replaceable Founder”.",
        href: "/data-law-companion",
        imageURL: DLCLaptop,
      },
    ],

    "Green Digital Innovation": [
      {
        tags: ["Creative Direction", "UI/UX", "Website Design", "Icon Design"],
        title: "PMR — online platform & responsive website design",
        description:
          "Less Doing, More Living was a conference about productivity and entrepreneurship hosted by Ari Meisel, author of two bestselling books: “The Art of Less Doing” and “The Replaceable Founder”.",
        href: "/data-law-companion",
        imageURL: DLCMobile,
      },
      {
        tags: ["Creative Direction", "UI/UX", "Website Design", "Icon Design"],
        title: "PMR — online platform & responsive website design",
        description:
          "Less Doing, More Living was a conference about productivity and entrepreneurship hosted by Ari Meisel, author of two bestselling books: “The Art of Less Doing” and “The Replaceable Founder”.",
        href: "/data-law-companion",
        imageURL: DLCLaptop,
      },
    ],
    "Digital Trade": [
      {
        tags: ["Creative Direction", "UI/UX", "Website Design", "Icon Design"],
        title: "PMR — online platform & responsive website design",
        description:
          "Less Doing, More Living was a conference about productivity and entrepreneurship hosted by Ari Meisel, author of two bestselling books: “The Art of Less Doing” and “The Replaceable Founder”.",
        href: "/data-law-companion",
        imageURL: DLCMobile,
      },
    ],
  });

  // const ProjectInfo = {
  //   "Digital Twin Models": {
  //     tagline: "Creating Realities in Digital Dimensions",
  //     description:
  //       "JHUB Africa stands at the forefront of digital replication, where our Digital Twin Models redefine the boundaries between the physical and digital realms. These models are not mere simulations; they are dynamic, real-time reflections that offer unprecedented insights and predictive analytics across industries. From urban planning to healthcare, manufacturing to energy management, our digital twins serve as powerful tools for decision-making, efficiency enhancement, and innovative problem-solving, driving progress and resilience in an ever-changing world.",
  //   },

  //   "Client Smart Agriculture": {
  //     tagline: "Nurturing the Seeds of Tomorrow",
  //     description:
  //       "In our quest to revolutionize agriculture, we embrace sustainable, technology-driven solutions that promise a greener tomorrow. Climate Smart Agriculture at JHUB Africa is about more than just increasing crop yields; it's about pioneering practices that enhance resilience to climate change, optimize resource use, and support the well-being of local communities. By leveraging advanced analytics, IoT innovations, and smart farming techniques, we empower farmers to make informed decisions, ensuring food security and environmental sustainability for generations to come.",
  //   },

  //   "Green Digital Innovation": {
  //     tagline: "Technology in Harmony with Nature",
  //     description:
  //       "Our commitment to Green Digital Innovation is a testament to our belief that technology should work in harmony with nature. At JHUB Africa, we are dedicated to developing solutions that minimize the ecological footprint of digital technologies, promote energy efficiency, and encourage the sustainable use of resources. From eco-friendly computing practices to the development of green applications, our initiatives aim to foster an environmentally conscious digital ecosystem, ensuring that technological advancement contributes positively to the health of our planet.",
  //   },

  //   "Digital Trade": {
  //     tagline: "Empowering Global Commerce through Innovation",
  //     description:
  //       "Recognizing the transformative potential of digitalization in trade, JHUB Africa is dedicated to dismantling barriers and creating new pathways for global commerce. Our focus on Digital Trade is about more than facilitating transactions; it's about building a more inclusive, efficient, and transparent trade ecosystem. By leveraging cutting-edge technologies such as blockchain, artificial intelligence, and e-commerce platforms, we empower African businesses to access international markets, driving economic growth and digital inclusion across the continent.",
  //   },
  // };

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
        <h2 className="mt-12 mb-4 text-xl font-medium text-success dark:text-white text-center">
          Projects
        </h2>
        <Tab.Group>
          <Tab.List className="flex gap-8">
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
                  <ul className="space-y-5">
                    {projectItems.map((projectItem) => (
                      <li key={crypto.randomUUID()}>
                        <ProjectItem ProjectItemProps={projectItem} />
                      </li>
                    ))}
                  </ul>
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
