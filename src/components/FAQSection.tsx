'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "איך אני יכול להזמין מקום במסעדה?",
    answer: "ניתן להזמין מקום דרך האתר שלנו, באמצעות הטלפון, או דרך האפליקציה שלנו. אנו ממליצים להזמין מראש לפחות שבוע מראש בסופי שבוע ובימים עמוסים."
  },
  {
    id: 2,
    question: "האם אתם מתחשבים בדרישות תזונתיות מיוחדות?",
    answer: "בהחלט! המסעדה שלנו מציעה מגוון אפשרויות לתזונה צמחונית, טבעונית, ללא גלוטן וללא לקטוז. נשמח לדעת על דרישות תזונתיות מיוחדות בעת ההזמנה כדי שנוכל להתכונן בהתאם."
  },
  {
    id: 3,
    question: "אילו פתרונות טכנולוגיים ייחודיים יש במסעדה?",
    answer: "המסעדה שלנו משלבת טכנולוגיה מתקדמת בחוויית האוכל, כולל תפריטים דיגיטליים אינטראקטיביים, מערכת הזמנות חכמה, ואפשרות להזמין ולשלם דרך האפליקציה. בנוסף, אנו מציעים חוויית מציאות רבודה (AR) בחלק מהמנות שלנו."
  },
  {
    id: 4,
    question: "האם ניתן לקיים אירועים פרטיים במסעדה?",
    answer: "כן, יש לנו חדר אירועים פרטי המתאים לעד 50 אורחים. אנו מציעים תפריטים מותאמים אישית לאירועים עסקיים, חגיגות משפחתיות ואירועים מיוחדים. צרו קשר עם מנהל האירועים שלנו לפרטים נוספים ולבדיקת זמינות."
  },
  {
    id: 5,
    question: "מהן שעות הפעילות של המסעדה?",
    answer: "אנו פתוחים מיום ראשון עד חמישי מ-12:00 עד 23:00, ובימי שישי ושבת מ-12:00 עד 00:00. המטבח נסגר שעה לפני סגירת המסעדה."
  },
  {
    id: 6,
    question: "האם יש קוד לבוש במסעדה?",
    answer: "אנו מבקשים מהאורחים שלנו להגיע בלבוש מסודר ומכובד. אין צורך בחליפות או שמלות ערב, אך אנו לא מאפשרים כניסה עם בגדי ים, גופיות לגברים או כפכפים."
  },
  {
    id: 7,
    question: "האם יש חניה זמינה ליד המסעדה?",
    answer: "כן, יש לנו חניון פרטי לאורחי המסעדה ללא תשלום. בנוסף, ישנם מספר חניונים ציבוריים במרחק הליכה קצר מהמסעדה."
  },
  {
    id: 8,
    question: "האם ניתן להזמין משלוח מהמסעדה?",
    answer: "כן, אנו מציעים שירות משלוחים באזורים מסוימים. ניתן להזמין דרך האתר או האפליקציה שלנו. זמן המשלוח הממוצע הוא 45-60 דקות, תלוי במרחק ובעומס."
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50 dir-rtl" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          שאלות נפוצות
        </h2>
        
        <div className="space-y-4">
          {faqData.map((faq) => (
            <div 
              key={faq.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border-r-4"
              style={{ borderColor: activeIndex === faq.id ? '#45B7D1' : '#96CEB4' }}
            >
              <button
                className="w-full text-right p-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={activeIndex === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 flex-shrink-0"
                >
                  <FiChevronDown size={24} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === faq.id && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div 
                      className="p-5 pt-0 text-gray-600 border-t border-gray-100"
                      style={{ backgroundColor: 'rgba(150, 206, 180, 0.05)' }}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-600">
            יש לך שאלה נוספת? <a href="#contact" className="text-[#45B7D1] font-medium hover:underline">צור קשר</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;