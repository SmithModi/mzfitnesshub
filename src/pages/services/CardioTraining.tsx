import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Heart, CheckCircle2, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const CardioTraining = () => {
    useEffect(() => {
        document.title = "Cardio Training in Rajkot | MZ Fitness Hub";
        window.scrollTo(0, 0);
    }, []);

    const features = [
        "Advanced Treadmills",
        "Elliptical Cross Trainers",
        "Upright & Recumbent Bikes",
        "Rowing Machines",
        "Heart Rate Monitoring",
        "Entertainment Consoles"
    ];

    return (
        <div className="min-h-screen bg-[#F9F9F9] font-serif relative">
            {/* Consistent Noisy Background Layer */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 opacity-40" style={{
                    backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJzIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNzKSIvPjwvc3ZnPg==")',
                    backgroundSize: '300px 300px',
                    mixBlendMode: 'multiply'
                }}></div>
            </div>

            <div className="relative z-10">
                <Header />

                {/* Hero Section */}
                <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50/50 text-orange-700 text-sm font-medium mb-8 backdrop-blur-sm">
                                    <Heart className="w-4 h-4 mr-2" />
                                    Heart Health
                                </div>
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal text-gray-900 mb-8 leading-[1.1]">
                                    Advanced <span className="text-orange-500 italic">Cardio</span> <br /> Training
                                </h1>
                                <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                                    Elevate your endurance and burn calories effectively with our comprehensive range of modern cardio equipment.
                                </p>
                                <div className="flex flex-wrap gap-5">
                                    <Link to="/contact" className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/25">
                                        Start Training
                                    </Link>
                                    <Link to="/gymnasium-in-rajkot" className="px-8 py-4 bg-transparent border border-gray-300 text-gray-900 rounded-full font-medium hover:bg-white hover:border-gray-400 transition-all duration-300">
                                        Back to Gymnasium
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="relative lg:h-[600px] flex items-center justify-center"
                            >
                                <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-full rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                                    {/* Placeholder for actual image */}
                                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white/20 group">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                                        <Activity className="w-32 h-32 relative z-10 opacity-50" strokeWidth={1} />
                                    </div>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl"></div>
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Features Section - Minimal & Clean */}
                <section className="py-24 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl sm:text-4xl font-normal text-gray-900 mb-6"
                            >
                                Cardio Zone Features
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                whileInView={{ opacity: 1, width: "100px" }}
                                viewport={{ once: true }}
                                className="h-1 bg-orange-500 mx-auto rounded-full"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group p-8 rounded-2xl bg-white/40 border border-white/50 hover:bg-white/80 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500 backdrop-blur-sm"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 rounded-full bg-orange-50 group-hover:bg-orange-100 transition-colors duration-300">
                                            <CheckCircle2 className="w-6 h-6 text-orange-600" strokeWidth={2} />
                                        </div>
                                        <span className="text-lg text-gray-800 font-medium group-hover:text-gray-900 transition-colors">{feature}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default CardioTraining;
