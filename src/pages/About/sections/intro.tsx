import React from 'react';

const Intro = () => {
  return (
    <div className="bg-white text-black px-4 py-12 md:px-16 lg:px-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-500">Watch the video to learn more</h1>
      </div>

      {/* Centered Video Section */}
      <div className="flex justify-center">
        <div className="w-full lg:w-1/2 xl:w-4/5">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/-jvCgrBD5LI"
            title="Introduction Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
