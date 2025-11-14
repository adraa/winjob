
import React from 'react';

interface PainPointCardProps {
  imageSrc: string;
  tag: string;
  thought: string;
  stressLevel: 'CRITICAL' | 'HIGH' | 'MODERATE';
  stressDots: number;
}

const PainPointCard: React.FC<PainPointCardProps> = ({ imageSrc, tag, thought, stressLevel, stressDots }) => {
  const stressColors = {
    CRITICAL: 'bg-red-500',
    HIGH: 'bg-orange-500',
    MODERATE: 'bg-yellow-400',
  };

  return (
    <div className="group relative aspect-[4/5] w-full overflow-hidden">
      <img src={imageSrc} alt={thought} className="w-full h-full object-cover grayscale group-hover:grayscale-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-lime-400"></div>

      <div className="absolute top-4 left-4">
        <span className="bg-black/50 text-white text-xs font-bold uppercase tracking-wider px-2 py-1">{tag}</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">“ INTERNAL THOUGHTS</p>
        <blockquote className="mt-2 text-lg font-medium leading-tight">
          {thought}
        </blockquote>
        <div className="mt-4">
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">STRESS LEVEL: <span className="font-bold text-white">{stressLevel}</span></p>
            <div className="flex items-center gap-1.5 mt-2">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-4 h-2 ${i < stressDots ? stressColors[stressLevel] : 'bg-neutral-700'}`}></div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

const painPoints: PainPointCardProps[] = [
  {
    imageSrc: 'https://i.imgur.com/3Z3eZ9C.jpeg',
    tag: '9/10 JOB SEEKERS FEEL THIS',
    thought: 'I freeze up when they ask tough questions and can\'t think of good examples.',
    stressLevel: 'CRITICAL',
    stressDots: 5,
  },
  {
    imageSrc: 'https://i.imgur.com/v82M9bS.jpeg',
    tag: 'THE #1 CONFIDENCE KILLER',
    thought: 'I know I can do the job, but I just can\'t sell myself properly.',
    stressLevel: 'HIGH',
    stressDots: 4,
  },
  {
    imageSrc: 'https://i.imgur.com/h9S3gJz.jpeg',
    tag: 'THE IMPOSTER SYNDROME LOOP',
    thought: 'Other candidates seem to \'click\' with interviewers. Why not me?',
    stressLevel: 'CRITICAL',
    stressDots: 5,
  },
  {
    imageSrc: 'https://i.imgur.com/A6pPjYw.jpeg',
    tag: 'THE STUMBLE EFFECT',
    thought: 'I always get nervous and stumble over my words during interviews.',
    stressLevel: 'MODERATE',
    stressDots: 3,
  },
];


const Hero: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter uppercase leading-tight">
            DOES THIS SOUND <span className="text-lime-400">LIKE YOU?</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {painPoints.map((painPoint, index) => (
            <PainPointCard key={index} {...painPoint} />
          ))}
        </div>

        <div className="text-center mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter uppercase">
                YOUR STORY DOESN'T HAVE TO END HERE.
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-lg md:text-xl text-neutral-300">
                The Interview Success Blueprint is your step-by-step guide to turn anxiety into confidence and interviews into job offers.
            </p>
            <div className="mt-8">
                <a
                href="#pricing"
                className="inline-block text-xl font-bold px-10 py-4 bg-lime-400 text-black border-2 border-black shadow-[4px_4px_0px_#A3FF00] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                >
                GET THE BLUEPRINT NOW
                </a>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
