import { useState, useEffect } from 'react';
import { ArrowRight, Check, Star, PlayCircle, BookOpen, Users, Clock, Award, ChevronRight, Menu, X } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('cursos');

  const courses = [
    {
      id: 1,
      title: 'WhatsApp Business Estratégico',
      description: 'Aprende a construir una estrategia de comunicación efectiva para tu negocio.',
      modules: 8,
      hours: 12,
      category: 'Experiencial',
      image: 'https://placehold.co/400x250/3b82f6/ffffff?text=WhatsApp+Business',
      rating: 4.9,
      students: 1250
    },
    {
      id: 2,
      title: 'Marketing de Contenidos',
      description: 'Crea contenido que conecta, convierte y retiene a tu audiencia.',
      modules: 10,
      hours: 16,
      category: 'Creativo',
      image: 'https://placehold.co/400x250/10b981/ffffff?text=Marketing+de+Contenidos',
      rating: 4.8,
      students: 2100
    },
    {
      id: 3,
      title: 'Diseño de Experiencias Digitales',
      description: 'Diseña interfaces y flujos de usuario que generan valor y satisfacción.',
      modules: 6,
      hours: 10,
      category: 'UX/UI',
      image: 'https://placehold.co/400x250/f59e0b/ffffff?text=Diseño+Digital',
      rating: 4.7,
      students: 890
    }
  ];

  const features = [
    {
      icon: <Check className="w-6 h-6 text-green-500" />,
      title: 'Clases en vivo y on-demand',
      description: 'Accede a las clases cuando y donde quieras, con la flexibilidad de aprender a tu ritmo.'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      title: 'Gestión de horarios y seguimiento',
      description: 'Organiza tu aprendizaje con herramientas integradas para gestionar tu tiempo y progreso.'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Comunidad activa',
      description: 'Conecta con otros estudiantes, comparte experiencias y resuelve dudas en tiempo real.'
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      title: 'Certificación profesional',
      description: 'Obtén un certificado reconocido que valida tus nuevas habilidades y potencia tu currículum.'
    }
  ];

  const testimonials = [
    {
      name: 'María González',
      role: 'Emprendedora',
      quote: 'La formación práctica me permitió aplicar inmediatamente lo aprendido en mi negocio. ¡Increíble!',
      avatar: 'https://placehold.co/60x60/6b7280/ffffff?text=MG'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Marketing Manager',
      quote: 'El enfoque humano y la calidad del contenido superaron mis expectativas. Altamente recomendado.',
      avatar: 'https://placehold.co/60x60/6b7280/ffffff?text=CR'
    },
    {
      name: 'Ana López',
      role: 'Diseñadora UX',
      quote: 'Los proyectos prácticos y la retroalimentación personalizada fueron clave para mi crecimiento profesional.',
      avatar: 'https://placehold.co/60x60/6b7280/ffffff?text=AL'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PH</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">PLATAFORMAHUMAN</h1>
                <p className="text-xs text-gray-400">Formación profesional con alma humana y visión digital</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => setActiveTab('cursos')}
                className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'cursos' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'}`}
              >
                Cursos
              </button>
              <button 
                onClick={() => setActiveTab('itinerarios')}
                className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'itinerarios' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'}`}
              >
                Itinerarios
              </button>
              <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
                Entrar
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => { setActiveTab('cursos'); setIsMenuOpen(false); }}
                  className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'cursos' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  Cursos
                </button>
                <button 
                  onClick={() => { setActiveTab('itinerarios'); setIsMenuOpen(false); }}
                  className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'itinerarios' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  Itinerarios
                </button>
                <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
                  Entrar
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Transforma tu carrera con formación <span className="text-blue-400">práctica y humana</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Cursos, programas y talleres con videos, prácticas en vivo y recursos integrados desde Notion.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-gradient-to-r from-teal-500 to-purple-500 px-8 py-3 rounded-lg font-semibold text-white hover:from-teal-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg">
                  Comienza tu Transformación
                </button>
                <button className="border border-gray-600 px-8 py-3 rounded-lg font-semibold text-white hover:bg-gray-800 transition-colors">
                  Ver Itinerarios
                </button>
              </div>

              <div className="space-y-4">
                {features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {feature.icon}
                    <span className="text-gray-300">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://placehold.co/600x400/1f2937/ffffff?text=Trabajo+Práctico" 
                  alt="Trabajo Práctico" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Cursos destacados</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={course.id} className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-semibold">{course.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{course.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{course.modules} módulos</span>
                      <span>•</span>
                      <span>{course.hours} horas</span>
                    </div>
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium">
                      Certificado
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 bg-gray-700 text-white rounded-full text-xs font-medium">
                      {course.category}
                    </span>
                    <span className="text-xs text-gray-400">{course.students} estudiantes</span>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors">
                      Ver
                    </button>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      <PlayCircle className="w-5 h-5 inline mr-1" />
                      Iniciar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">¿Por qué elegirnos?</h2>
          <p className="text-xl text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Nuestra metodología combina la tecnología con el enfoque humano para ofrecerte una experiencia de aprendizaje única.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Lo que dicen nuestros estudiantes</h2>
          <p className="text-xl text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Descubre cómo nuestra formación ha transformado las carreras de personas como tú.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para transformar tu carrera?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Únete a nuestra comunidad de profesionales que están construyendo el futuro con habilidades digitales y humanas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Comienza tu Transformación
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Ver Itinerarios
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PH</span>
              </div>
              <div>
                <p className="text-sm">© 2025 PlataformaHuman — Formación profesional con alma humana y visión digital</p>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <button className="text-gray-400 hover:text-white transition-colors">Términos</button>
              <button className="text-gray-400 hover:text-white transition-colors">Privacidad</button>
              <button className="text-gray-400 hover:text-white transition-colors">Contacto</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
