import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import FAQ from './components/FAQ';

function App() {
    return (
        <Layout>
            <Hero />
            <Gallery />
            <About />
            <FAQ />
        </Layout>
    );
}

export default App;
