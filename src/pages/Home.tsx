import SubscribeNewsletter from "../components/Home/SubscribeNewsletter";
import LandingHeroSection from "../components/Home/HeroSection";
import FeatureList from "../components/Home/FeatureList";
import BlogSection from "../components/Home/BlogSection";
import CommunityHighlights from "../components/Home/CommunityHighlights";
import FAQ from "../components/Home/FAQ";

export default function Home() {
  return (
    <div className="">
      <LandingHeroSection />
      <FeatureList />
      <CommunityHighlights />
      <BlogSection />
      <FAQ />
      <SubscribeNewsletter />
    </div>
  );
}
