import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <div className="relative aspect-[3/4] max-w-md mx-auto">
                            <img
                                src="/images/artist_portrait_placeholder_1763572407206.png"
                                alt="ElalphaTattts"
                                className="w-full h-full object-cover shadow-xl"
                            />
                            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold-accent z-[-1] hidden md:block"></div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="font-serif text-4xl mb-6">The Artist</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Welcome. I am the artist behind ElalphaTattts, specializing in "Original Fine Line Work" and "Tiny Tats".
                            My passion lies in creating delicate, precise, and intricate designs that flow naturally with the body.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            I believe that every tattoo, no matter how small, deserves the utmost attention to detail.
                            Whether it's your first tattoo or an addition to your collection, I strive to provide a comfortable
                            and professional experience.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <div className="text-center px-6 py-4 bg-white shadow-sm">
                                <span className="block font-serif text-2xl text-gold-accent">Fine Line</span>
                                <span className="text-xs uppercase tracking-wider text-gray-500">Specialist</span>
                            </div>
                            <div className="text-center px-6 py-4 bg-white shadow-sm">
                                <span className="block font-serif text-2xl text-gold-accent">Custom</span>
                                <span className="text-xs uppercase tracking-wider text-gray-500">Designs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
