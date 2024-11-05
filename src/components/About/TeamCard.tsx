import { useState } from "react";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const TeamCard = ({
  memberImageUrl,
  memberName,
  memberRole,
  description,
  twitterLink,
  facebookLink,
  linkedInLink,
}: {
  memberImageUrl: string;
  memberName: string;
  memberRole: string;
  description: string;
  twitterLink: string;
  facebookLink: string;
  linkedInLink: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const characterLimit = 80; // Reduced character limit for more compact card

  const truncatedDescription =
    description.length > characterLimit && !isExpanded
      ? `${description.slice(0, characterLimit)}...`
      : description;

  return (
    <div className="rounded-lg shadow-md dark:bg-boxdark-2 dark:text-bodydark bg-white max-w-[18rem] mx-auto my-3 transform transition duration-300 hover:scale-105 hover:shadow-lg flex flex-col h-full">
      <div className="mx-auto mt-4 w-28 h-28">
        <LazyLoadImage
          effect="blur"
          src={memberImageUrl}
          alt={memberName}
          className="object-cover w-28 h-28 rounded-full"
        />
      </div>
      <div className="px-4 mt-4 text-center flex flex-col flex-grow">
        <div className="flex-grow">
          <p className="font-semibold text-sm text-gray-800 dark:text-white">
            {memberName}
          </p>
          <p className="text-primary-purple dark:text-primary-light text-xs font-medium">
            {memberRole}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-xs mt-2">
            {truncatedDescription}
            {description.length > characterLimit && (
              <span
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary cursor-pointer ml-1"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </span>
            )}
          </p>
        </div>

        <div className="flex justify-center gap-2 mt-3 mb-3">
          {twitterLink && (
            <a href={twitterLink} target="_blank" rel="noopener noreferrer">
              <IconBrandTwitter className="text-gray-500 hover:text-primary transition" size={18} />
            </a>
          )}
          {facebookLink && (
            <a href={facebookLink} target="_blank" rel="noopener noreferrer">
              <IconBrandFacebook className="text-gray-500 hover:text-primary transition" size={18} />
            </a>
          )}
          {linkedInLink && (
            <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
              <IconBrandLinkedin className="text-gray-500 hover:text-primary transition" size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
