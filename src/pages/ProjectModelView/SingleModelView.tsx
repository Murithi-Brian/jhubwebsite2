import ModelDetails from "./sections/ModelDetails";
import SingleModelHero from "./sections/SingleModelHero";
import { useEffect, useState } from "react";
import { sanityClient } from "../../utils/sanityClient";
import { Link, useParams } from "react-router-dom";
import { urlFor } from "../../components/Blog/CustomComponents";
import { ModelTitleType, ModelType } from "../../types/project";
import SearchingGif from "../../assets/projects/searching.gif";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SingleModelView = () => {
  const [modelData, setModelData] = useState<ModelType[] | null>(null);
  const [modelTitle, setModelTitle] = useState<ModelTitleType | null>(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "projectCategory" && slug.current == "${slug}"] {
          slug,
          title,
          description,
          "mainImage": mainImage {
            asset->{
              _id,
              url
            }
          }
        }
        `,
        { slug }
      )
      .then((data) => {
        setModelTitle(data[0]);
        // console.log(data[0]);
      })
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "project" && ("${slug}" in categories[]->slug.current)] {
          title,
          slug,
          mainImage {
            asset->{
              _id,
              url
            }
          },
          description,
          categories[]->{
            title,
            description,
            "mainImage": mainImage {
              asset->{
                _id,
                url
              }
            }
          },
          tags,
          website
        }
        `,
        { slug }
      )
      .then((data) => {
        setModelData(data);
      })
      .catch(console.error);
  }, [slug]);

  if (!modelData)
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <p>Loading...</p>
        <LazyLoadImage
          effect="blur"
          src={SearchingGif}
          alt="Searching gif by ILLI Design on Dribbble"
          width={450}
        />
      </div>
    );

  if (!modelTitle) return <p>Loading...</p>;

  return (
    <div>
      {modelTitle && (
        <SingleModelHero
          ModelTitle={modelTitle.title}
          ImageUrl={urlFor(modelTitle.mainImage).url()}
        />
      )}

      {modelData.length > 0 ? (
        <ModelDetails ProjectItems={modelData} />
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
    </div>
  );
};

export default SingleModelView;
