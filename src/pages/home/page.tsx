import { useEffect } from "react";
import HeroSection from "./HeroSection";
import RankSection from "./RankSection";
import KampusSection from "./KampusSection";

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
