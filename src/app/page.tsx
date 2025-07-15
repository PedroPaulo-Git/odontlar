import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialists from "@/components/Specialists";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-peach">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Specialists />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
