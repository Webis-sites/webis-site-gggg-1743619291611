'use client';

// BookingSystem.tsx
import React, { useState } from 'react';
import { format } from 'date-fns';
import { he } from 'date-fns/locale';

// Types
interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  date: Date | null;
  time: string;
  partySize: number;
}

interface TimeSlot {
  id: string;
  label: string;
}

const BookingSystem: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    date: null,
    time: '',
    partySize: 2,
  });
  
  // State for calendar visibility
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  
  // State for form submission
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  // Available time slots
  const timeSlots: TimeSlot[] = [
    { id: '12:00', label: '12:00' },
    { id: '12:30', label: '12:30' },
    { id: '13:00', label: '13:00' },
    { id: '13:30', label: '13:30' },
    { id: '14:00', label: '14:00' },
    { id: '18:00', label: '18:00' },
    { id: '18:30', label: '18:30' },
    { id: '19:00', label: '19:00' },
    { id: '19:30', label: '19:30' },
    { id: '20:00', label: '20:00' },
    { id: '20:30', label: '20:30' },
    { id: '21:00', label: '21:00' },
  ];
  
  // Party size options
  const partySizeOptions = Array.from({ length: 10 }, (_, i) => i + 1);
  
  // Generate calendar days
  const generateCalendarDays = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push(date);
    }
    
    return days;
  };
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  // Handle date selection
  const handleDateSelect = (date: Date) => {
    setFormData((prev) => ({
      ...prev,
      date,
    }));
    setShowCalendar(false);
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
          date: null,
          time: '',
          partySize: 2,
        });
      }, 3000);
    }, 1000);
  };
  
  // Format date for display
  const formatDate = (date: Date | null): string => {
    if (!date) return '';
    return format(date, 'EEEE, d בMMMM', { locale: he });
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 rtl" dir="rtl">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">הזמנת שולחן</h2>
      
      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center transition-all duration-300 animate-fadeIn">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">ההזמנה התקבלה בהצלחה!</h3>
          <p className="text-gray-600">נשלח אליך אישור במייל בקרוב.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date and Time Selection */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">תאריך</label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowCalendar(!showCalendar)}
                  className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#96CEB4] focus:border-[#96CEB4] text-right"
                >
                  {formData.date ? formatDate(formData.date) : 'בחר תאריך'}
                </button>
                
                {showCalendar && (
                  <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 p-3 transition-all duration-200 ease-in-out">
                    <div className="grid grid-cols-7 gap-1">
                      {generateCalendarDays().map((date, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleDateSelect(date)}
                          className={`p-2 rounded-md text-center hover:bg-[#96CEB4] hover:text-white transition-colors ${
                            formData.date && format(formData.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
                              ? 'bg-[#96CEB4] text-white'
                              : 'bg-gray-50'
                          }`}
                        >
                          <div className="text-xs">{format(date, 'EEE', { locale: he })}</div>
                          <div>{format(date, 'd', { locale: he })}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">שעה</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#96CEB4] focus:border-[#96CEB4]"
                required
              >
                <option value="">בחר שעה</option>
                {timeSlots.map((slot) => (
                  <option key={slot.id} value={slot.id}>
                    {slot.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Party Size */}
          <div className="space-y-2">
            <label htmlFor="partySize" className="block text-sm font-medium text-gray-700">מספר סועדים</label>
            <select
              id="partySize"
              name="partySize"
              value={formData.partySize}
              onChange={handleInputChange}
              className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#96CEB4] focus:border-[#96CEB4]"
              required
            >
              {partySizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size} {size === 1 ? 'סועד' : 'סועדים'}
                </option>
              ))}
            </select>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">שם</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#96CEB4] focus:border-[#96CEB4]"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">טלפון</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#96CEB4] focus:border-[#96CEB4]"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">אימייל</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#96CEB4] focus:border-[#96CEB4]"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">הודעה (בקשות מיוחדות)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#96CEB4] focus:border-[#96CEB4]"
            />
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#45B7D1] hover:bg-[#3da7c0] text-white font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#96CEB4] focus:ring-opacity-50 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  מעבד...
                </span>
              ) : (
                'קבע תור עכשיו'
              )}
            </button>
          </div>
        </form>
      )}
      
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>ניתן לבטל הזמנה עד 24 שעות לפני מועד ההגעה</p>
        <p className="mt-1">לשאלות ובירורים: 03-1234567</p>
      </div>
    </div>
  );
};

export default BookingSystem;