import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Dumbbell, Flame, Flower, Music, Activity } from 'lucide-react';
import { GradientCard } from '../components/ui/gradient-card';

const FloorTraining = () => {
    useEffect(() => {
        document.title = "Floor Training in Rajkot | MZ Fitness Hub";
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            title: "Functional Training",
            description: "Train your body for daily life activities with our comprehensive functional training programs.",
            ctaText: "Explore Functional",
            ctaHref: "/functional-training-in-rajkot",
            imageUrl: "/services/functional-training.png",
            gradient: "orange" as const,
            icon: Activity
        },
        {
            title: "CrossFit",
            description: "High-intensity functional movements performed at high intensity to boost your fitness.",
            ctaText: "Explore CrossFit",
            ctaHref: "/crossfit-in-rajkot",
            imageUrl: "/services/crossfit.png",
            gradient: "pink" as const,
            icon: Flame
        },
        {
            title: "Yoga",
            description: "Find your balance and inner peace with our expert-led yoga sessions.",
            ctaText: "Explore Yoga",
            ctaHref: "/yoga-in-rajkot",
            imageUrl: "/services/yoga.png",
            gradient: "purple" as const,
            icon: Flower
        },
        {
            title: "Zumba",
            description: "Dance your way to fitness with our energetic and fun Zumba classes.",
            ctaText: "Join Zumba",
            ctaHref: "/zumba-in-rajkot",
            imageUrl: "/services/zumba.png",
            gradient: "green" as const,
            icon: Music
        },
        {
            title: "Strength Training",
            description: "Build raw power and muscle mass in our dedicated strength training zone.",
            ctaText: "Explore Strength",
            ctaHref: "/floor-strength-training-in-rajkot",
            imageUrl: "/services/strength.png", // Reusing strength image for now
            gradient: "blue" as const,
            icon: Dumbbell
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
                        Dynamic <span className="text-orange-500">Floor Training</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        Engage in diverse training disciplines designed to enhance your mobility, strength, and overall wellness.
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

export default FloorTraining;
