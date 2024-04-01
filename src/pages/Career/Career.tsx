import { useEffect, useState } from "react";
import { sanityClient } from "../../utils/sanityClient";
import { IconArrowUpRight } from "@tabler/icons-react";

type CareerType = {
  title: string;
  slug: string;
  body: {
    asset: {
      _id: string;
      url: string;
    };
  };
  publishedAt: string;
};

const Career = () => {
  const [CareerData, setCareerData] = useState<CareerType[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "career"]{
          title,
          slug,
          body{
            asset->{
              _id,
              url
            }
          },
          publishedAt,
        }`
      )
      .then((data) => {
        setCareerData(data);
        console.log("single post", data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h1 className="block text-3xl font-semibold sm:text-title-xxl dark:text-white">
          Job Opportunities
        </h1>
        <p className="mt-3 text-lg text-secondary-blue dark:text-white">
          We're Hiring!
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto py-10 bg-secondary-background">
        {CareerData &&
          CareerData.map((career) => (
            <div
              key={career.slug}
              className="bg-white py-10 max-w-6xl mb-4 px-10 mx-auto rounded flex justify-between items-center"
            >
              <p className="text-xl font-semibold capitalize mb-4 w-1/2">
                {career.title}
              </p>
              <a
                className="bg-primary text-white border hover:border-primary hover:text-primary hover:bg-transparent font-bold gap-3 px-4 py-4 rounded-lg flex"
                href={career.body.asset.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Job Listing <IconArrowUpRight />
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Career;
