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
    },
    {
      slug: "retrofit-fachadas-comerciais-artestilo",
      title: "Retrofit em fachadas comerciais: a Artestilo de moldura nova",
      date: "09 de dezembro de 2019",
      author: "Jungton",
      excerpt: "O retrofit é uma técnica que busca revitalizar fachadas comerciais e residenciais. Entenda como o retrofit faz parte da comunicação visual do seu negócio.",
      image: "/imagens/blog/retrofit-fachadas-comerciais.jpg",
      category: "Fachadas",
      content: {
        introduction: "O retrofit é uma técnica que busca revitalizar fachadas comerciais e residenciais, além de também ser um conceito aplicado à renovação de um espaço físico, como a renovação de um bairro ou de uma parte dele. Entenda como o retrofit faz parte da comunicação visual do seu negócio, e de que maneira ele pode valorizar a fachada da sua loja, escritório, restaurante ou outro estabelecimento.",
        sections: [
          {
            title: "Retrofit x Reforma: existe diferença?",
            content: "O conceito surgiu na Europa pela necessidade de se encontrar uma alternativa para modernizar o grande número de prédios históricos, que não podiam ser demolidos ou ter suas estruturas modificadas.\n\nO retrofit permite que se modernize a aparência de uma construção sem que se alterem questões estruturais, e essa é a grande diferença do termo para suas possíveis traduções em português.\n\nPode-se dizer que cada área adapta conceitos, e que retrofit pode ter um direcionamento diferente quando pronunciado por um arquiteto ou por um engenheiro, por exemplo.\n\nNa área da comunicação visual o retrofit tem o sentido de atualização da aparência de um imóvel que não pode/não vale a pena ter sua estrutura modificada, demolida ou apenas reformada.\n\nQuem mora em cidades com grande número de prédios históricos sabe como é comum que os prédios fiquem abandonados durante anos, pois seu uso para a área comercial fica muito restrito. Com o retrofit é possível conservar a parte estrutural da fachada desses prédios, e inserir um visual moderno e com foco na eficiência energética, pois faz parte do retrofit prever atualização de parte elétrica e de ventilação.",
            image: "/imagens/blog/1_retrofit_ANTES.jpg"
          },
          {
            title: "Fachadas comerciais: o retrofit em união com o ACM",
            content: "Cada caso é um caso, mas podemos fazer uma generalização e dizer que o ACM é um dos materiais mais utilizados na área da sinalização visual para fazer o retrofit de fachadas comerciais. É com ele que se cria um revestimento sobre a estrutura da fachada original, que não é alterada e fica protegida atrás do material.\n\nO maior intuito do retrofit é modernizar o visual, e junto com ele também buscar eficiência energética, aproveitando para repensar iluminação e ventilação que entra no prédio através da fachada.",
            image: "/imagens/blog/2_retrofit_DEPOIS.jpg"
          },
          {
            title: "Diferenças do retrofit para prédios altos tipo arranha-céu para prédios mais baixos",
            content: "Como já comentamos, cada área tem uma relação com o retrofit, que é uma técnica aplicável não só nas fachadas comerciais, mas também em todas as faces externas de prédios residenciais ou de empreendimentos, como hotéis e outros prédios comerciais de vários andares.\n\nNesse caso, ocorre um processo que pode ser definido como embalar o edifício. Nesse tipo de trabalho há o envolvimento direto de profissionais da área da construção, e um dos principais materiais utilizados costuma ser o vidro, ou a mesclagem dele com outros sistemas, como as fachadas ventiladas. Esse é um escopo fora da sinalização visual, sendo realizado por empresas especializadas em construção.\n\nQuando se fala do retrofit em fachadas comerciais de pequeno e médio porte, a sinalização visual realiza a instalação de placas, geralmente de ACM, na extensão da fachada do prédio, com o objetivo de fazer com que ela transmita a identidade do empreendimento comercial, sinalizando para o cliente que a parte externa reflete o que ele vai encontrar na parte interna.\n\nUm dos principais objetivos do retrofit nesse tipo de fachada é em relação a estética, alinhando o espaço físico com a identidade da marca, criando uma imagem correta na mente dos clientes.",
            image: ""
          },
          {
            title: "A transformação com o retrofit em uma fachada comercial: Artestilo Molduras",
            content: "A Artestilo atua em Santa Maria há 20 anos, e possui um showroom com a maior variedade de molduras, quadros e espelhos belíssimos para decorar espaços. E como essa história já tem 20 anos, é comum que as modernizações tenham ocorrido com força na parte interna da loja, mas a fachada não refletia todo esse espírito moderno.\n\nAssim como um quadro pode dar vida a um ambiente, o retrofit pode dar uma nova cara para a fachada, e foi exatamente isso que fizemos na Artestilo.\n\nCom a instalação das placas de ACM e o letreiro vazado, o exterior da loja reflete o interior: a Artestilo é a loja com a maior variedade de molduras do mercado, é uma loja alinhada com o trabalho dos arquitetos, sempre em busca das novidades do mercado de molduras.\n\nA versatilidade do ACM permite alinhar a fachada com a identidade de cada negócio, e se você quiser conhecer a fundo os benefícios desse material nas fachadas, entre em contato conosco!",
            image: "/imagens/blog/3_retrofit_letreiro-vazado-iluminado.jpg"
          }
        ],
        images: []
      }
    },
    {
      slug: "gourmetizacao-granulare-brigadeiros",
      title: "Doce gourmetização: a comunicação visual da Granulare Brigadeiros",
      date: "08 de outubro de 2019",
      author: "Jungton",
      excerpt: "Quem é que consegue recusar um brigadeiro? A gourmetização na gastronomia abre portas para a criatividade, e está muito ligada ao empreendedorismo, aos produtos artesanais e ao valor agregado.",
      image: "/imagens/blog/gourmetizacao-granulare.jpg",
      category: "Ramo alimentício",
      content: {
        introduction: "Quem é que consegue recusar um brigadeiro? E ainda mais quando além do sabor tradicional tem também o de leite ninho, brigadeiro de churros, de morango… A gourmetização na gastronomia abre portas para a criatividade, e está muito ligada ao empreendedorismo, aos produtos artesanais e ao valor agregado. O conceito da gourmetização está diretamente relacionado ao oferecimento de um diferencial, de uma experiência que conquista além do paladar.",
        sections: [
          {
            title: "A culinária e o empreendedorismo: uma relação que dá certo",
            content: "Os programas de culinária, como MasterChef, Cozinha sob Pressão e o próprio programa da Ana Maria Braga, já fazem parte do entretenimento dos brasileiros. Essa popularização, tanto dos programas que ensinam a fazer pratos, quanto dos que mostram chefs cumprindo desafios, fez com que o mundo da gastronomia se tornasse mais acessível, incentivando que mais indivíduos começassem a se aventurar na cozinha.\n\nA gourmetização começa a aparecer quando a criatividade para pensar em receitas envolve aquelas que já são queridinhas dos brasileiros, como o brigadeiro citado lá no início.\n\nQuando o conceito começou a aparecer nas redes sociais e em blogs especializados em gastronomia, a publicidade percebeu que utilizar o termo poderia alavancar vendas, já que deixava explícito o diferencial do produto, estimulando o desejo e o consumo.\n\nA utilização exaustiva do termo em produtos que não tinham um real diferencial acabou afetando o conceito da gourmetização, e é bem provável que você já tenha visto diversas piadas envolvendo esse termo.\n\nO significado do termo 'gourmet' é cunhado no livro A Fisiologia do Gosto (1885), do gastrônomo francês Jean Anthelme Brillat-Savarin, e designa, em resumo, aquele que tem o paladar apurado. No mesmo livro, considerado a bíblia da gastronomia, Brillat-Savarin traz o conceito de 'o prazer da mesa', que é próprio dos seres humanos – diferente do prazer de comer, e ressalta o quão importante são os cuidados preliminares com a refeição, incluindo a escolha do local e as pessoas com quem você divide a mesa.\n\nO prazer da mesa é o que surge quando a fome é satisfeita, é quando a conversação se instala e reflexões acontecem.",
            image: "/imagens/blog/gourmetizacao-granulare-brigadeiros.jpg"
          },
          {
            title: "A gourmetização dos doces e a comunicação visual: Granulare Brigadeiros",
            content: "Com a evolução da gastronomia, dos estilos de comida e dos movimentos em novas direções, o conceito de gourmet se expandiu, sendo utilizado inclusive em áreas como transportes, moda e serviços de cuidados com o corpo.\n\nQuando se fala em alimentação, pode-se dizer que gourmetizar significa oferecer uma experiência diferenciada com aquele produto ou serviço, que vai além do sabor e da qualidade dos ingredientes, envolvendo também a embalagem e o ambiente em que ocorre a venda.\n\nÉ aí que entra a importância da comunicação visual. Se o seu produto vende uma experiência diferenciada, toda a identidade relacionada a ele precisa também construir essa experiência.\n\nSanta Maria conta com opções variadas de produtos gourmet, e os doces são o forte da Granulare Brigadeiros, que fica na Rua Floriano Peixoto, 1250. Com uma identidade artesanal, a brigaderia oferece diversas opções de doces, que vão desde o queridinho bolo de cenoura até as invenções mais criativas, como a coxinha de brigadeiro.",
            image: "/imagens/blog/gourmetizacao-granulare-doces.jpg"
          },
          {
            title: "A identidade visual que valoriza a marca",
            content: "E claro, não poderiam faltar os brigadeiros, os astros da Granulare, que além do brigadeiro clássico também oferece opções de sabores como napolitano, esticadinho e amêndoa.\n\nPara valorizar a identidade da Granulare, a comunicação visual da fachada ressalta as cores da marca, junto com o logotipo aplicado em letras caixa.\n\nA ambientação do espaço também é importante para fixar a sua marca na lembrança do consumidor, e utilizar painéis fotográficos que complementem a identidade da marca é uma ótima estratégia.\n\nA gourmetização também envolve as embalagens do produto, e os adesivos são uma ótima alternativa, pois podem ser aplicados em qualquer superfície, do vidro ao papel.",
            image: "/imagens/blog/gourmetizacao-granulare-bolo-pote.jpg"
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
