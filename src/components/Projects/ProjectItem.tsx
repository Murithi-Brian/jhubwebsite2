import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import ProjectSample1 from "../../assets/projects/sampleProject1.jpg";

const ProjectItem = () => {
  return (
    <article className="w-full px-4">
      <div className="flex flex-col sm:flex-row gap-2 items-center justify-between py-10 sm:py-20 max-w-screen-xl mx-auto">
        <div className="space-y-4 w-full sm:w-auto max-w-xl">
          <p className="gap-6 text-success text-sm">
            Creative Direction / Website Design / Icon Design
          </p>
          <h2 className="text-3xl">
            PMR — online platform & responsive website design
          </h2>
          <p>
            Less Doing, More Living was a conference about productivity and
            entrepreneurship hosted by Ari Meisel, author of two bestselling
            books: “The Art of Less Doing” and “The Replaceable Founder”.
          </p>

          <div className="w-full sm:w-32">
            <Link
              className="mt-4 w-full sm:w-54 bg-success py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-2xl border hover:border-success hover:bg-transparent hover:text-success text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="/projects/datalawcompanion"
            >
              View Project
            </Link>
          </div>
        </div>
        <div className="mt-0 sm:mt-4">
          <LazyLoadImage
            effect="blur"
            src={ProjectSample1}
            alt="Project Image Sample"
          />
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
