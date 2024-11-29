import { LazyLoadImage } from "react-lazy-load-image-component";
//import { IconArrowRight } from "@tabler/icons-react";
import { ModelType } from "../../types/project";
import { urlFor } from "../Blog/CustomComponents";
import './ProjectItem.css'; // Import the CSS file

type ProjectItemPropsType = {
  ProjectItemProps: ModelType;
  index: number;
};

const ProjectItem = ({ ProjectItemProps, index }: ProjectItemPropsType) => {
  // Determine if the image should be on the right or left based on the index
  const isImageOnRight = index % 2 === 0; // Even index = Image on the right

  const handleArrowClick = () => {
    if (ProjectItemProps.website) {
      window.open(ProjectItemProps.website, "_blank"); // Open project link in a new tab
    }
  };

  return (
    <article className="w-full px-4">
      <div
        className={`project-card project-card-container ${isImageOnRight ? 'sm-row' : 'sm-row-reverse'}`}
      >
        {/* Text Section */}
        <div className="project-card-content">
          <p className="project-card-tags">
            {ProjectItemProps.tags.map((tag, index) => (
              <span key={index}>{tag} / </span>
            ))}
          </p>
          <h2>{ProjectItemProps.title}</h2>
          <p>{ProjectItemProps.description}</p>
        </div>

        {/* Image Section */}
        <div className="project-card-image">
          <LazyLoadImage
            effect="blur"
            src={urlFor(ProjectItemProps.mainImage).url()}
            alt={ProjectItemProps.title}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Arrow (with added functionality to open the project link) */}
        <div className="project-card-arrow" onClick={handleArrowClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-right"
          >
            
            <polyline points="6 4, 18 12, 6 20"></polyline>
          </svg>
        </div>

      </div>
    </article>
  );
};

export default ProjectItem;
