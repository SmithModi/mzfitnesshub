"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Dribbble,
  Globe,
  Clock,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";
import { Link } from "react-router-dom";

function Footer() {
  // Footer link data
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Training", href: "/training" },
        { label: "Health", href: "/health" },
        { label: "BMI Calculator", href: "/bmi-calculator" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Personal Training", href: "/services" },
        { label: "Group Classes", href: "/services" },
        { label: "Strength Training", href: "/services" },
        { label: "Cardio Workouts", href: "/services" },
        { label: "Yoga & Mindfulness", href: "/services" },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <MapPin size={18} className="text-[#FF9F1C]" />,
      text: "1st Floor, Anant Chaya Complex, Amin Marg, Rajkot, Gujarat 360001",
      href: "https://maps.google.com/?q=1st+Floor,+Anant+Chaya+Complex,+Amin+Marg,+Rajkot,+Gujarat+360001",
    },
    {
      icon: <Phone size={18} className="text-[#FF9F1C]" />,
      text: "+91 99093 03109",
      href: "tel:+919909303109",
    },
    {
      icon: <Clock size={18} className="text-[#FF9F1C]" />,
      text: "Open daily • Closes 9 PM",
      href: null,
    },
  ];

  // Social media icons (Placeholders as original didn't have specific links)
  const socialLinks = [
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
  ];

  return (
    <footer className="bg-white relative min-h-screen flex flex-col overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-8 z-40 relative w-full flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/213e706b-4577-4749-9a80-8fa51a197e3f.png"
                alt="MZ Fitnezz Hub Logo"
                className="h-32  w-32 rounded-full"
              />
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Transform your body and mind with our expert trainers and state-of-the-art facilities in Rajkot, Gujarat.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-zinc-900 text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <Link
                      to={link.href}
                      className="text-zinc-600 hover:text-[#FF9F1C] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-zinc-900 text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="mt-1">{item.icon}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-zinc-600 hover:text-[#FF9F1C] transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-zinc-600 hover:text-[#FF9F1C] transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-zinc-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#FF9F1C] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-zinc-600">
            <p>&copy; {new Date().getFullYear()} MZ Fitnezz Hub. All rights reserved.</p>
            <p className="text-xs mt-1">
              Made with 💗 by{' '}
              <a
                href="https://www.somethingmedia.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF9F1C] hover:underline"
              >
                SomethingMedia
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="w-full h-40 md:h-60 flex justify-center items-center ">
        <TextHoverEffect text="MZ FITNEZZ" className="h-full w-full" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default Footer;