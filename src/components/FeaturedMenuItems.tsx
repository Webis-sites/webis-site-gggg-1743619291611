'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define types for menu items
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  techTag: string;
}

/**
 * FeaturedMenuItems Component
 * 
 * A responsive showcase of featured menu items for a technology-themed restaurant.
 * Supports RTL layout and includes animations on hover.
 */
const FeaturedMenuItems: React.FC = () => {
  // Sample menu items data with tech-inspired names
  const [menuItems] = useState<MenuItem[]>([
    {
      id: 1,
      name: "פיצה קוונטום",
      description: "פיצה עם שילוב של רכיבים מולקולריים וגבינות מיוחדות",
      price: 65,
      image: "/images/quantum-pizza.jpg",
      techTag: "מולקולרי"
    },
    {
      id: 2,
      name: "המבורגר בינה מלאכותית",
      description: "המבורגר צמחי מתקדם עם טעם מושלם שפותח בעזרת אלגוריתמים",
      price: 78,
      image: "/images/ai-burger.jpg",
      techTag: "חדשנות"
    },
    {
      id: 3,
      name: "סושי ביטקוין",
      description: "מגש סושי יוקרתי עם דגים נדירים ורכיבים אקזוטיים",
      price: 120,
      image: "/images/bitcoin-sushi.jpg",
      techTag: "יוקרה"
    },
    {
      id: 4,
      name: "פסטה סייבר",
      description: "פסטה שחורה עם דיו קלמארי ופירות ים בסגנון עתידני",
      price: 88,
      image: "/images/cyber-pasta.jpg",
      techTag: "עתידני"
    },
    {
      id: 5,
      name: "קינוח הענן",
      description: "קינוח אווריר בצורת ענן עם טעמים משתנים ואפקטים מיוחדים",
      price: 45,
      image: "/images/cloud-dessert.jpg",
      techTag: "חוויה"
    },
    {
      id: 6,
      name: "סלט הולוגרמה",
      description: "סלט צבעוני עם שילוב של פירות וירקות נדירים בצבעים מרהיבים",
      price: 52,
      image: "/images/hologram-salad.jpg",
      techTag: "ויזואלי"
    }
  ]);

  return (
    <section className="py-16 px-4 bg-gray-50 rtl" dir="rtl">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            המנות המובילות שלנו
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#96CEB4] to-[#45B7D1] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            גלו את היצירות הקולינריות הייחודיות שלנו, המשלבות טכנולוגיה וטעמים מרהיבים
          </p>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                {/* Fallback image div if Next.js Image component isn't working in your environment */}
                <div 
                  className="w-full h-full bg-gray-200 flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* If using Next.js Image component, uncomment this:
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-110"
                  />
                  */}
                </div>
                <span className="absolute top-4 right-4 bg-[#45B7D1] text-white text-sm py-1 px-3 rounded-full">
                  {item.techTag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <span className="text-lg font-bold text-[#96CEB4]">₪{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button 
                  className="text-[#45B7D1] font-medium hover:text-[#96CEB4] transition-colors flex items-center"
                  aria-label={`הזמן ${item.name}`}
                >
                  <span>הזמן עכשיו</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 mr-2 transform rotate-180" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-12">
          <Link href="/menu" passHref>
            <button 
              className="bg-gradient-to-r from-[#96CEB4] to-[#45B7D1] text-white py-3 px-8 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              aria-label="צפה בתפריט המלא"
            >
              צפה בתפריט המלא
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenuItems;