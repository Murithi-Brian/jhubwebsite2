import { LazyLoadImage } from "react-lazy-load-image-component";
import HeroProjectImg from "../../../assets/singleProjectView/hero.jpg";

const SingleProjectHero = () => {
  return (
    <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-3">
        <h1 className="block text-3xl font-semibold sm:text-title-xxl dark:text-white">
          PMR — online platform & responsive website design
        </h1>
        <p className="text-lg text-secondary-blue dark:text-white">
          From cutting-edge solutions to sustainable innovations, our products
          embody our commitment to excellence, fostering growth and progress in
          every endeavor
        </p>
        <p className="gap-6 text-success text-sm">
          Creative Direction / Website Design / Icon Design
        </p>
        <div className="mt-10">
          <LazyLoadImage
            effect="blur"
            className="w-full rounded-xl"
            src={HeroProjectImg}
            alt="Image Description"
          />
        </div>
      </div>
    </section>
  );
};

export default SingleProjectHero;
