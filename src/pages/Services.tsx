
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Target, Dumbbell, Heart, Activity, Sparkles } from 'lucide-react';
import ProgramModal from '../components/ProgramModal';
import { GradientCard } from '../components/ui/gradient-card';

const Services = () => {
  useEffect(() => {
    document.title = "Services - MZ Fitness Hub Rajkot | Personal Training, Group Classes & Nutrition";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive fitness services at MZ Fitness Hub Rajkot. Personal training, group fitness classes, nutrition coaching, strength training, and wellness programs. Join Gujarat\'s premier fitness center.');
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Fitness Services",
      "description": "Comprehensive fitness and wellness services offered at MZ Fitness Hub Rajkot",
      "url": "https://mzfitnezz.in/services",
      "provider": {
        "@type": "Gym",
        "name": "MZ Fitness Hub",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1st Floor, Anant Chaya Complex, Amin Marg",
          "addressLocality": "Rajkot",
          "addressRegion": "Gujarat",
          "postalCode": "360001",
          "addressCountry": "IN"
        },
        "telephone": "+91-99093-03109"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Fitness Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Personal Training",
              "description": "One-on-one fitness coaching with certified trainers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Group Fitness Classes",
              "description": "Energetic group workout sessions for all fitness levels"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Nutrition Coaching",
              "description": "Professional dietary guidance and meal planning"
            }
          }
        ]
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Service data for gradient cards
  const services = [
    {
      title: "Gymnasium",
      description: "Complete gym facilities with cardio, weight lifting, personal training, nutrition guidance, and aqua training programs.",
      ctaText: "Explore Services",
      ctaHref: "/gymnasium-in-rajkot",
      imageUrl: "/services/gym.png",
      gradient: "orange" as const,
      icon: Dumbbell,
    },
    {
      title: "Floor Training",
      description: "Functional training, CrossFit, yoga, Zumba, and strength training programs designed for all fitness levels.",
      ctaText: "View Programs",
      ctaHref: "/floor-training-in-rajkot",
      imageUrl: "/services/floortraining.png",
      gradient: "pink" as const,
      icon: Target,
    },
    {
      title: "Physio",
      description: "Professional physiotherapy services including pain management, rehab exercises, consulting, and home visits.",
      ctaText: "Book Session",
      ctaHref: "/physio-in-rajkot",
      imageUrl: "/services/physio.png",
      gradient: "purple" as const,
      icon: Activity,
    },
    {
      title: "Wellness",
      description: "Comprehensive wellness services with facial treatments, body shaping, MARM therapy, and laser treatment options.",
      ctaText: "Learn More",
      ctaHref: "/wellness-in-rajkot",
      imageUrl: "/services/wellness.png",
      gradient: "green" as const,
      icon: Sparkles,
    },
  ];

  const handleViewDetails = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-secondary/30">
      <Header />



      {/* Elegant Hero Section - Following Design System */}
      <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28 overflow-hidden font-serif">
        {/* Noisy Background */}
        <div className="absolute inset-0 bg-white">
        </div>

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">

            {/* Main Heading - Instrument Serif */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-gray-900 mb-6 tracking-tight leading-[1.1]"
            >
              Transform Your Life
              <br />
              <span className="text-orange-500">With Excellence</span>
            </motion.h1>

            {/* Elegant Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-14 font-serif"
            >
              Experience our comprehensive range of premium fitness services,
              meticulously designed to elevate your wellness journey.
            </motion.p>

            {/* Refined Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto"
            >
              {[
                { number: '4', label: 'Core Functions', icon: Target },
                { number: '15+', label: 'Specialized Services', icon: Dumbbell },
                { number: '500+', label: 'Satisfied Members', icon: Users },
                { number: '100%', label: 'Commitment', icon: Heart },
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                    className="group relative"
                  >
                    {/* Card with Noisy Background */}
                    <div className="relative bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:bg-white/80 hover:border-orange-500/30 hover:shadow-lg hover:-translate-y-1">
                      {/* Noise Overlay */}
                      {/* Noise Overlay Removed */}

                      <div className="relative">
                        {/* Icon */}
                        <div className="flex items-center justify-center mb-3">
                          <div className="p-2.5 rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors duration-300">
                            <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-orange-500" strokeWidth={1.5} />
                          </div>
                        </div>

                        {/* Number */}
                        <div className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-gray-900 mb-1.5">
                          {stat.number}
                        </div>

                        {/* Label */}
                        <div className="text-xs md:text-sm text-gray-600 font-medium tracking-wide">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </section>


      {/* Services Grid with Elegant Background */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden font-serif">
        {/* Noisy Background */}
        <div className="absolute inset-0 bg-white">
        </div>

        {/* Subtle Gradient Overlay */}
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-gray-900 mb-4">
              Our <span className="text-orange-500">Core Functions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our specialized services designed to meet your unique fitness goals
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <GradientCard
                  title={service.title}
                  description={service.description}
                  ctaText={service.ctaText}
                  ctaHref={service.ctaHref}
                  imageUrl={service.imageUrl}
                  gradient={service.gradient}
                  icon={service.icon}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <ProgramModal
          isOpen={isModalOpen}
          onClose={closeModal}
          program={selectedService}
        />
      )}

      <Footer />
    </div>
  );
};

export default Services;
