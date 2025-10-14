/**
 * Interface para o post do blog
 */
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  category: string;
  content: {
    introduction: string;
    sections: Array<{
      title: string;
      content: string;
      image: string;
    }>;
    images: string[];
  };
}

/**
 * Remove acentos de uma string para comparação
 */
const removeAccents = (str: string): string => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

/**
 * Busca inteligente de posts do blog
 * Retorna o post mais relevante ou null se não encontrar
 */
export const searchBlogPost = (query: string, posts: BlogPost[]): BlogPost | null => {
  if (!query || !posts.length) return null;

  const normalizedQuery = removeAccents(query.toLowerCase().trim());
  const queryWords = normalizedQuery.split(/\s+/);

  interface Match {
    post: BlogPost;
    score: number;
  }

  const matches: Match[] = [];

  posts.forEach((post) => {
    let score = 0;

    // Normaliza os textos do post para busca
    const normalizedTitle = removeAccents(post.title.toLowerCase());
    const normalizedExcerpt = removeAccents(post.excerpt.toLowerCase());
    const normalizedCategory = removeAccents(post.category.toLowerCase());
    const normalizedIntro = removeAccents(post.content.introduction.toLowerCase());

    // Busca exata no título tem maior peso
    if (normalizedTitle.includes(normalizedQuery)) {
      score += 100;
    }

    // Busca exata na categoria
    if (normalizedCategory.includes(normalizedQuery)) {
      score += 80;
    }

    // Busca exata no excerpt
    if (normalizedExcerpt.includes(normalizedQuery)) {
      score += 60;
    }

    // Busca exata na introdução
    if (normalizedIntro.includes(normalizedQuery)) {
      score += 40;
    }

    // Busca palavras individuais
    queryWords.forEach((word) => {
      if (word.length < 3) return; // Ignora palavras muito curtas

      if (normalizedTitle.includes(word)) score += 15;
      if (normalizedCategory.includes(word)) score += 12;
      if (normalizedExcerpt.includes(word)) score += 8;
      if (normalizedIntro.includes(word)) score += 5;
    });

    // Busca nas seções do conteúdo
    post.content.sections.forEach((section) => {
      const normalizedSectionTitle = removeAccents(section.title.toLowerCase());
      const normalizedSectionContent = removeAccents(section.content.toLowerCase());

      if (normalizedSectionTitle.includes(normalizedQuery)) {
        score += 30;
      }

      if (normalizedSectionContent.includes(normalizedQuery)) {
        score += 10;
      }

      queryWords.forEach((word) => {
        if (word.length < 3) return;
        if (normalizedSectionTitle.includes(word)) score += 5;
        if (normalizedSectionContent.includes(word)) score += 2;
      });
    });

    if (score > 0) {
      matches.push({ post, score });
    }
  });

  // Ordena por relevância (score mais alto primeiro)
  matches.sort((a, b) => b.score - a.score);

  // Retorna o post mais relevante se tiver um score significativo
  // Score mínimo de 15 para evitar matches muito fracos
  if (matches.length > 0 && matches[0].score >= 15) {
    return matches[0].post;
  }

  return null;
};
