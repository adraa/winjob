import React from 'react';

interface MarqueeProps {
  text: string;
  reverse?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ text, reverse = false }) => {
  const MarqueeContent = () => (
    <div className="flex-shrink-0 flex items-center">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-2xl md:text-4xl font-bold mx-4 uppercase whitespace-nowrap">
            {text}
          </span>
        ))}
    </div>
  );
  
  return (
    <div className="relative flex overflow-x-hidden bg-lime-400 text-black py-4 border-y-2 border-black -rotate-2 my-12">
      <div className={`flex py-2 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        <MarqueeContent />
        <MarqueeContent />
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0%); }
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;