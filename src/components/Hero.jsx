import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/fine_line_tattoo_flower_1763572386150.png"
                    alt="Background Art"
                    className="w-full h-full object-cover opacity-30 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-paper-white"></div>
            </div>
            <div className="relative z-10 text-center px-4">
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
                    Fine Line <br /> & Tiny Tats
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto font-light">
                    Specializing in delicate, single-needle artistry. Creating timeless pieces with precision and care.
                </p>
                <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-ink-black text-white text-sm uppercase tracking-widest hover:bg-gold-accent transition-colors duration-300"
                >
                    Book Appointment
                </a>
            </div>
        </section>
    );
};

export default Hero;
