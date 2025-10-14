import { useState, useEffect, lazy, Suspense } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import logo from "@/assets/jungton-logo.png";
import { searchBlogPost, type BlogPost } from "@/utils/searchBlogPosts";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavigation = (id: string) => {
    if (isHomePage) {
      // Se estamos na home, apenas faz scroll
      scrollToSection(id);
    } else {
      // Se estamos em outra página, navega para home com hash
      navigate(`/#${id}`);
    }
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  // Efeito para scroll quando voltamos à home com hash
  useEffect(() => {
    if (isHomePage && location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => scrollToSection(id), 100);
    }
  }, [location, isHomePage]);
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    
    if (!query) return;

    // Mapeamento de termos de pesquisa para seções/páginas
    const searchMap: Record<string, { type: 'section' | 'page', target: string }> = {
      // Seções da home
      'jungton': { type: 'section', target: 'about' },
      'sobre': { type: 'section', target: 'about' },
      'empresa': { type: 'section', target: 'about' },
      'quem somos': { type: 'section', target: 'about' },
      'história': { type: 'section', target: 'history' },
      'historia': { type: 'section', target: 'history' },
      'trajetória': { type: 'section', target: 'history' },
      'trajetoria': { type: 'section', target: 'history' },
      'soluções': { type: 'section', target: 'solutions' },
      'solucoes': { type: 'section', target: 'solutions' },
      'serviços': { type: 'section', target: 'solutions' },
      'servicos': { type: 'section', target: 'solutions' },
      'contato': { type: 'section', target: 'contact' },
      'fale conosco': { type: 'section', target: 'contact' },
      
      // Páginas
      'blog': { type: 'page', target: '/blog' },
      'novidades': { type: 'page', target: '/blog' },
      'artigos': { type: 'page', target: '/blog' },
      'arquitetura': { type: 'page', target: '/arquitetura-engenharia' },
      'engenharia': { type: 'page', target: '/arquitetura-engenharia' },
      'empresas': { type: 'page', target: '/empresas-negocios' },
      'negócios': { type: 'page', target: '/empresas-negocios' },
      'negocios': { type: 'page', target: '/empresas-negocios' },
      'saúde': { type: 'page', target: '/saude-bem-estar' },
      'saude': { type: 'page', target: '/saude-bem-estar' },
      'bem estar': { type: 'page', target: '/saude-bem-estar' },
      'supermercado': { type: 'page', target: '/supermercados-varejo' },
      'varejo': { type: 'page', target: '/supermercados-varejo' },
    };

    // Buscar correspondência exata
    let result = searchMap[query];

    // Se não encontrar exata, buscar por correspondência parcial
    if (!result) {
      for (const [key, value] of Object.entries(searchMap)) {
        if (query.includes(key) || key.includes(query)) {
          result = value;
          break;
        }
      }
    }

    if (result) {
      if (result.type === 'section') {
        handleNavigation(result.target);
      } else {
        navigate(result.target);
      }
      setIsSearchOpen(false);
      setSearchQuery("");
      return;
    }

    // Buscar nos posts do blog
    try {
      // Importa os posts dinamicamente
      const BlogModule = await import('@/pages/Blog');
      const blogPosts = BlogModule.getBlogPosts?.() || [];
      
      const matchedPost = searchBlogPost(query, blogPosts);
      
      if (matchedPost) {
        // Redireciona direto para o post
        navigate(`/blog/${matchedPost.slug}`);
      } else {
        // Se não encontrar, vai para a página do blog com busca
        navigate(`/blog?search=${encodeURIComponent(query)}`);
      }
    } catch (error) {
      // Fallback: vai para a página do blog
      navigate(`/blog?search=${encodeURIComponent(query)}`);
    }

    setIsSearchOpen(false);
    setSearchQuery("");
  };

  const navItems = [{
    label: "A Jungton",
    id: "about",
    type: "scroll"
  }, {
    label: "Nossa história",
    id: "history",
    type: "scroll"
  }, {
    label: "Soluções personalizadas",
    id: "solutions",
    type: "scroll"
  }, {
    label: "Blog",
    id: "blog",
    type: "link"
  }, {
    label: "Contato",
    id: "contact",
    type: "scroll"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-background/20 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 w-full">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map(item => item.type === "link" ? <Link key={item.id} to={`/${item.id}`} className={`font-medium hover:text-primary transition-smooth uppercase text-sm ${isScrolled ? 'text-foreground/80' : 'text-white'}`}>
                  {item.label}
                </Link> : <button key={item.id} onClick={() => handleNavigation(item.id)} className={`font-medium hover:text-primary transition-smooth uppercase text-sm ${isScrolled ? 'text-foreground/80' : 'text-white'}`}>
                  {item.label}
                </button>)}
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className={`hover:text-primary transition-smooth ${isScrolled ? 'text-foreground/60' : 'text-white'}`} 
              aria-label="Pesquisar"
            >
              <Search className="w-5 h-5" />
            </button>
            <a href="https://www.facebook.com/jungtoncomunicacaovisual" target="_blank" rel="noopener noreferrer" className={`hover:text-primary transition-smooth ${isScrolled ? 'text-foreground/60' : 'text-white'}`} aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/jungtoncomunicacao/" target="_blank" rel="noopener noreferrer" className={`hover:text-primary transition-smooth ${isScrolled ? 'text-foreground/60' : 'text-white'}`} aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="https://br.pinterest.com/jungtoncomunicacaovisual/" target="_blank" rel="noopener noreferrer" className={`hover:text-primary transition-smooth ${isScrolled ? 'text-foreground/60' : 'text-white'}`} aria-label="Pinterest">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className={`lg:hidden ${!isScrolled && 'text-white hover:text-white'}`} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 bg-background/95 backdrop-blur-md rounded-lg mt-2 shadow-xl border border-border animate-fade-in">
            <nav className="flex flex-col gap-2 px-4">
              {navItems.map(item => item.type === "link" ? (
                <Link 
                  key={item.id} 
                  to={`/${item.id}`} 
                  className="text-left py-3 px-4 font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-smooth uppercase text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button 
                  key={item.id} 
                  onClick={() => handleNavigation(item.id)} 
                  className="text-left py-3 px-4 font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-smooth uppercase text-sm"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-border">
                <button 
                  onClick={() => {
                    setIsSearchOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-foreground/60 hover:text-primary transition-smooth" 
                  aria-label="Pesquisar"
                >
                  <Search className="w-6 h-6" />
                </button>
                <a href="https://www.facebook.com/jungtoncomunicacaovisual" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-smooth" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/jungtoncomunicacao/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-smooth" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://br.pinterest.com/jungtoncomunicacaovisual/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-smooth" aria-label="Pinterest">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Search Dialog */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Pesquisar no site</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Digite o que você procura..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                autoFocus
              />
            </div>
            <Button type="submit" className="w-full">
              Pesquisar
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </header>;
};
export default Header;