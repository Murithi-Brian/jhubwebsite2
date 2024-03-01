import ProjectItem from "../../../components/Projects/ProjectItem";

const FeaturedProjects = () => {
  return (
    <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="block text-3xl font-semibold sm:text-title-xxl dark:text-white">
          Explore our diverse range of innovative products
        </h1>
        <p className="mt-3 text-lg text-secondary-blue dark:text-white">
          From cutting-edge solutions to sustainable innovations, our products
          embody our commitment to excellence, fostering growth and progress in
          every endeavor
        </p>
      </div>

      <div className="text-center">
        <h2 className="mt-12 mb-4 text-xl font-medium text-success dark:text-white">
          Projects
        </h2>
        <h3 className="sm:text-title-xl text-3xl font-semibold mb-4 dark:text-white">
          Our featured projects
        </h3>
      </div>

      <div className="space-y-5">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </section>
  );
};

export default FeaturedProjects;
