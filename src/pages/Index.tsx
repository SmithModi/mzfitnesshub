import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProgramModal from '../components/ProgramModal';
import DatabaseWithRestApi from '../components/ui/database-with-rest-api';
import { AppleActivityCard } from '../components/ui/apple-activity-ring';
import { Users, Clock, CheckCircle, Heart, Activity, Award, Star, BookOpen, Monitor, Zap, Target, User, Calendar, TrendingUp, Brain, Shield, Play, ArrowRight, Sparkles } from 'lucide-react';
import { useEffect } from 'react';
const Index = () => {
  // SEO optimization for homepage
  useEffect(() => {
    document.title = "MZ Fitnezz Hub - Best Gym in Rajkot | Premium Fitness Center Gujarat";

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
      "name": "MZ Fitnezz Hub - Best Medico Gym in Rajkot",
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
    {/* Hero Section */}
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center font-serif">
      {/* Background Gradient - Stronger Orange on Right */}
      {/* Background Gradient - Deep Black to Bright Orange with Purple Hints */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#100b14] to-orange-500 opacity-90"></div>

      {/* Additional Glow for depth */}
      <div className="absolute top-[-20%] right-[-20%] w-[70%] h-[90%] bg-orange-500/30 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-white space-y-8 z-10 max-w-2xl">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-tight">
                Your Ultimate <br />
                Fitness Pulse
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-lg font-light">
                AI-guided coaching and live feedback that adapts to your training. Every heartbeat, stride, and lift fuels smarter progress.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-white text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Right Visual Element - Tablet (Reduced Size & Minimalistic) */}
          <div className="relative flex justify-center lg:justify-end z-10 mt-10 lg:mt-0">
            <div className="relative w-[300px] h-[420px] md:w-[380px] md:h-[540px] rounded-[2.5rem] shadow-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500">
              {/* Tablet Screen */}
              <div className="absolute inset-0 bg-orange-500 overflow-hidden">
                <img src="/heroimg.png" alt="Fitness App Interface" className="w-full h-full object-cover" />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Tablet Reflection */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Why We're Different Section */}
    <section className="py-20 bg-[#F9F9F9] relative overflow-hidden font-serif">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJzIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNzKSIvPjwvc3ZnPg==")',
        backgroundSize: '300px 300px',
        mixBlendMode: 'multiply'
      }}></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why We're Different?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What sets MZ Fitness Hub apart from other gyms in Rajkot
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-3xl p-8 border border-gray-200 hover:border-orange-500 transition-all duration-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:-translate-y-2 shadow-md">
            {/* Card Background with Noise */}
            <div className="absolute inset-0 bg-[#F9F9F9]"></div>
            <div className="absolute inset-0 opacity-40" style={{
              backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJzIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNzKSIvPjwvc3ZnPg==")',
              backgroundSize: '300px 300px',
              mixBlendMode: 'multiply'
            }}></div>

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full border-2 border-orange-100 group-hover:border-orange-500 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all duration-500 bg-orange-50/50">
                <Zap className="h-10 w-10 text-orange-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-orange-600 transition-colors">Personalized Approach</h3>
              <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors">
                No two members are the same. We create customized fitness plans based on your unique goals and body type.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-3xl p-8 border border-gray-200 hover:border-orange-500 transition-all duration-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:-translate-y-2 shadow-md">
            {/* Card Background with Noise */}
            <div className="absolute inset-0 bg-[#F9F9F9]"></div>
            <div className="absolute inset-0 opacity-40" style={{
              backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJzIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNzKSIvPjwvc3ZnPg==")',
              backgroundSize: '300px 300px',
              mixBlendMode: 'multiply'
            }}></div>

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full border-2 border-orange-100 group-hover:border-orange-500 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all duration-500 bg-orange-50/50">
                <Target className="h-10 w-10 text-orange-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-orange-600 transition-colors">Result-Oriented Training</h3>
              <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors">
                Every workout is designed with measurable outcomes in mind. Track your progress and celebrate achievements.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-3xl p-8 border border-gray-200 hover:border-orange-500 transition-all duration-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:-translate-y-2 shadow-md">
            {/* Card Background with Noise */}
            <div className="absolute inset-0 bg-[#F9F9F9]"></div>
            <div className="absolute inset-0 opacity-40" style={{
              backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJzIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNzKSIvPjwvc3ZnPg==")',
              backgroundSize: '300px 300px',
              mixBlendMode: 'multiply'
            }}></div>

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full border-2 border-orange-100 group-hover:border-orange-500 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all duration-500 bg-orange-50/50">
                <Heart className="h-10 w-10 text-orange-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-orange-600 transition-colors">Holistic Wellness</h3>
              <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors">
                Beyond physical fitness, we focus on mental health, nutrition, and lifestyle changes for complete transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Training Categories Section */}
    <section className="py-20 bg-[#F9F9F9] relative overflow-hidden font-serif">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJzIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNzKSIvPjwvc3ZnPg==")',
        backgroundSize: '300px 300px',
        mixBlendMode: 'multiply'
      }}></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Training Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From beginner-friendly to advanced protocols
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Strength Training */}
          <div className="group relative overflow-hidden rounded-3xl p-8 border border-gray-200 hover:border-orange-500 transition-all duration-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:-translate-y-2 shadow-md">
            {/* Card Background with Noise */}
            <div className="absolute inset-0 bg-[#F9F9F9]"></div>
            <div className="absolute inset-0 opacity-40" style={{
              backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJzIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNzKSIvPjwvc3ZnPg==")',
              backgroundSize: '300px 300px',
              mixBlendMode: 'multiply'
            }}></div>

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full border-2 border-orange-100 group-hover:border-orange-500 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all duration-500 bg-orange-50/50">
                <User className="h-10 w-10 text-orange-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-orange-600 transition-colors">Strength Training</h3>
              <p className="text-gray-600 text-center leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                Build lean muscle and increase strength with progressive resistance training.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">Beginner to Advanced levels</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">Free weights & machines</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Cardio & HIIT */}
          <div className="group relative overflow-hidden rounded-3xl p-8 border border-gray-200 hover:border-orange-500 transition-all duration-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:-translate-y-2 shadow-md">
            {/* Card Background with Noise */}
            <div className="absolute inset-0 bg-[#F9F9F9]"></div>
            <div className="absolute inset-0 opacity-40" style={{
              backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJzIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNzKSIvPjwvc3ZnPg==")',
              backgroundSize: '300px 300px',
              mixBlendMode: 'multiply'
            }}></div>

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full border-2 border-orange-100 group-hover:border-orange-500 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all duration-500 bg-orange-50/50">
                <Heart className="h-10 w-10 text-orange-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-orange-600 transition-colors">Cardio & HIIT</h3>
              <p className="text-gray-600 text-center leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                High-intensity training to burn calories and improve cardiovascular health.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">Fat burning protocols</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">Metabolic conditioning</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Yoga & Flexibility */}
          <div className="group relative overflow-hidden rounded-3xl p-8 border border-gray-200 hover:border-orange-500 transition-all duration-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:-translate-y-2 shadow-md">
            {/* Card Background with Noise */}
            <div className="absolute inset-0 bg-[#F9F9F9]"></div>
            <div className="absolute inset-0 opacity-40" style={{
              backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJzIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNzKSIvPjwvc3ZnPg==")',
              backgroundSize: '300px 300px',
              mixBlendMode: 'multiply'
            }}></div>

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full border-2 border-orange-100 group-hover:border-orange-500 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all duration-500 bg-orange-50/50">
                <Target className="h-10 w-10 text-orange-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-orange-600 transition-colors">Yoga & Flexibility</h3>
              <p className="text-gray-600 text-center leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                Improve flexibility, balance, and mindfulness through guided sessions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">Multiple yoga styles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">Meditation & mindfulness</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* Your Fitness Journey Section */}
    <section className="py-12 bg-[#F9F9F9] relative overflow-hidden font-serif">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJzIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNzKSIvPjwvc3ZnPg==")',
        backgroundSize: '300px 300px',
        mixBlendMode: 'multiply'
      }}></div>

      {/* Gradient Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-1">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            Your Holistic Fitness Journey
          </h2>
        </div>

        {/* Main Animation Component - Enlarged and Centered */}
        <div className="flex justify-center items-center py-12">
          
          <div className="relative transform scale-110 md:scale-125 lg:scale-150">
            {/* Decorative circles around component */}
            <div className="absolute -top-8 -left-8 w-16 h-16 border-2 border-orange-200/30 rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 w-12 h-12 border-2 border-orange-200/30 rounded-full"></div>

            <DatabaseWithRestApi
              logoUrl="/logo.png"
              className=""
              circleText="MZ"
              badgeTexts={{
                first: "Train",
                second: "Nourish",
                third: "Recover",
                fourth: "Transform"
              }}
              buttonTexts={{
                first: "MZ Fitness",
                second: "Your Path"
              }}
              title="Comprehensive wellness through integrated training systems"
              lightColor="#F97316"
            />
          </div>
        </div>


        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-4">
            Ready to experience the complete transformation system?
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold text-base hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span>Start Your Journey</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>

    {/* Training Benefits Section - Apple Activity Rings */}
    <section className="py-20 bg-[#F9F9F9] relative overflow-hidden font-serif">
            <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJzIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNzKSIvPjwvc3ZnPg==")',
        backgroundSize: '300px 300px',
        mixBlendMode: 'multiply'
      }}></div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Weekly Fitness Goals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track your progress across strength, cardio, and flexibility training
          </p>
        </div>

        <AppleActivityCard title="This Week's Progress" className="bg-[#F9F9F9]" />
      </div>
    </section>

    {/* Program Modal */}
    < ProgramModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} program={selectedProgram} />

    <Footer />
  </div >;
};

export default Index;
