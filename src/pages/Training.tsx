
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Clock, CheckCircle, Calendar, Dumbbell, Heart, Target } from 'lucide-react';

const Training = () => {
  useEffect(() => {
    document.title = "Training Programs - MZ Fitness Hub Rajkot | Personal Training & Group Classes";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover expert training programs at MZ Fitness Hub Rajkot. Personal training, strength training, cardio workouts, yoga classes, and nutrition coaching. Transform your fitness with Gujarat\'s best gym.');
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Training Programs",
      "description": "Comprehensive fitness training programs in Rajkot including personal training, group classes, and specialized workouts",
      "url": "https://mzfitnezz.in/training",
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
      "offers": [
        {
          "@type": "Offer",
          "name": "Personal Training",
          "description": "One-on-one fitness coaching with certified trainers"
        },
        {
          "@type": "Offer",
          "name": "Group Fitness Classes",
          "description": "High-energy group workouts and fitness classes"
        },
        {
          "@type": "Offer",
          "name": "Strength Training",
          "description": "Progressive resistance training for muscle building"
        }
      ]
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
      <section className="relative py-12 sm:py-16 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Dumbbell className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              Training <span className="text-yellow-400">Programs</span> in Rajkot
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-90 px-2">
              Expert-designed programs to transform your fitness journey
            </p>
          </div>
        </div>
      </section>

      {/* Training Categories */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
              Training Categories
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto px-2">
              From beginner-friendly to advanced protocols
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Strength Training */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-br from-red-400 to-pink-500 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">Strength Training</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm leading-relaxed">
                Build lean muscle and increase strength with progressive resistance training.
              </p>
              <ul className="space-y-1 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                  <span>Beginner to Advanced levels</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                  <span>Free weights & machines</span>
                </li>
              </ul>
            </div>

            {/* Cardio & HIIT */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-500 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">Cardio & HIIT</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm leading-relaxed">
                High-intensity training to burn calories and improve cardiovascular health.
              </p>
              <ul className="space-y-1 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                  <span>Fat burning protocols</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                  <span>Metabolic conditioning</span>
                </li>
              </ul>
            </div>

            {/* Yoga & Flexibility */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <Target className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">Yoga & Flexibility</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm leading-relaxed">
                Improve flexibility, balance, and mindfulness through guided sessions.
              </p>
              <ul className="space-y-1 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                  <span>Multiple yoga styles</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                  <span>Meditation & mindfulness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Training */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                Personal Training
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Get personalized attention with certified trainers who create customized workout plans.
              </p>
              
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-1 sm:p-1.5 rounded-full flex-shrink-0">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">1-on-1 Sessions</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Dedicated trainer focus</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-1 sm:p-1.5 rounded-full flex-shrink-0">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Small Group Training</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Share costs, maintain quality</p>
                  </div>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg text-sm sm:text-base">
                Book Consultation
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl sm:rounded-2xl h-48 sm:h-56 md:h-64 order-1 lg:order-2"></div>
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
              Weekly Schedule
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-2">
              Join our expert-led group fitness classes
            </p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
              {/* Morning */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 text-center">Morning</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight">Early Bird HIIT</h4>
                    <p className="text-xs text-gray-600 mt-1">6:00 AM - Mon, Wed, Fri</p>
                  </div>
                  <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight">Morning Yoga</h4>
                    <p className="text-xs text-gray-600 mt-1">7:30 AM - Daily</p>
                  </div>
                </div>
              </div>

              {/* Afternoon */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 text-center">Afternoon</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight">Lunch Cardio</h4>
                    <p className="text-xs text-gray-600 mt-1">12:15 PM - Mon-Fri</p>
                  </div>
                  <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight">Power Yoga</h4>
                    <p className="text-xs text-gray-600 mt-1">1:00 PM - Tue, Thu</p>
                  </div>
                </div>
              </div>

              {/* Evening */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 sm:col-span-2 md:col-span-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 text-center">Evening</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight">After Work HIIT</h4>
                    <p className="text-xs text-gray-600 mt-1">5:30 PM - Mon, Wed, Fri</p>
                  </div>
                  <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight">Evening Strength</h4>
                    <p className="text-xs text-gray-600 mt-1">6:30 PM - Tue, Thu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Training;
