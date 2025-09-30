import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SaudeBemEstar = () => {
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
              <h1 className="mb-4">Saúde & Bem-estar</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Ambientes que inspiram confiança, credibilidade e bem-estar
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

              <h2 className="mb-8">Galeria de projetos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-lg shadow-sm hover:shadow-elegant transition-smooth animate-scale-in"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <img
                      src={`/imagens/saude e bem estar/${image}`}
                      alt={`Projeto de saúde e bem-estar ${idx + 1}`}
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
    </div>
  );
};

export default SaudeBemEstar;
