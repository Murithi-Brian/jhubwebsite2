const reasonList = [
  {
    title: "Objectives",
    description:
      "Develop climate smart agricultural solutions and digital trade Cultivate a Dynamic Innovation Ecosystem Foster an environment that stimulates creativity, collaboration, and cross-disciplinary innovation.",
  },
  {
    title: "Develop impactful solutions ",
    description:
      "Ideate, design, and implement technological solutions that address real-world challenges. Prioritize solutions with the potential to create spin-offs that have a positive social and economic impact in Africa",
  },
  {
    title: "Empower Digital Entrepreneurs",
    description:
      "Provide comprehensive support, mentorship, and resources to digital entrepreneurs, startups, and tech experts within our ecosystem. Facilitate networking opportunities to connect innovators with industry leaders and potential collaborators",
  },
  {
    title: "Bridge Academia-Industry Divide",
    description:
      "Establish strong collaborations with universities, particularly focusing on nurturing digital innovators and providing them with pathways to industry integration. Facilitate industry partnerships to ensure that knowledge is translated into scalable solutions.",
  },
  {
    title: "Drive Market Adoption",
    description:
      "Strategically position JHUB's innovations for market adoption by fostering industry partnerships and conducting market-oriented research. Actively engage with end-users and stakeholders to refine and enhance solutions based on market feedback.",
  },
  {
    title: "Promote Diversity and Inclusion",
    description:
      "Embrace diversity in thought, background, and expertise to create a rich tapestry of perspectives within our community. Foster an inclusive environment where all individuals feel empowered to contribute and succeed",
  },
];

const Objectives = () => {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div>
        <h2 className="mt-12 mb-4 text-xl font-medium text-success dark:text-white">
          Why choose us
        </h2>
        <h3 className="text-4xl font-semibold mb-4 dark:text-white">
          We’re just getting started
        </h3>
        <p className="text-gray">
          Whether you're a student eager to learn, an entrepreneur seeking
          support, or a tech enthusiast looking for a community, JHUB welcomes
          you. Join us on this exciting journey where technology, innovation,
          and sustainability converge to shape a better tomorrow.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {reasonList.map((reason) => (
          <div key={crypto.randomUUID()} className="flex flex-col space-y-4">
            <h4 className="text-title-md font-semibold mb-2 dark:text-white">
              {reason?.title}
            </h4>
            <p className="dark:text-gray-400 text-lg">
              {reason?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Objectives