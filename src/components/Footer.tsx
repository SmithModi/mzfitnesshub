import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { HoverPeek } from './ui/link-preview';
const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/lovable-uploads/213e706b-4577-4749-9a80-8fa51a197e3f.png" alt="MZ Fitness Hub Logo" className="h-10 w-10 rounded-full" />
              <h3 className="text-2xl font-bold text-white">MZ Fitnezz Hub</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transform your body and mind with our expert trainers and state-of-the-art facilities in Rajkot, Gujarat.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/training" className="hover:text-primary transition-colors">Training</Link></li>
              <li><Link to="/health" className="hover:text-primary transition-colors">Health</Link></li>
              <li><Link to="/bmi-calculator" className="hover:text-primary transition-colors">BMI Calculator</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-primary transition-colors">Personal Training</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Group Classes</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Strength Training</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Cardio Workouts</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Yoga & Mindfulness</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  1st Floor, Anant Chaya Complex, Amin Marg, above US Catalog, Harihar Society, Kotecha Nagar, Rajkot, Gujarat 360001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 99093 03109</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Open daily • Closes 9 PM</span>
              </div>
              
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center space-y-2">
          <p className="text-gray-400 text-sm">
            © 2024 MZ Fitness Hub. All rights reserved. Transform your life with us.
          </p>
          <p className="text-gray-400 text-sm">
            Made with 💗 by{' '}
            <HoverPeek 
              url="https://www.somethingmedia.in/"
              isStatic={true}
              imageSrc="https://www.mzfitnezz.in/somethingmedia.png"
            >
              <a
                href="https://www.somethingmedia.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium underline decoration-primary/40 decoration-dotted hover:decoration-primary hover:decoration-solid"
              >
                SomethingMedia
              </a>
            </HoverPeek>
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;