//import CTA from "./sections/CTA";
import FAQ from "./sections/FAQ";
import Intro from "./sections/intro";
//import HeroAbout from "./sections/HeroAbout";
import MVV from "./sections/mvv";
import Team from "./sections/Team";
import WCU from "./sections/wcu";


const About = () => {
  return (
    <div>
      <MVV/>
      <Intro/>
      <WCU/>
     <Team/>
      <FAQ/>
    </div>
  );
};

export default About;
