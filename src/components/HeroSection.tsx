'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  // State to track if the component is mounted (for animations)
  const [isMounted, setIsMounted] = useState(false);
  
  // Effect to trigger animations after component mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section 
      dir="rtl" 
      className={`relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-l from-[#96CEB4]/10 to-white ${className}`}
      aria-labelledby="hero-heading"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[#96CEB4]/20 transform skew-x-12"></div>
        <div className="absolute inset-y-0 left-0 w-1/3 bg-[#45B7D1]/10 transform -skew-x-12"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-700 ease-in-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4"
            >
              <span className="text-[#45B7D1]">מסעדה</span> מוביל בישראל
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              חווית לקוח מושלמת בכל ביקור
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="bg-[#96CEB4] hover:bg-[#7ab99e] text-white font-medium py-3 px-8 rounded-md shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#96CEB4] focus:ring-opacity-50"
                aria-label="קבע תור עכשיו"
              >
                קבע תור עכשיו
              </button>
              
              <button 
                className="bg-transparent border-2 border-[#45B7D1] text-[#45B7D1] font-medium py-3 px-8 rounded-md hover:bg-[#45B7D1]/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#45B7D1] focus:ring-opacity-50"
                aria-label="למידע נוסף"
              >
                למידע נוסף
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap gap-6 items-center text-gray-600">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#96CEB4]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>שירות מקצועי</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#96CEB4]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>איכות מעולה</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#96CEB4]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>ניסיון רב שנים</span>
              </div>
            </div>
          </div>
          
          {/* Image Container */}
          <div 
            className={`relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl transition-all duration-1000 ease-in-out ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <Image
              src="/tech-restaurant.jpg" // Replace with your actual image path
              alt="מסעדת טכנולוגיה - חווית אוכל חדשנית"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
              // Fallback for when the image fails to load
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1530053969600-caed2596d242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80";
              }}
            />
            
            {/* Overlay with tech-inspired elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">gggg</h3>
                <p className="text-sm opacity-90">חווית אוכל חדשנית בהשראת עולם הטכנולוגיה</p>
              </div>
            </div>
            
            {/* Decorative tech elements */}
            <div className="absolute top-4 left-4 w-16 h-16 border-2 border-[#45B7D1] rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute bottom-16 right-8 w-8 h-8 bg-[#96CEB4] rounded-md opacity-70 animate-bounce"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative tech-inspired elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#96CEB4] via-[#45B7D1] to-[#96CEB4]"></div>
      
      <div className="absolute -bottom-6 left-1/4 w-12 h-12 border-2 border-[#45B7D1] rounded-full opacity-30"></div>
      <div className="absolute top-12 right-12 w-24 h-24 border border-[#96CEB4] rounded-full opacity-20"></div>
      <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-[#45B7D1] rounded-full opacity-20"></div>
    </section>
  );
};

export default HeroSection;