import { IconClock, IconMapPin } from "@tabler/icons-react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PortableText } from "@portabletext/react";
import {
  previewComponents,
  urlFor,
} from "../../components/Blog/CustomComponents";
import DefaultImg from "../../assets/images/events/default-poster.png";
import { EventCardProps } from "../../types/events";

type EventCardPropType = {
  event: EventCardProps;
};

const EventCard = ({ event }: EventCardPropType) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const { slug, title, description, eventDateTime, location, mainImage } =
    event;

  const formattedDate = dayjs(eventDateTime).format("MMM D");
  const formattedDay = dayjs(eventDateTime).format("ddd");
  const formattedTime = dayjs(eventDateTime).format("h:mm A [UTC]Z");

  return (
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
