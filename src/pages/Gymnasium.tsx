import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Dumbbell, Heart, Users, Timer } from 'lucide-react';
import { GradientCard } from '../components/ui/gradient-card';

const Gymnasium = () => {
    useEffect(() => {
        document.title = "Gymnasium in Rajkot | MZ Fitness Hub";
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            title: "Strength Training",
            description: "Build muscle and increase power with our state-of-the-art free weights and resistance machines.",
            ctaText: "Explore Strength",
            ctaHref: "/strength-training-in-rajkot",
            imageUrl: "/services/strength.png", // Placeholder, will use generic if not found
            gradient: "orange" as const,
            icon: Dumbbell
        },
        {
            title: "Cardio Training",
            description: "Boost your endurance and heart health with our premium range of treadmills, ellipticals, and bikes.",
            ctaText: "Explore Cardio",
            ctaHref: "/cardio-training-in-rajkot",
            imageUrl: "/services/cardio.png",
            gradient: "pink" as const,
            icon: Heart
        },
        {
            title: "Personal Training",
            description: "Achieve your goals faster with 1-on-1 coaching from our certified fitness experts.",
            ctaText: "Meet Trainers",
            ctaHref: "/personal-training-in-rajkot",
            imageUrl: "/services/personal-training.png",
            gradient: "purple" as const,
            icon: Users
        },
        {
            title: "Group Classes",
            description: "Join our high-energy group sessions for a fun and motivating workout experience.",
            ctaText: "View Schedule",
            ctaHref: "/group-classes-in-rajkot",
            imageUrl: "/services/group-classes.png",
            gradient: "green" as const,
            icon: Timer
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
                        World-Class <span className="text-orange-500">Gymnasium</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        Experience the finest fitness facilities in Rajkot, designed to help you push your limits and achieve extraordinary results.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="relative py-16 sm:py-20 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
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

export default Gymnasium;
