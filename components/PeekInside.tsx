
import React from 'react';

const PageMock: React.FC<{ chapter: string; title: string; content: React.ReactNode; rotation: string }> = ({ chapter, title, content, rotation }) => (
    <div className={`bg-white text-black p-6 sm:p-8 border-2 border-black shadow-[6px_6px_0px_#000] ${rotation}`}>
        <div className="border-b-2 border-neutral-200 pb-2 mb-4">
            <p className="text-sm font-bold text-neutral-500">{chapter}</p>
            <h4 className="text-xl sm:text-2xl font-bold text-black">{title}</h4>
        </div>
        <div className="space-y-3 text-sm sm:text-base text-neutral-700">
            {content}
        </div>
    </div>
);

const PeekInside: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#111111]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter uppercase">A Peek Inside The eBook</h2>
          <div className={`h-1.5 w-24 bg-lime-400 mx-auto mt-4`}></div>
          <p className="max-w-2xl mx-auto text-lg text-neutral-400 mt-6">
            This isn't just theory. It's a 50+ page, step-by-step system packed with actionable strategies, real-world examples, and proven exercises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6">
            <PageMock 
                chapter="CHAPTER 2" 
                title="Crafting Your Narrative"
                content={
                    <>
                        <p>The STAR method is your secret weapon. Let's break it down with real samples...</p>
                        <div className="bg-neutral-100 p-3 my-2 border-l-4 border-lime-400">
                            <p className="font-bold">Situation:</p>
                            <p className="italic">"In my previous role, our team faced a sudden 20% budget cut..."</p>
                        </div>
                        <p>We'll show you how to turn your experiences into compelling stories that resonate with hiring managers.</p>
                    </>
                }
                rotation="transform rotate-2"
            />
            <PageMock 
                chapter="CHAPTER 4" 
                title="Confidence & Control"
                content={
                    <>
                        <p>Confidence isn't just a feeling, it's a practice. Here are exercises to master your presence.</p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                           <li>The "Power Pose" before you enter</li>
                           <li>Vocal warm-ups for clarity & authority</li>
                           <li>Mindfulness techniques to calm nerves</li>
                        </ul>
                        <p className="mt-2">These research-backed techniques will make you feel—and appear—unstoppable.</p>
                    </>
                }
                rotation="transform -rotate-1 md:translate-y-8"
            />
            <PageMock 
                chapter="CHAPTER 6" 
                title="Salary Negotiation"
                content={
                    <>
                        <p>Never leave money on the table again. Use these proven scripts.</p>
                        <div className="bg-neutral-100 p-3 my-2 border-l-4 border-fuchsia-500">
                            <p className="font-bold">Early Stage Script:</p>
                            <p className="italic">"I'm focusing on finding the right fit, but my salary expectations are in line with the market rate for this role..."</p>
                        </div>
                        <p>Learn how to navigate the conversation from the first call to the final offer.</p>
                    </>
                }
                rotation="transform rotate-1 md:-translate-y-4"
            />
        </div>

      </div>
    </section>
  );
};

export default PeekInside;
