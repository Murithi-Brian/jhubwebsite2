import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogDetails = (/**{ match } */) => {
  // Access the blogId from the URL parameter
  //   const blogId = match.params.blogId;

  // Fetch the blog Details details using the blogId
  // ...

  return (
    <div>
      {/* Display the full blog Details content */}
      {/* <h1>Blog Details {blogId}</h1> */}
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
          <div className="lg:col-span-2">
            <div className="py-8 lg:pe-4 ">
              <div className="space-y-5 lg:space-y-8">
                <Link
                  className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="/"
                >
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
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to Blog
                </Link>

                <h2 className="text-3xl font-bold lg:text-4xl  dark:text-white">
                  Announcing a free plan for small scale Farmers
                </h2>

                <div className="flex items-center gap-x-5">
                  <Link
                    className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/"
                  >
                    Company News
                  </Link>
                  <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                    January 18, 2023
                  </p>
                </div>

                <p className="text-lg text-gray-800 dark:text-gray-200">
                  Exciting News for Small-Scale Farmers! At JHUB, our commitment
                  to innovation extends to supporting the backbone of our
                  communities. Today, we&apos;re thrilled to announce the launch
                  of a free plan specifically tailored for small-scale farmers.
                </p>

                <p className="text-lg text-gray-800 dark:text-gray-200">
                  JHUB isn&apos;t just an innovation hub; it&apos;s your
                  ultimate Digital Innovation Hub designed to empower
                  small-scale farmers. Here, your ideas will flourish, and
                  innovation will thrive. Our platform offers a collaborative
                  space for farmers, visionaries, and entrepreneurs to ideate,
                  incubate, and implement digital solutions tailored to the
                  agriculture sector. From optimizing crop yields to
                  streamlining supply chains, we support every stage of your
                  innovation journey. Join our vibrant community at JHUB and
                  drive positive societal impact through digital transformation
                  in agriculture.
                </p>

                <div className="text-center">
                  <div className="grid lg:grid-cols-2 gap-3">
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                      <figure className="relative w-full h-60">
                        <Image
                          className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                          width={200}
                          height={200}
                          src={'/images/logo/hero-img.jpg'}
                          alt="Image Description"
                        />
                      </figure>
                      <figure className="relative w-full h-60">
                        <Image
                          className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                          width={200}
                          height={200}
                          src={'/images/logo/hero-img.jpg'}
                          alt="Image Description"
                        />
                      </figure>
                    </div>
                    <figure className="relative w-full h-72 sm:h-96 lg:h-full">
                      <Image
                        className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                        width={200}
                        height={200}
                        src={'/images/logo/hero-img.jpg'}
                        alt="Image Description"
                      />
                    </figure>
                  </div>

                  <span className="mt-3 block text-sm text-center text-gray-500">
                    Working process
                  </span>
                </div>

                <p className="text-lg text-gray-800 dark:text-gray-200">
                  Navigating the complex landscape of investments in the digital
                  era can be challenging, especially for small-scale farmers. At
                  JHUB, we understand the unique needs of farmers and are here
                  to provide dedicated support. Our team of financial experts
                  and advisors is ready to guide you through the process,
                  connecting you with opportunities that align with your
                  agricultural goals. Whether you cultivate a small plot, trade
                  agricultural products, or run a farming enterprise, we are
                  committed to securing the financial support you need for
                  sustainable growth.
                </p>

                <blockquote className="text-center p-4 sm:px-7">
                  <p className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal dark:text-gray-200">
                    To say that transitioning to JHUB has been transformative is
                    an understatement. Our agricultural initiatives have
                    thrived, and the impact on our community has been
                    remarkable.
                  </p>
                  <p className="mt-5 text-gray-800 dark:text-gray-200">
                    James Njuguna
                  </p>
                </blockquote>

                <figure>
                  <Image
                    className="w-full object-cover rounded-xl"
                    width={200}
                    height={200}
                    src={'/images/logo/hero-img.jpg'}
                    alt="Image Description"
                  />
                  <figcaption className="mt-3 text-sm text-center text-gray-500">
                    A greenhouse construction site within JKUAT | JHUB
                    innovates.
                  </figcaption>
                </figure>

                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold dark:text-white">
                    Bringing the culture of sharing to everyone
                  </h3>

                  <p className="text-lg text-gray-800 dark:text-gray-200">
                    We recognize the profound impact of collaborative sharing,
                    and we&apos;re excited to introduce an opportunity for
                    everyone to experience JHUB. Now, whether you&apos;re a solo
                    innovator or a duo of designers, you can invite an unlimited
                    number of spectators, including project managers,
                    management, marketing teams, and more, to join you on JHUB.
                    Witness the transformative power of open communication and
                    explore the design process collaboratively from the early
                    stages. JHUB is here to elevate teamwork and innovation for
                    all.
                  </p>
                </div>

                <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-gray-200">
                  <li className="ps-2">
                    JHUB enables real-time collaboration, providing our team
                    with a seamless way to stay updated on ongoing projects.
                    According to Stewart Scott-Curran, Director of Brand Design
                    at{' '}
                    <Link
                      className="text-blue-600 decoration-2 hover:underline font-medium"
                      href="/"
                    >
                      JKUAT Enterprises
                    </Link>
                    , &quot;JHUB allows leadership to stay in the loop with what
                    everybody is working on&quot;.
                  </li>
                  <li className="ps-2">
                    Experience a new dimension of sharing with JHUB. As David
                    Scott, Creative Director at{' '}
                    <Link
                      className="text-blue-600 decoration-2 hover:underline font-medium"
                      href="/"
                    >
                      Taimba
                    </Link>
                    , puts it, &quot;JHUB introduces a persistent way for
                    everyone to see and absorb each other&apos;s work&quot;.
                  </li>
                </ul>

                <p className="text-lg text-gray-800 dark:text-gray-200">
                  In the realm of Agricultural Innovation, small teams and
                  individual contributors require a dedicated space to witness
                  the agricultural design process unfold. Whether you&apos;re a
                  fellow farmer, agritech developer, or part of the agricultural
                  management team, JHUB provides the platform to invite more
                  stakeholders into the process. It serves as a central hub for
                  conversations around agricultural design, fostering
                  collaboration and transparency. As agricultural teams expand,
                  the integration of transparency and collaboration becomes
                  fundamental to how they communicate and innovate together.
                </p>

                <div className="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
                  <div>
                    <Link
                      className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 text-[#357c20] rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="/"
                    >
                      AgriTech
                    </Link>
                    <Link
                      className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 text-[#357c20] rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="/"
                    >
                      InnovationInAgriculture
                    </Link>
                    <Link
                      className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 text-[#357c20] rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="/"
                    >
                      DigitalTransformation
                    </Link>
                    <Link
                      className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 text-[#357c20] rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="/"
                    >
                      TeamCollaboration
                    </Link>
                  </div>

                  <div className="flex justify-end items-center gap-x-1.5">
                    <div className="hs-tooltip inline-block">
                      <button
                        type="button"
                        className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
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
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                        875
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-black"
                          role="tooltip"
                        >
                          Like
                        </span>
                      </button>
                    </div>

                    <div className="block h-3 border-e border-gray-300 mx-3 dark:border-gray-600"></div>

                    <div className="hs-tooltip inline-block">
                      <button
                        type="button"
                        className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
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
                          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                        </svg>
                        16
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-black"
                          role="tooltip"
                        >
                          Comment
                        </span>
                      </button>
                    </div>

                    <div className="block h-3 border-e border-gray-300 mx-3 dark:border-gray-600"></div>

                    <div className="hs-dropdown relative inline-flex">
                      <button
                        type="button"
                        id="blog-article-share-dropdown"
                        className="hs-dropdown-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
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
                          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                          <polyline points="16 6 12 2 8 6" />
                          <line x1="12" x2="12" y1="2" y2="15" />
                        </svg>
                        Share
                      </button>
                      <div
                        className="hs-dropdown-menu w-56 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mb-1 z-10 bg-gray-900 shadow-md rounded-xl p-2 dark:bg-black"
                        aria-labelledby="blog-article-share-dropdown"
                      >
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                          href="/"
                        >
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
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                          </svg>
                          Copy link
                        </a>
                        <div className="border-t border-gray-600 my-2"></div>
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                          href="/"
                        >
                          <svg
                            className="flex-shrink-0 w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                          Share on Twitter
                        </Link>
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                          href="/"
                        >
                          <svg
                            className="flex-shrink-0 w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>
                          Share on Facebook
                        </Link>
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                          href="/"
                        >
                          <svg
                            className="flex-shrink-0 w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                          </svg>
                          Share on LinkedIn
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-slate-800">
            <div className="sticky top-0 start-0 py-8 lg:ps-4">
              <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-gray-700">
                <Link className="block flex-shrink-0" href="/">
                  <Image
                    width={200}
                    height={200}
                    className="h-10 w-10 rounded-full"
                    src={'/images/user/user-06.png'}
                    alt="Image Description"
                  />
                </Link>

                <Link className="group grow block" href="">
                  <h5 className="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                    George Gathoni
                  </h5>
                  <p className="text-sm text-gray-500">
                    Communications, Administration and Grants Lead
                  </p>
                </Link>

                <div className="grow">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-blue-600 text-primary hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <line x1="19" x2="19" y1="8" y2="14" />
                        <line x1="22" x2="16" y1="11" y2="11" />
                      </svg>
                      Follow
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Link
                  className="group flex items-center gap-x-6"
                  href="/blog-post"
                >
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                      Cultivating Growth: JHUB&apos;s Free Plan Revolutionizes
                      Support for Small-Scale Farmers
                    </span>
                  </div>

                  <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                    <Image
                      width={200}
                      height={200}
                      className="w-full h-full absolute top-0 start-0 object-cover rounded-lg"
                      src={'/images/logo/hero-img.jpg'}
                      alt="Image Description"
                    />
                  </div>
                </Link>

                <Link
                  className="group flex items-center gap-x-6"
                  href="/blog-post"
                >
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                      Seeds of Innovation: How JHUB&apos;s Digital Innovation
                      Hub Empowers Farmers for Sustainable Success
                    </span>
                  </div>

                  <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                    <Image
                      className="w-full h-full absolute top-0 start-0 object-cover rounded-lg"
                      src={'/images/logo/hero-img.jpg'}
                      width={200}
                      height={200}
                      alt="Image Description"
                    />
                  </div>
                </Link>

                <Link
                  className="group flex items-center gap-x-6"
                  href="/blog-post"
                >
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                      7 Principles of sustainable development
                    </span>
                  </div>

                  <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                    <Image
                      className="w-full h-full absolute top-0 start-0 object-cover rounded-lg"
                      width={200}
                      height={200}
                      src={'/images/logo/hero-img.jpg'}
                      alt="Image Description"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
