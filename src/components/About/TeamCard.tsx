import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const TeamCard = (TeamMember: {
  memberImageUrl: string;
  memberName: string;
  memberRole: string;
  description: string;
  twitterLink: string;
  facebookLink: string;
  linkedInLink: string;
}) => {
  return (
    <div className="rounded my-4 shadow-md dark:bg-boxdark-2 dark:text-bodydark bg-white">
      <div className="mx-auto h-fit w-fit mt-4">
        <LazyLoadImage
          effect="blur"
          src={TeamMember?.memberImageUrl}
          alt={TeamMember?.memberName}
          className="object-cover h-72 w-72  rounded-full"
          //   width={200}
          //   height={300}
        />
      </div>
      <div className="px-6 mt-16">
        <div>
          <p className="font-semibold text-lg pb-1 text-graydark">
            {TeamMember?.memberName}
          </p>
          <p className="text-primary-purple dark:text-bodydark text-base">
            {TeamMember?.memberRole}
          </p>
          <p className="text-gray text-base pt-3 font-normal">
            {TeamMember?.description}
          </p>
        </div>
        <div className="w-full flex gap-4 py-5">
          {TeamMember?.twitterLink !== "" && (
            <a href={TeamMember?.twitterLink}>
              <div className="text-[#71839B]">
                <IconBrandTwitter />
              </div>
            </a>
          )}
          {TeamMember?.facebookLink !== "" && (
            <a href={TeamMember?.facebookLink}>
              <div className="text-[#71839B]">
                <IconBrandFacebook />
              </div>
            </a>
          )}
          <a href={TeamMember?.linkedInLink}>
            <div className="text-[#71839B]">
              <IconBrandLinkedin />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
