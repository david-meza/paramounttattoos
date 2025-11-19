import React, { useState } from 'react';
import { Menu, X, Instagram, Mail } from 'lucide-react';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-paper-white text-ink-black font-sans">
            <nav className="fixed w-full bg-paper-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <span className="font-serif text-2xl font-bold tracking-tighter">ELALPHATATTS</span>
                        </div>
                        <div className="hidden md:flex space-x-8 items-center">
                            <a href="#gallery" className="text-sm uppercase tracking-widest hover:text-gold-accent transition-colors">Work</a>
                            <a href="#about" className="text-sm uppercase tracking-widest hover:text-gold-accent transition-colors">About</a>
                            <a href="#faq" className="text-sm uppercase tracking-widest hover:text-gold-accent transition-colors">FAQ</a>
                            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-ink-black text-white text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors">
                                Book Now
                            </a>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-ink-black hover:text-gold-accent">
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-paper-white border-b border-gray-200">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                            <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-gold-accent">Work</a>
                            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-gold-accent">About</a>
                            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-gold-accent">FAQ</a>
                            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="mt-4 block px-6 py-2 bg-ink-black text-white text-sm uppercase tracking-widest hover:bg-gray-800">
                                Book Now
                            </a>
                        </div>
                    </div>
                )}
            </nav>
            <main className="flex-grow pt-16">
                {children}
            </main>
            <footer className="bg-ink-black text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-6">
                    <h2 className="font-serif text-2xl">ELALPHATATTS</h2>
                    <div className="flex space-x-6">
                        <a href="https://instagram.com/elalphatatts" target="_blank" rel="noopener noreferrer" className="hover:text-gold-accent transition-colors">
                            <Instagram size={24} />
                        </a>
                        <a href="mailto:contact@elalphatatts.com" className="hover:text-gold-accent transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                    <p className="text-sm text-gray-400">© {new Date().getFullYear()} ElalphaTattts. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
