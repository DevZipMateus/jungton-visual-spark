import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SupermercadosVarejo = () => {
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
              <h1 className="mb-4">Supermercados & Varejo</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Identidade forte para gerar impacto e estimular vendas
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
                      src={`/imagens/supermercado e varejo/${image}`}
                      alt={`Projeto de supermercado e varejo ${idx + 1}`}
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

export default SupermercadosVarejo;
