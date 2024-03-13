import { Link } from "react-router-dom";
import BlogCard from "../../../components/Home/BlogCard";
import { BlogPostType } from "../../../types/home";
import { useState, useEffect } from "react";
import { sanityClient } from "../../../utils/sanityClient";

// const BlogList: BlogPostProps[] = [
//   {
//     href: "/blog-post",
//     imageSrc: SmallScaleImg,
//     imageAlt: "Small Scale Farmers",
//     title: "Announcing a Plan for Small Scale Farmers",
//     content:
//       "At Wake, our mission has always been focused on bringing openness.",
//     authorImageSrc: LawrenceNderu,
//     authorName: "Lawrence Nderu",
//   },
//   {
//     href: "/blog-post",
//     imageSrc: DigitalSustainabilityImg,
//     imageAlt: "Digital Tools for Sustainability",
//     title: "Taking Digital Tools for Sustainability",
//     content:
//       "Unlock Agribusiness potential with JHUB innovation. Pivot Your sector for innovation.",
//     authorImageSrc: RehemaNdeda,
//     authorName: "Dr Rehema Ndeda",
//   },
//   {
//     href: "/blog-post",
//     imageSrc: JhubLogo,
//     imageAlt: "JHUB Logo",
//     title: "Front accounts - let's work together",
//     content: "Are you an accountant? Are you a company formation advisor?",
//     authorImageSrc: GeorgeGathoni,
//     authorName: "George Gathoni",
//   },
// ];

export default function BlogSection() {
  const [allPostsData, setAllPosts] = useState<BlogPostType[] | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"  && "blog post" in categories[]->title] | order(publishedAt desc)[0..2]{
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
            "authorImage": author->image{
                asset->{
                _id,
                url
                }
              },
            subHeading
          }`
      )
      .then((data: BlogPostType[]) => {
        setAllPosts(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-[85rem] dark:bg-boxdark-2 dark:text-bodydark px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Featured
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPostsData &&
          allPostsData.map((blog) => (
            <BlogCard key={crypto.randomUUID()} BlogPost={blog} />
          ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          className="py-3 border border-gray-200 dark:bg-boxdark-2 dark:text-bodydark px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          to="/blog"
        >
          Read more
          <svg
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
