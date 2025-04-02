import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface NavigationLink {
  id: number;
  name: string;
  url: string;
}

const FooterSection: React.FC = () => {
  // Social media links
  const socialLinks: SocialLink[] = [
    { id: 1, name: 'פייסבוק', url: 'https://facebook.com', icon: <FaFacebook /> },
    { id: 2, name: 'טוויטר', url: 'https://twitter.com', icon: <FaTwitter /> },
    { id: 3, name: 'אינסטגרם', url: 'https://instagram.com', icon: <FaInstagram /> },
    { id: 4, name: 'לינקדאין', url: 'https://linkedin.com', icon: <FaLinkedin /> },
  ];

  // Navigation links
  const navLinks: NavigationLink[] = [
    { id: 1, name: 'דף הבית', url: '/' },
    { id: 2, name: 'תפריט', url: '/menu' },
    { id: 3, name: 'אודות', url: '/about' },
    { id: 4, name: 'שירותים', url: '/services' },
    { id: 5, name: 'צור קשר', url: '/contact' },
  ];

  // Legal links
  const legalLinks: NavigationLink[] = [
    { id: 1, name: 'מדיניות פרטיות', url: '/privacy' },
    { id: 2, name: 'תנאי שימוש', url: '/terms' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white w-full" dir="rtl">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <Image 
                src="/logo.png" 
                alt="gggg לוגו" 
                width={120} 
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              אנחנו מסעדה מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#96CEB4]">ניווט מהיר</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.url} className="text-gray-300 hover:text-[#45B7D1] transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#96CEB4]">צור קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaPhone className="text-[#45B7D1]" />
                <span className="text-gray-300">03-1234567</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#45B7D1]" />
                <a href="mailto:info@gggg.co.il" className="text-gray-300 hover:text-[#45B7D1] transition-colors duration-300">
                  info@gggg.co.il
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#45B7D1]" />
                <span className="text-gray-300">רחוב הטכנולוגיה 123, תל אביב</span>
              </li>
            </ul>
          </div>

          {/* Social media links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#96CEB4]">עקבו אחרינו</h3>
            <div className="flex space-x-4 space-x-reverse">
              {socialLinks.map((social) => (
                <a 
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#45B7D1] transition-colors duration-300 text-xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar with copyright and legal links */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} gggg. כל הזכויות שמורות.
          </p>
          <div className="flex space-x-6 space-x-reverse">
            {legalLinks.map((link) => (
              <Link 
                key={link.id}
                href={link.url}
                className="text-gray-400 hover:text-[#45B7D1] text-sm transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;