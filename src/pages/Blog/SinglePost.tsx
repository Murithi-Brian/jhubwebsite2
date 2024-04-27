import { useEffect, useState } from "react";
import { BlogCardProps } from "../../types/home";
import { sanityClient } from "../../utils/sanityClient";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IconChevronLeft } from "@tabler/icons-react";
import dayjs from "dayjs";
import { components, urlFor } from "../../components/Blog/CustomComponents";
import { PortableText } from "@portabletext/react";

const formatDate = (dateString: string) => {
  return dayjs(dateString).format("MMMM D, YYYY");
};

type Recommendation = Pick<
  BlogCardProps,
  "title" | "slug" | "mainImage" | "body"
>;

const SinglePost = () => {
  const [postData, setPostData] = useState<BlogCardProps | null>(null);
  const [recommendations, setRecommendations] = useState<Recommendation[] | null>(
    null
  );

  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
            },
         body,
        "name": author->name,
        publishedAt,
        "authorImage": author->image{
            asset->{
                 _id,
                 url
                }
            },
        source,
        subHeading
       }`,
        { slug }
      )
      .then((data) => {
        setPostData(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"  && ("blog post" in categories[]->title || "newsletter" in categories[]->title)] | order(publishedAt desc)[0..2]{
            title,
            slug,
            mainImage{
                asset->{
                _id,
                url
                }
              },
            body,
          }`
      )
      .then((data) => {
        setRecommendations(data);
      })
      .catch(console.error);
  }, []);

  if (!postData) return <div>Loading...</div>;

  return (

      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
          <div className="lg:col-span-2">
            <div className="py-8 lg:pe-4 ">
              <div className="space-y-5 lg:space-y-8">
                <Link
                  className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/blog"
                >
                  <IconChevronLeft />
                  Back to Blog
                </Link>

                <h2 className="text-3xl font-bold lg:text-4xl  dark:text-white">
                  {postData.title}
                </h2>

                <div className="flex items-center gap-x-5">
                  <LazyLoadImage
                    effect="blur"
                    className="h-12 w-12 rounded-full object-cover"
                    src={urlFor(postData.authorImage).url()}
                    alt="Image Description"
                  />
                  <h5 className="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                    {postData.name}
                  </h5>
                  <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                    {formatDate(postData.publishedAt)}
                  </p>
                </div>

                {/*  Banner Image */}
                <div className="flex items-center justify-center">
                  <LazyLoadImage
                    effect="blur"
                    className="w-full object-cover rounded"
                    src={urlFor(postData.mainImage).url()}
                    alt={postData.title}
                    style={{ height: "400px" }}
                  />
                </div>

                {/* Body */}
                {postData && (
                  <PortableText value={postData.body} components={components} />
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-slate-800">
            <div className="sticky top-0 start-0 py-8 lg:ps-4">
              {/* Author details */}
              <div className="group flex items-center gap-x-1 border-b border-gray-200 pb-8 mb-8 dark:border-gray-700">
                <h4 className="group-hover:text-gray-600 text-xl font-semibold text-success dark:group-hover:text-gray-400 dark:text-gray-200">
                  Latest News
                </h4>
              </div>

              <div className="space-y-6">
                {recommendations &&
                  recommendations.map((recommendation) => (
                    <Link
                      className="group flex items-center gap-x-6"
                      to={`/blog/${recommendation.slug.current}`}
                    >
                      <div className="grow">
                        <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                          {recommendation.title}
                        </span>
                      </div>

                      <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                        <LazyLoadImage
                          effect="blur"
                          width={100}
                          height={100}
                          className="w-full h-full absolute top-0 start-0 object-cover rounded-lg"
                          src={urlFor(recommendation.mainImage).url()}
                          alt={recommendation.title}
                        />
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SinglePost;
