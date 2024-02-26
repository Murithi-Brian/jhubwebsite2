import {
  IconDiscountCheckFilled,
  IconBusinessplan,
  IconBuildingLighthouse,
  IconChessKnightFilled,
  IconStarsFilled,
  IconRocket
} from '@tabler/icons-react';

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-sphere-plus"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 12c0 1.657 4.03 3 9 3c1.116 0 2.185 -.068 3.172 -.192m5.724 -2.35a1.1 1.1 0 0 0 .104 -.458" />
    <path d="M20.984 12.546a9 9 0 1 0 -8.442 8.438" />
    <path d="M16 19h6" />
    <path d="M19 16v6" />
  </svg>
);

const featureList = [
  {
    title: 'Support To Find Investment',
    icon: (
      <IconBusinessplan
        size={'40px'}
        className="text-success dark:text-gray-400"
      />
    ),
    description: `
    Navigating the landscape of investments can be daunting. At JHUB, we provide dedicated support to 
    help you find the right investments for your digital initiatives. Our team of financial experts and 
    advisors guide you through the process, connecting you with opportunities that align with your goals. 
    Whether you're a small-scale farmer, trader, or enterprise, we're committed to securing the financial 
    support you need for sustainable growth.
    `
  },
  {
    title: 'Digital Innovation Hub',
    icon: (
      <IconBuildingLighthouse
        size={'40px'}
        className="text-success dark:text-gray-400"
      />
    ),
    description: `
    JHUB is your ultimate Digital Innovation Hub, where ideas flourish and innovation thrives. 
    Our platform provides a collaborative space for visionaries, entrepreneurs, and businesses to ideate, 
    incubate, and implement digital solutions. From concept to execution, we support every stage of the innovation 
    journey, fostering a vibrant community committed to driving positive societal impact through digital transformation.
    `
  },
  {
    title: 'Skills and Training',
    icon: (
      <IconStarsFilled
        size={'40px'}
        className="text-success dark:text-gray-400"
      />
    ),
    description: `
    Empowering individuals with the right skills is at the core of what we do. JHUB offers comprehensive skills 
    development and training programs designed to enhance digital literacy and proficiency. From farmers looking 
    to optimize agricultural practices to traders seeking to navigate digital markets, our tailored training initiatives 
    ensure that you are well-equipped for the digital age.
    `
  },
  {
    title: 'Facilitating Technology Transfer',
    icon: (
      <IconRocket size={'40px'} className="text-success dark:text-gray-400" />
    ),
    description: `
    JHUB serves as a catalyst for technology transfer, facilitating the seamless exchange of knowledge and innovation. 
    Our platform connects innovators, industry experts, and businesses, fostering collaborations that lead to the swift 
    and effective transfer of technology. By breaking down barriers and fostering a dynamic ecosystem, we empower individuals 
    and organizations to leverage the power of transformative technologies.
    `
  },
  {
    title: 'Test Before Invest',
    icon: (
      <IconDiscountCheckFilled
        size={'40px'}
        className="text-success dark:text-gray-400"
      />
    ),
    description: `
    At JHUB, we believe in the principle of "Test Before Invest," a guiding philosophy that underscores our commitment to your 
    success. Before you make significant investments, we offer a comprehensive testing framework to evaluate the viability and 
    impact of digital solutions. Our meticulous testing processes ensure that every innovation undergoes rigorous examination, 
    allowing you to make informed decisions about your investments. With JHUB, you can confidently navigate the digital landscape, 
    secure in the knowledge that your investments are well-founded and poised for success.


    `
  },
  {
    title: 'Diffusion of new Technologies',
    icon: (
      <IconChessKnightFilled
        size={'40px'}
        className="text-success dark:text-gray-400"
      />
    ),
    description: `
    At JHUB, we specialize in the seamless diffusion of cutting-edge technologies. Our experts work tirelessly to 
    bridge the gap between innovation and implementation, ensuring that the latest technologies become accessible 
    and beneficial for small and medium-scale farmers, traders, and enterprises. We believe in democratizing technology 
    for the greater good, driving positive change through widespread adoption.`
  }
];

export default function FeatureList() {
  return (
    <section className=" mt-20 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            JHUB Services | Built To Meet Innovation
          </h2>
          <p className=" sm:text-xl dark:text-gray-400">
            At JHUB, we are dedicated to fostering innovation and transforming
            digital landscapes. Experience the power of technology-driven
            solutions with JHUB, where every service is tailored to meet the
            dynamic needs of a rapidly evolving digital era.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 space-y-8 md:space-y-0">
          {featureList.map((feature, i) => (
            <div key={i} className="flex flex-col items-center space-y-4">
              <div className="flex justify-center items-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary-100 dark:bg-primary-900">
                {feature?.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">
                {feature?.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {feature?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
