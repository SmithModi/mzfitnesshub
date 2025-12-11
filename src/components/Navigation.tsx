import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const isBMICalculator = location.pathname === '/bmi-calculator';

  // Determine states
  const isTransparentBg = (isHome || isBMICalculator) && !scrolled;
  const isBMIScrolled = isBMICalculator && scrolled;

  // Text should be white if background is transparent OR if we are on BMI page AND NOT SCROLLED
  // When scrolled on BMI page, we want black text (default) because background will be white/80
  const useWhiteText = isTransparentBg || (isBMICalculator && !scrolled);

  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About Us',
    path: '/about'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Certifications',
    path: '/certifications'
  }, {
    name: 'BMI Calculator',
    path: '/bmi-calculator'

  }, {
    name: 'Contact Us',
    path: '/contact'
  }];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 font-serif ${isTransparentBg
      ? 'bg-transparent py-4'
      : isBMIScrolled
        ? 'bg-white/100 backdrop-blur-md shadow-sm py-2'
        : 'bg-white/100 backdrop-blur-sm shadow-sm py-2'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <Link to="/" className="flex items-center space-x-3 group">
              <img src="/lovable-uploads/213e706b-4577-4749-9a80-8fa51a197e3f.png" alt="MZ Fitness Hub Logo" className="h-20 w-20 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 mt-4" />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-base font-medium transition-all duration-200 ${useWhiteText
                  ? 'text-white/90 hover:text-white'
                  : location.pathname === item.path
                    ? 'text-primary'
                    : 'text-black hover:text-primary'
                  }`}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Animated text with scaling */}
                <span className={`transition-transform duration-200 ${hoveredItem === item.name ? 'scale-105' : 'scale-100'}`}>
                  {item.name}
                </span>

                {/* Active state underline */}
                {location.pathname === item.path && (
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${useWhiteText ? 'bg-white' : 'bg-primary'}`}></div>
                )}

                {/* Floating dumbbell icons with improved animations */}
                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-200 ${hoveredItem === item.name ? 'opacity-100' : 'opacity-0'}`}>
                  <Dumbbell className={`absolute -top-1 -left-1 w-3 h-3 animate-float-1 ${useWhiteText ? 'text-white' : 'text-primary'}`} />
                  <Dumbbell className={`absolute -top-1 -right-1 w-3 h-3 animate-float-2 ${useWhiteText ? 'text-white' : 'text-primary'}`} />
                  <Dumbbell className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 animate-float-3 ${useWhiteText ? 'text-white' : 'text-primary'}`} />
                </div>
              </Link>
            ))}
          </div>

          {/* Right Side - Free Demo & Mobile Menu */}
          <div className="flex items-center gap-4 z-50">
            {/* Desktop Free Demo Button */}
            <div className="hidden md:block">
              <Link to="/contact" className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${isTransparentBg
                ? 'bg-white text-black hover:bg-gray-100'
                : 'bg-primary text-white hover:bg-orange-600 shadow-md hover:shadow-lg'
                }`}>
                Free Demo
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md transition-all duration-300 hover:scale-110 focus:outline-none ${useWhiteText ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:text-primary hover:bg-accent'
                  }`}
              >
                <div className="relative w-6 h-6">
                  <Menu className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                  <X className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-white/95 backdrop-blur-sm border-t shadow-lg">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2 ${location.pathname === item.path
                ? 'bg-gradient-to-r from-primary to-orange-600 text-white shadow-lg'
                : 'text-gray-700 hover:bg-gradient-to-r hover:from-primary/10 hover:to-orange-600/10 hover:text-primary hover:shadow-md'
                }`}
              onClick={() => setIsOpen(false)}
              style={{
                animationDelay: `${index * 0.1}s`,
                transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                transition: `all 0.3s ease-out ${index * 0.1}s`
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float-1 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 1;
          }
          50% { 
            transform: translateY(-4px) translateX(-2px) rotate(8deg); 
            opacity: 0.8;
          }
        }

        @keyframes float-2 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 1;
          }
          50% { 
            transform: translateY(-3px) translateX(2px) rotate(-6deg); 
            opacity: 0.9;
          }
        }

        @keyframes float-3 {
          0%, 100% { 
            transform: translateY(0px) translateX(-50%) rotate(0deg); 
            opacity: 1;
          }
          50% { 
            transform: translateY(-5px) translateX(-50%) rotate(4deg); 
            opacity: 0.7;
          }
        }

        .animate-float-1 {
          animation: float-1 1.8s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 2s ease-in-out infinite 0.2s;
        }

        .animate-float-3 {
          animation: float-3 1.6s ease-in-out infinite 0.4s;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;