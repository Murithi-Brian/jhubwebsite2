import React from 'react';
import Image from 'next/image';
import Poster from '../../public/images/events/Poster.webp';

export default function EventDetailsCard() {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Unlocking a Thrivable Future for Humanity
          </h2>

          <div className="mt-4">
            <a
              href="/"
              title=""
              className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Learn more about our agenda
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
          <Image src={Poster} alt="Unlocking a Thrivable Future for Humanity" />
          <div className=" space-y-4 gap-4 my-8 text-black">
            <p>
              We are thrilled to welcome Dr. Mariana Bozesan to our JHUB speaker
              series. As a distinguished integral investor, pioneering AI
              expert, and serial tech entrepreneur, Dr. Bozesan possesses a
              unique vision: to harness the power of exponentially growing
              technologies not just to decarbonize the global economy, but also
              to initiate a new era of prosperity that operates within the
              confines of our planet&apos;s boundaries.{' '}
            </p>
            <p className="font-medium">
              Dr. Bozesan will be the speaker for an online webinar moderated by
              Dr. Lawrence Nderu. <br />
              Title of the lecture: “Unlocking a Thrivable Future for Humanity”{' '}
              <br />
              Time: 3PM FAT (5PM CET (Munich time)) - 4:30PM on February 22nd,
              2024.
              <br /> Presenter: Dr. Mariana Bozesan, Member Club of Rome.
              Founder AQAL Capital
            </p>
            <p>
              Register for the online webinar here:
              <a
                href="https://forms.gle/RTznUPLxCjqnnKgp8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                https://forms.gle/RTznUPLxCjqnnKgp8
              </a>
            </p>{' '}
            <p>
              Bio short here: Dr. Mariana Bozesan is an award-winning integral
              investor, an AI pioneer, and a successful serial tech-entrepreneur
              who is leveraging exponentially growing technologies to
              decarbonize the global economy and accelerate the implementation
              of the UN SDGs within Planetary Boundaries. She studied Computer
              Science and AI at Stanford University and the Karlsruhe Institute
              of Technology of which she is a Prominent Alumna. She is also the
              recipient of the Golden Angelina Award, as Europe&apos;s Female
              Angel Investor of 2019 and became the Best European Early stage
              Investor of the Year 2016 awarded by EBAN, the European Business
              Angel Network. She is also full member of the prominent
              international Club of Rome, Fellow of the World Academy of Art and
              Science, and authored several books including Integral Investing:
              From Profit to Prosperity, a report to the Club of Rome
            </p>
          </div>
          {/* <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                08:00 - 09:00
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="/" className="hover:underline">
                  JHUB Opening remarks
                </a>
              </h3>
            </div>

            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                09:00 - 10:00
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="/" className="hover:underline">
                  First Speaker: Talk, Sustainable Innovation in Tech
                </a>
              </h3>
            </div>

            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                10:00 - 11:00
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="/" className="hover:underline">
                  Second Talk: A Collaborative Open Framework for Helping Small
                  Farmers.
                </a>
              </h3>
            </div>

            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                11:00 - 12:00
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="/" className="hover:underline">
                  Coffee Break
                </a>
              </h3>
            </div>

            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                12:00 - 13:00
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="/" className="hover:underline">
                  Scaling your Brand With JHUB Consultancy Services
                </a>
              </h3>
            </div>

            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                13:00 - 14:00
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="/" className="hover:underline">
                  Updates from the Open Source Multimedia community
                </a>
              </h3>
            </div>

            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                14:00 - 15:00
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="/" className="hover:underline">
                  Exploring the balance between customer acquisition and
                  retention
                </a>
              </h3>
            </div>

            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                15:00 - 16:00
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="/" className="hover:underline">
                  Flowbite - An Open Framework for Forensic Watermarking
                </a>
              </h3>
            </div>

            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                16:00 - 14:00
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="/" className="hover:underline">
                  Scaling your brand from $0 to multimillion euros
                </a>
              </h3>
            </div>

            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                17:00 - 14:00
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="/" className="hover:underline">
                  Drinks & networking
                </a>
              </h3>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
