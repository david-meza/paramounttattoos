import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
    const scrollToSection = (id: string): void => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/fine_line_tattoo_flower_1763572386150.png"
                    alt="Tattoo Background"
                    className="w-full h-full object-cover opacity-30 grayscale"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
                <h2 className="text-amber-500 tracking-[0.3em] text-sm md:text-base mb-4 uppercase font-semibold">
                    Original Black Micro Realism • Fine Line
                </h2>
                <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight">
                    ARTISTRY IN <br />PERMANENCE
                </h1>
                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
                    Specializing in fine line work and tiny tattoos. Creating delicate, precise, 
                    and intricate designs that flow naturally with the body.
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
};

export default Hero;
