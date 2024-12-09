// Import React
import LLTCard from './LLTCard';

// Import SVGs as modules
import software from '../../../assets/svg/software.svg';
import competitive from '../../../assets/svg/competitive.svg';
import datascience from '../../../assets/svg/datascience.svg';
import webdev from '../../../assets/svg/webdev.svg';
import automation from '../../../assets/svg/automation.svg';
import daily from '../../../assets/svg/daily.svg';
import mobiledev from '../../../assets/svg/mobiledev.svg';
import doubt from '../../../assets/svg/doubt.svg';

export default function LLT() {
  return (
    <section className="px-6 xl:px-0">
      <div className="container mx-auto py-20">
        <div className="flex flex-col items-center justify-center w-full mb-12">
          <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">
            Let's Learn Together
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-12 gap-8 place-items-center place-content-center">
          <LLTCard title="Software Development" img={software} />
          <LLTCard title="Competitive Coding" img={competitive} />
          <LLTCard title="Data Science" img={datascience} />
          <LLTCard title="Web Development" img={webdev} />
          <LLTCard title="Automation" img={automation} />
          <LLTCard title="Daily Discussions" img={daily} />
          <LLTCard title="Mobile Development" img={mobiledev} />
          <LLTCard title="Doubt Clearance" img={doubt} />
        </div>
      </div>
    </section>
  );
}
