import { LazyLoadImage } from "react-lazy-load-image-component";
import SampleChallengeImg from "../../../assets/singleProjectView/challengeSample.jpg";
import MidBg from "../../../assets/singleProjectView/mid.png"

const ProjectDetails = () => {
  return (
    <section className="bg-secondary-background">
      <div className="mx-auto">
        {/* Challenge */}
        <article className="flex flex-col sm:flex-row gap-2 items-center justify-between py-10 sm:py-20 max-w-screen-xl mx-auto px-4">
          <div className="space-y-4 w-full sm:w-auto max-w-xl">
            <h2 className="font-medium text-3xl">The Challenge</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              ultrices nulla. Nulla eget aliquam elit. Vivamus convallis massa
              sit amet neque dignissim, ac pellentesque mi rhoncus. Nullam nec
              enim felis. Suspendisse sit amet accumsan orci. Phasellus sed
              libero id eros dapibus pulvinar. Maecenas in varius nisl. Fusce
              ultricies, quam non tempus consequat, nunc risus luctus justo, ac
              fermentum ex mi sit amet felis.
            </p>
          </div>
          <div className="mt-0 sm:mt-4">
            <LazyLoadImage
              effect="blur"
              src={SampleChallengeImg}
              alt="Challenge Image Sample"
            />
          </div>
        </article>

        {/* What we did */}
        <article className="flex flex-col sm:flex-row gap-2 items-center justify-between py-10 sm:py-20 max-w-screen-xl mx-auto px-4">
          <div className="space-y-4 w-full sm:w-auto max-w-xl">
            <h2 className="font-medium text-3xl">What we did</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              ultrices nulla. Nulla eget aliquam elit. Vivamus convallis massa
              sit amet neque dignissim, ac pellentesque mi rhoncus. Nullam nec
              enim felis. Suspendisse sit amet accumsan orci. Phasellus sed
              libero id eros dapibus pulvinar. Maecenas in varius nisl. Fusce
              ultricies, quam non tempus consequat, nunc risus luctus justo, ac
              fermentum ex mi sit amet felis.
            </p>
          </div>
          <div className="mt-0 sm:mt-4">
            <LazyLoadImage
              effect="blur"
              src={SampleChallengeImg}
              alt="Challenge Image Sample"
            />
          </div>
        </article>

        {/* Mid section */}
        <article
          className="text-white text-center max-h-[18rem] bg-cover bg-center min-h-[31.5rem] flex flex-col items-center justify-center w-full gap-8 p-4"
          style={{ backgroundImage: `url(${MidBg})` }}
        >
          <h3 className="font-extrabold text-title-xl text-white">
            Problems come and get solved with ease
          </h3>
          <p className="max-w-5xl text-lg">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla
            felis ac turpis at amet. Purus malesuada placerat arcu at enim elit
            in accumsan.
          </p>
        </article>

        {/* The Solution */}
        <article className="flex flex-col sm:flex-row gap-2 items-center justify-between py-10 sm:py-20 max-w-screen-xl mx-auto px-4">
          <div className="space-y-4 w-full sm:w-auto max-w-xl">
            <h2 className="font-medium text-3xl">The Solution</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              ultrices nulla. Nulla eget aliquam elit. Vivamus convallis massa
              sit amet neque dignissim, ac pellentesque mi rhoncus. Nullam nec
              enim felis. Suspendisse sit amet accumsan orci. Phasellus sed
              libero id eros dapibus pulvinar. Maecenas in varius nisl. Fusce
              ultricies, quam non tempus consequat, nunc risus luctus justo, ac
              fermentum ex mi sit amet felis.
            </p>
          </div>
          <div className="mt-0 sm:mt-4">
            <LazyLoadImage
              effect="blur"
              src={SampleChallengeImg}
              alt="Challenge Image Sample"
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProjectDetails;
