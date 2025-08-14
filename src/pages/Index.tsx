import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProgramModal from '../components/ProgramModal';
import { Users, Clock, CheckCircle, Heart, Activity, Award, Star, BookOpen, Monitor, Zap, Target, User, Calendar, TrendingUp, Brain, Shield, Play, ArrowRight, Sparkles } from 'lucide-react';
import { useEffect } from 'react';
const Index = () => {
  // SEO optimization for homepage
  useEffect(() => {
    document.title = "MZ Fitness Hub - Best Gym in Rajkot | Premium Fitness Center Gujarat";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your fitness journey at MZ Fitness Hub - Rajkot\'s premier gym. Expert personal training, state-of-the-art equipment, nutrition guidance & group fitness classes. Join 500+ satisfied members!');
    }

    // Add structured data for homepage
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "MZ Fitness Hub - Best Gym in Rajkot",
      "description": "Premier fitness center in Rajkot offering personal training, group classes, and complete wellness solutions",
      "url": "https://mzfitnezz.in/",
      "mainEntity": {
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
        "telephone": "+91-99093-03109",
        "openingHours": "Mo-Su 06:00-21:00",
        "priceRange": "₹₹"
      }
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const programs = [{
    title: "Strength Training",
    description: "Transform your body with our comprehensive strength training program. Build lean muscle, increase bone density, and boost your metabolism with expert-guided weightlifting sessions designed for all fitness levels.",
    features: ["Personalized workout plans tailored to your goals", "Professional form coaching and technique correction", "Progressive overload programming for continuous improvement", "Access to premium strength training equipment", "Nutritional guidance for muscle building and recovery", "Weekly progress tracking and body composition analysis"],
    duration: "8-12 weeks",
    level: "All Levels",
    participants: "8-12 people"
  }, {
    title: "Cardio Blast",
    description: "Ignite your cardiovascular fitness with high-intensity workouts that burn calories, improve heart health, and boost your endurance. Perfect for those looking to lose weight and increase energy levels.",
    features: ["High-intensity interval training (HIIT) sessions", "Fat-burning cardio circuits and challenges", "Heart rate monitoring and training zones", "Variety of cardio equipment and exercises", "Calorie tracking and metabolic assessments", "Recovery techniques and cool-down routines"],
    duration: "6-8 weeks",
    level: "Beginner to Advanced",
    participants: "15-20 people"
  }, {
    title: "Yoga & Mindfulness",
    description: "Discover inner peace and physical flexibility through our holistic yoga and mindfulness program. Combine ancient practices with modern wellness techniques for complete mind-body transformation.",
    features: ["Various yoga styles: Hatha, Vinyasa, and Yin", "Meditation and breathwork sessions", "Flexibility and mobility improvement", "Stress reduction and mental clarity techniques", "Mindful movement and body awareness", "Props and modifications for all abilities"],
    duration: "Ongoing",
    level: "All Levels",
    participants: "10-15 people"
  }];
  const handleLearnMore = (program: any) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{
          animationDelay: '2s'
        }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-bounce" style={{
          animationDelay: '0s',
          animationDuration: '3s'
        }}></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-bounce" style={{
          animationDelay: '1s',
          animationDuration: '4s'
        }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{
          animationDelay: '2s',
          animationDuration: '5s'
        }}></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-bounce" style={{
          animationDelay: '3s',
          animationDuration: '3.5s'
        }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 flex items-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">Transform Your Life Today</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Best Gym in
                  <span className="block bg-gradient-to-r from-primary via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    Rajkot Gujarat
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl">
                  Join MZ Fitness Hub - Rajkot's premier fitness destination with expert trainers, modern equipment, and proven results. Transform your health with Gujarat's top-rated gym experience.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative bg-gradient-to-r from-primary to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25">
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Start Your Journey</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="group flex items-center space-x-3 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="bg-white/20 rounded-full p-2">
                    <Play className="w-4 h-4 fill-current" />
                  </div>
                  <span>Watch Our Story</span>
                </button>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-gray-400 text-sm">Happy Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">5+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">95%</div>
                  <div className="text-gray-400 text-sm">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Visual Element */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white">Your Transformation</h3>
                      <div className="bg-green-500 rounded-full p-2">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-white">
                        <span>Strength Training</span>
                        <span className="text-green-400">95% Complete</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full w-[95%]"></div>
                      </div>
                      
                      <div className="flex items-center justify-between text-white">
                        <span>Cardio Fitness</span>
                        <span className="text-blue-400">87% Complete</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full w-[87%]"></div>
                      </div>
                      
                      <div className="flex items-center justify-between text-white">
                        <span>Flexibility</span>
                        <span className="text-purple-400">72% Complete</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full w-[72%]"></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary rounded-full p-2">
                          <Target className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">Next Goal</div>
                          <div className="text-gray-300 text-sm">Increase bench press by 10kg</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Achievement Cards */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-primary to-orange-600 rounded-2xl p-4 shadow-xl animate-bounce" style={{
                animationDuration: '3s'
              }}>
                  <div className="flex items-center space-x-2">
                    <Award className="w-6 h-6 text-white" />
                    <div>
                      <div className="text-white font-bold text-sm">Achievement</div>
                      <div className="text-orange-100 text-xs">Weight Goal Reached!</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 shadow-xl animate-bounce" style={{
                animationDuration: '4s',
                animationDelay: '1s'
              }}>
                  <div className="flex items-center space-x-2">
                    <Heart className="w-6 h-6 text-white" />
                    <div>
                      <div className="text-white font-bold text-sm">Health Score</div>
                      <div className="text-green-100 text-xs">Excellent (98/100)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-600/20 rounded-3xl blur-2xl transform scale-110"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-50 to-orange-25 rounded-2xl p-8">
                <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
                <p className="text-gray-600 font-medium">Happy Members</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-50 to-orange-25 rounded-2xl p-8">
                <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Open Daily</h3>
                <p className="text-gray-600 font-medium">Until 9 PM</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-50 to-orange-25 rounded-2xl p-8">
                <CheckCircle className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
                <p className="text-gray-600 font-medium">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why We're Different?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets MZ Fitness Hub apart from other gyms in Rajkot
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Personalized Approach</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                No two members are the same. We create customized fitness plans based on your unique goals and body type.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Result-Oriented Training</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Every workout is designed with measurable outcomes in mind. Track your progress and celebrate achievements.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Holistic Wellness</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Beyond physical fitness, we focus on mental health, nutrition, and lifestyle changes for complete transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Training Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From beginner-friendly to advanced protocols
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100">
              <div className="bg-gradient-to-br from-red-400 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <User className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strength Training</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Build lean muscle and increase strength with progressive resistance training.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600">Beginner to Advanced levels</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600">Free weights & machines</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cardio & HIIT</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                High-intensity training to burn calories and improve cardiovascular health.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600">Fat burning protocols</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600">Metabolic conditioning</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Yoga & Flexibility</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Improve flexibility, balance, and mindfulness through guided sessions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600">Multiple yoga styles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600">Meditation & mindfulness</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holistic Health Services Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Holistic Health Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Physical, mental, and nutritional wellness solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Nutrition</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Personalized meal plans from certified nutritionists.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Wellness Coaching</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lifestyle coaching for sustainable healthy habits.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-3xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-500 to-violet-600 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Health Assessments</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive health screenings and evaluations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Recovery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Injury prevention and rehabilitation support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-orange-25 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Health Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the life-changing benefits of regular exercise and how it transforms your entire lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <Heart className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cardiovascular Health</h3>
              <p className="text-gray-600 leading-relaxed">
                Strengthen your heart, improve circulation, and reduce the risk of heart disease with regular exercise.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <Activity className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mental Wellness</h3>
              <p className="text-gray-600 leading-relaxed">
                Boost mood, reduce stress, and enhance mental clarity through endorphin-releasing exercise.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <Award className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strength & Mobility</h3>
              <p className="text-gray-600 leading-relaxed">
                Build lean muscle, improve bone density, and maintain flexibility for lifelong independence.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <Star className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Energy & Vitality</h3>
              <p className="text-gray-600 leading-relaxed">
                Boost metabolism and energy levels to feel more productive and confident throughout the day.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <BookOpen className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cognitive Function</h3>
              <p className="text-gray-600 leading-relaxed">
                Enhance memory, concentration, and learning ability while protecting against cognitive decline.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <Monitor className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Longevity</h3>
              <p className="text-gray-600 leading-relaxed">
                Add quality years to your life through regular exercise and healthy lifestyle choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">How MZ Fitnezz Hub Transforms Lives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach ensures lasting results through personalized guidance and expert support
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-primary/10 rounded-xl p-3">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Personal Training</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Certified trainers create customized workout plans with form corrections and progress tracking.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-primary/10 rounded-xl p-3">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Holistic Wellness Approach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nutritional guidance, lifestyle coaching, and mental wellness support for complete transformation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-primary/10 rounded-xl p-3">
                  <Activity className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Progressive Training Methods</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Cutting-edge techniques from HIIT to strength training, yoga to functional fitness.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-primary/10 rounded-xl p-3">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Supportive Community</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Join like-minded individuals in group challenges and celebrate milestones together.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-orange-50 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Success Journey</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-primary font-semibold mb-2">Week 1-2</div>
                    <p className="text-gray-600">Assessment, goal setting, and habit formation</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-primary font-semibold mb-2">Week 3-8</div>
                    <p className="text-gray-600">Progressive training and visible improvements</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-primary font-semibold mb-2">Week 9+</div>
                    <p className="text-gray-600">Transformation achieved and maintained</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-gradient-to-br from-gray-25 to-orange-25">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular fitness programs designed to deliver real, lasting results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-primary to-orange-600"></div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Strength Training</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Build lean muscle and increase strength with comprehensive weightlifting programs.
                </p>
                <button onClick={() => handleLearnMore(programs[0])} className="text-primary font-semibold hover:text-orange-700 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-orange-400 to-primary"></div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cardio Blast</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  High-intensity cardio workouts that burn calories and improve cardiovascular health.
                </p>
                <button onClick={() => handleLearnMore(programs[1])} className="text-primary font-semibold hover:text-orange-700 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-orange-300 to-orange-500"></div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Yoga & Mindfulness</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Find balance and flexibility through guided yoga sessions and meditation practices.
                </p>
                <button onClick={() => handleLearnMore(programs[2])} className="text-primary font-semibold hover:text-orange-700 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Training Benefits You'll Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience transformative results that improve your entire quality of life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-orange-25 to-orange-50 rounded-2xl p-8">
                <Activity className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Increased Energy Levels</h3>
                <p className="text-gray-600 leading-relaxed">
                  Feel more energetic throughout the day with improved cardiovascular health and enhanced muscle efficiency.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-25 to-orange-50 rounded-2xl p-8">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Enhanced Confidence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Build self-confidence as you achieve fitness goals and carry yourself with newfound pride.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-25 to-orange-50 rounded-2xl p-8">
                <Heart className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Better Sleep Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Enjoy deeper, more restorative sleep with improved recovery and rest.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-orange-25 to-orange-50 rounded-2xl p-8">
                <Star className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Stress Reduction</h3>
                <p className="text-gray-600 leading-relaxed">
                  Combat daily stress through physical activity that releases tension and promotes mental wellness.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-25 to-orange-50 rounded-2xl p-8">
                <BookOpen className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Improved Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  Enhance mental clarity and concentration for better productivity and cognitive function.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-25 to-orange-50 rounded-2xl p-8">
                <Monitor className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Long-term Health</h3>
                <p className="text-gray-600 leading-relaxed">
                  Invest in your future health by building habits that prevent chronic diseases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Join our community today and get access to world-class facilities, expert trainers, and personalized workout plans.
          </p>
          <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Program Modal */}
      <ProgramModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} program={selectedProgram} />

      <Footer />
    </div>;
};
export default Index;