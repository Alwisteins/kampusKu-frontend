import Navbar from "../../components/navbar/Navbar";
import Visi from "../../components/about-page/Visi";
import Misi from "../../components/about-page/Misi";
import Team from "../../components/about-page/Team";
import Contact from "../../components/about-page/Contact";
import "./about.scss";

function About() {
  return (
    <div className="about">
      <Navbar />
      <div className="section">
        <Visi />
        <Misi />
        <Team />
        <Contact />
      </div>
    </div>
  );
}
export default About;
