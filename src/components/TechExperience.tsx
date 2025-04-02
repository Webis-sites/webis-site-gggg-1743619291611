'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define types for the feature items
interface TechFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Define the main component props
interface TechExperienceProps {
  className?: string;
}

const TechExperience: React.FC<TechExperienceProps> = ({ className = '' }) => {
  // Features data with Hebrew text
  const features: TechFeature[] = [
    {
      id: 1,
      title: "שולחנות אינטראקטיביים",
      description: "הזמינו, שחקו ותכננו את הארוחה שלכם ישירות מהשולחן החכם שלנו. חוויה דיגיטלית ייחודית.",
      icon: "🖥️",
    },
    {
      id: 2,
      title: "תפריט במציאות רבודה",
      description: "סרקו את הקוד וצפו במנות שלנו בתלת מימד לפני ההזמנה. טכנולוגיה חדשנית לחוויית הזמנה מתקדמת.",
      icon: "👓",
    },
    {
      id: 3,
      title: "מלצרים רובוטיים",
      description: "הרובוטים המתקדמים שלנו מגישים את המנות במהירות וביעילות, עם חיוך דיגיטלי תמידי.",
      icon: "🤖",
    },
    {
      id: 4,
      title: "חדרי אוכל בנושא טכנולוגי",
      description: "אווירה ייחודית בכל חדר עם נושאים טכנולוגיים שונים, תאורה חכמה ואפקטים מיוחדים.",
      icon: "🚪",
    },
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for each feature item
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

  // State to track if component is in viewport
  const [isInView, setIsInView] = useState(false);

  // Set isInView to true after component mounts
  useEffect(() => {
    setIsInView(true);
  }, []);

  return (
    <section 
      dir="rtl" 
      className={`py-16 px-4 md:px-8 bg-gradient-to-br from-[#f8f8f8] to-[#eefbf7] ${className}`}
      aria-labelledby="tech-experience-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            id="tech-experience-heading"
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            חוויות טכנולוגיות ייחודיות
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            במסעדת הטכנולוגיה שלנו, אנו משלבים את החדשנות האחרונה כדי להעניק לכם חוויית אוכל שלא תשכחו
          </p>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4"
              style={{ borderColor: feature.id % 2 === 0 ? '#45B7D1' : '#96CEB4' }}
              variants={itemVariants}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto"
                style={{ 
                  backgroundColor: feature.id % 2 === 0 ? 'rgba(69, 183, 209, 0.1)' : 'rgba(150, 206, 180, 0.1)',
                  color: feature.id % 2 === 0 ? '#45B7D1' : '#96CEB4'
                }}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <motion.button
            className="bg-[#45B7D1] hover:bg-[#3da6bd] text-white font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            הזמינו שולחן עכשיו
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TechExperience;