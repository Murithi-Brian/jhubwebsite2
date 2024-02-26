import {
  IconAddressBook,
  IconCalendarEvent,
  IconAffiliate,
  IconUsers,
} from "@tabler/icons-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const communityHighlights = [
  {
    title: "Network",
    content: `We serve the technology community, by connecting organizations and people, building market-relevant solutions 
      and being ahead of the curve of innovation. Connect with like-minded innovation actors, partners, and investors.`,
    imageSrc: `/images/community/jhub-team-001.jpg`,
    icon: <IconAffiliate />,
    buttonText: "Explore Now",
  },
  {
    title: "Communities",
    content: `We recognise that the driving force of a space like JHUB is in the inclusivity of the community and in collaboration. We provider
      a virtual space for innovators and stakeholders to connect and build sustainabler digital ecosystems.`,
    imageSrc: `/images/community/jhub-team-002.jpg`,
    icon: <IconUsers />,
    buttonText: "Join",
  },
  {
    title: "Events",
    content: `We offer a variety of online events to nurture the culture of innovation.
      Discover and attend local tech events organized by JHub that matches your passion`,
    imageSrc: `/images/community/jhub-team-013.jpg`,
    icon: <IconCalendarEvent />,
    buttonText: "Register",
  },
  {
    title: "Resources Library",
    content:
      "Here, you will find interesting resources we have created or discovered, from white papers to webinars and videos, to courses and training toolkits.",
    imageSrc: `/images/community/jhub-team-001.jpg`,
    icon: <IconAddressBook />,
    buttonText: "Get Inspired",
  },
];

const HighlightCard = ({
  imageSrc,
  icon,
  title,
  content,
  buttonText,
}: {
  imageSrc: string;
  icon: React.ReactNode;
  title: string;
  content: string;
  buttonText: string;
}) => {
  return (
    <div className="w-full mx-auto border border-gray-200 dark:bg-boxdark-2 dark:text-bodydark bg-white 00 shadow-lg rounded-lg overflow-hidden mb-8 flex flex-col h-full">
      <div className="relative h-48 w-full dark:bg-slate-900">
        <LazyLoadImage
          effect="blur"
          src={imageSrc}
          alt={title}
          className="rounded-t-lg object-cover"
        />
      </div>
      <div className="w-full flex-grow p-6 flex flex-col justify-between">
        <div>
          <div className="flex flex-col gap-4 justify-start items-start mb-2">
            {icon}
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white ml-2">
              {title}
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{content}</p>
        </div>
        <div className="flex justify-between items-center">
          <span></span>
          <Link to={"/jhub-events"}>
            <button
              type="button"
              className="mt-4 bg-primary hover:bg-blue-600 text-white py-2 px-4 md:py-3 md:px-5 rounded-md"
            >
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CommunityHighlights = () => {
  return (
    <div className="my-8 w-full">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4 ml-8">
        Community Highlights
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 w-full">
        {communityHighlights.map((highlight, index) => (
          <HighlightCard
            key={index}
            imageSrc={highlight?.imageSrc}
            icon={highlight?.icon}
            title={highlight?.title}
            content={highlight?.content}
            buttonText={highlight?.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityHighlights;
