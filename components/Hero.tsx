
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-lime-400/20 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-fuchsia-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-cyan-400/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
                <div className="border-2 border-white p-2 inline-block">
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-none">
                    <span className="block">Interview</span>
                    <span className="block text-lime-400">Success</span>
                    <span className="block">Blueprint</span>
                    </h1>
                </div>
                <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-neutral-300">
                  The ultimate <span className="font-bold text-white">eBook</span> for <span className="text-lime-400 font-semibold">Malaysians</span> to conquer job interviews. Master confidence, craft compelling responses, and build a personal brand that gets you hired.
                </p>
                <div className="pt-4">
                  <a
                    href="#pricing"
                    className="inline-block text-xl font-bold px-10 py-4 bg-lime-400 text-black border-2 border-black shadow-[4px_4px_0px_#A3FF00] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                  >
                    GET THE eBOOK
                  </a>
                </div>
            </div>
            <div className="flex justify-center items-center mt-12 lg:mt-0">
                 <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-cyan-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className="relative w-full h-full bg-neutral-900 border-2 border-neutral-600 p-6 flex flex-col justify-between transform hover:scale-105">
                        <div>
                            <span className="text-xs font-bold bg-lime-400 text-black px-2 py-1">FOR MALAYSIANS</span>
                            <h2 className="mt-4 text-4xl font-bold tracking-tighter">INTERVIEW SUCCESS BLUEPRINT</h2>
                        </div>
                        <div className="text-right">
                             <p className="font-bold text-lg">Your Guide To</p>
                             <p className="text-lime-400 font-bold text-3xl">GETTING HIRED</p>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
      </div>
       {/* FIX: Removed invalid `jsx="true"` prop from style tag. */}
       <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes tilt {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(-1deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default Hero;