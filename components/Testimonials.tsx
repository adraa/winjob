
import React from 'react';

const testimonials = [
    {
        quote: "The salary negotiation scripts alone were worth the price. I managed to negotiate a 15% higher starting salary for a tech role. This eBook is a must-have for any Malaysian job seeker.",
        name: "Aiman H.",
        title: "Software Engineer, Kuala Lumpur",
        shadowColor: "shadow-[6px_6px_0px_#A3FF00]",
    },
    {
        quote: "As a fresh grad, I was so nervous. The confidence exercises and the STAR method breakdown gave me a clear framework. I felt prepared and landed a competitive marketing job in Penang!",
        name: "Siti N.",
        title: "Marketing Executive, Penang",
        shadowColor: "shadow-[6px_6px_0px_#D946EF]",
    },
    {
        quote: "I was struggling to stand out. The personal branding section changed everything. It taught me how to tell my story effectively. Two interviews later, I got the offer. Terima kasih!",
        name: "Rajesh K.",
        title: "Project Manager, Johor Bahru",
        shadowColor: "shadow-[6px_6px_0px_#22D3EE]",
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter uppercase">Success Stories From Malaysians</h2>
                    <div className="h-1.5 w-24 bg-lime-400 mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={`bg-neutral-900 border-2 border-neutral-700 p-8 flex flex-col h-full ${testimonial.shadowColor}`}>
                            <p className="text-lg text-neutral-300 italic flex-grow">"{testimonial.quote}"</p>
                            <div className="mt-6 pt-6 border-t-2 border-neutral-800">
                                <p className="font-bold text-xl text-lime-400">{testimonial.name}</p>
                                <p className="text-neutral-500">{testimonial.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;