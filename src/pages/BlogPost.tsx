import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

  const posts = [
    {
      slug: "arquitetura-comercial-comunicacao-visual",
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
    },
    {
      slug: "comunicacao-visual-eventos",
      title: "Comunicação visual: ela é importante para o sucesso do evento?",
      date: "21 de janeiro de 2020",
      author: "Jungton",
      excerpt: "Há casos em que as imagens impactam muito mais do que o texto puro. A comunicação visual tem o objetivo de comunicar para o público tudo o que ele precisa associar a sua marca.",
      image: "/imagens/blog/comunicacao-visual-eventos-900x500px.jpg",
      category: "Eventos",
      content: {
        introduction: "Há casos em que as imagens impactam muito mais do que o texto puro, que precisa ser lido e interpretado antes de entregar a sua mensagem. As imagens também são lidas, contudo são capazes de entregar uma mensagem que pode ser assimilada mais rapidamente. A comunicação visual tem o objetivo de comunicar para o público tudo o que ele precisa associar a sua marca.\n\nEm eventos, transmitir a essência da marca é ainda mais importante, e é por isso que a comunicação visual e a sinalização do evento precisa ser uma etapa mapeada na hora de planejar o evento.",
        sections: [
          {
            title: "Comunicação visual em eventos: precisa mesmo?",
            content: "Quando o público chega a um evento, um feirão de imóveis por exemplo, ele precisa ter uma noção clara de quais empresas fazem parte daquele evento, qual é o percurso que ele deve fazer para visitar todos os estandes ou saber onde está alguma empresa em específico. Além disso, também é preciso ficar claro onde ficam entradas e saídas, se existem empresas patrocinadoras, e principalmente, qual é o nome do evento.\n\nA comunicação visual também deve estar bem representada nas redes sociais, e quando necessário, em veículos impressos também. É um processo que começa antes da realização do evento, e precisa se manter enquanto ele durar.\n\nA comunicação visual e a sinalização também são igualmente importantes em outros eventos, como inauguração de lojas, uma vez que é nesse momento que a empresa está mostrando toda a sua identidade, e a primeira impressão do seu público, tanto do que comparece ao evento de inauguração quanto o que vai conhecer a loja nos primeiros dias de funcionamento, é um dos marketings mais poderosos.\n\nO marketing boca a boca pode gerar o buzz positivo que vai fazer a diferença para alavancar o sucesso do empreendimento.",
            image: "/imagens/blog/comunicacao-visual-eventos-estandes.jpg"
          },
          {
            title: "A materialização da comunicação visual",
            content: "A sinalização visual é a materialização da sua comunicação visual em um espaço físico, e é ela que vai transmitir todos os elementos que devem ser associados com a sua marca durante o evento.\n\nCada tipo de evento exige um tipo de sinalização. Por exemplo, um evento que apresenta várias palestras, como o RD Summit (maior evento de marketing digital da América Latina), mas que também possui expositores, você consegue imaginar o papel importantíssimo da sinalização visual no local?\n\nEventos são ótimos lugares para gerar leads, os potenciais consumidores do seu produto ou serviço, e para chamar a atenção desse potencial consumidor, o seu stand, a sua loja, enfim, o espaço em que você estiver presente com a sua marca precisa transmitir identidade, confiabilidade e qualidade.\n\nE é por isso que a sinalização visual precisa transmitir a comunicação visual da sua marca.",
            image: "/imagens/blog/comunicacao-visual-eventos-corporativos.jpg"
          },
          {
            title: "Quais os tipos de sinalização visual que posso utilizar em eventos?",
            content: "O porte do evento é o que influenciará na quantidade de opções que você irá escolher. Lembre-se de ter em mente que os detalhes são tão importantes quanto o resto, e mesmo em eventos menores é preciso deixar claro para o seu público quem é você, a sua marca, o seu produto ou o seu serviço.\n\nO reconhecimento de marca sempre deve ser um objetivo, além da captação de potenciais clientes. E quais são as formas que você pode fazer isso? Através de:\n\n• Banner em lona ou tecido\n• Cubos\n• Totens\n• Displays de mesa\n• Sinalização que promova acessibilidade, como placas de sinalização, mapas em braile e pisos táteis\n• Brindes que tenham relação com a sua marca, como chaveiros e adesivos\n• Flyers e folders\n• Backdrop onde as pessoas que forem ao evento possam tirar fotos\n• Sinalização do estande em si (adesivação do estande e adesivos para o chão, testeiras, painéis e roletas para sorteios)",
            image: "/imagens/blog/comunicacao-visual-eventos-musicais.jpg"
          }
        ],
        images: []
      }
    }
  ];

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-12">
            <p className="text-center text-muted-foreground">Post não encontrado</p>
            <div className="text-center mt-6">
              <Link to="/blog">
                <Button>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar ao Blog
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Blog
              </Button>
            </Link>

            <div className="mb-6">
              <span className="text-sm text-primary font-medium">{post.category}</span>
            </div>

            <h1 className="mb-4">{post.title}</h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>

            <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-8">{post.content.introduction}</p>

              {post.content.sections.map((section, index) => (
                <div key={index} className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  {section.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  {section.image && (
                    <div className="relative w-full h-[400px] my-6 rounded-lg overflow-hidden">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              ))}

              {post.content.images && post.content.images.map((image, index) => (
                <div key={index} className="relative w-full h-[400px] my-6 rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`${post.title} - imagem ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t">
              <Link to="/blog">
                <Button>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar ao Blog
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
