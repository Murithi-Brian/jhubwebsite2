import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { BlogPostType } from "../../types/home";
import defaultImg from "../../assets/images/blogs/default.jpeg";

type BlogCardPropsType = {
  BlogPost: BlogPostType;
};

export default function BlogCard({ BlogPost }: BlogCardPropsType) {
  // console.log("Single Post", BlogPost);
  return (
    <Link
      className="group border border-transparent hover:border-graydark flex justify-between flex-col h-full shadow-xl hover:shadow-none transition-all duration-300 rounded-lg dark:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      to={"/blog/" + BlogPost.slug.current}
      key={BlogPost.slug.current}
    >
      <div className="space-y-4">
        <div className="h-64 overflow-hidden mx-auto">
          <LazyLoadImage
            effect="blur"
            className="object-fit rounded-t-lg w-full h-72"
            src={BlogPost.mainImage.asset.url}
            alt={BlogPost.title}
          />
        </div>
        <div className="px-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
            {BlogPost.title}
          </h3>
          <p className="mt-5 text-gray-600 dark:text-gray-400">
            {BlogPost.subHeading}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-3 px-3 pb-3 mt-4">
        <LazyLoadImage
          effect="blur"
          className="w-8 h-8 rounded-full"
          src={BlogPost.authorImage?.asset?.url || defaultImg}
          alt={BlogPost.name}
        />
        <div>
          <h5 className="text-sm text-gray-800 dark:text-gray-200">
            {BlogPost.name}
          </h5>
        </div>
      </div>
    </Link>
  );
}
