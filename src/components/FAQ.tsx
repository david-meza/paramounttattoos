import React, { useState } from 'react';
import { Plus, Minus, Info, Clock, DollarSign, Calendar } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-none hover:border-amber-500/50 transition-colors">
            <button
                className="w-full flex justify-between items-center text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <h3 className="text-lg font-bold text-white flex items-center">
                    <Info size={16} className="text-amber-500 mr-2" />
                    {question}
                </h3>
                <span className="text-amber-500 ml-4">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            {isOpen && (
                <p className="text-zinc-400 leading-relaxed mt-4">{answer}</p>
            )}
        </div>
    );
};

interface FAQData {
    question: string;
    answer: string;
}

const FAQ: React.FC = () => {
    const faqs: FAQData[] = [
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
        <section id="faq" className="py-24 bg-zinc-950">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">INFO & FAQ</h2>
                    <p className="text-zinc-400">Everything you need to know before booking.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="flex flex-col items-center text-center p-6 bg-zinc-900 border border-zinc-800">
                        <Clock className="text-amber-500 mb-4" size={32} />
                        <h4 className="text-white font-bold mb-2">Hours</h4>
                        <p className="text-zinc-400 text-sm">By Appointment Only</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-zinc-900 border border-zinc-800">
                        <DollarSign className="text-amber-500 mb-4" size={32} />
                        <h4 className="text-white font-bold mb-2">Rates</h4>
                        <p className="text-zinc-400 text-sm">Deposit Required<br/>Varies by Design</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-zinc-900 border border-zinc-800">
                        <Calendar className="text-amber-500 mb-4" size={32} />
                        <h4 className="text-white font-bold mb-2">Booking</h4>
                        <p className="text-zinc-400 text-sm">Check Instagram<br/>For Availability</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
