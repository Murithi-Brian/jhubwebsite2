import { UpcomingEvent } from "../../types/events";
import { IconCalendarEvent, IconClock, IconMapPin } from "@tabler/icons-react";

type EventItemProps = {
  event: UpcomingEvent;
};

const EventCard = ({ event }: EventItemProps) => {
  return (
    <div
      key={crypto.randomUUID()}
      className="w-full p-6 rounded-lg shadow-card flex flex-col justify-between"
    >
      <div className="space-y-4">
        <h2 className="text-xl font-bold">{event.eventName}</h2>
        <div className="ml-4 space-y-2">
          <p className="flex items-center gap-1 font-medium">
            <IconCalendarEvent className="text-primary-purple" />
            {event.date}
          </p>
          <p className="flex items-center gap-1 font-medium">
            <IconClock className="text-primary-purple" />
            {event.date}
          </p>
          <p className="flex items-center gap-1 font-medium">
            <IconMapPin className="text-primary-purple" /> {event.location}
          </p>
        </div>
      </div>
      <div className="ml-auto">
        <a
          href={`/events/1`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg bg-success hover:bg-transparent font-semibold text-white hover:text-success border-success border-2 py-2 px-2 rounded-lg flex gap-2 items-center justify-end"
        >
          Register
        </a>
        {/* <a
          //   href={href}
          href={`/events/1`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold no-underline hover:underline flex gap-2 items-center justify-end"
        >
          More Details <IconExternalLink />
        </a> */}
      </div>
    </div>
  );
};

export default EventCard;
