import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Clock, CheckCircle, Heart, Target, Award, Zap, Shield, Star, TrendingUp } from 'lucide-react';
const About = () => {
  useEffect(() => {
    document.title = "About MZ Fitness Hub - Best Gym in Rajkot | Our Story & Mission";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about MZ Fitness Hub - Rajkot\'s premier fitness center. Discover our mission, expert trainers, state-of-the-art facilities, and commitment to transforming lives through fitness in Gujarat.');
    }
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About MZ Fitness Hub",
      "description": "Learn about Rajkot's premier fitness center and our commitment to health transformation",
      "url": "https://mzfitnezz.in/about",
      "mainEntity": {
        "@type": "Gym",
        "name": "MZ Fitness Hub",
        "description": "Premier fitness center in Rajkot with expert trainers and modern facilities",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1st Floor, Anant Chaya Complex, Amin Marg",
          "addressLocality": "Rajkot",
          "addressRegion": "Gujarat",
          "postalCode": "360001",
          "addressCountry": "IN"
        }
      }
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary to-orange-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-orange-200">MZ Fitness Hub</span> - Rajkot's Premier Fitness Center
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-90 font-bold">
              Rajkot's premier fitness destination where transformation meets dedication. We're more than a gym - we're your fitness family.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-base text-gray-600 mb-4 leading-relaxed">
                Located in the heart of Rajkot at Anant Chaya Complex, MZ Fitness Hub was born from a passion to transform lives through fitness. 
                We recognized that Rajkot needed a fitness center that combined world-class equipment with personalized attention and a supportive community.
              </p>
              <p className="text-base text-gray-600 mb-4 leading-relaxed">
                Our mission is simple: to make fitness accessible, enjoyable, and sustainable for everyone in Rajkot and beyond. 
                Whether you're a beginner taking your first step into fitness or an athlete looking to reach new heights, we provide the guidance, 
                support, and environment you need to succeed.
              </p>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Health & Wellness First</h4>
                  <p className="text-gray-600 text-sm">Every decision we make prioritizes your health and well-being</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-orange-600 rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center text-white">
                <Award className="h-12 w-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Excellence in Fitness</h3>
                <p className="text-base opacity-90">Transforming lives in Rajkot since 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Impact</h2>
            <p className="text-lg text-gray-600">Numbers that speak for our commitment</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center bg-white rounded-xl p-6 shadow-sm">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-gray-600 text-sm">Happy Members</div>
            </div>
            
            <div className="text-center bg-white rounded-xl p-6 shadow-sm">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">95%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
            
            <div className="text-center bg-white rounded-xl p-6 shadow-sm">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-gray-600 text-sm">Awards Won</div>
            </div>
            
            <div className="text-center bg-white rounded-xl p-6 shadow-sm">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">4.9</div>
              <div className="text-gray-600 text-sm">Google Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What We Stand For ?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core values shape every interaction and guide our commitment to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600 text-sm">
                  Building a supportive fitness family where everyone motivates and celebrates each other's progress.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  Maintaining the highest standards in equipment, training methods, and customer service.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Results-Driven</h3>
                <p className="text-gray-600 text-sm">
                  Focused on helping you achieve real, measurable results through proven methods and dedication.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Safety First</h3>
                <p className="text-gray-600 text-sm">
                  Ensuring a safe, clean, and supportive environment for all fitness levels and abilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What Makes Us Different ?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-bold">
              Discover why MZ Fitness Hub is Rajkot's preferred choice for fitness transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="bg-orange-100 p-2 rounded-full flex-shrink-0">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Personalized Training</h3>
                  <p className="text-gray-600 text-sm">
                    Every member gets a customized fitness plan based on their goals, fitness level, and preferences. 
                    No cookie-cutter approaches here.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                  <Heart className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Holistic Wellness</h3>
                  <p className="text-gray-600 text-sm">
                    We focus on complete wellness - combining strength training, cardio, nutrition guidance, 
                    and mental well-being for lasting transformation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-full flex-shrink-0">
                  <Clock className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Hours</h3>
                  <p className="text-gray-600 text-sm">
                    Open daily until 9 PM to accommodate your busy schedule. 
                    We believe fitness should fit into your life, not the other way around.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Commitment to You</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Clean, well-maintained equipment and facilities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Qualified and certified fitness professionals</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Progress tracking and regular assessments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Nutritional guidance and meal planning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Motivational support throughout your journey</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Flexible membership options to suit your needs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Training Philosophy</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At MZ Fitness Hub, we believe in sustainable, science-based approaches to fitness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Goal-Oriented</h3>
              <p className="text-gray-600 text-sm">
                Every workout is designed with your specific goals in mind. Whether it's weight loss, muscle gain, 
                or improved health, we create a clear path to success.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Progressive Training</h3>
              <p className="text-gray-600 text-sm">
                We gradually increase intensity and complexity as you get stronger, ensuring continuous improvement 
                while preventing injury and burnout.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sustainable Results</h3>
              <p className="text-gray-600 text-sm">
                We focus on building lasting habits and lifestyle changes rather than quick fixes, 
                ensuring your results stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;