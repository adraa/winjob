import React from 'react';

const Author: React.FC = () => {
    return (
        <section className="py-20 sm:py-28 bg-neutral-900 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-5xl">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
                    <div className="md:col-span-1 flex justify-center">
                        <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                            <div className="absolute inset-0 bg-lime-400 transform -rotate-3"></div>
                            <div className="relative w-full h-full bg-neutral-800 p-2">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Farhan Rashid, Career Strategist"
                                    className="w-full h-full object-cover grayscale"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter uppercase">MEET THE CREATOR</h2>
                        <div className="h-1.5 w-24 bg-lime-400 mt-4 mx-auto md:mx-0"></div>
                        <p className="mt-6 text-2xl font-bold text-white">Farhan Rashid</p>
                        <p className="text-lime-400 font-semibold">Former Senior Recruiter & Career Strategist</p>
                        <p className="mt-4 text-neutral-300 max-w-2xl">
                            With over 12 years of experience as a senior recruiter for top tech companies and MNCs in Malaysia, Farhan has reviewed thousands of resumes and conducted countless interviews. He's seen firsthand why brilliant candidates fail and why others succeed. He created the Interview Success Blueprint to distill his insider knowledge into an easy-to-follow system, giving Malaysians the competitive edge they need to land their dream jobs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Author;