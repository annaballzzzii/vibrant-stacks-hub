import About from "@/components/About";
import Contact from "@/components/Contact";
import Finder from "@/components/Finder";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Finder />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
