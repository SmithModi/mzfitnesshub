import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, Users, Clock, Calendar, Trophy, Zap, Heart, Shield, Target, Star } from 'lucide-react';
const WhyJoin = () => {
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              Why Choose <span className="text-yellow-400">MZ Fitness Hub?</span>
            </h1>
            <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed opacity-90 px-2 md:text-lg font-semibold">
              Discover the MZ Fitness Hub difference - where cutting-edge facilities meet personalized care and community support.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
              Unmatched Benefits
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Everything you need to succeed in your fitness journey, all under one roof
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {/* Left Column */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">State-of-the-Art Equipment</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Latest fitness technology and premium equipment maintained to the highest standards for optimal performance and safety.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">Expert Personal Trainers</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Certified professionals with years of experience who create personalized workout plans tailored to your goals and fitness level.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">Flexible Timings</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Work out on your schedule with extended hours from 6 AM to 9 PM, perfect for busy lifestyles.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-orange-100 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                  <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">Proven Results</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Join hundreds of successful transformations with our evidence-based training methodologies and nutritional guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-100 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">Diverse Class Schedule</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Over 50 weekly classes including yoga, HIIT, Zumba, strength training, and specialized programs for all fitness levels.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-red-100 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">Nutrition Guidance</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Comprehensive nutrition counseling and meal planning services to complement your fitness routine and maximize results.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">Supportive Community</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Join a welcoming community of like-minded individuals who motivate and support each other's fitness journeys.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-teal-100 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">Clean & Safe Environment</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Sanitized equipment, spacious workout areas, and strict safety protocols ensure a worry-free fitness experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">Why We're Different?</h2>
            <p className="text-base sm:text-lg text-gray-600 px-2">What sets MZ Fitness Hub apart from other gyms in Rajkot</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg text-center">
              <div className="bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-tight">Personalized Approach</h3>
              <p className="text-gray-600 text-sm leading-relaxed">No two members are the same. We create customized fitness plans based on your unique goals and body type.</p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg text-center">
              <div className="bg-green-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Target className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-tight">Result-Oriented Training</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Every workout is designed with measurable outcomes in mind. Track your progress and celebrate achievements.</p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg text-center sm:col-span-2 md:col-span-1">
              <div className="bg-purple-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-tight">Holistic Wellness</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Beyond physical fitness, we focus on mental health, nutrition, and lifestyle changes for complete transformation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
              Membership Options
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Choose the plan that fits your lifestyle and goals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">Basic</h3>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">₹2999<span className="text-sm sm:text-base font-normal text-gray-600">/month</span></div>
                <p className="text-gray-600 text-sm">Perfect for getting started</p>
              </div>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Gym access during all hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Cardio & strength equipment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Locker room access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Free fitness assessment</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors text-sm">
                Choose Basic
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 md:transform md:hover:-translate-y-1">
              <div className="text-center mb-4 sm:mb-6">
                <div className="bg-yellow-400 text-gray-900 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold mb-2 sm:mb-3 inline-block">
                  Most Popular
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">Premium</h3>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">₹4999<span className="text-sm sm:text-base font-normal text-purple-100">/month</span></div>
                <p className="text-purple-100 text-sm">Complete fitness experience</p>
              </div>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-white">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Everything in Basic</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Unlimited group classes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">2 personal training sessions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Nutrition consultation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Guest passes (2/month)</span>
                </li>
              </ul>
              <button className="w-full bg-white text-purple-600 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors text-sm">
                Choose Premium
              </button>
            </div>

            {/* Elite Plan */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 sm:col-span-2 md:col-span-1">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">Elite</h3>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">₹7999<span className="text-sm sm:text-base font-normal text-gray-600">/month</span></div>
                <p className="text-gray-600 text-sm">Ultimate transformation</p>
              </div>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Everything in Premium</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Weekly personal training</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Custom meal plans</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Priority class booking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Unlimited guest passes</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors text-sm">
                Choose Elite
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
              Success Stories
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Real transformations from real people in our MZ Fitness Hub community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-full w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3"></div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-tight">Priya Sharma</h3>
              <p className="text-gray-600 mb-2 sm:mb-3 text-sm leading-relaxed">
                "Lost 25 kg in 8 months! The trainers here are incredible and the community support kept me motivated every step of the way."
              </p>
              <div className="flex items-center space-x-1 mb-1 sm:mb-2">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />)}
              </div>
              <div className="text-xs text-blue-600 font-semibold">Member for 10 months</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-full w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3"></div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-tight">Rahul Patel</h3>
              <p className="text-gray-600 mb-2 sm:mb-3 text-sm leading-relaxed">
                "Gained 15 kg muscle mass and achieved my bodybuilding goals! The variety of equipment and expert coaching made all the difference."
              </p>
              <div className="flex items-center space-x-1 mb-1 sm:mb-2">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />)}
              </div>
              <div className="text-xs text-green-600 font-semibold">Member for 1.5 years</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-full w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3"></div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-tight">Jiya Soni</h3>
              <p className="text-gray-600 mb-2 sm:mb-3 text-sm leading-relaxed">
                "Improved my overall health and fitness after pregnancy. The nutrition guidance and yoga classes were exactly what I needed."
              </p>
              <div className="flex items-center space-x-1 mb-1 sm:mb-2">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />)}
              </div>
              <div className="text-xs text-purple-600 font-semibold">Member for 6 months</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default WhyJoin;