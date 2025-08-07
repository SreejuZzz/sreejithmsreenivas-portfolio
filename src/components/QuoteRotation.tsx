import { useEffect, useState } from "react";

const quotes = [
  "Technology is best when it brings people together. My mission is to bridge the gap between complex infrastructure and practical solutions while empowering others to grow.",
  "Just because you don't give up doesn't mean you will make it."
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
    <div className="mt-16 text-center">
      <div className="glass rounded-2xl p-8 max-w-4xl mx-auto neumorphism transition-buttery">
        <div className="relative overflow-hidden h-32 md:h-24">
          {quotes.map((quote, index) => (
            <blockquote
              key={index}
              className={`absolute inset-0 flex items-center justify-center text-xl md:text-2xl font-medium text-foreground italic transition-all duration-1000 ${
                index === currentQuote 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-full'
              }`}
            >
              "{quote}"
            </blockquote>
          ))}
        </div>
        <cite className="text-primary font-semibold mt-4 block transition-buttery">— Sreejith M S</cite>
      </div>
    </div>
  );
}