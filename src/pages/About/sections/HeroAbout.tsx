import YouTube, { YouTubeProps } from "react-youtube";

const HeroAbout = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "576",
    width: "1024",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <section className="max-w-[85rem] mx-auto px-6 sm:px-10 lg:px-16 text-center mb-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl tracking-tight text-gray-800 dark:text-white leading-tight">
          Empowering Change Through Innovation & Collaboration
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Our vision and values are built on a foundation of sustainable impact, driving transformation in the tech industry.
        </p>
      </div>

      <div className="mt-14">
        <h2 className="text-2xl font-semibold text-primary dark:text-primary-light mb-2">
          Who We Are
        </h2>
        <p className="text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-300">
          Delivering Impactful Digital Solutions for Enterprises
        </p>
      </div>

      <div className="flex justify-center overflow-x-auto mt-12">
        <YouTube videoId="-jvCgrBD5LI" opts={opts} onReady={onPlayerReady} className="rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default HeroAbout;
