import BlogCard from "../../components/Home/BlogCard";
import { BlogPostType } from "../../types/home";
import { useState, useEffect } from "react";
import { sanityClient } from "../../utils/sanityClient";
import { Tab } from "@headlessui/react";
import { classNames } from "../../utils/classes";

const BlogPage = () => {
  const [allPostsData, setAllPosts] = useState<BlogPostType[]>([]);
  const [selectedTab, setSelectedTab] = useState<"newsletter" | "blog post">(
    "blog post"
  );

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post" && ("blog post" in categories[]->title || "newsletter" in categories[]->title)]| order(publishedAt desc){
            title,
            slug,
            mainImage{
                asset->{
                _id,
                url
                }
            },
            categories[]->{
                title
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
        // console.log(data);
      })
      .catch(console.error);
  }, []);

  const blogData = allPostsData.filter((item) =>
    item.categories.some((category) => category.title === selectedTab)
  );

  const tabItems = [
    { key: "blog post", label: "Blog" },
    { key: "newsletter", label: "Newsletter" },
  ];

  return (
    <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 text-center pb-10">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h1 className="block text-3xl font-semibold sm:text-title-xxl dark:text-white">
          JHUB Africa Newsletters and Blogs
        </h1>
        <p className="mt-3 text-lg text-secondary-blue dark:text-white">
          Read about how we're revolutionizing innovation with JHUB
        </p>
      </div>

      <Tab.Group>
        <Tab.List className="flex gap-8 overflow-x-auto w-1/2 mx-auto">
          {tabItems.map((tabItem) => (
            <Tab
              key={tabItem.key}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-2xl py-2 px-4",
                  selected
                    ? "bg-main text-white"
                    : "text-main bg-[#ECEEF1] hover:bg-main/[0.12] hover:text-white"
                )
              }
              onClick={() =>
                setSelectedTab(tabItem.key as "newsletter" | "blog post")
              }
            >
              {tabItem.label}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="py-4 mt-2">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogData.map((data) => (
              <BlogCard key={crypto.randomUUID()} BlogPost={data} />
            ))}
          </div>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};

export default BlogPage;
