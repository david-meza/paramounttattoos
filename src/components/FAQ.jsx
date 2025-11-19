import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-serif text-lg">{question}</span>
                <span className="text-gold-accent">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-gray-600 font-light leading-relaxed">{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "How do I book an appointment?",
            answer: "Bookings are currently handled through my booking link. If bookings are closed, please check my Instagram @elalphatatts for updates on when my books will reopen."
        },
        {
            question: "What is your deposit policy?",
            answer: "A non-refundable deposit is required to secure your appointment slot. This deposit goes towards the final cost of your tattoo. If you need to reschedule, please provide at least 48 hours notice."
        },
        {
            question: "How should I prepare for my appointment?",
            answer: "Please ensure you are well-rested, hydrated, and have eaten a good meal before coming in. Avoid alcohol for 24 hours prior. Wear comfortable clothing that allows easy access to the area being tattooed."
        },
        {
            question: "What are your aftercare instructions?",
            answer: "Remove the bandage after 2-3 hours (or as instructed). Wash gently with warm water and unscented soap. Pat dry with a clean paper towel. Apply a thin layer of unscented moisturizer. Avoid soaking, swimming, and direct sunlight for 2 weeks."
        },
        {
            question: "Do you do cover-ups?",
            answer: "Cover-ups are taken on a case-by-case basis. Please send a clear photo of your existing tattoo along with your new idea via DM or email for consultation."
        }
    ];

    return (
        <section id="faq" className="py-20 px-4 max-w-3xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="font-serif text-4xl mb-4">FAQ</h2>
                <p className="text-gray-500">Common questions about the process</p>
            </div>
            <div className="space-y-2">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </section>
    );
};

export default FAQ;
