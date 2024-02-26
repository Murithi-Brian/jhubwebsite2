import Image from 'next/image';
import React from 'react';

export const industryStats = [
  {
    title: 'Notable Clients',
    total: 450
  },
  {
    title: 'Projects under Maintainance',
    total: 15
  },
  {
    title: 'Active Customers Across Our Products',
    total: 8500
  }
];

export default function IndustryStats() {
  return (
    <>
      <div className="xl:px-20 px-6 py-20 xl:mx-auto xl:container">
        <h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
          More Than 10 Years We Provide Service{' '}
          <br className="md:block hidden" />
          in Modern Farming
        </h1>
        <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
          <Image
            src={'/images/industry-stat.jpg'}
            alt="world map image"
            className="w-full xl:h-full h-96 object-cover sm:block hidden"
            width={20}
            height={30}
          />
          <Image
            src={'/images/industry-stat.jpg'}
            alt="mobile-image"
            className="sm:hidden -mt-10 block w-full h-96 object-cover absolute z-0"
            width={20}
            height={30}
          />

          {industryStats.map((stat, i) => (
            <div
              key={i}
              className="shadow-lg xl:p-6 p-4 sm:w-auto w-full sm:absolute relative z-20 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12"
            >
              <p className="text-3xl font-semibold text-gray-800">
                {stat?.total}
              </p>
              <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
                {stat?.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
