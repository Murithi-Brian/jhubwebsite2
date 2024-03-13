import BlogCard from "../../components/Home/BlogCard";
import { BlogPostType } from "../../types/home";
import { useState, useEffect } from "react";
import { sanityClient } from "../../utils/sanityClient";

export default function BlogPage() {
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
    <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 text-center pb-10">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h1 className="block text-3xl font-semibold sm:text-title-xxl dark:text-white">
          JHUB Africa News and Blogs
        </h1>
        <p className="mt-3 text-lg text-secondary-blue dark:text-white">
          Read about how we're revolutionizing innovation with JHUB
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPostsData &&
          allPostsData.map((blog) => (
            <BlogCard key={crypto.randomUUID()} BlogPost={blog} />
          ))}
      </div>
    </section>
  );
}
