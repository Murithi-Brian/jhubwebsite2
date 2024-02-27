import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import NetworkImg from "../../assets/images/home/networkImg.jpg";
import EventsImg from "../../assets/images/home/eventsImg.png";
import ResourcesImg from "../../assets/images/home/resourcesImg.jpg";

const CommunityHighlights = () => {
  return (
    <div className="my-8 w-full mx-auto">
      <h2 className="text-3xl text-center font-semibold text-gray-800 dark:text-white mb-4 sm:ml-8 px-4">
        Community Highlights
      </h2>

      {/* newtwork */}
      <div className="w-full bg-secondary-background px-4">
        <div className="flex flex-col sm:flex-row gap-2 items-center justify-between py-10 sm:py-20 max-w-screen-xl mx-auto">
          <div className="space-y-4 w-full sm:w-auto">
            <h3 className="text-3xl">Network</h3>
            <p>We serve the technology community in several ways</p>
            <ul className="space-y-2">
              <li key={crypto.randomUUID()} className="flex items-center">
                <span className="mr-2 font-semibold">&#10003;</span>
                Connecting organizations and people
              </li>
              <li key={crypto.randomUUID()} className="flex items-center">
                <span className="mr-2 font-semibold">&#10003;</span>
                Building market-relevant solutions
              </li>
              <li key={crypto.randomUUID()} className="flex items-center">
                <span className="mr-2 font-semibold">&#10003;</span>
                Being ahead of the curve of innovation.
              </li>
            </ul>
            <div className="w-full sm:w-32">
              <Link
                to="/events"
                className="block text-center border border-success text-success rounded-2xl p-3 h-12 sm:w-32 hover:bg-success hover:text-white"
              >
                Explore
              </Link>
            </div>
          </div>
          <div>
            <LazyLoadImage effect="blur" src={NetworkImg} alt="Network image" />
          </div>
        </div>
      </div>

      {/* Events */}
      <div className="w-full bg-main px-4">
        <div className="flex sm:flex-row-reverse flex-col gap-2 items-center justify-between py-10 sm:py-20 max-w-screen-xl mx-auto">
          <div className="space-y-4 text-whiter w-full sm:w-auto">
            <h3 className="text-3xl text-whiter">Events</h3>
            <p>
              We offer a variety of events to nurture the culture of innovation
            </p>
            <ul className="space-y-2">
              <li key={crypto.randomUUID()} className="flex items-center">
                <span className="mr-2 font-semibold">&#10003;</span>
                Physical events
              </li>
              <li key={crypto.randomUUID()} className="flex items-center">
                <span className="mr-2 font-semibold">&#10003;</span>
                Virtual events
              </li>
              <li key={crypto.randomUUID()} className="flex items-center">
                <span className="mr-2 font-semibold">&#10003;</span>
                Tech events
              </li>
            </ul>
            <div className="w-full sm:w-32">
              <Link
                to="/events"
                className="block text-center border border-success text-success rounded-2xl p-3 h-12 sm:w-32 hover:bg-success hover:text-white"
              >
                Explore
              </Link>
            </div>
          </div>
          <div>
            <LazyLoadImage effect="blur" src={EventsImg} alt="Network image" />
          </div>
        </div>
      </div>

      {/* resources library */}
      <div className="w-full bg-secondary-background px-4">
        <div className="flex flex-col sm:flex-row gap-2 items-center justify-between py-10 sm:py-20 max-w-screen-xl mx-auto">
          <div className="space-y-4 mb-4 sm:mb-0 w-full sm:w-auto">
            <h3 className="text-3xl">Resources Library</h3>
            <p>We have created interesting resources</p>
            <ul className="space-y-2">
              <li key={crypto.randomUUID()} className="flex items-center">
                <span className="mr-2 font-semibold">&#10003;</span>
                Courses
              </li>
              <li key={crypto.randomUUID()} className="flex items-center">
                <span className="mr-2 font-semibold">&#10003;</span>
                White papers, webinars and videos
              </li>
              <li key={crypto.randomUUID()} className="flex items-center">
                <span className="mr-2 font-semibold">&#10003;</span>
                Training toolkits
              </li>
            </ul>
            <div className="w-full sm:w-32">
              <Link
                to="/events"
                className="block text-center border border-success text-success rounded-2xl p-3 h-12 sm:w-32 hover:bg-success hover:text-white"
              >
                Explore
              </Link>
            </div>
          </div>
          <div>
            <LazyLoadImage
              effect="blur"
              src={ResourcesImg}
              alt="Network image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHighlights;
