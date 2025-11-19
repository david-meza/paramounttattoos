import React from 'react';
import { MapPin, Instagram } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-zinc-900 border-y border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-amber-500"></div>
                        <img
                            src="/images/artist_portrait_placeholder_1763572407206.png"
                            alt="ElalphaTattts"
                            className="relative z-10 w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            loading="lazy"
                        />
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-amber-500"></div>
                    </div>
                    
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">THE ARTIST</h2>
                        <h3 className="text-xl text-amber-500 mb-6 font-medium">Fine Line & Tiny Tattoos Specialist</h3>
                        <p className="text-zinc-400 mb-6 leading-relaxed">
                            Welcome. I am the artist behind ElalphaTattts, specializing in "Original Fine Line Work" 
                            and "Tiny Tats". My passion lies in creating delicate, precise, and intricate designs that 
                            flow naturally with the body.
                        </p>
                        <p className="text-zinc-400 mb-8 leading-relaxed">
                            I believe that every tattoo, no matter how small, deserves the utmost attention to detail.
                            Whether it's your first tattoo or an addition to your collection, I strive to provide a 
                            comfortable and professional experience. I strictly adhere to the highest standards of 
                            hygiene and safety, using only quality inks and single-use disposable equipment.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="bg-zinc-950 p-4 border border-zinc-800">
                                <MapPin className="text-amber-500 mb-2" size={24} />
                                <h4 className="text-white font-bold">Location</h4>
                                <p className="text-zinc-500 text-sm">Fine Line Studio<br/>Available Upon Booking</p>
                            </div>
                            <div className="bg-zinc-950 p-4 border border-zinc-800">
                                <Instagram className="text-amber-500 mb-2" size={24} />
                                <h4 className="text-white font-bold">Follow Me</h4>
                                <p className="text-zinc-500 text-sm">
                                    <a 
                                        href="https://instagram.com/elalphatatts" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="hover:text-amber-500 transition-colors"
                                    >
                                        @elalphatatts
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
