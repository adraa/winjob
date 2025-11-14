import React, { ComponentPropsWithoutRef } from "react";

// --- Marquee Component Logic (Kept from previous version) ---
interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  duration?: string;
  gap?: string;
}

const Marquee: React.FC<MarqueeProps> = ({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = '20s',
  gap = '1rem',
  ...props
}) => {
  const wrapperClasses = [
    "group", "flex", "overflow-hidden",
    vertical ? "flex-col" : "flex-row",
    "gap-[var(--gap)]",
    className,
  ].filter(Boolean).join(" ");

  const contentClasses = [
    "flex", "shrink-0",
    vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row",
    pauseOnHover && "group-hover:[animation-play-state:paused]",
    reverse && "[animation-direction:reverse]",
  ].filter(Boolean).join(" ");

  return (
    <div
      {...props}
      className={wrapperClasses}
      style={{
        '--duration': duration,
        '--gap': gap,
      } as React.CSSProperties}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={contentClasses}
            style={{ gap: 'var(--gap)' }}
          >
            {children}
          </div>
        ))}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - var(--gap))); }
        }
        @keyframes marquee-vertical {
          from { transform: translateY(0); }
          to { transform: translateY(calc(-100% - var(--gap))); }
        }
        .animate-marquee { animation: marquee var(--duration) linear infinite; }
        .animate-marquee-vertical { animation: marquee-vertical var(--duration) linear infinite; }
      `}</style>
    </div>
  );
};


// --- New Review Card Component ---
interface ReviewCardProps {
  name: string;
  username: string;
  body: string;
  gradient: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, username, body, gradient }) => {
  return (
    <figure className="relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-white/10 bg-white/5 hover:bg-white/10">
      <div className="flex flex-row items-center gap-3">
        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradient}`}></div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">{name}</figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm text-white/80">{body}</blockquote>
    </figure>
  );
};


// --- Main Testimonial Marquee Component ---
const reviews = [
  {
    name: "Amirul",
    username: "@amirul_dev",
    body: "The STAR method breakdown was a lifesaver. Finally aced the technical interview for my dream company in KL!",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    name: "Priya",
    username: "@priya_markets",
    body: "I used the negotiation scripts and got a 15% salary bump on my first offer. This eBook pays for itself instantly.",
    gradient: "from-lime-400 to-green-500",
  },
  {
    name: "Chen W.",
    username: "@chenwei_design",
    body: "The personal branding section helped me articulate my value so much better. My portfolio presentations are on another level now.",
    gradient: "from-pink-500 to-orange-400",
  },
  {
    name: "Siti Aishah",
    username: "@siti_a",
    body: "As a fresh graduate, I was terrified of interviews. This blueprint gave me the confidence and structure I needed to land my first job.",
    gradient: "from-red-500 to-yellow-400",
  },
  {
    name: "Raj",
    username: "@raj_manages",
    body: "The templates for handling panel interviews are pure gold. I felt prepared and in control for the first time.",
    gradient: "from-cyan-400 to-teal-400",
  },
  {
    name: "Nurul",
    username: "@nurul_hustles",
    body: "I always struggled with 'Tell me about yourself.' The framework in the book helped me craft a compelling story that grabs attention.",
    gradient: "from-fuchsia-500 to-purple-600",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const TestimonialMarquee: React.FC = () => {
    return (
        <section className="py-12 sm:py-20 bg-[#111111]">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter uppercase">WHAT OUR READERS ARE SAYING</h2>
                    <div className="h-1.5 w-24 bg-cyan-500 mx-auto mt-4"></div>
                </div>
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
                    <Marquee pauseOnHover duration="20s" gap="1rem" className="[--gap:1rem] py-2">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover duration="20s" gap="1rem" className="[--gap:1rem] py-2">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#111111]"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#111111]"></div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialMarquee;