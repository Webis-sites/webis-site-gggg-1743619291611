'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define TypeScript interfaces
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const ServicesSection: React.FC = () => {
  // Services data with Hebrew text
  const services: Service[] = [
    {
      id: 1,
      title: 'אירועים פרטיים בנושא טכנולוגיה',
      description: 'אירוח אירועים פרטיים בתפאורה טכנולוגית ייחודית עם תפריט מותאם אישית לצרכי האירוע שלך.',
      icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6',
    },
    {
      id: 2,
      title: 'שירותי קייטרינג',
      description: 'שירותי הסעדה מלאים לאירועים עסקיים, כנסים טכנולוגיים והשקות מוצרים עם תפריט חדשני.',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    },
    {
      id: 3,
      title: 'אירועים תאגידיים',
      description: 'מרחב מושלם לישיבות עסקיות, סדנאות והרצאות עם ציוד טכנולוגי מתקדם ותפריט עשיר.',
      icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
    {
      id: 4,
      title: 'חגיגות אירועים מיוחדים',
      description: 'חגיגת ימי הולדת, אירועי חברה וחגים בסביבה טכנולוגית מרהיבה עם תפריט גורמה.',
      icon: 'M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z',
    },
  ];

  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // State to track if component is in viewport for animation
  const [isInView, setIsInView] = useState(false);

  // Set isInView to true when component mounts
  useEffect(() => {
    setIsInView(true);
  }, []);

  return (
    <section 
      dir="rtl" 
      className="py-16 bg-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            id="services-heading"
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            השירותים שלנו
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            אנו מציעים מגוון שירותים ייחודיים המשלבים חוויה קולינרית מעולה עם אווירה טכנולוגית חדשנית
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="p-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-[#96CEB4] flex items-center justify-center mb-4 mx-auto">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d={service.icon} 
                    />
                  </svg>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-center mb-3 text-gray-800">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-center mb-5">
                  {service.description}
                </p>
                
                {/* Learn More Button */}
                <div className="text-center">
                  <button 
                    className="inline-block px-6 py-2 bg-[#45B7D1] text-white rounded-md hover:bg-[#3a9cb3] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#45B7D1] focus:ring-opacity-50"
                    aria-label={`למידע נוסף על ${service.title}`}
                  >
                    למידע נוסף
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;