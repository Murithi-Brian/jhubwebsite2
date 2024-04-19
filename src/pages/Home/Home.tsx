import SubscribeNewsletter from "./sections/SubscribeNewsletter";
import LandingHeroSection from "./sections/HeroSection";
import FeatureList from "./sections/FeatureList";
import BlogSection from "./sections/BlogSection";
import CommunityHighlights from "./sections/CommunityHighlights";
import FAQ from "./sections/FAQ";

export default function Home() {
  return (
    <div>
      <LandingHeroSection />
      <FeatureList />
      <CommunityHighlights />
      {/* <BlogSection /> */}
      {/* <FAQ /> */}
      <SubscribeNewsletter />
    </div>
  );
}
