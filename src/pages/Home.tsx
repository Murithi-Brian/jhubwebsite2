import PartnershipLogos from '../components/Home/PartnershipLogos';
import SubscribeNewsletter from '../components/Home/SubscribeNewsletter';
import LandingHeroSection from '../components/Home/HeroSection';
import FeatureList from '../components/Home/FeatureList';
import BlogSection from '../components/Home/BlogSection';
import CommunityHighlights from '../components/Home/CommunityHighlights';
import FAQ from '../components/Home/FAQ';
import Team from '../components/Home/Team';

export default function Home() {
  return (
    <>
      <LandingHeroSection />
      <FeatureList />
      {/* <PartnershipLogos /> */}
      {/* <Team /> */}
      {/* <CommunityHighlights /> */}
      <BlogSection />
      <FAQ />
      <SubscribeNewsletter />
    </>
  );
}
