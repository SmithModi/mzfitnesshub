
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Target, Dumbbell, Heart, Activity } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import ProgramModal from '../components/ProgramModal';

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

  const services = [
    {
      icon: Target,
      title: "Personal Training",
      description: "One-on-one sessions with certified trainers tailored to your specific goals and fitness level.",
      features: ["Customized workout plans", "Progress tracking", "Nutritional guidance", "Flexible scheduling"],
      duration: "60 mins",
      level: "All Levels",
      participants: "1-on-1"
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "Energetic group sessions that combine fitness with community spirit and motivation.",
      features: ["Variety of class types", "All fitness levels", "Social environment", "Expert instruction"],
      duration: "45 mins",
      level: "Beginner to Advanced",
      participants: "8-15"
    },
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Build muscle, increase power, and enhance your overall strength with our comprehensive programs.",
      features: ["Progressive overload", "Form correction", "Equipment variety", "Strength assessments"],
      duration: "90 mins",
      level: "Intermediate+",
      participants: "4-8"
    },
    {
      icon: Activity,
      title: "Cardio Workouts",
      description: "Improve cardiovascular health and endurance through dynamic and engaging cardio sessions.",
      features: ["HIIT training", "Endurance building", "Heart rate monitoring", "Fun workout variety"],
      duration: "30-45 mins",
      level: "All Levels",
      participants: "6-12"
    },
    {
      icon: Heart,
      title: "Yoga & Mindfulness",
      description: "Find balance and inner peace while improving flexibility, strength, and mental wellness.",
      features: ["Multiple yoga styles", "Meditation sessions", "Stress relief", "Mind-body connection"],
      duration: "60 mins",
      level: "All Levels",
      participants: "8-20"
    }
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
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight leading-tight">
              Our Premium <span className="text-primary">Services</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
              Discover our comprehensive range of fitness services designed to transform your body, 
              mind, and lifestyle with personalized attention and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.title}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm hover:bg-card/90 md:hover:-translate-y-2"
                >
                  <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                    {/* Icon */}
                    <div className="flex justify-center mb-4 sm:mb-6">
                      <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-primary" />
                      </div>
                    </div>
                    
                    {/* Service Name */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4 sm:mb-6 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    
                    {/* View Details Button */}
                    <Button
                      onClick={() => handleViewDetails(service)}
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm sm:text-base py-2 sm:py-3"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Choose from our premium services and let our expert team guide you towards achieving your fitness goals 
            with personalized attention and proven methodologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <Button className="bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg md:hover:scale-105 text-sm sm:text-base">
              Book a Consultation
            </Button>
            <Button variant="outline" className="border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm sm:text-base">
              View Membership Plans
            </Button>
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
