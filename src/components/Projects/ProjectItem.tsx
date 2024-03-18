import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Link } from "react-router-dom";
import ProjectSample1 from "../../assets/projects/sampleProject1.jpg";
import { ProjectItemType } from "../../types/project";

type ProjectItemPropsType = {
  ProjectItemProps: ProjectItemType;
};

const ProjectItem = ({ ProjectItemProps }: ProjectItemPropsType) => {
  return (
    <article className="w-full px-4">
      <div className="flex flex-col sm:flex-row gap-2 items-center justify-between py-10 sm:py-20 max-w-screen-xl mx-auto">
        <div className="space-y-4 w-full sm:w-auto max-w-xl">
          <p className="gap-6 text-success text-sm">
            {ProjectItemProps.tags.map((tag, index) => (
              <span key={index}>{tag} / </span>
            ))}
          </p>
          <h2 className="text-3xl">{ProjectItemProps.title}</h2>
          <p>{ProjectItemProps.description}</p>

          {/* <div className="w-full sm:w-32">
            <Link
              className="mt-4 w-full sm:w-54 bg-success py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-2xl border hover:border-success hover:bg-transparent hover:text-success text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="/projects/datalawcompanion"
            >
              View Project
            </Link>
          </div> */}
        </div>
        <div className="mt-0 sm:mt-4">
          <LazyLoadImage
            effect="blur"
            src={ProjectItemProps.imageURL || ProjectSample1}
            alt={ProjectItemProps.title}
          />
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
