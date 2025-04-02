'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

// Define types for our gallery items
interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: 'interior' | 'food' | 'tech' | 'events';
  title: string;
}

// Categories translation mapping
const categoryTranslations = {
  'interior': 'עיצוב פנים',
  'food': 'מנות',
  'tech': 'טכנולוגיה',
  'events': 'אירועים'
};

// Define props interface for the component
interface GallerySectionProps {
  title?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ title = 'הגלריה שלנו' }) => {
  // Sample gallery items - in a real application, these would come from a CMS or API
  const galleryItems: GalleryItem[] = [
    { id: 1, src: '/images/interior-1.jpg', alt: 'עיצוב פנים מודרני של המסעדה', category: 'interior', title: 'חלל אירוח ראשי' },
    { id: 2, src: '/images/food-1.jpg', alt: 'מנת שף מיוחדת', category: 'food', title: 'מנת הדגל שלנו' },
    { id: 3, src: '/images/tech-1.jpg', alt: 'מערכת הזמנות דיגיטלית', category: 'tech', title: 'חוויית הזמנה חדשנית' },
    { id: 4, src: '/images/interior-2.jpg', alt: 'אזור ישיבה פרטי', category: 'interior', title: 'פינת VIP' },
    { id: 5, src: '/images/food-2.jpg', alt: 'מנת קינוח מיוחדת', category: 'food', title: 'קינוח הבית' },
    { id: 6, src: '/images/events-1.jpg', alt: 'אירוע חברה במסעדה', category: 'events', title: 'אירועים עסקיים' },
    { id: 7, src: '/images/tech-2.jpg', alt: 'מסכי תצוגה אינטראקטיביים', category: 'tech', title: 'טכנולוגיית תצוגה' },
    { id: 8, src: '/images/events-2.jpg', alt: 'מסיבת יום הולדת', category: 'events', title: 'חגיגות מיוחדות' },
  ];

  // State for active filter, selected image, and animation
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Filter gallery items based on active filter
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  // Handle filter change
  const handleFilterChange = (filter: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveFilter(filter);
      setIsAnimating(false);
    }, 300);
  };

  // Handle image click to open modal
  const openModal = (item: GalleryItem) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Handle closing the modal
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Close modal when clicking outside the image
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedImage]);

  // Close modal on escape key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedImage]);

  return (
    <section className="py-16 bg-gray-50 text-right" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          {title}
        </h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => handleFilterChange('all')}
            className={`px-5 py-2 rounded-md transition-all duration-300 ${
              activeFilter === 'all'
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            style={{ backgroundColor: activeFilter === 'all' ? '#96CEB4' : '' }}
            aria-label="הצג את כל התמונות"
          >
            הכל
          </button>
          {Object.entries(categoryTranslations).map(([key, value]) => (
            <button
              key={key}
              onClick={() => handleFilterChange(key)}
              className={`px-5 py-2 rounded-md transition-all duration-300 ${
                activeFilter === key
                  ? 'bg-secondary text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              style={{ backgroundColor: activeFilter === key ? '#45B7D1' : '' }}
              aria-label={`הצג רק ${value}`}
            >
              {value}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div 
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-opacity duration-300 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer h-64 bg-gray-200"
              onClick={() => openModal(item)}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openModal(item)}
              aria-label={`תמונה של ${item.alt}, לחץ להגדלה`}
            >
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-200 text-sm">{categoryTranslations[item.category]}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty state when no items match the filter */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">לא נמצאו פריטים בקטגוריה זו</p>
          </div>
        )}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 transition-opacity duration-300">
          <div 
            ref={modalRef}
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
          >
            <div className="relative h-[70vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="(max-width: 1536px) 100vw, 1536px"
                className="object-contain"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold text-gray-800">{selectedImage.title}</h3>
              <p className="text-gray-600 mt-1">{selectedImage.alt}</p>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-3 left-3 bg-white/80 text-gray-800 rounded-full p-2 hover:bg-white transition-colors"
              aria-label="סגור תמונה"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;