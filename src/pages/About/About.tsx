import CTA from "./sections/CTA";
import HeroAbout from "./sections/HeroAbout";
import Objectives from "./sections/Objectives";
import Team from "./sections/Team";

const About = () => {
  return (
    <div>
      <HeroAbout />
      <Objectives />
      <Team />
      <CTA/>
    </div>
  );
};

export default About;
