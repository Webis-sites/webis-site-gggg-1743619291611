'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

// Define types for testimonial data
interface Testimonial {
  id: number;
  name: string;
  rating: number;
  image: string;
  feedback: string;
}

const TestimonialsSection: React.FC = () => {
  // Sample testimonial data in Hebrew
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "דניאל כהן",
      rating: 5,
      image: "/avatars/avatar1.jpg",
      feedback: "חוויה קולינרית מדהימה! השילוב של טכנולוגיה מתקדמת עם אוכל איכותי הפך את הביקור שלנו למיוחד. ממליץ בחום על המנות החדשניות."
    },
    {
      id: 2,
      name: "מיכל לוי",
      rating: 4,
      image: "/avatars/avatar2.jpg",
      feedback: "האפליקציה להזמנת האוכל הייתה נוחה מאוד לשימוש. האוכל הגיע חם ומהר. אהבתי במיוחד את המסכים האינטראקטיביים על השולחן."
    },
    {
      id: 3,
      name: "יוסי אברהם",
      rating: 5,
      image: "/avatars/avatar3.jpg",
      feedback: "שירות מעולה! הצוות מקצועי והאווירה הטכנולוגית מוסיפה המון לחוויה. המנות היו טעימות ומוגשות בצורה יצירתית. בהחלט אחזור."
    },
    {
      id: 4,
      name: "רונית שמעוני",
      rating: 5,
      image: "/avatars/avatar4.jpg",
      feedback: "מסעדה ייחודית עם חוויית אוכל מתקדמת. אהבתי את האפשרות להתאים אישית את המנה שלי דרך הטאבלט. הטעמים מדהימים והעיצוב מרשים."
    },
    {
      id: 5,
      name: "אלון דוד",
      rating: 4,
      image: "/avatars/avatar5.jpg",
      feedback: "המסעדה משלבת בצורה מושלמת בין טכנולוגיה לאוכל איכותי. התפריט הדיגיטלי והאפשרות לראות את הכנת המנות בזמן אמת היו חוויה מיוחדת."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Function to navigate to the next testimonial
  const nextTestimonial = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  }, [isAnimating, testimonials.length]);

  // Function to navigate to the previous testimonial
  const prevTestimonial = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  }, [isAnimating, testimonials.length]);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextTestimonial]);

  // Reset animation state after transition
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextTestimonial();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevTestimonial();
    }
  };

  // Function to render star ratings
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section 
      dir="rtl" 
      className="bg-white py-12 px-4 md:px-8 lg:px-16 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          id="testimonials-heading" 
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800"
        >
          מה הלקוחות שלנו אומרים
        </h2>
        
        <div 
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Testimonials container */}
          <div 
            className="relative h-[400px] md:h-[350px] overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-[#96CEB4]/10 to-[#45B7D1]/10"
            aria-live="polite"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute top-0 right-0 w-full h-full p-6 md:p-8 transition-all duration-500 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0'
                    : index < currentIndex
                    ? 'opacity-0 translate-x-full'
                    : 'opacity-0 -translate-x-full'
                }`}
                aria-hidden={index !== currentIndex}
              >
                <div className="flex flex-col h-full justify-between">
                  <div className="flex flex-col items-center md:items-start md:flex-row gap-4">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-[#96CEB4]">
                      <div className="relative w-full h-full bg-gray-200">
                        {/* Fallback avatar if image fails to load */}
                        <svg className="absolute inset-0 w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                        </svg>
                        
                        {/* We use a placeholder image with next/image for optimization */}
                        <Image
                          src={testimonial.image}
                          alt={`תמונה של ${testimonial.name}`}
                          fill
                          sizes="(max-width: 768px) 80px, 96px"
                          className="object-cover"
                          onError={(e) => {
                            // Keep the fallback SVG visible if image fails to load
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                    
                    <div className="text-center md:text-right">
                      <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                      <div className="flex justify-center md:justify-start mt-2 mb-3">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-6 flex-grow">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      "{testimonial.feedback}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#45B7D1] z-10"
            aria-label="הקודם"
            disabled={isAnimating}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#45B7D1] z-10"
            aria-label="הבא"
            disabled={isAnimating}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#45B7D1] ${
                index === currentIndex
                  ? 'bg-[#45B7D1] w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`עבור לביקורת ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;