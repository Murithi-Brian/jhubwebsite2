import { Link } from "react-router-dom";
import Carousel from "../../../components/Home/Caroussel"; // Corrected spelling from Caroussel to Carousel
import {
  jhubTeam001,
  jhubTeam002,
  jhubTeam004,
  jhubTeam005,
  jhubTeam006,
  jhubTeam007,
  jhubTeam008,
  jhubTeam009,
  jhubTeam010,
  jhubTeam011,
  jhubTeam012,
  jhubTeam013,
  Slo,
} from "../../../assets/images/community";

const carouselImages = [
  { idx: 1, img: jhubTeam001 },
  { idx: 2, img: jhubTeam002 },
  { idx: 3, img: jhubTeam004 },
  { idx: 4, img: jhubTeam005 },
  { idx: 5, img: jhubTeam006 },
  { idx: 6, img: jhubTeam007 },
  { idx: 7, img: jhubTeam008 },
  { idx: 8, img: jhubTeam009 },
  { idx: 9, img: jhubTeam010 },
  { idx: 10, img: jhubTeam011 },
  { idx: 11, img: jhubTeam012 },
  { idx: 12, img: jhubTeam013 },
  { idx: 13, img: Slo },
];

const CommunityHighlights = () => {
  return (
    <div className="mt-10 w-full mx-auto px-4 bg-gray-50">
      <h2 className="text-4xl text-center font-bold text-green-600 mb-6"> {/* Updated title color */}
        Community Highlights
      </h2>

      {/* Network Section */}
      <div className="w-full bg-gradient-to-r  from-green-900 to-white text-white p-6 rounded-lg shadow-lg mb-8">
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-between py-10 max-w-screen-xl mx-auto">
          <div className="space-y-4 w-full sm:w-1/2 bg-white bg-opacity-90 p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-3xl text-green-600 font-semibold">Our Network</h3> {/* Updated title color */}
            <p className="text-black">Connecting individuals and organizations to drive innovation and growth:</p>
            <ul className="space-y-2 list-disc list-inside">
              {[
                "Connecting organizations and people for impactful collaborations.",
                "Building market-relevant solutions through shared knowledge.",
                "Staying ahead in innovation with cutting-edge resources.",
              ].map((text) => (
                <li key={text} className="flex items-center">
                  <span className="mr-2 text-green-600">&#10003;</span>
                  <span className="text-gray-800">{text}</span>
                </li>
              ))}
            </ul>
            <div className="w-full sm:w-32">
              <Link
                to="/events"
                className="block text-center border border-green-600 text-green-600 rounded-2xl p-3 h-12 hover:bg-green-600 hover:text-white transition duration-300 ease-in-out"
              >
                View Events
              </Link>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <Carousel images={carouselImages} />
          </div>
        </div>
      </div>

      {/* Empower Digital Entrepreneurs Section */}
      <div className="w-full bg-white p-6 rounded-lg shadow-md mt-8 ">
        <h3 className="text-3xl text-green-600 font-semibold text-center mb-4"> {/* Updated title color */}
          Empower Digital Entrepreneurs
        </h3>
        <p className="text-center text-gray-600 mb-6">
          We provide essential resources, mentorship, and support for aspiring digital entrepreneurs. Our goal is to empower individuals to grow their businesses, innovate solutions, and create positive impacts in their communities.
        </p>
        <div className="flex flex-col items-center mb-6">
          <Link
            to="/empower"
            className="text-center border border-green-600 text-green-600 rounded-2xl p-3 h-12 hover:bg-green-600 hover:text-white transition duration-300 ease-in-out"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Highlighted Initiatives Section */}
      <div className="max-w-screen-xl mx-auto mt-8">
        <h3 className="text-3xl text-green-500 font-semibold text-center mb-4"> 
          Our Initiatives
        </h3>
        <p className="text-center text-gray-600 mb-6">
          Discover how we’re making a difference through various initiatives focused on community engagement, skill development, and innovation.
        </p>

        {/* Initiative 1 */}
        <div className="flex flex-col sm:flex-row items-center py-8 px-4 bg-gray-100 rounded-lg shadow-lg mb-6">
          <div className="sm:w-1/2">
            <img src={jhubTeam001} alt="Community Engagement" className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 border border-gray-300" />
          </div>
          <div className="sm:w-1/2 sm:pl-8">
            <h4 className="text-2xl text-green-600 font-semibold mb-2">Community Engagement</h4> {/* Updated title color */}
            <p className="text-gray-600 mb-4">
              Join us in initiatives aimed at bringing people together through workshops, events, and collaborative projects that foster unity and growth.
            </p>
            <Link to="/community-engagement" className="text-green-500 underline hover:text-green-800 transition duration-200">
              Learn More about Community Engagement
            </Link>
          </div>
        </div>

        {/* Initiative 2 */}
        <div className="flex flex-col sm:flex-row-reverse items-center py-8 px-4 bg-white rounded-lg shadow-lg mb-6 ">
          <div className="sm:w-1/2">
            <img src={jhubTeam002} alt="Skill Development" className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 border border-gray-300" />
          </div>
          <div className="sm:w-1/2 sm:pr-8">
            <h4 className="text-2xl text-green-600 font-semibold mb-2">Skill Development Programs</h4> {/* Updated title color */}
            <p className="text-gray-600 mb-4">
              Our skill development programs offer workshops and training sessions designed to help individuals enhance their skills and stay competitive in today's job market.
            </p>
            <Link to="/skill-development" className="text-green-500 underline hover:text-green-800 transition duration-200">
              Discover our Skill Development Programs
            </Link>
          </div>
        </div>

        {/* Initiative 3 */}
        <div className="flex flex-col sm:flex-row items-center py-8 px-4 bg-gray-100 rounded-lg shadow-lg mb-6">
          <div className="sm:w-1/2">
            <img src={jhubTeam004} alt="Innovation Labs" className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 border border-gray-300" />
          </div>
          <div className="sm:w-1/2 sm:pl-8">
            <h4 className="text-2xl text-green-600 font-semibold mb-2">Innovation Labs</h4> {/* Updated title color */}
            <p className="text-gray-600 mb-4">
              Our innovation labs serve as a creative space for entrepreneurs to collaborate on new ideas, test prototypes, and bring innovative solutions to life.
            </p>
            <Link to="/innovation-labs" className="text-green-500 underline hover:text-green-800 transition duration-200">
              Learn More about our Innovation Labs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHighlights;
