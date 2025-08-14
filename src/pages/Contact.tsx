import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Mail, Clock, Phone, Users, Heart, Target, Award } from 'lucide-react';
const Contact = () => {
  useEffect(() => {
    document.title = "Contact MZ Fitness Hub - Best Gym in Rajkot | Location & Membership Inquiry";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact MZ Fitness Hub Rajkot for gym membership, personal training, and fitness programs. Located at Anant Chaya Complex, Amin Marg. Call +91-99093-03109 for best fitness center in Gujarat.');
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact MZ Fitness Hub",
      "description": "Get in touch with Rajkot's premier fitness center for membership inquiries and fitness consultations",
      "url": "https://mzfitnezz.in/contact",
      "mainEntity": {
        "@type": "Gym",
        "name": "MZ Fitness Hub",
        "telephone": "+91-99093-03109",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1st Floor, Anant Chaya Complex, Amin Marg, above US Catalog",
          "addressLocality": "Harihar Society, Kotecha Nagar, Rajkot",
          "addressRegion": "Gujarat",
          "postalCode": "360001",
          "addressCountry": "IN"
        },
        "openingHours": "Mo-Su 06:00-21:00",
        "hasMap": "https://search.google.com/local/writereview?placeid=ChIJp8jtjTvKWTkRCNkcJuxhTSk"
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Create WhatsApp message with form data
    const whatsappMessage = `Hi MZ Fitness Hub! I'm interested in your services.

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Interest:* ${formData.subject}

*Message:*
${formData.message}

Please get back to me with more details. Thank you!`;

    // WhatsApp number for MZ Fitness Hub
    const phoneNumber = "+919909303109";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };
  return <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="text-orange-200">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Ready to transform your life at MZ Fitness Hub? We're here to guide you every step of your fitness journey in Rajkot.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Visit MZ Fitness Hub</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Located in the heart of Rajkot, Gujarat, MZ Fitness Hub is your premier destination for fitness transformation. 
                Whether you're starting your fitness journey or looking to reach new heights, our expert team is ready to help you achieve your goals.
              </p>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-600">1st Floor, Anant Chaya Complex</p>
                    <p className="text-gray-600">Amin Marg, above US Catalog</p>
                    <p className="text-gray-600">Harihar Society, Kotecha Nagar</p>
                    <p className="text-gray-600">Rajkot, Gujarat 360001</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us Today</h3>
                    <p className="text-gray-600">099093 03109</p>
                    <p className="text-sm text-primary mt-1">Available during gym hours for instant support</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Operating Hours</h3>
                    <p className="text-gray-600">Open Daily • Closes 9 PM</p>
                    <p className="text-sm text-primary mt-1">Flexible hours to fit your busy schedule</p>
                  </div>
                </div>

                {/* Email */}
                
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Your Fitness Journey</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" placeholder="Enter your full name" />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" placeholder="your@email.com" />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" placeholder="99999 99999" />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    I'm Interested In *
                  </label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200">
                    <option value="">Select your interest</option>
                    <option value="membership">Gym Membership Plans</option>
                    <option value="tour">Facility Tour & Visit</option>
                    <option value="training">Personal Training Sessions</option>
                    <option value="classes">Group Fitness Classes</option>
                    <option value="nutrition">Nutrition Guidance</option>
                    <option value="weight-loss">Weight Loss Programs</option>
                    <option value="strength">Strength Training</option>
                    <option value="other">Other Inquiries</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell Us About Your Goals *
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none" placeholder="Share your fitness goals, current fitness level, or any specific questions you have about our programs..."></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-gradient-to-r from-primary to-orange-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-orange-700 hover:to-orange-800 transition-all duration-200 shadow-lg">
                  Send to WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MZ Fitness Hub */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MZ Fitness Hub?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference at Rajkot's premier fitness destination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-3xl p-8 shadow-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Guidance</h3>
              <p className="text-gray-600">
                Our certified trainers provide personalized attention to help you achieve your fitness goals safely and effectively.
              </p>
            </div>

            <div className="text-center bg-white rounded-3xl p-8 shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Health First</h3>
              <p className="text-gray-600">
                We prioritize your overall wellness with comprehensive health assessments and holistic fitness approaches.
              </p>
            </div>

            <div className="text-center bg-white rounded-3xl p-8 shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Join hundreds of satisfied members who have transformed their lives at MZ Fitness Hub in Rajkot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about MZ Fitness Hub
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer trial sessions?</h3>
              <p className="text-gray-600">
                Yes! We offer trial sessions so you can experience our facilities and training methods before committing to a membership. Call us at 099093 03109 to schedule your trial.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What should I bring for my first visit?</h3>
              <p className="text-gray-600">
                Bring comfortable workout clothes, athletic shoes, a water bottle, and a towel. We provide guidance on proper equipment and have everything you need to get started.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide nutrition guidance?</h3>
              <p className="text-gray-600">
                Absolutely! Our trainers provide comprehensive nutrition guidance tailored to your fitness goals, whether it's weight loss, muscle gain, or overall health improvement.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What are your membership options?</h3>
              <p className="text-gray-600">
                We offer flexible membership plans including monthly, quarterly, and annual options. Contact us to discuss the best plan that fits your schedule and budget.
              </p>
            </div>
          </div>

          {/* FAQ Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Do you offer trial sessions at MZ Fitness Hub?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We offer trial sessions so you can experience our facilities and training methods before committing to a membership. Call us at +91-99093-03109 to schedule your trial."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "What should I bring for my first visit to the gym?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Bring comfortable workout clothes, athletic shoes, a water bottle, and a towel. We provide guidance on proper equipment and have everything you need to get started."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide nutrition guidance at MZ Fitness Hub?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! Our trainers provide comprehensive nutrition guidance tailored to your fitness goals, whether it's weight loss, muscle gain, or overall health improvement."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are your membership options?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer flexible membership plans including monthly, quarterly, and annual options. Contact us to discuss the best plan that fits your schedule and budget."
                  }
                }
              ]
            })}
          </script>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;