import { LazyLoadImage } from "react-lazy-load-image-component";
import HeroProjectImg from "../../../assets/singleProjectView/hero.jpg";

const SingleProjectHero = () => {
  return (
    <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-3">
        <h1 className="block text-3xl font-semibold sm:text-title-xxl dark:text-white">
          Explore our diverse range of innovative products
        </h1>
        <p className="text-lg text-secondary-blue dark:text-white">
          From cutting-edge solutions to sustainable innovations, our products
          embody our commitment to excellence, fostering growth and progress in
          every endeavor
        </p>
        <h2 className="mt-12 mb-4 text-3xl font-medium text-success dark:text-white text-center">
          {/* {Projects} */}
          Climate Smart Agriculture
        </h2>

        <div className="mt-10">
          <LazyLoadImage
            effect="blur"
            className="size-full rounded-xl"
            src={HeroProjectImg}
            alt="Project Hero Image"
          />
        </div>
        <p className="gap-6 text-success text-sm">
          Climate Smart Agriculture / Digital Twin Models / Green Digital
          Innovation / Digital Trade / Digital Transformation
        </p>
      </div>
    </section>
  );
};

export default SingleProjectHero;
