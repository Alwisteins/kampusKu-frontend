import { useEffect } from "react";
import HeroSection from "../components/landing-page/HeroSection";
import RankSection from "../components/landing-page/RankSection";
import KampusSection from "../components/landing-page/KampusSection";

function Home() {
  useEffect(() => {
    document.title = "Home | KampusKu";
  }, []);

  return (
    <div className="home">
      <HeroSection />
      <RankSection />
      <KampusSection />
    </div>
  );
}

export default Home;
