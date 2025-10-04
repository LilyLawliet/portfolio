import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";

export default function App() {
  return (
    <div className="font-sans bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
     <SectionFive />
    </div>
  );
}
