import { PortableText } from "@portabletext/react";
import { IconClock, IconMapPin } from "@tabler/icons-react";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import DefaultImg from "../../assets/images/events/default-poster.png";
import {
  previewComponents,
  urlFor,
} from "../../components/Blog/CustomComponents";
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
  const formattedTime = dayjs(eventDateTime).format("h:mm A ([UTC]Z)");

  const formatDate = (date: string) => {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return dayjs(date).tz(userTimezone).format("h:mm A");
  };

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
          src={mainImage ? urlFor(mainImage).url() : DefaultImg}
          className="aspect-square h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-graydark/10 p-4 sm:border-l-transparent sm:p-6">
          <Link to={`/events/${slug.current}`} className="cursor-pointer">
            <h3 className="font-bold uppercase text-graydark">{title}</h3>
          </Link>

          <div className="mt-2 line-clamp-2 text-sm/relaxed text-gray">
            {event && (
              <PortableText
                value={description}
                components={previewComponents}
              />
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 px-6">
          <p className="flex items-center gap-2 text-sm font-bold text-graydark">
            <IconClock className="text-primary-purple" />
            {formatDate(eventDateTime)}
          </p>
          <p className="flex items-center gap-2 text-sm font-bold text-graydark">
            <IconMapPin className="text-primary-purple" />
            {location ? location : "Online"}
          </p>
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <Link
            to={`/events/${slug.current}`}
            className="cursor-pointer block bg-green-800 px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-green-900 rounded-br-2xl"
          >
            Register
          </Link>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
