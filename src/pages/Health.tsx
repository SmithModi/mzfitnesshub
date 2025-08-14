
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, Clock, Users, Calendar, Heart, Brain, Activity } from 'lucide-react';

const Health = () => {
  useEffect(() => {
    document.title = "Health & Nutrition - MZ Fitness Hub Rajkot | Diet Plans & Wellness Programs";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional health and nutrition guidance at MZ Fitness Hub Rajkot. Diet planning, wellness programs, health assessments, and nutrition coaching for optimal fitness results in Gujarat.');
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",
      "name": "MZ Fitness Hub - Health & Nutrition",
      "description": "Complete health and nutrition services for fitness transformation in Rajkot",
      "url": "https://mzfitnezz.in/health",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, Anant Chaya Complex, Amin Marg",
        "addressLocality": "Rajkot",
        "addressRegion": "Gujarat",
        "postalCode": "360001",
        "addressCountry": "IN"
      },
      "telephone": "+91-99093-03109",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Health & Nutrition Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Nutrition Counseling",
              "description": "Professional dietary guidance and meal planning"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Health Assessment",
              "description": "Comprehensive fitness and health evaluations"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Wellness Programs",
              "description": "Holistic wellness programs for mind and body"
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Health & <span className="text-yellow-400">Wellness</span> in Rajkot
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-90">
              Complete wellness solutions for your mind and body
            </p>
          </div>
        </div>
      </section>

      {/* Health Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Holistic Health Services
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Physical, mental, and nutritional wellness solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-100 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Nutrition</h3>
                <p className="text-gray-600 text-sm">
                  Personalized meal plans from certified nutritionists.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Wellness Coaching</h3>
                <p className="text-gray-600 text-sm">
                  Lifestyle coaching for sustainable healthy habits.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Health Assessments</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive health screenings and evaluations.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Recovery</h3>
                <p className="text-gray-600 text-sm">
                  Injury prevention and rehabilitation support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Programs */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nutrition Programs
              </h2>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Fuel your body with personalized nutrition plans that complement your fitness goals.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-1.5 rounded-full flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Custom Meal Plans</h4>
                    <p className="text-gray-600 text-xs">Based on goals and preferences</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-1.5 rounded-full flex-shrink-0">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Group Workshops</h4>
                    <p className="text-gray-600 text-xs">Learn healthy cooking techniques</p>
                  </div>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg">
                Start Nutrition Plan
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl h-64"></div>
          </div>
        </div>
      </section>

      {/* Mental Wellness */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Mental Wellness
            </h2>
            <p className="text-lg text-gray-600">
              Your mental health is as important as physical fitness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stress Management */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Stress Management</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Learn effective techniques through breathing exercises and meditation.
              </p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Guided meditation sessions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Breathing technique workshops</span>
                </li>
              </ul>
            </div>

            {/* Sleep Optimization */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sleep Optimization</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Improve sleep quality with evidence-based strategies.
              </p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Sleep hygiene education</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Relaxation techniques</span>
                </li>
              </ul>
            </div>

            {/* Mindfulness */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mindfulness</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Develop self-awareness and emotional resilience.
              </p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>8-week mindfulness course</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Daily practice sessions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Health;
