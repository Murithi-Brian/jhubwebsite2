import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EventCard from "../../components/Events/EventCard";
import { PastEvents } from "../../types/events";

const pastEvents: PastEvents[] = [
  {
    eventName: "Unlocking a Thrivable Future for Humanity",
    date: "22nd Feb 2024",
    location: "Online",
    description: `We are thrilled to welcome Dr. Mariana Bozesan to our JHUB speaker series. As a distinguished integral investor, pioneering AI expert, and serial tech entrepreneur, Dr. Bozesan possesses a unique vision: to harness the power of exponentially growing technologies not just to decarbonize the global economy, but also to initiate a new era of prosperity that operates within the confines of our planet's boundaries. Dr. Bozesan will be the speaker for an online webinar moderated by Dr. Lawrence Nderu.`,
    isOnLeft: false,
  },
  {
    eventName: "JHUB Board Meeting",
    date: "11th Dec 2023",
    location: "JKUAT, SCC 101",
    description: `Our Vision
        Our vision is to be a catalyst for positive change in the digital landscape. We aspire to be a 
        hub where innovation meets sustainability, creating a ripple effect that transforms individuals, 
        businesses, and communities. Join Us on the Journey Whether you're a student eager to learn, an entrepreneur 
        seeking support, or a tech enthusiast looking for a community, JHUB welcomes you. Join us on this exciting journey 
        where technology, innovation, and sustainability converge to shape a better tomorrow.`,
    isOnLeft: true,
  },
  {
    eventName: "TechTalk Series: Navigating the Digital Landscape",
    date: "11th Dec 2023",
    location: "JKUAT, SCC 101",
    description: `Join us for an insightful session where industry leaders discuss the latest trends in technology, exploring 
    how innovation intersects with sustainability. Discover how these advancements can transform individuals, businesses, and 
    communities. Whether you're a seasoned professional or a curious student, this TechTalk is your gateway to understanding the 
    evolving digital landscape.`,
    isOnLeft: false,
  },
  {
    eventName: "Entrepreneurial Bootcamp: Igniting Ideas, Igniting Success",
    date: "11th Dec 2023",
    location: "JKUAT, SCC 101",
    description: `Calling all entrepreneurs! Dive into a hands-on bootcamp designed to fuel your passion and 
    guide you on the path to success. Our experienced mentors will share valuable insights on building and growing 
    your startup. Don't miss this opportunity to connect with like-minded individuals, seeking support and building 
    a strong entrepreneurial community.`,
    isOnLeft: true,
  },
  {
    eventName: "Tech Enthusiast Meetup: Beyond the Basics",
    date: "11th Dec 2023",
    location: "JKUAT, SCC 101",
    description: `Are you a tech enthusiast looking to delve deeper into the world of innovation? Join us for a
     meetup where we explore advanced concepts and the latest breakthroughs in technology. Engage in discussions, 
     share your ideas, and connect with fellow enthusiasts. Let's build a community that thrives on pushing the 
     boundaries of technology.`,

    isOnLeft: false,
  },
  {
    eventName: "Digital Solutions Expo: Innovating for Societal Needs",
    date: "11th Dec 2023",
    location: "JKUAT, SCC 101",
    description: `Step into the future at our Digital Solutions Expo. Explore a comprehensive array of cutting-edge 
    technologies designed to address societal needs. From climate-smart agricultural solutions to digital trade innovations, 
    witness the transformative power of technology in shaping a sustainable future. Join us in investing in the digital future.`,
    isOnLeft: true,
  },
  {
    eventName: "Innovation Showcase: Bridging the Gap",
    date: "11th Dec 2023",
    location: "JKUAT, SCC 101",
    description: `JHUB is proud to present an Innovation Showcase, highlighting groundbreaking projects that bridge the gap between 
    innovation and implementation. Our experts have tirelessly worked to ensure that the latest technologies are not just cutting-edge 
    but also accessible to small and medium-scale farmers, traders, and enterprises. Witness the democratization of technology for positive 
    change.`,
    isOnLeft: false,
  },
  // {
  //   id: '001',
  //   eventName: 'Past Event 1',
  //   date: '1st Dec 2023',
  //   location: 'JKUAT, SCC 101',
  //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ex turpis.`,
  //   galleryList: [],
  //   isOnLeft: true
  // },
  // {
  //   id: '001',
  //   eventName: 'Past Event 2',
  //   date: '2nd Dec 2023',
  //   location: 'JKUAT, SCC 102',
  //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ex turpis.`,
  //   galleryList: [],
  //   isOnLeft: false
  // }
];

// const upcomingEvents: UpcomingEvent[] = [];

const Events = () => {
  const { pathname } = useLocation();
  const [currentView, setCurrentView] = useState("upcoming");

  useEffect(() => {
    pathname === "/events/past"
      ? setCurrentView("past")
      : setCurrentView("upcoming");
  }, [pathname]);

  // const events = currentView === "upcoming" ? upcomingEvents : pastEvents;

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pastEvents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
