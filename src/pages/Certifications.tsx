
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Calendar, MapPin } from 'lucide-react';
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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Simplified */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h1>
            <p className="text-lg text-gray-600">
              Professional qualifications and achievements demonstrating expertise across fitness training, martial arts, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Simple Stats */}
          <div className="grid grid-cols-3 gap-8 mb-16 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900">5</div>
              <div className="text-sm text-gray-600">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">8+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">4</div>
              <div className="text-sm text-gray-600">Specializations</div>
            </div>
          </div>

          {/* Certifications List */}
          <div className="space-y-8">
            {certificates.map((cert) => (
              <Card key={cert.id} className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Certificate Image */}
                  <div className="relative">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-gray-700 px-3 py-1 rounded text-sm">
                        {cert.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Certificate Details */}
                  <CardContent className="p-8">
                    <div className="mb-2">
                      <span className="text-sm text-gray-500 uppercase tracking-wide">
                        {cert.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {cert.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {cert.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-700 text-sm">
                        <Award className="h-4 w-4 mr-3 text-gray-400" />
                        <span>{cert.organization}</span>
                      </div>
                      <div className="flex items-center text-gray-700 text-sm">
                        <Calendar className="h-4 w-4 mr-3 text-gray-400" />
                        <span>{cert.date}</span>
                      </div>
                      <div className="flex items-center text-gray-700 text-sm">
                        <MapPin className="h-4 w-4 mr-3 text-gray-400" />
                        <span>{cert.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Simple Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gray-50 p-12 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Start Your Fitness Journey?</h3>
              <p className="text-gray-600 mb-8">
                Train with a certified professional who brings years of experience and proven expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-white px-8 py-3 rounded font-medium hover:bg-primary/90 transition-colors">
                  Contact Us Today
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded font-medium hover:bg-gray-50 transition-colors">
                  View Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Certifications;
