// SEO utility functions for MZ Fitness Hub

export const updatePageTitle = (title: string) => {
  document.title = title.includes('MZ Fitness Hub') ? title : `${title} | MZ Fitness Hub - Best Gym in Rajkot`;
};

export const updateMetaDescription = (description: string) => {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }
};

export const addStructuredData = (data: any) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
  return script;
};

export const removeStructuredData = (script: HTMLScriptElement) => {
  if (script && script.parentNode) {
    script.parentNode.removeChild(script);
  }
};

// Common schema data for MZ Fitness Hub
export const getGymSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Gym",
  "name": "MZ Fitness Hub",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1st Floor, Anant Chaya Complex, Amin Marg, above US Catalog",
    "addressLocality": "Harihar Society, Kotecha Nagar, Rajkot",
    "addressRegion": "Gujarat",
    "postalCode": "360001",
    "addressCountry": "IN"
  },
  "telephone": "+91-99093-03109",
  "url": "https://mzfitnezz.in",
  "openingHours": "Mo-Su 06:00-21:00",
  "priceRange": "₹₹",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "162",
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasMap": "https://search.google.com/local/writereview?placeid=ChIJp8jtjTvKWTkRCNkcJuxhTSk"
});

// SEO keywords for different pages
export const SEO_KEYWORDS = {
  homepage: "gym in rajkot, fitness center rajkot, best gym rajkot, MZ Fitness Hub, personal training rajkot, weight loss rajkot, strength training rajkot, group fitness classes rajkot, nutrition coaching rajkot, gujarat gym",
  about: "about MZ Fitness Hub, rajkot gym story, fitness center history, gym mission rajkot, best gym gujarat, fitness transformation rajkot",
  training: "personal training rajkot, fitness programs rajkot, strength training, cardio workouts, yoga classes rajkot, group fitness, training programs gujarat",
  contact: "contact gym rajkot, MZ Fitness Hub location, gym membership inquiry rajkot, fitness center address rajkot, gym phone number gujarat",
  services: "gym services rajkot, fitness services, personal training services, nutrition coaching, fitness consultation rajkot",
  health: "health fitness rajkot, nutrition guidance, wellness programs, diet planning rajkot, health transformation gujarat"
};