import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

export default function BlogSection() {
  return (
    <div className="max-w-[85rem] dark:bg-boxdark-2 dark:text-bodydark px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          JHUB Africa News & Events
        </h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          See how game-changing we are making with JKIAN & JHUB.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          to="/blog-post"
        >
          <div className="aspect-w-16 aspect-h-11">
            <LazyLoadImage
              effect="blur"
              className="w-full object-cover rounded-xl"
              src={"/images/blogs/small-scale-farmers.avif"}
              alt="Image Description"
              width={200}
              height={200}
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
              Announcing a Plan for small scale Farmers
            </h3>
            <p className="mt-5 text-gray-600 dark:text-gray-400">
              At Wake, our mission has always been focused on bringing openness.
            </p>
          </div>
          <div className="mt-auto flex items-center gap-x-3">
            <LazyLoadImage
              effect="blur"
              className="w-8 h-8 rounded-full"
              src={"/images/logo/jhub-logo-new.svg"}
              alt="Image Description"
              width={200}
              height={200}
            />
            <div>
              <h5 className="text-sm text-gray-800 dark:text-gray-200">
                By Lawrence Nderu
              </h5>
            </div>
          </div>
        </Link>

        <Link
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          to="/blog-post"
        >
          <div className="aspect-w-16 aspect-h-11">
            <LazyLoadImage
              effect="blur"
              className="w-full object-cover rounded-xl"
              src={"/images/blogs/digital-sustainability-blog.jpg"}
              alt="Image Description"
              width={200}
              height={200}
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
              Taking Digital Tools for Sustainability
            </h3>
            <p className="mt-5 text-gray-600 dark:text-gray-400">
              Unlock Agribusiness potential with JHUB innovation. Pivot Your
              sector for innovation.
            </p>
          </div>
          <div className="mt-auto flex items-center gap-x-3">
            <LazyLoadImage
              effect="blur"
              className="w-8 h-8 rounded-full"
              src={"/images/blogs/digital-sustainability-blog.jpg"}
              alt="Image Description"
              width={200}
              height={200}
            />
            <div>
              <h5 className="text-sm text-gray-800 dark:text-gray-200">
                By Dr Rehema Ndeda
              </h5>
            </div>
          </div>
        </Link>

        <Link
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          to="/blog-post"
        >
          <div className="aspect-w-16 aspect-h-11">
            <LazyLoadImage
              effect="blur"
              className="w-full object-cover rounded-xl"
              src={"/images/logo/jhub-logo-new.svg"}
              alt="Image Description"
              width={200}
              height={200}
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
              Front accounts - let&apos;s work together
            </h3>
            <p className="mt-5 text-gray-600 dark:text-gray-400">
              Are you an accountant? Are you a company formation advisor?
            </p>
          </div>
          <div className="mt-auto flex items-center gap-x-3">
            <LazyLoadImage
              effect="blur"
              className="w-8 h-8 rounded-full"
              src={"/images/logo/jhub-logo-new.svg"}
              alt="Image Description"
              width={200}
              height={200}
            />
            <div>
              <h5 className="text-sm text-gray-800 dark:text-gray-200">
                By George Gathoni
              </h5>
            </div>
          </div>
        </Link>
      </div>

      <div className="mt-12 text-center">
        <Link
          className="py-3 border border-gray-200 dark:bg-boxdark-2 dark:text-bodydark px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          to="/blog-post"
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
