import React from 'react';
import Image from 'next/image';
import { FaUtensils, FaLaptop, FaHistory, FaBullseye, FaLightbulb } from 'react-icons/fa';

interface AboutUsSectionProps {
  className?: string;
}

/**
 * AboutUsSection Component
 * 
 * A responsive about us section for a technology-themed restaurant
 * with RTL (right-to-left) support for Hebrew content.
 */
const AboutUsSection: React.FC<AboutUsSectionProps> = ({ className = '' }) => {
  return (
    <section 
      dir="rtl" 
      className={`bg-white py-16 px-4 sm:px-6 lg:px-8 ${className}`}
      aria-labelledby="about-us-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            id="about-us-heading"
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            אודות gggg
          </h2>
          <div className="w-24 h-1 bg-[#45B7D1] mx-auto"></div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
            <div className="absolute inset-0 bg-[#96CEB4] opacity-20"></div>
            <div className="relative h-full w-full">
              <Image
                src="/images/tech-restaurant.jpg"
                alt="מסעדת הטכנולוגיה שלנו"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-[#45B7D1] p-4 rounded-tl-lg">
              <FaLaptop className="text-white text-3xl" />
            </div>
          </div>
          
          {/* Text Content Side */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-[#45B7D1] mb-6">
              היכרות עם המסעדה שלנו
            </h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              אנחנו מסעדה מוביל בתחום החינוך עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            
            {/* Feature Cards */}
            <div className="space-y-6">
              {/* History */}
              <div className="bg-gray-50 p-4 rounded-lg border-r-4 border-[#96CEB4] shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="bg-[#96CEB4] p-3 rounded-full">
                    <FaHistory className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg mb-1">ההיסטוריה שלנו</h4>
                    <p className="text-gray-600">
                      הוקמנו בשנת 2010 כמיזם חדשני המשלב את עולם הטכנולוגיה עם חוויות קולינריות ייחודיות. מאז, הפכנו למוקד משיכה לאנשי טכנולוגיה וחובבי אוכל כאחד.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Mission */}
              <div className="bg-gray-50 p-4 rounded-lg border-r-4 border-[#45B7D1] shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="bg-[#45B7D1] p-3 rounded-full">
                    <FaBullseye className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg mb-1">המשימה שלנו</h4>
                    <p className="text-gray-600">
                      אנו שואפים לספק חוויה קולינרית מתקדמת טכנולוגית שמשלבת טעמים מסורתיים עם חדשנות. המטרה שלנו היא ליצור מרחב השראה שבו טכנולוגיה ואוכל נפגשים.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Uniqueness */}
              <div className="bg-gray-50 p-4 rounded-lg border-r-4 border-[#96CEB4] shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="bg-[#96CEB4] p-3 rounded-full">
                    <FaLightbulb className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg mb-1">מה מייחד אותנו</h4>
                    <p className="text-gray-600">
                      השילוב הייחודי שלנו בין מסעדה לטכנולוגיה מתבטא בתפריטים אינטראקטיביים, הזמנות דיגיטליות, ומנות שעוצבו בהשראת עולם ההייטק. כל ביקור הוא חוויה שמערבת את כל החושים.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-6">
            אנחנו מזמינים אתכם לחוות את השילוב המושלם בין קולינריה לטכנולוגיה
          </p>
          <button 
            className="bg-[#45B7D1] hover:bg-[#96CEB4] transition-colors duration-300 text-white font-bold py-3 px-8 rounded-lg shadow-lg"
            aria-label="הזמן שולחן עכשיו"
          >
            הזמן שולחן עכשיו
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;