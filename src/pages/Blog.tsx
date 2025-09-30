import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  const posts = [
    {
      title: "Arquitetura comercial e comunicação visual: o segredo do sucesso",
      date: "18 de fevereiro de 2020",
      author: "Jungton",
      excerpt: "Quando a arquitetura comercial trabalha junto com a comunicação visual a chance é que essa estratégia impulsione resultados, fidelize clientes, crie valor para uma marca, eleve números de venda ou de alcance, entre outras coisas.",
      image: "/imagens/blog/comunicacao-visual-loja-praxis.jpg",
      category: "Arquitetura Comercial",
      content: {
        introduction: "Quando a arquitetura comercial trabalha junto com a comunicação visual a chance é que essa estratégia impulsione resultados, fidelize clientes, crie valor para uma marca, eleve números de venda ou de alcance, entre outras coisas. O resultado alcançado na nova loja Praxis em Santa Maria explica na prática como essa união pode funcionar.",
        sections: [
          {
            title: "Arquitetura + comunicação visual: como essa união beneficia um negócio",
            content: "A arquitetura comercial leva em conta todos os fatores para maximizar o impacto do empreendimento. É quando o profissional avalia todas as particularidades de um espaço físico e projeta maneiras de maximizar a utilidade de cada m², sempre levando em conta a melhor experiência do consumidor.\n\nExplorar ao máximo o imóvel é uma maneira de garantir que o cliente vai encontrar com facilidade o que procura, e que a venda será facilitada, além da criação de memórias positivas entre o estabelecimento e o inconsciente do cliente.",
            image: "/imagens/blog/1-comunicacao-visual-e-arquitetura-comercial-900x500px.jpg"
          },
          {
            title: "Nova loja Praxis: exemplo de uma união de sucesso",
            content: "A soma da arquitetura comercial com a sinalização visual é visível na nova loja da Praxis, que fica na Rua Alberto Pasqualini, 15, no Centro de Santa Maria. A loja teve um projeto que levou em conta cada detalhe, principalmente a integração do projeto arquitetônico com a sinalização interna e externa da loja.\n\nO prédio está localizado em uma importante esquina do centro da cidade, e no projeto para a nova loja da Praxis o estúdio de arquitetura planejou uma grande reformulação. No exterior do ponto comercial a pintura abriu caminho para que a sinalização garantisse um visual completamente novo para o ponto.",
            image: "/imagens/blog/2-comunicacao-visual-praxis-arquitetura-comercial-900x500px.jpg"
          },
          {
            title: "Materiais e tecnologia",
            content: "A utilização do ACM (placas de alumínio de alta resistência) mudou completamente o visual: o ACM na cor branca reveste a parte superior das vitrines, e na cor azul foi usado para criar o pórtico de entrada da loja, junto com uma iluminação especial.\n\nA escolha da iluminação também foi planejada de forma que tanto os letreiros quanto o interior da loja conversassem, e depois que o sol se vai a iluminação das letras caixa garante que a loja continue tendo destaque e sendo lembrada depois do horário comercial.",
            image: "/imagens/blog/3-comunicacao-visual-praxis-acm-portico-900x500px.jpg"
          },
          {
            title: "Como a comunicação visual ajuda a criar valor de marca",
            content: "Quando um espaço comercial usa cores, texturas e decoração de maneira coesa o cliente percebe isso, tanto em nível consciente quanto inconsciente. O sentimento que ele vai ter ao entrar em um local em que, por exemplo, a disposição dos móveis foi planejada para criar o melhor trajeto dentro da loja vai ser diferente de entrar em um espaço apertado, em que elementos visuais são desconexos e não se unem para criar a identidade da marca.\n\nÉ aí que entra o projeto de sinalização, que leva tudo isso em conta na hora de escolher cores e materiais que vão conversar com os objetivos do empreendimento e com o espaço físico.\n\nSempre que um cliente entrar em um estabelecimento e sair com a sensação de que tudo combina é porque o casamento entre arquitetura comercial e comunicação visual está sendo um sucesso.",
            image: "/imagens/blog/5-comunicacao-visual-sinalizacao-interna-letras-caixa-900x500px.jpg"
          }
        ],
        images: [
          "/imagens/blog/4-comunicacao-visual-praxis-letras-caixa-iluminadas-900x500px.jpg"
        ]
      }
    }
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
