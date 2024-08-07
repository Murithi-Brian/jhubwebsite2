import { PortableText } from "@portabletext/react";
import {
  IconCalendarEvent,
  IconClock,
  IconMapPin,
  IconUsers,
} from "@tabler/icons-react";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import DefaultImg from "../../assets/images/events/default-poster.png";
import { components, urlFor } from "../../components/Blog/CustomComponents";
import { EventCardProps } from "../../types/events";
import { sanityClient } from "../../utils/sanityClient";

const SingleEventView = () => {
  const { slug } = useParams();
  const [singleEvent, setSingleEvent] = useState<EventCardProps | null>(null);

  dayjs.extend(utc);
  dayjs.extend(timezone);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          slug,
          title,
          description,
          speakers,
          registrationLink,
          eventDateTime,
          locationType[]->{
            title
          },
          location,
          "mainImage": mainImage {
            asset->{
              _id,
              url
            }
          }
        }`,
        { slug }
      )
      .then((data) => {
        setSingleEvent(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  if (!singleEvent) {
    return <div>Loading...</div>;
  }

  const {
    title,
    description,
    eventDateTime,
    location,
    mainImage,
    speakers,
    registrationLink,
  } = singleEvent;

  const formattedDate = dayjs(eventDateTime).format("ddd, D MMM YYYY");

  const formatDate = (date: string) => {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return dayjs(date).tz(userTimezone).format("h:mm A");
  };

  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-center">
          {title}
        </h2>

        {/* Event Details Card */}
        <div className="mt-6 flex justify-evenly items-center gap-8 text-sm shadow-xl rounded-xl p-6 mx-auto w-2/3">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <IconCalendarEvent className=" text-primary-purple" />

            <div className="mt-1.5 sm:mt-0">
              <p className=" text-gray">Date</p>

              <p className="font-semibold">{formattedDate}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <IconClock className=" text-primary-purple" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray">Time</p>

              <p className="font-semibold">{formatDate(eventDateTime)}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <IconMapPin className="text-primary-purple" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Location</p>

              <p className="font-medium">{location}</p>
            </div>
          </div>
        </div>

        <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
          <LazyLoadImage
            src={mainImage ? urlFor(mainImage).url() : DefaultImg}
            alt={title}
          />

          {/* Description */}
          <div className=" space-y-4 gap-4 my-8 text-black">
            <p className="flex font-bold gap-1">
              <IconUsers />
              <span className="font-medium uppercase text-primary-purple">
                Speakers:{" "}
              </span>{" "}
              {speakers
                ? speakers.map((speaker) => speaker).join(", ")
                : "Dr Lawrence Nderu"}
            </p>
            <p className="flex gap-1">
              <IconMapPin />{" "}
              <span className="font-medium uppercase text-primary-purple">
                Register Here:{" "}
              </span>{" "}
              <a
                href={registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                {registrationLink}
              </a>
            </p>{" "}
            {singleEvent && (
              <PortableText value={description} components={components} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleEventView;
