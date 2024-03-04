import CTA from "../About/sections/CTA";
// import MoreProjects from "./sections/MoreProjects";
import ProjectDetails from "./sections/ProjectDetails";
import SingleProjectHero from "./sections/SingleProjectHero";

const SingleProjectView = () => {
  return (
   <div>
    <SingleProjectHero/>
    <ProjectDetails/>
    {/* <MoreProjects/> */}
    <CTA/>
   </div>
  );
};

export default SingleProjectView;
