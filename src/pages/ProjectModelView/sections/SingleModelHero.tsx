import { LazyLoadImage } from "react-lazy-load-image-component";
// import ClimateImg from "../../../assets/projects/categories/climate-smart-agriculture.jpg";


const SingleModelHero = ({
  ImageUrl,
  ModelTitle,
}: {
  ImageUrl: string;
  ModelTitle: string;
}) => {
  return (
    <section className="relative text-white">
      <LazyLoadImage
        // src={urlFor(modelData.mainImage).url()}
        src={ImageUrl}
        alt={ModelTitle}
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0E2557B2]/70" />

      <div className="relative max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="block text-3xl font-semibold sm:text-title-xxl text-white mb-3">
            {/* Explore our innovative products */}
            {ModelTitle}
          </h1>

          <p className="text-lg ">
            From cutting-edge solutions to sustainable innovations, our products
            embody our commitment to excellence, fostering growth and progress
            in every endeavor
          </p>

          <p className="gap-6 text-success text-sm my-4">
            Climate Smart Agriculture / Digital Twin Models / Green Digital
            Innovation / Digital Trade / Digital Transformation
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleModelHero;
