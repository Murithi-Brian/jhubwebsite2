const reasonList = [
  {
    title: "Objectives",
    description:
      "Develop climate-smart agriculture and digital trade solutions, fostering a dynamic ecosystem that promotes creativity and cross-disciplinary collaboration.",
  },
  {
    title: "Develop Impactful Solutions",
    description:
      "Design and implement technology that addresses real-world challenges, prioritizing solutions that create positive social and economic impact in Africa.",
  },
  {
    title: "Empower Digital Entrepreneurs",
    description:
      "Provide mentorship and resources to digital entrepreneurs, facilitating connections with industry leaders and collaborators.",
  },
  {
    title: "Bridge Academia-Industry Divide",
    description:
      "Collaborate with universities to nurture innovators and provide pathways to industry, ensuring knowledge translates into scalable solutions.",
  },
  {
    title: "Drive Market Adoption",
    description:
      "Position JHUB's innovations for market adoption through industry partnerships and market feedback, refining solutions for real-world needs.",
  },
  {
    title: "Promote Diversity and Inclusion",
    description:
      "Cultivate a diverse community where everyone feels empowered to contribute, enriching our ecosystem with varied perspectives and expertise.",
  },
];

const Objectives = () => {
  return (
    <section className="max-w-[85rem] mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-primary dark:text-primary-light mt-12 mb-4">
          Why Choose Us
        </h2>
        <h3 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          We’re Just Getting Started
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Whether you're a student eager to learn, an entrepreneur seeking support, or a tech enthusiast looking for a community, JHUB welcomes you. Join us in shaping a sustainable future through innovation and technology.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {reasonList.map((reason, index) => (
          <div key={index} className="space-y-3">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
              {reason.title}
            </h4>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Objectives;
