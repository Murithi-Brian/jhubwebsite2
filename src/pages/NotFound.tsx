import { LazyLoadImage } from "react-lazy-load-image-component";
import Logo from "../assets/images/logo/jhub-logo-new.svg"
import { Link } from "react-router-dom";

const Error10 = () => {
  return (
    <div className="flex items-center flex-col-reverse sm:flex-row justify-center py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
      <div className="sm:w-1/2 w-full mx-auto">
        <LazyLoadImage
          className="block h-64 sm:h-full sm:w-auto object-cover"
          effect="blur"
          src={Logo}
          alt={"JHUB Logo"}
        />
      </div>
      <div className="sm:w-1/2 w-full">
        <p className="text-4xl text-center">🚧 🚧 🚧 🚧 🚧 🚧 🚧 </p>
        <h1 className="text-center py-4 text-2xl lg:text-4xl font-extrabold text-gray-800">
          {/* 404 | Page Not Found */}
          🛠️ Page under construction
        </h1>
        {/* <p className="py-4 text-base text-gray-800">
          The content you&apos;re looking for doesn&apos;t exist. Either it was
          removed, or you mistyped the link.
        </p>
        <p className="py-2 text-base text-gray-800">
          Sorry about that! Please visit our hompage to get where you need to
          go.
        </p> */}

        <Link
          to="/"
          className="block w-full sm:w-2/3 mx-auto font-semibold text-lg text-center my-4 border rounded-md px-1 sm:px-16 py-5 bg-black text-whiter hover:bg-black 0 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error10;
