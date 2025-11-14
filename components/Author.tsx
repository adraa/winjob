
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
                                {/* Placeholder for an image */}
                                <div className="w-full h-full bg-neutral-700 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
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
