
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "Início", id: "home" },
    { label: "Quem Sou", id: "about" },
    { label: "Abordagem", id: "approaches" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-warm-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between md:justify-start h-16">
          {/* Logo with Psi symbol - centered on mobile, left-aligned on desktop */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 text-xl font-playfair font-semibold text-warm-800 hover:text-warm-600 transition-colors md:mr-auto"
          >
            <img 
              src="/lovable-uploads/535782d6-20d9-49b6-8ab6-49c59359a2f5.png" 
              alt="Ψ" 
              className="w-12 h-12 opacity-80 font-bold"
            />
            <span>Luciana Prazeres</span>
          </button>

          {/* Desktop Navigation - moved to right */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-warm-700 hover:text-warm-900 font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-warm-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-warm-600 hover:bg-warm-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
            >
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-warm-200 py-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-warm-700 hover:text-warm-900 font-medium text-left py-2 hover:bg-warm-50 px-2 rounded transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="text-warm-700 hover:text-warm-900 font-medium text-left py-2 hover:bg-warm-50 px-2 rounded transition-colors"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
