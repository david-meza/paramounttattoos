import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Instagram, 
  Mail, 
  MapPin, 
  Calendar, 
  ChevronDown, 
  ExternalLink,
  Info,
  Clock,
  DollarSign
} from 'lucide-react';

// Mock Data - In a real app, you might load this from a JSON file or CMS
const PORTFOLIO_ITEMS = [
  { id: 1, category: 'Traditional', title: 'Panther Head', image: 'https://images.unsplash.com/photo-1562962245-9c5d563f4065?auto=format&fit=crop&q=80&w=800' },
  { id: 2, category: 'Realism', title: 'Lion Portrait', image: 'https://images.unsplash.com/photo-1589688998147-17b3f62d957d?auto=format&fit=crop&q=80&w=800' },
  { id: 3, category: 'Blackwork', title: 'Geometric Sleeve', image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80&w=800' },
  { id: 4, category: 'Traditional', title: 'Dagger & Rose', image: 'https://images.unsplash.com/photo-1590246468528-4a1993141458?auto=format&fit=crop&q=80&w=800' },
  { id: 5, category: 'Fine Line', title: 'Floral Piece', image: 'https://images.unsplash.com/photo-1612459284970-e8f027596582?auto=format&fit=crop&q=80&w=800' },
  { id: 6, category: 'Realism', title: 'Eye Study', image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=800' },
];

const FAQS = [
  { question: "How do I book an appointment?", answer: "Books open on the 1st of every month. Please use the booking form below or send an email with your concept, placement, and size." },
  { question: "Do you require a deposit?", answer: "Yes, a non-refundable $100 deposit is required to secure your date. This goes towards the final price of your tattoo." },
  { question: "What is your hourly rate?", answer: "My current rate is $200/hr. For larger pieces, I offer a day rate of $1200 (approx 7 hours)." },
  { question: "How should I prepare for my appointment?", answer: "Get a good night's sleep, eat a heavy meal beforehand, stay hydrated, and wear comfortable clothing that allows access to the area being tattooed." },
];

const Navigation = ({ activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen }) => {
  const navLinks = [
    { name: 'Work', id: 'portfolio' },
    { name: 'Artist', id: 'about' },
    { name: 'Info', id: 'faq' },
    { name: 'Book', id: 'contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="text-2xl font-bold tracking-tighter text-white">
              INK & <span className="text-amber-500">NEEDLE</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeSection === link.id 
                      ? 'text-amber-500' 
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {link.name.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-400 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  scrollToSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className="text-zinc-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
              >
                {link.name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ scrollToSection }) => (
  <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=2000" 
        alt="Tattoo Background" 
        className="w-full h-full object-cover opacity-30 grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
    </div>

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
      <h2 className="text-amber-500 tracking-[0.3em] text-sm md:text-base mb-4 uppercase font-semibold">
        Custom Tattooing • New York City
      </h2>
      <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight">
        ARTISTRY IN <br/>PERMANENCE
      </h1>
      <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
        Specializing in American Traditional, Blackwork, and Fine Line tattoos. 
        Creating custom pieces that stand the test of time.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button 
          onClick={() => scrollToSection('portfolio')}
          className="px-8 py-4 bg-zinc-100 text-zinc-950 font-bold hover:bg-white transition-all duration-300"
        >
          VIEW PORTFOLIO
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="px-8 py-4 border border-zinc-700 text-white hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
        >
          BOOK APPOINTMENT
        </button>
      </div>
    </div>

    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-zinc-500">
      <ChevronDown size={32} />
    </div>
  </section>
);

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Traditional', 'Realism', 'Blackwork', 'Fine Line'];

  const filteredItems = filter === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">SELECTED WORK</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 text-sm uppercase tracking-wider border transition-all duration-300 ${
                filter === category 
                  ? 'bg-amber-500 border-amber-500 text-black font-bold' 
                  : 'border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative aspect-square overflow-hidden bg-zinc-900 cursor-pointer">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-amber-500 text-xs uppercase tracking-wider font-bold mb-1">{item.category}</span>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 bg-zinc-900 border-y border-zinc-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-amber-500"></div>
          <img 
            src="https://images.unsplash.com/photo-1580250983583-2ae6985bc296?auto=format&fit=crop&q=80&w=800" 
            alt="Artist working" 
            className="relative z-10 w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-amber-500"></div>
        </div>
        
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">THE ARTIST</h2>
          <h3 className="text-xl text-amber-500 mb-6 font-medium">Creating Art Since 2015</h3>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            My name is Alex, and I am a tattoo artist based in Brooklyn, NY. 
            I believe that a tattoo is more than just ink on skin—it's a collaborative 
            expression of identity.
          </p>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            With a background in classical illustration, I transitioned to tattooing to 
            bring art to life in a permanent medium. I strictly adhere to the highest 
            standards of hygiene and safety, using only vegan-friendly inks and 
            single-use disposable equipment.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-zinc-950 p-4 border border-zinc-800">
              <MapPin className="text-amber-500 mb-2" />
              <h4 className="text-white font-bold">Location</h4>
              <p className="text-zinc-500 text-sm">Iron & Ink Studio<br/>Brooklyn, NY</p>
            </div>
            <div className="bg-zinc-950 p-4 border border-zinc-800">
              <Instagram className="text-amber-500 mb-2" />
              <h4 className="text-white font-bold">Follow Me</h4>
              <p className="text-zinc-500 text-sm">@inkandneedle<br/>25k Followers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const InfoSection = () => (
  <section id="faq" className="py-24 bg-zinc-950">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">INFO & FAQ</h2>
        <p className="text-zinc-400">Everything you need to know before booking.</p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, index) => (
          <div key={index} className="bg-zinc-900 border border-zinc-800 p-6 rounded-none hover:border-amber-500/50 transition-colors">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center">
              <Info size={16} className="text-amber-500 mr-2" />
              {faq.question}
            </h3>
            <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
         <div className="flex flex-col items-center text-center p-6 bg-zinc-900 border border-zinc-800">
            <Clock className="text-amber-500 mb-4" size={32} />
            <h4 className="text-white font-bold mb-2">Hours</h4>
            <p className="text-zinc-400 text-sm">Tue - Sat<br/>11:00 AM - 7:00 PM</p>
         </div>
         <div className="flex flex-col items-center text-center p-6 bg-zinc-900 border border-zinc-800">
            <DollarSign className="text-amber-500 mb-4" size={32} />
            <h4 className="text-white font-bold mb-2">Minimum</h4>
            <p className="text-zinc-400 text-sm">Shop Minimum: $150<br/>Hourly: $200</p>
         </div>
         <div className="flex flex-col items-center text-center p-6 bg-zinc-900 border border-zinc-800">
            <Calendar className="text-amber-500 mb-4" size={32} />
            <h4 className="text-white font-bold mb-2">Booking</h4>
            <p className="text-zinc-400 text-sm">Books Open<br/>For Next Month</p>
         </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-900 relative overflow-hidden">
       {/* Decorative bg elements */}
       <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
       <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-zinc-950 p-8 md:p-12 border border-zinc-800 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">REQUEST AN APPOINTMENT</h2>
            <p className="text-zinc-400">
              Please fill out the form below to start the booking process. 
              Include as much detail as possible.
            </p>
          </div>

          {formStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={32} />
              </div>
              <h3 className="text-2xl text-white font-bold mb-2">Request Sent!</h3>
              <p className="text-zinc-400">I'll get back to you within 2-3 business days.</p>
              <button 
                onClick={() => setFormStatus('idle')}
                className="mt-6 text-amber-500 hover:text-amber-400 font-medium"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-zinc-900 border border-zinc-700 p-3 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-zinc-900 border border-zinc-700 p-3 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Placement</label>
                  <input 
                    type="text" 
                    className="w-full bg-zinc-900 border border-zinc-700 p-3 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                    placeholder="e.g. Left Forearm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Approx. Size</label>
                  <input 
                    type="text" 
                    className="w-full bg-zinc-900 border border-zinc-700 p-3 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                    placeholder="e.g. 4x6 inches"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Description of Idea</label>
                <textarea 
                  rows={4}
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 p-3 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                  placeholder="Describe style, subject matter, and any specific details..."
                />
              </div>

              <button 
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full bg-white text-black font-bold py-4 hover:bg-amber-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? 'SENDING...' : 'SEND REQUEST'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ scrollToSection }) => (
  <footer className="bg-zinc-950 py-12 border-t border-zinc-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <span className="text-xl font-bold tracking-tighter text-white cursor-pointer" onClick={() => scrollToSection('hero')}>
          INK & <span className="text-amber-500">NEEDLE</span>
        </span>
      </div>
      
      <div className="flex space-x-6 mb-4 md:mb-0">
        <a href="#" className="text-zinc-500 hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
        <a href="#" className="text-zinc-500 hover:text-amber-500 transition-colors"><Mail size={20} /></a>
        <a href="#" className="text-zinc-500 hover:text-amber-500 transition-colors"><ExternalLink size={20} /></a>
      </div>

      <p className="text-zinc-600 text-sm">
        © {new Date().getFullYear()} Ink & Needle. All rights reserved.
      </p>
    </div>
  </footer>
);

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'portfolio', 'about', 'faq', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-200 font-sans selection:bg-amber-500 selection:text-black">
      <Navigation 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main>
        <Hero scrollToSection={scrollToSection} />
        <Portfolio />
        <About />
        <InfoSection />
        <Contact />
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;