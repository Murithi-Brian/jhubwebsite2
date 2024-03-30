import { Link } from "react-router-dom";
import ctaBg from "../../../assets/about/cta-bg.jpg"

const CTA = () => {
    return (
      <div
        className="bg-cover bg-center min-h-[31.5rem] flex flex-col items-center justify-center w-full gap-8 p-4"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <h2 className="sm:text-title-xl text-3xl font-medium text-center">
          Ready to turn your innovations to digital solutions?
        </h2>
        <p className="text-lg">Join us today!</p>
        <Link
          className="mt-4 w-full sm:w-54 bg-success py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-2xl border border-success hover:bg-transparent hover:text-success text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          to="/"
        >
          Get Started
        </Link>
      </div>
    );
}

export default CTA