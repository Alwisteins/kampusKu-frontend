import Navbar from "../../components/navbar/Navbar";
import HeroSection from "../../components/landing-page/HeroSection";
import RankSection from "../../components/landing-page/RankSection";
import KampusSection from "../../components/landing-page/KampusSection";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="section">
        <HeroSection />
        <RankSection />
        <KampusSection />
      </div>
    </div>
  );
}

export default Home;
