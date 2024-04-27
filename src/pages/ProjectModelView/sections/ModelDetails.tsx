import { LazyLoadImage } from "react-lazy-load-image-component";
import SearchingGif from "../../../assets/projects/searching.gif";
import { Link } from "react-router-dom";
import ProjectItem from "../../../components/Projects/ProjectItem";
import { ModelType } from "../../../types/project";
import { PortableText } from "@portabletext/react";
import { ModelViewComponents } from "../../../components/Blog/CustomComponents";

const ModelDetails = ({ ProjectItems }: { ProjectItems: ModelType[] }) => {
  return (
    <section className="">
      <div className="mx-auto my-4">
        <h2 className="mt-16 mb-4 text-4xl font-medium text-main dark:text-white text-center">
          {/* {ProjectItems[0].categories[0].title} */}
          Explore our innovative products
        </h2>
        {ProjectItems.length > 0 ? (
          <ul className="space-y-5">
            {ProjectItems.map((projectItem, idx) => (
              <li key={crypto.randomUUID()}>
                <ProjectItem ProjectItemProps={projectItem} index={idx} />
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
            <PortableText
              value={ProjectItems[0].categories[0].description}
              components={ModelViewComponents}
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default ModelDetails;
