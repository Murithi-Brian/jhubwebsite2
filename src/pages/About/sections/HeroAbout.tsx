import { LazyLoadImage } from "react-lazy-load-image-component";
import BannerImg from "../../../assets/about/aboutBanner.jpg";

const HeroAbout = () => {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div>
        <h1 className="block text-3xl font-semibold sm:text-title-xxl dark:text-white">
          Discover Our Mission: Empowering Change Through Innovation and
          Collaboration
        </h1>
        <p className="mt-3 text-lg text-secondary-blue dark:text-white">
          Learn About Our Vision, Values, and Commitment to Sustainable Impact
        </p>

        <h2 className="mt-12 mb-4 text-xl font-medium text-success dark:text-white">
          Who we are
        </h2>
        <h3 className="sm:text-title-xl text-3xl font-semibold mb-4 dark:text-white">
          From JKIAN to JHUB Africa
        </h3>
      </div>

      <div className="mt-10 sm:relative flex flex-col sm:flex-row items-center">
        <LazyLoadImage
          effect="blur"
          className="w-full rounded-lg"
          src={BannerImg}
          alt="Image Description"
        />
        <div className="mt-4 sm:mt-0 sm:absolute right-0 h-fit max-w-xl bg-main flex items-center justify-center rounded-xl p-6">
          <p className="text-white sm:text-lg text-base font-medium">
            At Jhub, we are more than just a company - we are a community of
            passionate individuals dedicated to driving positive change. Founded
            on the belief that sustainable impact is achievable through
            innovation and collaboration, we strive to make a difference in
            Africa. Our journey began fueled by a mission of driving sustainable
            digital transformation, providing accessible and impactful solutions
            for small and medium-scale farmers, traders, and enterprises.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
