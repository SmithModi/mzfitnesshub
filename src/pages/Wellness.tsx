import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Sparkles, Zap, Flower, Activity, Sun } from 'lucide-react';
import { GradientCard } from '../components/ui/gradient-card';

const Wellness = () => {
    useEffect(() => {
        document.title = "Wellness Services in Rajkot | MZ Fitness Hub";
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            title: "Facial Treatment",
            description: "Rejuvenate your skin with our premium facial treatments designed for a radiant glow.",
            ctaText: "Discover Treatments",
            ctaHref: "/facial-treatment-in-rajkot",
            imageUrl: "/services/facial-treatment.png",
            gradient: "green" as const,
            icon: Sparkles
        },
        {
            title: "Polishing",
            description: "Exfoliate and nourish your skin with our luxurious body polishing sessions.",
            ctaText: "Explore Polishing",
            ctaHref: "/polishing-in-rajkot",
            imageUrl: "/services/polishing.png",
            gradient: "green" as const,
            icon: Sun
        },
        {
            title: "MARM Therapy",
            description: "Experience ancient healing techniques to balance your body's energy points.",
            ctaText: "Learn About MARM",
            ctaHref: "/marm-therapy-in-rajkot",
            imageUrl: "/services/marm-therapy.png",
            gradient: "green" as const,
            icon: Flower
        },
        {
            title: "Body Shaping",
            description: "Sculpt your body and enhance your contours with our non-invasive shaping treatments.",
            ctaText: "View Options",
            ctaHref: "/body-shaping-in-rajkot",
            imageUrl: "/services/body-shaping.png",
            gradient: "green" as const,
            icon: Activity
        },
        {
            title: "Laser Treatment",
            description: "Advanced laser solutions for hair removal and skin rejuvenation.",
            ctaText: "See Treatments",
            ctaHref: "/laser-treatment-in-rajkot",
            imageUrl: "/services/laser-treatment.png",
            gradient: "green" as const,
            icon: Zap
        }
    ];

    return (
        <div className="min-h-screen bg-background font-serif">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 overflow-hidden">
                {/* Noisy Background */}
                <div className="absolute inset-0 bg-[#F9F9F9]">
                    <div
                        className="absolute inset-0 opacity-40"
                        style={{
                            backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJzIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNzKSIvPjwvc3ZnPg==")',
                            backgroundSize: '300px 300px',
                            mixBlendMode: 'multiply'
                        }}
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-5xl sm:text-6xl md:text-7xl font-normal text-gray-900 mb-6"
                    >
                        Holistic <span className="text-green-500">Wellness</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        Restore balance, rejuvenate your body, and enhance your natural beauty with our comprehensive wellness services.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="relative py-16 sm:py-20 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <GradientCard
                                    title={service.title}
                                    description={service.description}
                                    ctaText={service.ctaText}
                                    ctaHref={service.ctaHref}
                                    imageUrl={service.imageUrl}
                                    gradient={service.gradient}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Wellness;
