import React from 'react';

const images = [
    { src: '/images/fine_line_tattoo_flower_1763572386150.png', alt: 'Fine Line Flower' },
    { src: '/images/tiny_tattoo_moon_1763572391780.png', alt: 'Tiny Moon Tattoo' },
    { src: '/images/fine_line_butterfly_1763572398791.png', alt: 'Butterfly Tattoo' },
    // Duplicating for grid effect since we have limited generated images
    { src: '/images/tiny_tattoo_moon_1763572391780.png', alt: 'Tiny Moon Tattoo' },
    { src: '/images/fine_line_butterfly_1763572398791.png', alt: 'Butterfly Tattoo' },
    { src: '/images/fine_line_tattoo_flower_1763572386150.png', alt: 'Fine Line Flower' },
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-20 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="font-serif text-4xl mb-4">Selected Work</h2>
                <div className="w-20 h-1 bg-gold-accent mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {images.map((img, index) => (
                    <div key={index} className="group relative aspect-square overflow-hidden bg-gray-100 cursor-pointer">
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a
                    href="https://instagram.com/elalphatatts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm uppercase tracking-widest border-b border-ink-black pb-1 hover:text-gold-accent hover:border-gold-accent transition-colors"
                >
                    View More on Instagram
                </a>
            </div>
        </section>
    );
};

export default Gallery;
