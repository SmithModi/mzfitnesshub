import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Activity, UserCheck, Home } from 'lucide-react';
import { GradientCard } from '../components/ui/gradient-card';

const Physio = () => {
    useEffect(() => {
        document.title = "Physiotherapy Services in Rajkot | MZ Fitness Hub";
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            title: "Pain Management",
            description: "Advanced pain relief techniques and therapeutic interventions to help you live pain-free.",
            ctaText: "Learn More",
            ctaHref: "/pain-management-in-rajkot",
            imageUrl: "/services/pain-management.png",
            gradient: "orange" as const,
            icon: Heart
        },
        {
            title: "Rehab Exercises",
            description: "Customized rehabilitation programs to restore strength, mobility, and function.",
            ctaText: "Explore Program",
            ctaHref: "/rehab-exercises-in-rajkot",
            imageUrl: "/services/rehab-exercises.png",
            gradient: "orange" as const,
            icon: Activity
        },
        {
            title: "Consulting",
            description: "Expert physiotherapy consultation and personalized treatment plans for your recovery.",
            ctaText: "Book Consultation",
            ctaHref: "/consulting-in-rajkot",
            imageUrl: "/services/consulting.png",
            gradient: "orange" as const,
            icon: UserCheck
        },
        {
            title: "Home Visits",
            description: "Convenient at-home physiotherapy services bringing professional care to your doorstep.",
            ctaText: "Schedule Visit",
            ctaHref: "/home-visits-in-rajkot",
            imageUrl: "/services/home-visits.png",
            gradient: "orange" as const,
            icon: Home
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
                        Professional <span className="text-orange-500">Physiotherapy</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        Expert physiotherapy services designed to restore movement, reduce pain, and enhance your quality of life.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="relative py-16 sm:py-20 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
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

export default Physio;
