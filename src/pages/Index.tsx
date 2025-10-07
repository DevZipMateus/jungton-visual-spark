import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Solutions from "@/components/Solutions";
import BlogCTA from "@/components/BlogCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Solutions />
        <BlogCTA />
        <Contact />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
