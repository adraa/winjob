
import React, { useState } from 'react';

const FreeChapter: React.FC = () => {
    const [challenge, setChallenge] = useState<string>('');
    const [generatedChapter, setGeneratedChapter] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleGenerate = async () => {
        if (!challenge.trim()) {
            setError('Please enter a challenge you face.');
            return;
        }

        setIsLoading(true);
        setError('');
        setGeneratedChapter('');

        try {
            const { GoogleGenAI } = await import('@google/genai');
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

            const prompt = `
                You are Farhan Rashid, an expert career strategist and former senior recruiter in Malaysia with 12+ years of experience.
                You are writing a preview chapter for your eBook, "Interview Success Blueprint MY".
                Your tone is authoritative, insightful, encouraging, and tailored to the Malaysian job market.
                The style is direct and actionable, fitting the neo-brutalist design of the landing page.

                The user wants a chapter addressing the following specific interview challenge: "${challenge}"

                Generate a concise, powerful preview chapter (around 250-300 words) based on this challenge. Structure it as follows:

                ### CHAPTER PREVIEW: [CREATE AN ENGAGING TITLE BASED ON THE CHALLENGE]

                **Introduction:**
                Briefly acknowledge the user's challenge, validating their concern and framing it as a common but solvable problem for Malaysian job seekers.

                **Core Concept:**
                Introduce one powerful, core concept or mindset shift to tackle this challenge. Explain it simply and directly.

                **Actionable Steps:**
                Provide 2-3 clear, actionable steps or techniques the user can apply immediately. Use bullet points or a numbered list.

                **Malaysian Context (Crucial):**
                Briefly mention how this advice specifically applies to the cultural or professional nuances of the Malaysian job market (e.g., communication styles, employer expectations).

                **Call to Action:**
                End with a sentence encouraging the user to get the full blueprint for a complete system. Example: "This is just a glimpse. The full blueprint gives you the entire system to master this and every other interview challenge."

                ---
                Generate the chapter now.
            `;

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });

            setGeneratedChapter(response.text ?? '');

        } catch (e) {
            console.error(e);
            setError('Failed to generate preview. The AI might be busy. Please try again in a moment.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#111111]">
            <div className="container mx-auto max-w-3xl">
                <div className="bg-black border-2 border-fuchsia-500 p-8 sm:p-10 text-center shadow-[6px_6px_0px_#D946EF]">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter uppercase">
                        Can't Decide? Get a <span className="text-lime-400">FREE AI-Powered</span> Chapter Preview
                    </h2>
                    <p className="max-w-xl mx-auto mt-4 text-neutral-400">
                        Tell us your biggest interview challenge, and our AI will generate a custom chapter preview from the blueprint, just for you.
                    </p>

                    <div className="mt-8 max-w-lg mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                value={challenge}
                                onChange={(e) => setChallenge(e.target.value)}
                                placeholder="e.g., 'How to answer salary questions'"
                                className="flex-grow bg-neutral-900 border-2 border-neutral-700 focus:border-lime-400 focus:outline-none px-4 py-3 text-white placeholder-neutral-500 w-full"
                                disabled={isLoading}
                                aria-label="Your biggest interview challenge"
                            />
                            <button
                                onClick={handleGenerate}
                                disabled={isLoading}
                                className="inline-flex items-center justify-center font-bold px-8 py-3 bg-lime-400 text-black border-2 border-black shadow-[4px_4px_0px_#A3FF00] hover:shadow-none hover:translate-x-1 hover:translate-y-1 disabled:bg-neutral-600 disabled:text-neutral-400 disabled:shadow-none disabled:translate-x-0 disabled:translate-y-0 disabled:cursor-not-allowed whitespace-nowrap"
                                aria-live="polite"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Generating...
                                    </>
                                ) : (
                                    'Generate My Preview'
                                )}
                            </button>
                        </div>
                        {error && <p className="text-red-500 text-sm mt-3" role="alert">{error}</p>}
                    </div>

                    {generatedChapter && (
                        <div className="mt-10 text-left bg-neutral-900 border-2 border-neutral-700 p-6" aria-live="polite">
                            <pre className="text-neutral-300 whitespace-pre-wrap font-mono text-base leading-relaxed">
                                {generatedChapter}
                            </pre>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default FreeChapter;
