import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Clock, Phone, Users, Heart, Award } from 'lucide-react';

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

    const whatsappMessage = `Hi MZ Fitness Hub! I'm interested in your services.

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Interest:* ${formData.subject}

*Message:*
${formData.message}

Please get back to me with more details. Thank you!`;

    const phoneNumber = "+919909303109";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-background font-serif">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-[#F9F9F9] overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJzIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNzKSIvPjwvc3ZnPg==")',
            backgroundSize: '300px 300px',
            mixBlendMode: 'multiply'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 mb-6">
              Get In <span className="text-orange-500">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-600">
              Ready to transform your life at MZ Fitness Hub? We're here to guide you every step of your fitness journey in Rajkot.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="relative py-20 bg-[#F9F9F9] overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJzIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNzKSIvPjwvc3ZnPg==")',
            backgroundSize: '300px 300px',
            mixBlendMode: 'multiply'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">Visit MZ Fitness Hub</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Located in the heart of Rajkot, Gujarat, MZ Fitness Hub is your premier destination for fitness transformation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-600">1st Floor, Anant Chaya Complex</p>
                    <p className="text-gray-600">Amin Marg, above US Catalog</p>
                    <p className="text-gray-600">Rajkot, Gujarat 360001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us Today</h3>
                    <p className="text-gray-600">099093 03109</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Operating Hours</h3>
                    <p className="text-gray-600">Open Daily • Closes 9 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Contact Form */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-5">Start Your Fitness Journey</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="99999 99999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-gray-700 mb-1">I'm Interested In *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  >
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

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">Your Goals *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Share your fitness goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-orange-600 text-white py-3 rounded-lg font-semibold text-base hover:from-orange-700 hover:to-orange-800 transition-all shadow-lg mt-2"
                >
                  Send to WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MZ Fitness Hub */}
      <section className="relative py-20 bg-[#F9F9F9] overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJzIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNzKSIvPjwvc3ZnPg==")',
            backgroundSize: '300px 300px',
            mixBlendMode: 'multiply'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">Why Choose MZ Fitness Hub?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference at Rajkot's premier fitness destination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Expert Guidance', desc: 'Our certified trainers provide personalized attention to help you achieve your fitness goals safely and effectively.', bg: 'bg-orange-100', color: 'text-primary' },
              { icon: Heart, title: 'Health First', desc: 'We prioritize your overall wellness with comprehensive health assessments and holistic fitness approaches.', bg: 'bg-green-100', color: 'text-green-600' },
              { icon: Award, title: 'Proven Results', desc: 'Join hundreds of satisfied members who have transformed their lives at MZ Fitness Hub in Rajkot.', bg: 'bg-purple-100', color: 'text-purple-600' }
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="text-center bg-white rounded-3xl p-8 shadow-md">
                  <div className={`${item.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;