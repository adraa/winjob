import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#111111]/80 backdrop-blur-md border-b-2 border-lime-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="/" className="text-xl md:text-2xl font-bold tracking-tighter">
              ISB<span className="text-lime-400">.MY</span>
            </a>
          </div>
          <div className="hidden md:block">
             <a href="#pricing" className="px-6 py-2 bg-lime-400 text-black font-bold border-2 border-lime-400 hover:bg-black hover:text-lime-400">
              GET IT NOW
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;