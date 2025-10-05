import { useEffect, useState } from "react";

const quotes = [
  "Technology is best when it brings people together. My mission is to bridge the gap between complex infrastructure and practical solutions while empowering others to grow.",
  "Success in DevOps isn't just about tools and automation—it's about building systems that empower teams to deliver value consistently and reliably."
];

export function QuoteRotation() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-16 text-center px-4">
      <div className="glass-quantum rounded-3xl p-6 md:p-8 max-w-4xl mx-auto neuro-module transition-all duration-500 hover:scale-[1.02]">
        <div className="relative overflow-hidden min-h-[120px] md:min-h-[100px] flex items-center justify-center">
          {quotes.map((quote, index) => (
            <blockquote
              key={index}
              className={`absolute inset-0 flex items-center justify-center text-lg md:text-xl lg:text-2xl font-medium text-foreground italic transition-all duration-1000 px-4 ${
                index === currentQuote 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-full'
              }`}
            >
              <span className="text-center leading-relaxed">"{quote}"</span>
            </blockquote>
          ))}
        </div>
        <cite className="text-primary font-semibold mt-6 block transition-buttery text-sm md:text-base">— Sreejith M S</cite>
      </div>
    </div>
  );
}