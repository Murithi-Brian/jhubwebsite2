import { IconClock, IconMapPin } from "@tabler/icons-react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { UpcomingEvent } from "../../types/events";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PortableText } from "@portabletext/react";
import {
  previewComponents,
  urlFor,
} from "../../components/Blog/CustomComponents";
import DefaultImg from "../../assets/images/events/default-poster.png"

type EventItemProps = {
  event: UpcomingEvent;
};

const EventCard = ({ event }) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const {
    slug,
    title,
    description,
    eventDateTime,
    location,
    mainImage,
  } = event;
  // Remove the ordinal suffix (e.g., 'th', 'st', 'nd', 'rd')
  // const cleanedDate = 2024-02-03T12:00:00.000Z

  // Parse and format the date using dayjs
  const formattedDate = dayjs(eventDateTime).format("MMM D");
  const formattedDay = dayjs(eventDateTime).format("ddd");
  const formattedTime = dayjs(eventDateTime)
    .format("h:mm A [UTC]Z");

  return (
    // <div
    //   key={crypto.randomUUID()}
    //   className="w-full p-6 rounded-lg shadow-card flex flex-col justify-between"
    // >
    //   <div className="space-y-4">
    //     <h2 className="text-xl font-bold">{event.eventName}</h2>
    //     <div className="ml-4 space-y-2">
    //       <p className="flex items-center gap-1 font-medium">
    //         <IconCalendarEvent className="text-primary-purple" />
    //         {event.date}
    //       </p>
    //       <p className="flex items-center gap-1 font-medium">
    //         <IconClock className="text-primary-purple" />
    //         {event.date}
    //       </p>
    //       <p className="flex items-center gap-1 font-medium">
    //         <IconMapPin className="text-primary-purple" /> {event.location}
    //       </p>
    //     </div>
    //   </div>
    //   <div className="ml-auto">
    //     <a
    //       href={`/events/1`}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="text-lg bg-success hover:bg-transparent font-semibold text-white hover:text-success border-success border-2 py-2 px-2 rounded-lg flex gap-2 items-center justify-end"
    //     >
    //       Register
    //     </a>
    //     {/* <a
    //       //   href={href}
    //       href={`/events/1`}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="text-lg font-semibold no-underline hover:underline flex gap-2 items-center justify-end"
    //     >
    //       More Details <IconExternalLink />
    //     </a> */}
    //   </div>
    // </div>
    <article
      className="flex bg-white transition shadow-card hover:shadow-xl rounded-2xl"
      key={slug.current}
    >
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          dateTime={formattedTime}
          className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-graydark my-2"
        >
          <span>{formattedDay}</span>
          <span className="w-px flex-1 bg-graydark/10"></span>
          <span>{formattedDate}</span>
        </time>
      </div>

      <div className="hidden sm:block sm:basis-56">
        <LazyLoadImage
          alt={title}
          src={
            mainImage ? urlFor(mainImage).url() : DefaultImg
            // : "https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          }
          className="aspect-square h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-graydark/10 p-4 sm:border-l-transparent sm:p-6">
          <a href="#">
            <h3 className="font-bold uppercase text-graydark">{title}</h3>
          </a>

          <p className="mt-2 line-clamp-2 text-sm/relaxed text-gray">
            {event && (
              <PortableText
                value={description}
                components={previewComponents}
              />
            )}
          </p>
        </div>

        <div className="flex items-center gap-4 px-6">
          <p className="flex items-center gap-2 text-sm font-bold text-graydark">
            <IconClock className="text-primary-purple" />
            {formattedTime}
          </p>
          <p className="flex items-center gap-2 text-sm font-bold text-graydark">
            <IconMapPin className="text-primary-purple" />
            {location ? location : "Online"}
          </p>
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <a
            href="#"
            className="block bg-green-800 px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-green-900 rounded-br-2xl"
          >
            Register
          </a>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
