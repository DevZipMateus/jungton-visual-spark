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
      
      {/* Monte Site Badge Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div id="montesite-footer-badge" className="flex justify-center"></div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
