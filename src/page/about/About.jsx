import Navbar from "../../components/navbar/Navbar";
import Visi from "../../components/about-page/Visi";
import Misi from "../../components/about-page/Misi";
import Team from "../../components/about-page/Team";
import Contact from "../../components/about-page/Contact";

function About() {
  return (
    <div>
      <Navbar />
      <h1>Tentang Kami</h1>
      <p>Selamat datang di KampusKu!</p>

      <Visi />
      <Misi />
      <Team />
      <Contact />
    </div>
  );
}
export default About;
