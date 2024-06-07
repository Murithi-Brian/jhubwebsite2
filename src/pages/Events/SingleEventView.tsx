import Poster from "../../assets/images/events/Poster.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  IconClock,
  IconUsers,
  IconMapPin,
  IconCalendarEvent,
} from "@tabler/icons-react";

const SingleEventView = () => {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-center">
          Unlocking a Thrivable Future for Humanity
        </h2>

        <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
          <LazyLoadImage
            src={Poster}
            alt="Unlocking a Thrivable Future for Humanity"
          />
          <div className=" space-y-4 gap-4 my-8 text-black">
            {/* Description */}
            <p className="text-lg">
              We are thrilled to welcome Dr. Mariana Bozesan to our JHUB speaker
              series. As a distinguished integral investor, pioneering AI
              expert, and serial tech entrepreneur, Dr. Bozesan possesses a
              unique vision: to harness the power of exponentially growing
              technologies not just to decarbonize the global economy, but also
              to initiate a new era of prosperity that operates within the
              confines of our planet's boundaries.{" "}
            </p>
            <p className="flex font-bold gap-1">
              <IconCalendarEvent />
              <span className="font-medium uppercase text-primary-purple">
                Date:{" "}
              </span>{" "}
              February 22nd, 2024
            </p>
            <p className="flex font-bold gap-1">
              <IconClock />
              <span className="font-medium uppercase text-primary-purple">
                Time:{" "}
              </span>{" "}
              3PM FAT (5PM CET (Munich time)) - 4:30PM
            </p>
            <p className="flex font-bold gap-1">
              <IconUsers />
              <span className="font-medium uppercase text-primary-purple">
                Speaker:{" "}
              </span>{" "}
              Dr. Mariana Bozesan, Member Club of Rome. Founder AQAL Capital
            </p>
            <p className="flex gap-1">
              <IconMapPin />{" "}
              <span className="font-medium uppercase text-primary-purple">
                Registration:{" "}
              </span>{" "}
              <a
                href="https://forms.gle/RTznUPLxCjqnnKgp8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                https://forms.gle/RTznUPLxCjqnnKgp8
              </a>
            </p>{" "}
            {/* Speaker bio */}
            <p className="font-medium">
              Dr. Bozesan will be the speaker for an online webinar moderated by
              Dr. Lawrence Nderu. <br />
              Title of the lecture: “Unlocking a Thrivable Future for Humanity”{" "}
            </p>
            <p className="font-medium text-lg">
              Bio short here: Dr. Mariana Bozesan is an award-winning integral
              investor, an AI pioneer, and a successful serial tech-entrepreneur
              who is leveraging exponentially growing technologies to
              decarbonize the global economy and accelerate the implementation
              of the UN SDGs within Planetary Boundaries. She studied Computer
              Science and AI at Stanford University and the Karlsruhe Institute
              of Technology of which she is a Prominent Alumna. She is also the
              recipient of the Golden Angelina Award, as Europe’s Female Angel
              Investor of 2019 and became the Best European Early stage Investor
              of the Year 2016 awarded by EBAN, the European Business Angel
              Network. She is also full member of the prominent international
              Club of Rome, Fellow of the World Academy of Art and Science, and
              authored several books including Integral Investing: From Profit
              to Prosperity, a report to the Club of Rome
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
};

export default SingleEventView;
