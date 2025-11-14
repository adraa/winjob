
import React from 'react';

const Pricing: React.FC = () => {
    const features = [
        "Lifetime access & free updates to the eBook",
        "50+ page step-by-step Interview Mastery system",
        "Full STAR method breakdown + real response samples",
        "Proven confidence-building exercises to calm nerves",
        "Strategic salary negotiation scripts (early to final stage)",
        "Body language & vocal control techniques backed by research",
        "Personal branding toolkit to stand out from other candidates",
        "Templates to handle tough interview formats (panel, virtual etc.)"
    ];

    const bonusFeature = "FREE Bonus: Pro Resume & Cover Letter Templates";
    
    return (
        <section id="pricing" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-neutral-900">
            <div className="container mx-auto max-w-4xl">
                <div className="relative bg-[#111111] border-2 border-lime-400 p-8 sm:p-12 text-center shadow-[8px_8px_0px_#A3FF00]">
                    
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-fuchsia-500 text-white font-bold uppercase tracking-widest px-6 py-2 -rotate-3">
                            Limited-Time Launch Offer
                        </div>
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter uppercase pt-8">Get Your eBook Instantly</h2>
                    <p className="text-neutral-400 mt-4 max-w-xl mx-auto">Stop guessing. Start acing. Your dream job is one conversation away. This is your unfair advantage, delivered as a high-quality PDF.</p>
                    
                    <div className="my-10">
                        <span className="text-7xl sm:text-8xl font-bold text-lime-400">RM79</span>
                        <span className="block text-neutral-500 font-medium uppercase tracking-widest mt-2">One-Time Payment</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-left my-10 max-w-2xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                               <svg className="w-5 h-5 text-lime-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span className="text-neutral-300">{feature}</span>
                            </div>
                        ))}
                         <div className="flex items-center space-x-3 sm:col-span-2 justify-center bg-lime-400/10 p-3 mt-4 border-2 border-dashed border-lime-400">
                               <svg className="w-6 h-6 text-lime-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
                                <span className="text-lime-400 font-bold">{bonusFeature}</span>
                         </div>
                    </div>

                    <a
                        href="#"
                        className="inline-flex items-center justify-center space-x-3 text-xl font-bold px-12 py-5 bg-lime-400 text-black border-2 border-black shadow-[4px_4px_0px_#A3FF00] hover:shadow-none hover:translate-x-1 hover:translate-y-1 w-full sm:w-auto"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>Download The eBook Now</span>
                    </a>
                    <p className="text-sm text-neutral-500 mt-4">Secure payment. You'll receive the Interview Success Blueprint eBook (PDF) instantly in your inbox.</p>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
