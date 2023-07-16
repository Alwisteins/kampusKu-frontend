import Navbar from "../../components/navbar";
import Visi from "./Visi";
import Misi from "./Misi";
import Team from "./Team";
import Contact from "./Contact";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About | KampusKu";
  }, []);

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
