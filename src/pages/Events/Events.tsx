import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EventCard from "../../components/Events/EventCard";
import { sanityClient } from "../../utils/sanityClient";
import dayjs from "dayjs";

// const upcomingEvents: UpcomingEvent[] = [];

const Events = () => {
  const { pathname } = useLocation();
  const [currentView, setCurrentView] = useState("upcoming");
  const [AllEvents, setAllEvents] = useState([]);
  const now = dayjs().startOf("day").toISOString();
  const today = dayjs().endOf("day").toISOString();

  useEffect(() => {
    let query = "";
    if (currentView === "upcoming") {
      // upcoming events
      query = `*[_type == "event" && eventDateTime >= "${now}"] {
          slug,
          title,
          description,
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
        }`;
    } else {
      // past events
      query = `*[_type == "event" && eventDateTime < "${today}"] {
          slug,
          title,
          description,
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
        }`;
    }

    sanityClient
      .fetch(query)
      .then((data) => {
        setAllEvents(data);
      })
      .catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentView]);

  useEffect(() => {
    console.log(pathname);
    pathname === "/events/past"
      ? setCurrentView("past")
      : setCurrentView("upcoming");
  }, [pathname]);

  return (
    <div className="max-w-screen-xl mx-auto h-fit pb-14 px-4">
      <h1 className="text-title-xxl sm:text-3xl font-bold mb-6 text-center">
        JHUB Events{" "}
      </h1>
      <p className="text-lg mb-4 text-center">
        Stay plugged in! Find upcoming meetups, workshops, conferences, and
        more, or <br />
        revisit past events to catch up on the latest industry insights.
      </p>
      <h3 className="text-title-xl sm:text-2xl font-semibold my-8">
        <span className="capitalize">{currentView}</span> Events
      </h3>

      <div className="grid grid-cols-1 gap-12 max-w max-w-4xl">
        {AllEvents.map((event) => (
          <EventCard key={crypto.randomUUID()} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
