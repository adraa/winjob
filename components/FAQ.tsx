
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b-2 border-neutral-800 py-6">
        <button
            onClick={onClick}
            className="flex justify-between items-center w-full text-left"
        >
            <h3 className="text-lg sm:text-xl font-bold">{question}</h3>
            <svg
                className={`w-6 h-6 text-lime-400 transition-transform duration-300 ${isOpen ? 'transform rotate-45' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"></path>
            </svg>
        </button>
        <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
        >
            <div className="text-neutral-400">
                {answer}
            </div>
        </div>
    </div>
);

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Is there a money-back guarantee?",
            answer: "Due to the digital nature of the eBook and instant delivery, all sales are final. We do not offer refunds. We are confident that the value packed into this blueprint far exceeds its price.",
        },
        {
            question: "How do I receive the eBook?",
            answer: "Instantly! As soon as your payment is processed, you will receive an email with a secure link to download your copy of the Interview Success Blueprint in PDF format.",
        },
        {
            question: "What if I have issues downloading it?",
            answer: <p>No worries! Our support team is here to help. If you encounter any problems, please email us at <a href="mailto:hello@pushupmode.com" className="text-lime-400 underline font-bold">hello@pushupmode.com</a> and we'll get it sorted for you.</p>,
        },
        {
            question: "Is this eBook suitable for fresh graduates?",
            answer: "Absolutely. The blueprint is designed to help everyone, from fresh graduates looking to land their first job to experienced professionals aiming for a senior role. The principles of confidence, storytelling, and negotiation are universal.",
        }
    ];

    return (
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter uppercase">Frequently Asked Questions</h2>
                    <div className="h-1.5 w-24 bg-fuchsia-500 mx-auto mt-4"></div>
                </div>
                <div>
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
