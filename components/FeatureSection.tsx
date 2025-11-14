
import React from 'react';

interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  items: FeatureItem[];
  accentColor?: string;
}

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);


const FeatureSection: React.FC<FeatureSectionProps> = ({ title, items, accentColor = 'bg-cyan-500' }) => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter uppercase">{title}</h2>
          <div className={`h-1.5 w-24 ${accentColor} mx-auto mt-4`}></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-neutral-900 border-2 border-neutral-700 p-6 space-y-4 hover:border-lime-400 hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0"><CheckIcon/></div>
                <div>
                    <h3 className="text-xl font-bold text-lime-400">{item.title}</h3>
                    <p className="text-neutral-400 mt-1">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
