import { SpeedInsights } from '@vercel/speed-insights/react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <Layout>
                <Hero />
                <Gallery />
                <About />
                <FAQ />
                <Contact calendlyUrl="https://calendly.com/alpha-paramounttattoos/30min" />
            </Layout>
            <SpeedInsights />
        </>
    );
}

export default App;

