import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
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
                  <Link key={index} to={`/blog/${post.slug}`}>
                    <Card
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
                  </Link>
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
