import HeroSection from "../../../_components/HeroSection";
import VisionMission from "../../../_components/VissionMission";
import Values from "../../../_components/Values";
import TeamSection from "../../../_components/TeamSection";
import MapSection from "../../../_components/MapSections";
import Footer from "../../../_components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VisionMission />
      <Values />
      <TeamSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default AboutUs;
