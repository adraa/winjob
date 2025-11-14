
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import PeekInside from './components/PeekInside';
import Testimonials from './components/Testimonials';
import TestimonialMarquee from './components/TestimonialMarquee';
import Author from './components/Author';
import FAQ from './components/FAQ';

const App: React.FC = () => {

  const whatsInsideItems = [
    {
      title: "Interview Psychology",
      description: "Understand the mind of the interviewer and overcome your own anxiety.",
    },
    {
      title: "Crafting Strong Responses",
      description: "Build structured, compelling answers that leave a lasting impression on hiring managers.",
    },
    {
      title: "Personal Branding",
      description: "Develop and showcase your unique value proposition to stand out in crowded interview rooms.",
    },
    {
      title: "Body Language Mastery",
      description: "Utilize powerful non-verbal cues and vocal techniques to project unshakeable confidence.",
    },
    {
      title: "Tough Situations Navigation",
      description: "Confidently handle difficult questions, tricky scenarios, and salary negotiations.",
    },
    {
      title: "Continuous Improvement System",
      description: "Develop a long-term framework to consistently improve your interview skills for future opportunities.",
    },
  ];

  const whatYouWillLearnItems = [
    {
      title: "Strategic Preparation",
      description: "How to prepare for any interview with a strategic, winning mindset.",
    },
    {
      title: "Answering with Impact",
      description: "The key techniques for answering any question with clarity, confidence, and impact.",
    },
    {
      title: "Effective Storytelling",
      description: "Ways to showcase your skills and experiences effectively through compelling storytelling.",
    },
    {
      title: "Boost Confidence",
      description: "Tips for managing non-verbal communication to boost your perceived and actual confidence.",
    },
    {
      title: "Professional Negotiation",
      description: "How to negotiate salaries and benefits while maintaining professionalism and rapport.",
    },
    {
      title: "Build a Success Framework",
      description: "Actionable steps to build an interview success system for long-term career growth.",
    },
  ];


  return (
    <div className="bg-[#111111] text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Marquee text="LAND YOUR DREAM JOB • SECURE THE OFFER • RM79 ONLY • MASTER THE INTERVIEW •" />
        <FeatureSection title="WHAT'S INSIDE THE BLUEPRINT" items={whatsInsideItems} />
        <TestimonialMarquee />
        <FeatureSection title="WHAT YOU WILL LEARN & MASTER" items={whatYouWillLearnItems} accentColor="bg-fuchsia-500" />
        <PeekInside />
        <Author />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Marquee text="INVEST IN YOURSELF • BECOME UNSTOPPABLE • GET HIRED • CONFIDENCE IS KEY •" reverse={true} />
      </main>
      <Footer />
    </div>
  );
};

export default App;