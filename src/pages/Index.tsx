import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Brain, Users, MessageCircle, Mail, Instagram, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/5581999703541?text=Olá! Gostaria de agendar uma consulta.', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 to-stone-50">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-24">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-warm-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-stone-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-32 left-40 w-80 h-80 bg-warm-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
          {/* Psi symbol above name */}
          <div className="mb-4 animate-fade-in">
            <img 
              src="/lovable-uploads/535782d6-20d9-49b6-8ab6-49c59359a2f5.png" 
              alt="Ψ" 
              className="w-10 h-10 mx-auto opacity-70 font-bold"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-warm-700 mb-8 animate-fade-in">
            Luciana Prazeres
          </h1>
          <p className="text-xl md:text-2xl text-warm-600 mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Psicóloga CRP 02/12552
          </p>
          <p className="text-2xl md:text-3xl font-playfair text-warm-600 mb-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Apoiando sua jornada de saúde mental com cuidado e conexão
          </p>
          <p className="text-lg text-warm-600 mb-16 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.9s' }}>
            Mais de 20 anos promovendo leveza emocional e relacionamentos saudáveis através da Terapia Cognitivo-Comportamental e Terapia do Esquema
          </p>
          <Button 
            onClick={handleWhatsAppContact}
            className="bg-warm-500 hover:bg-warm-600 text-white px-10 py-8 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in mb-32"
            style={{ animationDelay: '1.2s' }}
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Agendar Consulta
          </Button>
        </div>
      </section>

      <div className="py-8 md:py-12">
        <Separator className="bg-warm-200" />
      </div>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-warm-200 to-stone-200 rounded-3xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/054d6fce-c84c-482c-a669-ce5b9b11b367.png" 
                    alt="Luciana Prazeres"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-warm-300 rounded-full opacity-60"></div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-warm-700 mb-8">
                Sobre Luciana
              </h2>
              <p className="text-lg text-warm-600 mb-8 leading-relaxed">
                Psicóloga há 20 anos, nascida em junho, apaixonada por viagens e conexões humanas. 
                Especialista em Terapia Cognitivo-Comportamental e Terapia do Esquema, 
                dedicada a criar um espaço seguro onde a autenticidade e o crescimento florescem.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Heart className="text-warm-500 w-7 h-7" />
                  <span className="text-warm-600 font-medium text-lg">Autenticidade</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Brain className="text-warm-500 w-7 h-7" />
                  <span className="text-warm-600 font-medium text-lg">Empatia</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Users className="text-stone-500 w-7 h-7" />
                  <span className="text-warm-600 font-medium text-lg">Equilíbrio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-8 md:py-12">
        <Separator className="bg-warm-200" />
      </div>

      {/* Approaches Section */}
      <section id="approaches" className="py-12 md:py-20 px-8 bg-gradient-to-r from-warm-50 to-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center text-warm-700 mb-20 animate-on-scroll">
            Abordagens Terapêuticas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="bg-white/80 backdrop-blur-sm border-warm-200 rounded-3xl p-10 hover:shadow-xl transition-all duration-300 animate-on-scroll">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-warm-100 rounded-2xl flex items-center justify-center mb-8">
                  <Brain className="w-8 h-8 text-warm-600" />
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-warm-700 mb-6">
                  Terapia Cognitivo-Comportamental
                </h3>
                <p className="text-warm-600 leading-relaxed text-lg">
                  Abordagem prática e baseada em evidências que foca na relação entre pensamentos, 
                  emoções e comportamentos. Desenvolvemos estratégias concretas para transformar 
                  padrões que não nos servem mais.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-warm-200 rounded-3xl p-10 hover:shadow-xl transition-all duration-300 animate-on-scroll">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center mb-8">
                  <Heart className="w-8 h-8 text-stone-600" />
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-warm-700 mb-6">
                  Terapia do Esquema
                </h3>
                <p className="text-warm-600 leading-relaxed text-lg">
                  Trabalho profundo com padrões desenvolvidos na infância e adolescência. 
                  Compreendemos as raízes dos comportamentos atuais para promover uma 
                  transformação genuína e duradoura.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="py-8 md:py-12">
        <Separator className="bg-warm-200" />
      </div>

      {/* Who I Work With Section */}
      <section id="clients" className="py-12 md:py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center text-warm-700 mb-20 animate-on-scroll">
            Com Quem Trabalho
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center animate-on-scroll">
              <div className="w-24 h-24 bg-warm-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Users className="w-12 h-12 text-warm-600" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-warm-700 mb-6">
                Adultos
              </h3>
              <p className="text-warm-600 text-lg leading-relaxed">
                Terapia individual para adultos em busca de autoconhecimento e bem-estar emocional
              </p>
            </div>

            <div className="text-center animate-on-scroll">
              <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="w-12 h-12 text-stone-600" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-warm-700 mb-6">
                Relacionamentos
              </h3>
              <p className="text-warm-600 text-lg leading-relaxed">
                Questões relacionais, dificuldades de intimidade e construção de vínculos saudáveis
              </p>
            </div>

            <div className="text-center animate-on-scroll">
              <div className="w-24 h-24 bg-warm-200 rounded-full flex items-center justify-center mx-auto mb-8">
                <Brain className="w-12 h-12 text-warm-700" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-warm-700 mb-6">
                Ansiedade e Depressão
              </h3>
              <p className="text-warm-600 text-lg leading-relaxed">
                Regulação emocional, ansiedade, depressão e desenvolvimento de recursos internos
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="py-8 md:py-12">
        <Separator className="bg-warm-200" />
      </div>

      {/* How I Work Section */}
      <section id="philosophy" className="py-12 md:py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-warm-100 to-stone-100"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll">
            <blockquote className="text-3xl md:text-4xl font-playfair font-medium text-warm-700 mb-10 leading-relaxed">
              "O verdadeiro sucesso é aquele que você consegue sustentar sem perder a si mesmo no caminho."
            </blockquote>
            <p className="text-xl text-warm-600 mb-10 leading-relaxed">
              Acredito em uma terapia humanizada, conversacional e real. 
              Um espaço onde você pode ser verdadeiramente você, sem julgamentos, 
              enquanto exploramos juntos caminhos para o seu bem-estar.
            </p>
            <p className="text-lg text-warm-600 italic">
              Porque a cura acontece na conexão genuína entre pessoas reais.
            </p>
          </div>
        </div>
      </section>

      <div className="py-8 md:py-12">
        <Separator className="bg-warm-200" />
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 px-8 bg-warm-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-warm-50 mb-10 animate-on-scroll">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-warm-200 mb-16 animate-on-scroll">
            Atendimentos presenciais e online disponíveis
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="animate-on-scroll">
              <Button 
                onClick={handleWhatsAppContact}
                className="w-full text-white py-8 rounded-xl text-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                style={{ backgroundColor: '#6B8E23' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#556B1F'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6B8E23'}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.486"/>
                </svg>
                WhatsApp
              </Button>
            </div>
            
            <div className="animate-on-scroll">
              <Button 
                onClick={() => window.location.href = 'mailto:luciana-prazeres@hotmail.com'}
                className="w-full text-white py-8 rounded-xl text-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                style={{ backgroundColor: '#EADBC8', color: '#4A4A4A' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E0D0BD'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EADBC8'}
              >
                <Mail className="w-6 h-6" />
                E-mail
              </Button>
            </div>
            
            <div className="animate-on-scroll">
              <Button 
                onClick={() => window.open('https://instagram.com/psilucianaprazeres', '_blank')}
                className="w-full text-white py-8 rounded-xl text-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                style={{ backgroundColor: '#A89F91' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9A8F82'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#A89F91'}
              >
                <Instagram className="w-6 h-6" />
                Instagram
              </Button>
            </div>

            <div className="animate-on-scroll">
              <Button 
                onClick={() => window.open('https://maps.app.goo.gl/FpeeGMRJYViC7Fhz5', '_blank')}
                className="w-full text-white py-8 rounded-xl text-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                style={{ backgroundColor: '#C97C4F' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B7704A'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C97C4F'}
              >
                <MapPin className="w-6 h-6" />
                Localização
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 bg-warm-800 text-warm-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-playfair mb-6">Luciana Prazeres</p>
          <p className="text-sm mb-4">CRP 02/12552 | Psicóloga</p>
          <p className="text-sm mb-6">Rua da Angustura, 126 - Sala 105</p>
          <p className="text-xs opacity-75 mb-6">
            Este site segue as diretrizes do Conselho Federal de Psicologia para divulgação de serviços psicológicos.
          </p>
          <p className="text-xs opacity-75 mb-8">
            Feito com ♡ para promover saúde mental e bem-estar
          </p>
          <p className="text-sm">
            Todos os direitos autorais reservados. Desenvolvido por{" "}
            <a 
              href="https://gabrielcavalcanti.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white font-bold hover:text-warm-200 transition-colors"
            >
              Gabriel Cavalcanti
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
