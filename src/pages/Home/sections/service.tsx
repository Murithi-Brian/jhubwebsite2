import { Link } from "react-router-dom";

export default function ServicesSection() {
  return (
    <div className="relative px-4 md:px-12 lg:px-24 pt-36 pb-24 bg-gradient-to-br from-white-50 via-blue-50 to-white-100">
      <div className="flex flex-col items-center justify-center text-center w-full mb-12">
        <h1 className="font-extrabold text-gray-900 text-3xl md:text-5xl tracking-tight">
          Our Services
        </h1>
        <p className="lg:w-[60%] px-5 my-8 text-lg lg:text-xl text-gray-700">
          At JHUB, we deliver innovative digital solutions designed to elevate
          your business. Explore our services to discover how we can empower you!
        </p>
      </div>

      <div className="sm:mx-6 grid md:grid-cols-2 xl:grid-cols-3 gap-10">
        {/* Service Card Template */}
        {[
          {
            title: 'Web Design & Development',
            description:
              'We craft engaging, responsive websites tailored to your business needs, ensuring a seamless user experience.',
            img: 'https://cdn-icons-png.flaticon.com/512/1055/1055685.png', // Web Design Icon from Flaticon
            link: '/services/web-design',
          },
          {
            title: 'SEO & Digital Marketing',
            description:
              'Enhance your online visibility and drive traffic to your business with result-oriented SEO strategies.',
            img: 'https://cdn-icons-png.flaticon.com/512/2127/2127288.png', // SEO Icon from Flaticon
            link: '/services/seo-marketing',
          },
          {
            title: 'Mobile App Development',
            description:
              'From idea to app store, we build user-friendly mobile apps that cater to your target audience.',
            img: 'https://cdn-icons-png.flaticon.com/512/1575/1575871.png', // App Development Icon from Flaticon
            link: '/services/app-development',
          },
          {
            title: 'Data Analytics & Insights',
            description:
              'Leverage actionable insights from your data to make informed decisions and drive growth.',
            img: 'https://cdn-icons-png.flaticon.com/512/2920/2920571.png', // Data Analytics Icon from Flaticon
            link: '/services/data-analytics',
          },
          {
            title: 'Cloud Solutions',
            description:
              'Optimize your operations with scalable and secure cloud computing solutions tailored to your needs.',
            img: 'https://cdn-icons-png.flaticon.com/512/622/622666.png', // Cloud Solutions Icon from Flaticon
            link: '/services/cloud-solutions',
          },
          {
            title: 'Cybersecurity',
            description:
              'Protect your digital assets with advanced cybersecurity measures and risk management solutions.',
            img: 'https://cdn-icons-png.flaticon.com/512/1071/1071649.png',
            link: '/services/cybersecurity',
          },
        ].map((service, index) => (
          <div key={index} className="h-auto w-full">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-t-4 border-green-300">
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 p-2 rounded-full bg-blue-100"
                  src={service.img}
                  alt={service.title}
                />
                <h2 className="text-lg font-semibold text-gray-800 ml-4">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link to={service.link}>
                <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-5 py-2 rounded-md font-semibold shadow-lg hover:opacity-90">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
