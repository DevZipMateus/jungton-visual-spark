import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  const posts = [
    {
      title: "Como escolher a comunicação visual ideal para seu negócio",
      date: "15 de março de 2025",
      excerpt: "Descubra as melhores práticas para definir a identidade visual que melhor representa sua marca e atrai seu público-alvo.",
      image: "/imagens/empresas e negocios/01fd69d8-8302-4943-8dde-5dd456fc9acb.jpg",
    },
    {
      title: "Tendências em sinalização para saúde e bem-estar",
      date: "08 de março de 2025",
      excerpt: "Conheça as últimas tendências em comunicação visual para clínicas, consultórios e espaços de bem-estar.",
      image: "/imagens/saude e bem estar/0512b11e-fd73-41a3-836a-5ca62627c429.jpg",
    },
    {
      title: "A importância da fachada no varejo",
      date: "01 de março de 2025",
      excerpt: "Entenda como uma fachada bem planejada pode aumentar significativamente o fluxo de clientes no seu estabelecimento.",
      image: "/imagens/supermercado e varejo/2016-11-24 13.17.53-2.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="mb-4 text-center">Blog Jungton</h1>
              <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
                Fique por dentro das novidades, tendências e dicas sobre comunicação visual
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden transition-smooth hover:shadow-elegant cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-smooth hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
                    </div>
                    
                    <CardContent className="p-6">
                      <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
                      <h3 className="mb-3 text-lg">{post.title}</h3>
                      <p className="text-sm text-foreground/80">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-muted-foreground">
                  Em breve, mais conteúdos sobre comunicação visual e tendências do mercado
                </p>
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

export default Blog;
