import { useState } from "react";
import { EventItem } from "../../components/Events/EventCard";
import { PastEvents, UpcomingEvent } from "../../types/events";

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

const upcomingEvents: UpcomingEvent[] = [];

const Events = () => {
  const [currentView, setCurrentView] = useState("upcoming");

  const toggleView = () => {
    setCurrentView(currentView === "upcoming" ? "past" : "upcoming");
  };

  const events = currentView === "upcoming" ? upcomingEvents : pastEvents;

  return (
    <div className="bg-indigo-700 p-4 max-w-[85rem] mx-auto">
      <h2 className="text-3xl text-center font-bold mb-12">
        JHUB {currentView === "upcoming" ? "Upcoming" : "Past"} Events
      </h2>

      <div className="flex justify-center mb-6">
        <button
          className={`mr-4 py-2 px-4 rounded border text-success ${
            currentView === "upcoming"
              ? "bg-main text-white"
              : "bg-white text-main"
          }`}
          onClick={toggleView}
        >
          Upcoming Events
        </button>

        <button
          className={`py-2 px-4 rounded border text-success ${
            currentView === "past" ? "bg-main text-white" : "bg-white text-main"
          }`}
          onClick={toggleView}
        >
          Past Events
        </button>
      </div>

      <div className="relative flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        {events.map((event, index) => (
          <EventItem key={index} event={event} />
        ))}
      </div>

      {/* ************************************************************************* */}
      {/* <div className="container bg-gray-200 mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: '50%' }}
          ></div>
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Lorem Ipsum
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Lorem Ipsum
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* ************************************************************************* */}
    </div>
  );
};

export default Events;
