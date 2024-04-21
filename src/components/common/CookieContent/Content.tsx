import { LazyLoadImage } from "react-lazy-load-image-component";
import YummyCookie from "../../../assets/images/icon/cookie-icon.svg";

const Content = () => (
  <div className="flex sm:flex-row flex-col gap-2 sm:gap-10 items-center">
    <LazyLoadImage src={YummyCookie} alt="Cookie Icon" className="w-16" />
    <h2 className="text-white text-right">Cookies Policy</h2>

    <p className="text-sm">
      {" "}
      We use cookies to personalise content and ads, to provide social media
      features and to analyse our traffic. We also share information about your
      use of our site with our social media, advertising and analytics partners
      who may combine it with other information that you’ve provided to them or
      that they’ve collected from your use of their services. You consent to our
      cookies if you continue to use our website.{" "}
      <a
        href="/cookie-policy"
        className="text-success hover:no-underline underline cursor-pointer hover:text-card-grey"
      >
        Our Privacy Policy
      </a>
    </p>
  </div>
);

export default Content;
