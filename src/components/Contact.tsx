import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { InlineWidget } from 'react-calendly';

interface ContactProps {
    calendlyUrl?: string;
}

const Contact: React.FC<ContactProps> = ({ 
    calendlyUrl
}) => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [showCalendly, setShowCalendly] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        placement: '',
        size: '',
        description: ''
    });
    const [calendlyUrlState] = useState<string>(
        calendlyUrl || import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/alpha-paramounttattoos/30min'
    );

    useEffect(() => {
        // Load Calendly CSS if not already loaded
        const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]');
        
        if (!existingLink) {
            const link = document.createElement('link');
            link.href = 'https://assets.calendly.com/assets/external/widget.css';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setFormStatus('submitting');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            setFormStatus('success');
            // Reset form
            setFormData({
                name: '',
                email: '',
                placement: '',
                size: '',
                description: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setFormStatus('error');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section id="contact" className="py-24 bg-zinc-900 relative overflow-hidden">
            {/* Decorative bg elements */}
            <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Toggle between form and Calendly */}
                <div className="flex justify-center gap-4 mb-8">
                    <button
                        onClick={() => setShowCalendly(false)}
                        className={`px-6 py-3 border transition-all duration-300 ${
                            !showCalendly
                                ? 'bg-amber-500 border-amber-500 text-black font-bold'
                                : 'border-zinc-700 text-zinc-400 hover:border-amber-500 hover:text-amber-500'
                        }`}
                    >
                        Contact Form
                    </button>
                    <button
                        onClick={() => setShowCalendly(true)}
                        className={`px-6 py-3 border transition-all duration-300 ${
                            showCalendly
                                ? 'bg-amber-500 border-amber-500 text-black font-bold'
                                : 'border-zinc-700 text-zinc-400 hover:border-amber-500 hover:text-amber-500'
                        }`}
                    >
                        Book Directly
                    </button>
                </div>

                {showCalendly ? (
                    // Calendly Widget
                    <div className="bg-zinc-950 p-8 md:p-12 border border-zinc-800 shadow-2xl">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">BOOK YOUR APPOINTMENT</h2>
                            <p className="text-zinc-400">
                                Select a date and time that works for you. All appointments require a deposit to secure your slot.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
                            <InlineWidget
                                url={calendlyUrlState}
                                styles={{
                                    height: '700px',
                                    minWidth: '320px',
                                }}
                                pageSettings={{
                                    backgroundColor: 'ffffff',
                                    hideEventTypeDetails: false,
                                    hideLandingPageDetails: false,
                                    primaryColor: 'f59e0b',
                                    textColor: '0a0a0a',
                                }}
                            />
                        </div>
                    </div>
                ) : (
                    // Contact Form
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-zinc-950 p-8 md:p-12 border border-zinc-800 shadow-2xl">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">REQUEST AN APPOINTMENT</h2>
                                <p className="text-zinc-400">
                                    Please fill out the form below to start the booking process. 
                                    Include as much detail as possible.
                                </p>
                            </div>

                            {formStatus === 'success' ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Mail size={32} />
                                    </div>
                                    <h3 className="text-2xl text-white font-bold mb-2">Request Sent!</h3>
                                    <p className="text-zinc-400 mb-4">I'll get back to you within 2-3 business days.</p>
                                    <button
                                        onClick={() => {
                                            setFormStatus('idle');
                                            setShowCalendly(true);
                                        }}
                                        className="mt-6 text-amber-500 hover:text-amber-400 font-medium"
                                    >
                                        Or book directly with Calendly →
                                    </button>
                                </div>
                            ) : formStatus === 'error' ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Mail size={32} />
                                    </div>
                                    <h3 className="text-2xl text-white font-bold mb-2">Error Sending Request</h3>
                                    <p className="text-zinc-400 mb-4">Please try again or contact us directly.</p>
                                    <button
                                        onClick={() => setFormStatus('idle')}
                                        className="mt-6 px-6 py-3 bg-amber-500 text-black font-bold hover:bg-amber-400 transition-colors"
                                    >
                                        Try Again
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-400 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full bg-zinc-900 border border-zinc-700 p-3 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full bg-zinc-900 border border-zinc-700 p-3 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-400 mb-2">Placement</label>
                                            <input
                                                type="text"
                                                name="placement"
                                                value={formData.placement}
                                                onChange={handleInputChange}
                                                className="w-full bg-zinc-900 border border-zinc-700 p-3 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                                                placeholder="e.g. Left Forearm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-400 mb-2">Approx. Size</label>
                                            <input
                                                type="text"
                                                name="size"
                                                value={formData.size}
                                                onChange={handleInputChange}
                                                className="w-full bg-zinc-900 border border-zinc-700 p-3 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                                                placeholder="e.g. 2x3 inches"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-zinc-400 mb-2">Description of Idea</label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            rows={4}
                                            required
                                            className="w-full bg-zinc-900 border border-zinc-700 p-3 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                                            placeholder="Describe style, subject matter, and any specific details..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formStatus === 'submitting'}
                                        className="w-full bg-white text-black font-bold py-4 hover:bg-amber-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {formStatus === 'submitting' ? 'SENDING...' : 'SEND REQUEST'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Contact;

