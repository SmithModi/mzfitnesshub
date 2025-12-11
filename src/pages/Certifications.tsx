
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Calendar, MapPin, Trophy, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Certifications = () => {
  const certificates = [
    {
      id: 1,
      title: "Business Solutions for Sustainability Challenges",
      organization: "Atmiya University",
      type: "Certificate of Achievement",
      date: "February 9-10, 2024",
      location: "Rajkot, Gujarat",
      description: "Presented startup idea poster at ICETCP-2024 Idea Pitching event focusing on sustainable business solutions.",
      image: "/lovable-uploads/888b333d-35bd-4002-9491-e9044d38a385.png",
      category: "Innovation & Entrepreneurship"
    },
    {
      id: 2,
      title: "BOKWA Fitness Level 1",
      organization: "BOKWA Fitness",
      type: "Instructor Certification",
      date: "October 25, 2015 - October 25, 2016",
      location: "Certified Training Center",
      description: "Completed required hours and course for BOKWA FITNESS: Basic Fundamental of BOKWA FITNESS Level 1.",
      image: "/lovable-uploads/58dfd52f-4ee4-4dd1-b5f8-bc5e2340b08d.png",
      category: "Fitness Training"
    },
    {
      id: 3,
      title: "Largest Zumba Class World Record",
      organization: "Asia Book of Records",
      type: "Certificate of Appreciation",
      date: "April 25, 2015",
      location: "Police Head Quarter Ground, Rajkot",
      description: "Immense contribution towards success of 'Largest Zumba Class. We- The One For Women Empowerment'.",
      image: "/lovable-uploads/fbf04eb3-2489-4b9d-9b18-e36bd260e502.png",
      category: "World Record Achievement"
    },
    {
      id: 4,
      title: "Official Zumba Instructor",
      organization: "Zumba Fitness",
      type: "Basic Steps Level 1",
      date: "January 9, 2016",
      location: "Certified by Beto Perez",
      description: "Official ZUMBA Instructor certification for Basic Steps Level 1, authorized by creator Beto Perez.",
      image: "/lovable-uploads/fe128ffb-1f19-4c6f-b371-931b71dfb7ba.png",
      category: "Dance Fitness"
    },
    {
      id: 5,
      title: "1st Degree Black Belt",
      organization: "WAKO India Kickboxing Federation",
      type: "National Certificate",
      date: "April 2, 2017",
      location: "Recognized by World Association of Kickboxing Organizations",
      description: "Awarded 1st Degree Black Belt in recognition of progress, ability and knowledge in Kickboxing.",
      image: "/lovable-uploads/4000578f-c6dd-430f-b5f2-ac470a892f90.png",
      category: "Martial Arts"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-white -z-10"></div>

      <Header />

      {/* Elegant Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28 overflow-hidden">
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-gray-900 mb-6 tracking-tight leading-[1.1]"
            >
              Professional
              <br />
              <span className="text-orange-500">Certifications</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-14"
            >
              Expertise across fitness training, martial arts, and innovation, backed by professional qualifications and world-class achievements.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="grid grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto"
            >
              {[
                { number: '5', label: 'Certifications', icon: Award },
                { number: '8+', label: 'Years Experience', icon: Trophy },
                { number: '4', label: 'Specializations', icon: Star },
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
                    <div className="relative bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:bg-white/80 hover:border-orange-500/30 hover:shadow-lg hover:-translate-y-1">
                      {/* Noise Overlay */}


                      <div className="relative">
                        <div className="flex items-center justify-center mb-3">
                          <div className="p-2.5 rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors duration-300">
                            <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-orange-500" strokeWidth={1.5} />
                          </div>
                        </div>
                        <div className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-1.5">
                          {stat.number}
                        </div>
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

      {/* Certifications List Section */}
      <section className="relative py-16 sm:py-20 md:py-24">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <Card className="overflow-hidden border-0 bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:shadow-xl transition-all duration-500">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Certificate Image */}
                    <div className="relative">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200/50">
                          {cert.category}
                        </span>
                      </div>
                    </div>

                    {/* Certificate Details */}
                    <CardContent className="p-8">
                      <div className="mb-2">
                        <span className="text-sm text-orange-500 uppercase tracking-wide font-medium">
                          {cert.type}
                        </span>
                      </div>

                      <h3 className="text-2xl font-normal text-gray-900 mb-3">
                        {cert.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {cert.description}
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center text-gray-700 text-sm">
                          <Award className="h-4 w-4 mr-3 text-orange-500" />
                          <span>{cert.organization}</span>
                        </div>
                        <div className="flex items-center text-gray-700 text-sm">
                          <Calendar className="h-4 w-4 mr-3 text-orange-500" />
                          <span>{cert.date}</span>
                        </div>
                        <div className="flex items-center text-gray-700 text-sm">
                          <MapPin className="h-4 w-4 mr-3 text-orange-500" />
                          <span>{cert.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-16"
          >
            <div className="relative bg-white/60 backdrop-blur-sm border border-gray-200/50 p-12 rounded-2xl text-center">


              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4">
                  Ready to Start Your <span className="text-orange-500">Fitness Journey?</span>
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                  Train with a certified professional who brings years of experience and proven expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    Contact Us Today
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-white hover:border-orange-500 hover:text-orange-500 transition-all duration-300">
                    View Our Services
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certifications;
