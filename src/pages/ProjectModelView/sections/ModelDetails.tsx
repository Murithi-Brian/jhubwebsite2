import { LazyLoadImage } from "react-lazy-load-image-component";
import SampleChallengeImg from "../../../assets/singleProjectView/challengeSample.jpg";
import MidBg from "../../../assets/singleProjectView/mid.png";
import DLCLaptop from "../../../assets/projects/dlcLaptop.png";
import MushroomFarm from "../../../assets/projects/mushroomFarm.png";
import SearchingGif from "../../../assets/projects/searching.gif";
import AgroManna from "../../../assets/projects/agromanna.jpeg";
import IdCoder from "../../../assets/projects/idCoder.png";
import Tuokoleane from "../../../assets/projects/tuokoleane.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectItem from "../../../components/Projects/ProjectItem";
import { IconSeeding } from "@tabler/icons-react";

const ModelDetails = () => {
  const projectItems = [
    // Digital Health
    // Enterprise Business Support
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
    {
      tags: ["Artificial Intelligence", "Collaborative Innovation"],
      title: "Research and Innovators Ecosystem",
      description:
        "The Research and Innovators Ecosystem is an inclusive platform that facilitate collaboration and resource sharing among researchers, scholars, students, and innovators worldwide. The platform has unique AI-powered partner recommendation that help researchers and innovators acquires partners to collaborate with in a project.",
      href: "https://id-coders.jhubafrica.com/",
      imageURL: IdCoder,
    },
  ];

  return (
    <section className="">
      <div className="mx-auto my-4">
        <h2 className="mt-16 mb-4 text-4xl font-medium text-main dark:text-white text-center">
          {/* {Projects} */}
          Climate Smart Agriculture
        </h2>
        {/* <p className="gap-6 text-main text-xs text-center">
          Climate Smart Agriculture / Digital Twin Models / Green Digital
          Innovation / Digital Trade / Digital Transformation
        </p> */}
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

        <article className="flex items-center justify-center py-10 sm:py-20 mx-auto px-4 bg-secondary-background">
          <div className="space-y-4 w-full max-w-screen-xl">
            <h2 className="font-medium text-3xl flex items-center gap-4">
              <IconSeeding className="text-[#6941C6]" />
              Nurturing the Seeds of Tomorrow
            </h2>
            <p>
              In our quest to revolutionize agriculture, we embrace sustainable,
              technology-driven solutions that promise a greener tomorrow.
              Climate Smart Agriculture at JHUB Africa is about more than just
              increasing crop yields; it's about pioneering practices that
              enhance resilience to climate change, optimize resource use, and
              support the well-being of local communities. By leveraging
              advanced analytics, IoT innovations, and smart farming techniques,
              we empower farmers to make informed decisions, ensuring food
              security and environmental sustainability for generations to come.
            </p>
          </div>
        </article>

        {/* Mid section */}
        {/* <article
          className="text-white text-center max-h-[18rem] bg-cover bg-center min-h-[25rem] flex flex-col items-center justify-center w-full gap-8 p-4"
          style={{ backgroundImage: `url(${MidBg})` }}
        >
          <h3 className="font-extrabold text-title-xl text-white">
            Pioneering a Sustainable and Prosperous Future
          </h3>
          <p className="max-w-5xl text-lg">
            Our mission transcends the traditional boundaries of innovation. We
            are committed to harnessing the transformative power of technology
            to foster sustainability and prosperity. Our approach is rooted in
            the development of forward-thinking solutions that address the
            urgent challenges of our time while paving the way for a sustainable
            future.
          </p>
        </article> */}
      </div>
    </section>
  );
};

export default ModelDetails;
