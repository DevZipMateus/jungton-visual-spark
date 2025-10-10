import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { useState, useEffect } from "react";

const EmpresasNegocios = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const images = [
    "01fd69d8-8302-4943-8dde-5dd456fc9acb.jpg",
    "07bf1d39-a35c-4dd9-b2bb-f539022f4282.jpg",
    "17e46c1d-7be7-46c2-806d-2c53dbb8901d.jpg",
    "254d5638-23c7-4e7b-8354-f66db394d894.jpg",
    "26fe3ff4-6db6-4626-8268-425e717067fd.jpg",
    "5068bcfa-103a-47d7-8a83-7f8482116100.jpg",
    "61a13cbc-6bdd-444b-b3be-b8e535ada664.jpg",
    "93530f0b-e47a-4d0e-a71b-4516ab6552e5.jpg",
    "FOTO 2 - PRAXIS - ANUARRIO ARQ - MICHELLE FLORES -.jpg",
    "IMG_20200601_150544469_HDR.jpg",
    "IMG_20230214_150233364_HDR.jpg",
    "WhatsApp Image 2020-08-26 at 13.50.16.jpg",
    "WhatsApp Image 2022-11-03 at 18.34.34e.jpg",
    "WhatsApp Image 2023-11-28 at 17.35.19 (3).jpg",
    "WhatsApp Image 2023-12-15 at 09.30.48.jpg",
    "WhatsApp Image 2024-02-02 at 17.49.34.jpg",
    "WhatsApp Image 2024-07-31 at 18.10.09.jpg",
    "WhatsApp Image 2025-07-29 at 11.48.17 (1).jpg",
    "WhatsApp Image 2025-09-25 at 11.53.15.jpg",
    "e901b544-730b-4c77-8e02-61b317a35bc0.jpg",
  ];

  const services = [
    "Fachadas e sinalização corporativa",
    "Totens e comunicação institucional",
    "Impressão digital de grande formato",
    "Adesivos e letras caixa",
  ];

  const handlePrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "Escape") {
        setSelectedImageIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <Link to="/#solutions">
              <Button variant="ghost" className="mb-4 md:mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para soluções
              </Button>
            </Link>

            <div className="max-w-6xl mx-auto">
              <h1 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold">Empresas & Negócios em Geral</h1>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                Presença visual para marcas de todos os segmentos
              </p>

              <div className="bg-card p-4 md:p-6 rounded-lg shadow-sm mb-8 md:mb-12 border-l-4 border-primary">
                <h2 className="mb-3 md:mb-4 font-semibold">Serviços inclusos:</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                  {services.map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span className="text-foreground/80 leading-relaxed">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {images.map((image, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-lg shadow-sm hover:shadow-elegant transition-smooth animate-scale-in cursor-pointer"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                    onClick={() => setSelectedImageIndex(idx)}
                  >
                    <img
                      src={`/imagens/empresas e negocios/${image}`}
                      alt={`Projeto empresarial ${idx + 1}`}
                      className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-smooth"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      
      <Dialog open={selectedImageIndex !== null} onOpenChange={() => setSelectedImageIndex(null)}>
        <DialogContent className="max-w-[100vw] max-h-[100vh] w-screen h-screen p-0 m-0 bg-black border-0 rounded-none overflow-hidden flex items-center justify-center">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 bg-white/20 p-2 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none">
            <X className="h-6 w-6 text-white" />
            <span className="sr-only">Fechar</span>
          </DialogClose>
          
          {selectedImageIndex !== null && selectedImageIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full opacity-70 bg-white/20 p-3 transition-opacity hover:opacity-100 focus:outline-none"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="h-8 w-8 text-white" />
            </button>
          )}
          
          {selectedImageIndex !== null && selectedImageIndex < images.length - 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full opacity-70 bg-white/20 p-3 transition-opacity hover:opacity-100 focus:outline-none"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="h-8 w-8 text-white" />
            </button>
          )}
          
          {selectedImageIndex !== null && (
            <img
              src={`/imagens/empresas e negocios/${images[selectedImageIndex]}`}
              alt="Imagem expandida"
              className="max-w-full max-h-full w-auto h-auto object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmpresasNegocios;
