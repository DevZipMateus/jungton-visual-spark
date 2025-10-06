import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";

const ArquiteturaEngenharia = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    "0808bb33-eb15-44b7-9289-1e48e5d19744.jpg",
    "3b1685cd-f2b4-4b5e-9114-a354e5e5b003.jpg",
    "40511dfd-6730-41f5-be40-0aec7302aa10.jpg",
    "424b41b8-356b-4432-8289-77a7b4c08b51.jpg",
    "8c672a62-97e0-4426-990f-c99e4f63b710.jpg",
    "94a45797-5f73-49e7-8c98-827fe039ec5f.jpg",
    "IMG-20231005-WA0073.jpg",
    "IMG_20231025_174310028.jpg",
    "IMG_20231026_102658625.jpg",
    "IMG_20231115_160957940_HDR.jpg",
    "IMG_20240306_115223091_HDR.jpg",
    "IMG_20240327_145133933_HDR.jpg",
    "Imagem do WhatsApp de 2024-06-13 à(s) 17.56.22_b6c56976.jpg",
    "Imagem do WhatsApp de 2024-08-28 à(s) 17.14.29_f6ea6dd9.jpg",
    "WhatsApp Image 2018-10-23 at 08.59.53.jpg",
    "WhatsApp Image 2019-05-14 at 11.34.10.jpg",
    "WhatsApp Image 2020-01-28 at 17.27.47.jpg",
    "WhatsApp Image 2020-06-19 at 11.51.18 (1).jpg",
    "WhatsApp Image 2021-01-25 at 17.49.22.jpg",
    "WhatsApp Image 2023-10-10 at 17.14.59 (2).jpg",
    "WhatsApp Image 2023-10-19 at 11.43.52.jpg",
    "a5e05cb8-fe24-48d1-8571-1c4c2ec83630.jpg",
    "bf8a04c5-86bc-406b-acef-4f5af79b490b.jpg",
    "d3838ebf-b223-4513-85f1-426246f365d0.jpg",
    "e803a79a-d5fa-40fa-824a-777c062f4353.jpg",
  ];

  const services = [
    "Placas e sinalização técnica",
    "Totens e fachadas personalizadas",
    "Comunicação visual para stands e mostras",
    "Revestimentos e painéis decorativos",
    "Placas de obra",
    "Identificação de empreendimentos",
    "Decorativos e branding em áreas comuns",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <Link to="/#solutions">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para soluções
              </Button>
            </Link>

            <div className="max-w-6xl mx-auto">
              <h1 className="mb-4">Arquitetura & Engenharia</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Soluções visuais para valorizar projetos, fachadas e interiores
              </p>

              <div className="bg-card p-6 rounded-lg shadow-sm mb-12">
                <h2 className="mb-4">Serviços inclusos:</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services.map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-foreground/80">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-lg shadow-sm hover:shadow-elegant transition-smooth animate-scale-in cursor-pointer"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                    onClick={() => setSelectedImage(`/imagens/arquitetura e engenharia/${image}`)}
                  >
                    <img
                      src={`/imagens/arquitetura e engenharia/${image}`}
                      alt={`Projeto de arquitetura e engenharia ${idx + 1}`}
                      className="w-full h-64 object-cover hover:scale-110 transition-smooth"
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
      
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[100vw] max-h-[100vh] w-screen h-screen p-0 m-0 bg-black border-0 rounded-none overflow-hidden flex items-center justify-center">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 bg-white/20 p-2 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none">
            <X className="h-6 w-6 text-white" />
            <span className="sr-only">Fechar</span>
          </DialogClose>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Imagem expandida"
              className="max-w-full max-h-full w-auto h-auto object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ArquiteturaEngenharia;
