import { Link } from "react-router-dom";
import BlogCard from "../../../components/Home/BlogCard";
import { BlogPostType } from "../../../types/home";
import { useState, useEffect } from "react";
import { sanityClient } from "../../../utils/sanityClient";

export default function BlogSection() {
  const [allPostsData, setAllPosts] = useState<BlogPostType[]>([]); // Change to empty array instead of null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: BlogPostType[] = await sanityClient.fetch(
          `*[_type == "post" && "blog post" in categories[]->title] | order(publishedAt desc)[0..2]{
              title,
              slug,
              mainImage {
                asset -> {
                  _id,
                  url
                }
              },
              body,
              "name": author->name,
              "authorImage": author->image {
                asset -> {
                  _id,
                  url
                }
              },
              subHeading
            }`
        );
        setAllPosts(data);
      } catch (error) {
        console.error(error);
        // Handle error state if necessary
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Section Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-3xl font-bold md:text-4xl md:leading-tight text-gray-900 dark:text-white">
          Featured
        </h2>
        <div className="mt-4 h-[2px] w-16 mx-auto bg-blue-600"></div>
      </div>

      {/* Blog Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPostsData.length > 0 ? (
          allPostsData.map((blog) => (
            <BlogCard
              key={blog.slug.current} // Use a stable unique identifier like slug
              BlogPost={blog}
              className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            />
          ))
        ) : (
          // Skeleton Loading
          Array.from({ length: 3 }, (_, index) => ( // Use Array.from to create an array of length 3
            <div key={index} className="w-full h-56 bg-gray-200 rounded-lg animate-pulse"></div>
          ))
        )}
      </div>

      {/* Button */}
      <div className="mt-12 text-center">
        <Link
          to="/blog"
          className="py-3 px-6 inline-flex items-center gap-x-1 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105"
        >
          Read more
          <svg
            className="w-4 h-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
