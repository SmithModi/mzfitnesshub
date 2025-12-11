
import React, { useState } from 'react';
import { Star, X } from 'lucide-react';

const GlobalPopups = () => {
  const [showReviewPopup, setShowReviewPopup] = useState(false);

  const handleWhatsAppClick = () => {
    // Updated WhatsApp number for MZ Fitness Hub
    const phoneNumber = "+919909303109";
    const message = "Hi! I'm interested in MZ Fitness Hub membership. Can you provide more details?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleGoogleReviewClick = () => {
    // Updated Google Business review URL
    const googleReviewUrl = "https://search.google.com/local/writereview?placeid=ChIJp8jtjTvKWTkRCNkcJuxhTSk";
    window.open(googleReviewUrl, '_blank');
    setShowReviewPopup(false);
  };

  return (
    <>
      {/* WhatsApp Button - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="transition-all duration-300 transform hover:scale-110"
          aria-label="Contact us on WhatsApp"
        >
          <img src="/lovable-uploads/whatsappicon.webp" alt="WhatsApp" className="h-16 w-16" />
        </button>
      </div>

      {/* Google Review Button - Bottom Left */}
      <div className="fixed bottom-9 left-6 z-50">
        <button
          onClick={() => window.open("https://search.google.com/local/writereview?placeid=ChIJp8jtjTvKWTkRCNkcJuxhTSk", '_blank')}
          className="transition-all duration-300 transform hover:scale-110"
          aria-label="Leave us a Google Review"
        >
          <img src="/lovable-uploads/f7372f84-8ae6-4d3c-ab38-8a61644ab59c.png" alt="Google Reviews" className="h-10 w-10" />
        </button>
      </div>

      {/* Google Review Popup */}
      {showReviewPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-sm w-full mx-4 relative shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-[#4285F4] rounded-sm flex items-center justify-center">
                  <span className="text-white text-sm font-bold">G</span>
                </div>
                <span className="text-gray-800 font-medium">Google Reviews</span>
              </div>
              <button
                onClick={() => setShowReviewPopup(false)}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Star Rating */}
              <div className="flex items-center space-x-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-600 font-medium">5.0</span>
              </div>

              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                At MZ Fitness Hub, our expert team provides premium fitness training and wellness services. We pride ourselves on quality coaching and member satisfaction. Share your experience with us!
              </p>

              {/* Action Button */}
              <button
                onClick={handleGoogleReviewClick}
                className="w-full bg-[#4285F4] hover:bg-[#3367D6] text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Star className="h-4 w-4" />
                <span>Leave a Review</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GlobalPopups;
