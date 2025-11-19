import React, { useState } from 'react';

interface GalleryImage {
    src: string;
    alt: string;
    category?: string;
}

const images: GalleryImage[] = [
    { src: '/images/fine_line_tattoo_flower_1763572386150.png', alt: 'Fine Line Flower', category: 'Fine Line' },
    { src: '/images/tiny_tattoo_moon_1763572391780.png', alt: 'Tiny Moon Tattoo', category: 'Tiny' },
    { src: '/images/fine_line_butterfly_1763572398791.png', alt: 'Butterfly Tattoo', category: 'Fine Line' },
    { src: '/images/tiny_tattoo_moon_1763572391780.png', alt: 'Tiny Moon Tattoo', category: 'Tiny' },
    { src: '/images/fine_line_butterfly_1763572398791.png', alt: 'Butterfly Tattoo', category: 'Fine Line' },
    { src: '/images/fine_line_tattoo_flower_1763572386150.png', alt: 'Fine Line Flower', category: 'Fine Line' },
];

const categories = ['All', 'Fine Line', 'Tiny'];

const Gallery: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const filteredImages = selectedCategory === 'All' 
        ? images 
        : images.filter(img => img.category === selectedCategory);

    return (
        <section id="portfolio" className="py-24 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">SELECTED WORK</h2>
                    <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 text-sm uppercase tracking-wider border transition-all duration-300 ${
                                selectedCategory === category 
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
                    {filteredImages.map((img, index) => (
                        <div 
                            key={`${img.src}-${index}`} 
                            className="group relative aspect-square overflow-hidden bg-zinc-900 cursor-pointer"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                {img.category && (
                                    <span className="text-amber-500 text-xs uppercase tracking-wider font-bold mb-1">
                                        {img.category}
                                    </span>
                                )}
                                <h3 className="text-white text-xl font-bold">{img.alt}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://instagram.com/elalphatatts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm uppercase tracking-widest border-b border-zinc-600 pb-1 text-zinc-400 hover:text-amber-500 hover:border-amber-500 transition-colors"
                    >
                        View More on Instagram
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
