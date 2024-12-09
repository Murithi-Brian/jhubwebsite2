//import React from 'react';

export default function Stats(props: { githubStats: any[] }) {
  function getStars() {
    if (props.githubStats && Array.isArray(props.githubStats)) {
      return props.githubStats.reduce((sum, element) => sum + element.stargazers_count, 0);
    }
    return 0;
  }

  // function getProjects() {
  //   if (props.githubStats && Array.isArray(props.githubStats)) {
  //     return props.githubStats.length;
  //   }
  //   return 0;
  // }

  return (
    <div className="bg-[#000435] text-white w-full py-16">
      <div className="relative xl:px-20 lg:px-20 md:px-12 px-6 pt-10">
        <h1 className="text-center xl:text-4xl lg:text-3xl text-2xl font-extrabold text-gray-200">
          JHub in Numbers
        </h1>
        <p className="text-lg lg:text-xl text-center text-gray-400 xl:w-4/6 w-full mx-auto pt-5 pb-8 font-normal">
          Wherever there is number, there is beauty.
        </p>
        <div className="flex flex-wrap justify-between bg-black-800 w-full mx-0 rounded-lg shadow-lg p-6">
          {[
            { label: 'Projects', value: '30+' },
            { label: 'Github stars', value: getStars() },
            { label: 'Active members', value: '180+' },
            { label: 'Events', value: '30+' },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/4 p-4 flex flex-col items-center"
            >
              <p className="text-5xl font-bold text-center text-green-500 pb-2">
                {item.value}
              </p>
              <p className="text-xl text-gray-400 text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
