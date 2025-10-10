import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { useState, useEffect } from "react";

const SaudeBemEstar = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const images = [
    "0512b11e-fd73-41a3-836a-5ca62627c429.jpg",
    "06cf2689-0438-4a2b-9f0c-da82a8bd090f.jpg",
    "30b0947d-e643-4244-887b-ce5dd571983c.jpg",
    "3ae9dec5-dda6-4110-86af-7821f6271317.jpg",
    "88a09892-6139-44a6-8adf-fe3fa2669a09.jpg",
    "IMG-20190823-WA0099.jpg",
    "IMG-20230828-WA0006.jpg",
    "IMG_20210324_103450629.jpg",
    "IMG_20210423_081959696.jpg",
    "IMG_20220705_164314905.jpg",
    "IMG_20220804_154529823_HDR.jpg",
    "IMG_20240729_112546889_HDR.jpg",
    "Imagem do WhatsApp de 2024-07-10 à(s) 16.28.36_89adf235.jpg",
    "Imagem do WhatsApp de 2024-07-10 à(s) 16.28.53_f7ab8bc2.jpg",
    "WhatsApp Image 2020-04-15 at 17.47.43 (1).jpg",
    "WhatsApp Image 2021-05-06 at 17.16.15.jpg",
    "WhatsApp Image 2021-11-17 at 10.22.15.jpg",
    "WhatsApp Image 2021-11-18 at 11.58.01.jpg",
    "WhatsApp Image 2022-04-01 at 17.54.02 (2).jpg",
    "WhatsApp Image 2022-07-04 at 16.57.57.jpg",
    "WhatsApp Image 2024-03-18 at 4.50.45 PM.jpg",
    "WhatsApp Image 2025-07-29 at 17.13.01 (1).jpg",
    "a0469942-7e3e-4da9-81d8-321cc9f6a737.jpg",
    "aacfb65c-710b-443b-b6fd-9bd196515f78.jpg",
    "ee8f9efb-6baa-4bf1-855c-b79613112fd5.jpg",
  ];

  const services = [
    "Fachadas e placas de identificação",
    "Sinalização interna (consultórios, recepções, salas)",
    "Adesivos decorativos e privativos",
    "Comunicação para campanhas e eventos",
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
              <h1 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold">Saúde & Bem-estar</h1>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                Ambientes que inspiram confiança, credibilidade e bem-estar
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
                      src={`/imagens/saude e bem estar/${image}`}
                      alt={`Projeto de saúde e bem-estar ${idx + 1}`}
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
              src={`/imagens/saude e bem estar/${images[selectedImageIndex]}`}
              alt="Imagem expandida"
              className="max-w-full max-h-full w-auto h-auto object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SaudeBemEstar;
