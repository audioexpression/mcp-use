import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Teams from "@/components/Teams";
import Results from "@/components/Results";
import News from "@/components/News";
import Gallery from "@/components/Gallery";
import Sponsors from "@/components/Sponsors";
import JoinCTA from "@/components/JoinCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Teams />
        <Results />
        <News />
        <Gallery />
        <Sponsors />
        <JoinCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
