import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { useState, useEffect } from "react";

const SupermercadosVarejo = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const images = [
    "2016-11-24 13.17.53-2.jpg",
    "369938264_802073055253429_576168362097189884_n.jpg",
    "44a52ebc-8e14-4083-9a15-536ac4be4a09.jpg",
    "940f6bbb-1a1e-41e4-90de-ee53bc03259d.jpg",
    "IMG-20190307-WA0007.jpg",
    "IMG-20190927-WA0045.jpg",
    "IMG-20191002-WA0007.jpg",
    "IMG_20181120_152156769.jpg",
    "IMG_20190322_181313070_HDR.jpg",
    "IMG_20200527_153122642.jpg",
    "IMG_20240923_082813003.jpg",
    "IMG_7642.jpg",
    "IMG_8050.jpg",
    "WhatsApp Image 2020-04-27 at 14.57.28.jpg",
    "WhatsApp Image 2020-06-22 at 10.02.19.jpg",
    "WhatsApp Image 2022-11-22 at 09.48.57.jpg",
    "c7ad6033-e052-4d57-8009-3103a4e43200.jpg",
    "fd7ce894-83d8-438d-8be0-c518d1f0655a.jpg",
  ];

  const services = [
    "Fachadas e luminosos",
    "Comunicação interna e PDV",
    "Adesivos, banners e displays promocionais",
    "Totens e sinalização de setores",
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
              <h1 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold">Supermercados & Varejo</h1>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                Identidade forte para gerar impacto e estimular vendas
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
                      src={`/imagens/supermercado e varejo/${image}`}
                      alt={`Projeto de supermercado e varejo ${idx + 1}`}
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
              src={`/imagens/supermercado e varejo/${images[selectedImageIndex]}`}
              alt="Imagem expandida"
              className="max-w-full max-h-full w-auto h-auto object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SupermercadosVarejo;
