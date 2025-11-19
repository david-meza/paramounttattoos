import React, { useState, useEffect, ReactNode } from 'react';
import { Menu, X, Instagram, Mail, ExternalLink } from 'lucide-react';

interface LayoutProps {
    children: ReactNode;
}

interface NavLink {
    name: string;
    id: string;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>('hero');

    const navLinks: NavLink[] = [
        { name: 'Work', id: 'portfolio' },
        { name: 'Artist', id: 'about' },
        { name: 'Info', id: 'faq' },
        { name: 'Book', id: 'contact' },
    ];

    const scrollToSection = (id: string): void => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        const handleScroll = (): void => {
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
            <nav className="fixed w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div 
                            className="flex-shrink-0 cursor-pointer" 
                            onClick={() => scrollToSection('hero')}
                        >
                            <span className="text-2xl font-bold tracking-tighter text-white">
                                ELALPHATATTS
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
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-zinc-400 hover:text-white focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-zinc-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
                                >
                                    {link.name.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
            <main>
                {children}
            </main>
            <footer className="bg-zinc-950 py-12 border-t border-zinc-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-xl font-bold tracking-tighter text-white cursor-pointer" onClick={() => scrollToSection('hero')}>
                            ELALPHATATTS
                        </span>
                    </div>
                    
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <a 
                            href="https://instagram.com/elalphatatts" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-500 hover:text-amber-500 transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram size={20} />
                        </a>
                        <a 
                            href="mailto:contact@elalphatatts.com" 
                            className="text-zinc-500 hover:text-amber-500 transition-colors"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                    </div>

                    <p className="text-zinc-600 text-sm">
                        © {new Date().getFullYear()} ElalphaTattts. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
