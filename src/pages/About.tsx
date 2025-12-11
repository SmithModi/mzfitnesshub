import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Tiles } from '../components/ui/tiles';
import { Users, CheckCircle, Heart, Target, Award, Shield, Zap, Clock, Star, TrendingUp, Dumbbell, Sparkles, ArrowRight } from 'lucide-react';
import CardFlip from '../components/ui/flip-card';

const About = () => {
    useEffect(() => {
        document.title = "About MZ Fitnezz - Best Gym in Rajkot | Our Story & Mission";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Learn about MZ Fitnezz - Rajkot\'s premier fitness center. Discover our mission, expert trainers, state-of-the-art facilities, and commitment to transforming lives through fitness in Gujarat.');
        }
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About MZ Fitnezz",
            "description": "Learn about Rajkot's premier fitness center and our commitment to health transformation",
            "url": "https://mzfitnezz.in/about",
            "mainEntity": {
                "@type": "Gym",
                "name": "MZ Fitnezz",
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

    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        whileInView: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col overflow-hidden bg-white">

                {/* Tiles Background */}
                <div className="absolute inset-0 z-0">
                    <style dangerouslySetInnerHTML={{
                        __html: `:root { --tile: #FF9F1C20; }`
                    }} />
                    <Tiles
                        rows={80}
                        cols={20}
                        tileSize="lg"
                        className="opacity-100"
                    />
                </div>

                {/* Header - positioned at top */}
                <div className="relative z-20">
                    <Header />
                </div>

                {/* Hero Content - centered in remaining space */}
                <div className="relative z-10 flex-1 flex items-center justify-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Main Heading */}
                            <motion.h1
                                className="font-['Instrument_Serif'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-zinc-900 leading-[1.1]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Transforming Lives
                                <br />
                                <span className="text-[#FF9F1C]">One Rep at a Time</span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                className="text-zinc-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                Rajkot's premier fitness destination where transformation meets dedication.
                                We're more than a gym — we're your fitness family.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            >
                                <Link to="/services">
                                    <button className="group bg-[#FF9F1C] hover:bg-[#FF8C00] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center gap-3">
                                        Start Your Journey
                                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </Link>

                                <Link to="/contact">
                                    <button className="bg-white hover:bg-zinc-50 text-zinc-900 font-semibold px-8 py-4 rounded-full border-2 border-zinc-200 hover:border-[#FF9F1C] transition-all duration-300 shadow-lg">
                                        Contact Us
                                    </button>
                                </Link>
                            </motion.div>

                            {/* Stats - Quick Overview */}
                            <motion.div
                                className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                            >
                                <div className="text-center">
                                    <div className="font-['Instrument_Serif'] text-4xl font-bold text-zinc-900 mb-2">500+</div>
                                    <div className="text-zinc-600 text-sm">Members</div>
                                </div>
                                <div className="text-center">
                                    <div className="font-['Instrument_Serif'] text-4xl font-bold text-zinc-900 mb-2">95%</div>
                                    <div className="text-zinc-600 text-sm">Success Rate</div>
                                </div>
                                <div className="text-center">
                                    <div className="font-['Instrument_Serif'] text-4xl font-bold text-zinc-900 mb-2">4.9</div>
                                    <div className="text-zinc-600 text-sm">Rating</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* All other sections with noisy grey background */}
            <div className="relative">
                {/* White background */}
                <div className="absolute inset-0 bg-white"></div>

                {/* Content wrapper with relative positioning */}
                <div className="relative z-10">
                    {/* Founder Section */}
                    <section className="py-32 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-5xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                            >
                                {/* Image Side */}
                                <div className="relative group mx-auto w-full max-w-md lg:max-w-none">
                                    {/* Moving Gradient Border Container */}
                                    <div className="absolute -inset-[3px] rounded-2xl overflow-hidden">
                                        <motion.div
                                            className="absolute inset-0 opacity-100"
                                            style={{
                                                background: "linear-gradient(45deg, #FF9F1C, #FFC56D, #FF8C00, #FF9F1C)",
                                                backgroundSize: "400% 400%",
                                            }}
                                            animate={{
                                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                            }}
                                            transition={{
                                                duration: 6,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                        />
                                    </div>

                                    {/* Image Container */}
                                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white shadow-2xl">
                                        <img
                                            src="/mzfounder.png"
                                            alt="Mulraj Sinh Zala - Founder of MZ Fitnezz"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="space-y-8">
                                    <div>
                                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#FF9F1C]/10 text-[#FF9F1C] text-xs font-medium tracking-wider uppercase mb-6">
                                            Meet the Founder
                                        </div>
                                        <h2 className="font-['Instrument_Serif'] text-4xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
                                            Driven by passion,
                                            <br />
                                            <span className="text-[#FF9F1C]">Built for excellence</span>
                                        </h2>
                                    </div>

                                    <div className="space-y-6 text-zinc-600 leading-relaxed">
                                        <p className="text-lg">
                                            Founded with a vision to transform lives through fitness, MZ Fitnezz began as a dream to create a space where dedication meets results.
                                        </p>
                                        <p>
                                            With years of experience in fitness training and a deep commitment to holistic wellness, our founder established MZ Fitnezz to bring world-class fitness solutions to Rajkot. Every piece of equipment, every training program, and every member interaction reflects this unwavering dedication to excellence.
                                        </p>
                                        <p>
                                            "Fitness is not just about physical transformation—it's about building confidence, discipline, and a better version of yourself every single day."
                                        </p>
                                    </div>

                                    <div className="pt-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="h-px flex-1 bg-gradient-to-r from-[#FF9F1C] to-transparent"></div>
                                            <div className="text-right">
                                                <p className="font-['Instrument_Serif'] text-xl font-bold text-zinc-900">Mulraj Sinh Zala</p>
                                                <p className="text-sm text-zinc-500">Founder & Head Trainer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Our Journey - Timeline */}
                    <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                        <div className="max-w-3xl mx-auto">
                            {/* Section Header */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-center mb-20"
                            >
                                <div className="inline-block px-4 py-1.5 rounded-full bg-[#FF9F1C]/10 text-[#FF9F1C] text-xs font-medium tracking-wider uppercase mb-6">
                                    Our Journey
                                </div>
                                <h2 className="font-['Instrument_Serif'] text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                                    Milestones that define us
                                </h2>
                                <p className="text-zinc-500 text-lg leading-relaxed max-w-xl mx-auto">
                                    From a humble beginning to Rajkot's premier fitness destination, every step has been driven by passion.
                                </p>
                            </motion.div>

                            {/* Timeline */}
                            <div className="relative">
                                {/* Vertical Line */}
                                <div className="absolute left-0 md:left-1/2 h-full w-px bg-zinc-200 md:-translate-x-[0.5px]"></div>

                                <div className="space-y-16">
                                    {/* Milestone 1: 2020 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className="grid grid-cols-1 md:grid-cols-12 relative"
                                    >
                                        <div className="absolute h-full w-px bg-zinc-200 left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 hidden md:block">
                                            <div className="absolute w-3 h-3 rounded-full bg-[#FF9F1C] top-2 left-0 md:left-auto md:right-0 md:translate-x-1/2 ring-4 ring-white"></div>
                                        </div>
                                        <div className="absolute w-3 h-3 rounded-full bg-[#FF9F1C] top-2 left-[-5.5px] md:hidden ring-4 ring-white"></div>

                                        <div className="col-start-1 md:col-start-1 md:col-end-6 md:text-right pl-8 md:pl-0 md:pr-12">
                                            <span className="text-sm font-medium text-[#FF9F1C] mb-2 block">2020</span>
                                            <h3 className="font-['Instrument_Serif'] text-2xl font-bold text-zinc-900 mb-3">Foundation</h3>
                                            <p className="text-zinc-500 leading-relaxed text-sm">
                                                MZ Fitnezz was born at Anant Chaya Complex with a vision to bring world-class fitness to Rajkot. We started with just the essentials and a lot of heart.
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Milestone 2: 2021 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                        className="grid grid-cols-1 md:grid-cols-12 relative"
                                    >
                                        <div className="absolute h-full w-px bg-zinc-200 left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 hidden md:block">
                                            <div className="absolute w-3 h-3 rounded-full bg-[#FF9F1C] top-2 left-0 md:translate-x-[-50%] ring-4 ring-white"></div>
                                        </div>
                                        <div className="absolute w-3 h-3 rounded-full bg-[#FF9F1C] top-2 left-[-5.5px] md:hidden ring-4 ring-white"></div>

                                        <div className="col-start-1 md:col-start-7 md:col-end-13 pl-8 md:pl-12">
                                            <span className="text-sm font-medium text-[#FF9F1C] mb-2 block">2021</span>
                                            <h3 className="font-['Instrument_Serif'] text-2xl font-bold text-zinc-900 mb-3">Growing Stronger</h3>
                                            <p className="text-zinc-500 leading-relaxed text-sm">
                                                Despite challenges, our community grew to 100+ dedicated members. We expanded our equipment range and introduced personalized training programs.
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Milestone 3: 2022 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        className="grid grid-cols-1 md:grid-cols-12 relative"
                                    >
                                        <div className="absolute h-full w-px bg-zinc-200 left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 hidden md:block">
                                            <div className="absolute w-3 h-3 rounded-full bg-[#FF9F1C] top-2 left-0 md:left-auto md:right-0 md:translate-x-1/2 ring-4 ring-white"></div>
                                        </div>
                                        <div className="absolute w-3 h-3 rounded-full bg-[#FF9F1C] top-2 left-[-5.5px] md:hidden ring-4 ring-white"></div>

                                        <div className="col-start-1 md:col-start-1 md:col-end-6 md:text-right pl-8 md:pl-0 md:pr-12">
                                            <span className="text-sm font-medium text-[#FF9F1C] mb-2 block">2022</span>
                                            <h3 className="font-['Instrument_Serif'] text-2xl font-bold text-zinc-900 mb-3">Excellence Recognized</h3>
                                            <p className="text-zinc-500 leading-relaxed text-sm">
                                                We refined our training methodologies and upgraded our facility. Our commitment to member results started turning heads across the city.
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Milestone 4: Present */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className="grid grid-cols-1 md:grid-cols-12 relative"
                                    >
                                        <div className="absolute h-full w-px bg-zinc-200 left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 hidden md:block">
                                            <div className="absolute w-3 h-3 rounded-full bg-[#FF9F1C] top-2 left-0 md:translate-x-[-50%] ring-4 ring-white"></div>
                                        </div>
                                        <div className="absolute w-3 h-3 rounded-full bg-[#FF9F1C] top-2 left-[-5.5px] md:hidden ring-4 ring-white"></div>

                                        <div className="col-start-1 md:col-start-7 md:col-end-13 pl-8 md:pl-12">
                                            <span className="text-sm font-medium text-[#FF9F1C] mb-2 block">Present Day</span>
                                            <h3 className="font-['Instrument_Serif'] text-2xl font-bold text-zinc-900 mb-3">A Fitness Family</h3>
                                            <p className="text-zinc-500 leading-relaxed text-sm">
                                                Now a family of 500+ members with a 95% success rate. We continue to innovate and inspire, proving that transformation is possible for everyone.
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* What We Stand For - Flip Cards */}
                    <section className="py-20 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                className="text-center mb-16"
                                {...fadeInUp}
                            >
                                <h2 className="font-['Instrument_Serif'] text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
                                    What We Stand For
                                </h2>
                                <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                                    Our core values shape every interaction and guide our commitment to your success
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                                {[
                                    {
                                        title: "Excellence",
                                        subtitle: "Pursuing greatness in everything",
                                        description: "We maintain the highest standards in equipment, training methods, and member experience to ensure outstanding results.",
                                        features: [
                                            "Premium Equipment",
                                            "Certified Trainers",
                                            "Proven Methods",
                                            "Continuous Improvement"
                                        ]
                                    },
                                    {
                                        title: "Integrity",
                                        subtitle: "Honest guidance, real results",
                                        description: "We provide transparent advice and realistic expectations, building trust through honesty and authentic relationships.",
                                        features: [
                                            "Honest Feedback",
                                            "No False Promises",
                                            "Ethical Practices",
                                            "Member-First Approach"
                                        ]
                                    },
                                    {
                                        title: "Community",
                                        subtitle: "Together we grow stronger",
                                        description: "We foster a supportive environment where members motivate each other and celebrate collective achievements.",
                                        features: [
                                            "Supportive Environment",
                                            "Member Events",
                                            "Shared Success",
                                            "Lasting Friendships"
                                        ]
                                    }
                                ].map((card, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.15 }}
                                    >
                                        <CardFlip
                                            title={card.title}
                                            subtitle={card.subtitle}
                                            description={card.description}
                                            features={card.features}
                                            color="#FF9F1C"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* What Makes Us Different */}
                    <section className="py-20 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                className="text-center mb-16"
                                {...fadeInUp}
                            >
                                <h2 className="font-['Instrument_Serif'] text-4xl md:text-5xl font-bold text-zinc-900 mb-4">What Makes Us Different</h2>
                                <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                                    Discover why MZ Fitnezz is Rajkot's preferred choice for fitness transformation
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <motion.div
                                    className="space-y-6"
                                    {...fadeInUp}
                                >
                                    {[
                                        { icon: Zap, title: "Personalized Training", desc: "Every member gets a customized fitness plan based on their goals, fitness level, and preferences. No cookie-cutter approaches here.", color: "#FF9F1C" },
                                        { icon: Heart, title: "Holistic Wellness", desc: "We focus on complete wellness - combining strength training, cardio, nutrition guidance, and mental well-being for lasting transformation.", color: "#10b981" },
                                        { icon: Clock, title: "Flexible Hours", desc: "Open daily until 9 PM to accommodate your busy schedule. We believe fitness should fit into your life, not the other way around.", color: "#8b5cf6" }
                                    ].map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15, duration: 0.6 }}
                                            className="flex items-start space-x-4 bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            <div
                                                className="rounded-2xl p-3 flex-shrink-0"
                                                style={{ backgroundColor: `${feature.color}15` }}
                                            >
                                                <feature.icon className="h-6 w-6" style={{ color: feature.color }} />
                                            </div>
                                            <div>
                                                <h3 className="font-['Instrument_Serif'] text-xl font-bold text-zinc-900 mb-2">{feature.title}</h3>
                                                <p className="text-zinc-600 text-sm leading-relaxed">{feature.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                <motion.div
                                    className="bg-white rounded-3xl p-10 shadow-xl"
                                    {...fadeInUp}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FF9F1C]/10 rounded-2xl mb-6">
                                        <Dumbbell className="h-7 w-7 text-[#FF9F1C]" />
                                    </div>
                                    <h3 className="font-['Instrument_Serif'] text-2xl font-bold text-zinc-900 mb-6">Our Commitment to You</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Clean, well-maintained equipment and facilities",
                                            "Qualified and certified fitness professionals",
                                            "Progress tracking and regular assessments",
                                            "Nutritional guidance and meal planning",
                                            "Motivational support throughout your journey",
                                            "Flexible membership options to suit your needs"
                                        ].map((commitment, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                                className="flex items-start space-x-3"
                                            >
                                                <CheckCircle className="h-5 w-5 text-[#FF9F1C] flex-shrink-0 mt-0.5" />
                                                <span className="text-zinc-700">{commitment}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* Training Philosophy */}
                    <section className="py-20 px-4 sm:px-6 lg:px-8 mb-20">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                className="text-center mb-16"
                                {...fadeInUp}
                            >
                                <h2 className="font-['Instrument_Serif'] text-4xl md:text-5xl font-bold text-zinc-900 mb-4">Our Training Philosophy</h2>
                                <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                                    At MZ Fitnezz, we believe in sustainable, science-based approaches to fitness
                                </p>
                            </motion.div>

                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                                variants={staggerContainer}
                                initial="initial"
                                whileInView="whileInView"
                                viewport={{ once: true }}
                            >
                                {[
                                    { icon: Target, title: "Goal-Oriented", desc: "Every workout is designed with your specific goals in mind. Whether it's weight loss, muscle gain, or improved health, we create a clear path to success.", color: "#FF9F1C" },
                                    { icon: Heart, title: "Progressive Training", desc: "We gradually increase intensity and complexity as you get stronger, ensuring continuous improvement while preventing injury and burnout.", color: "#10b981" },
                                    { icon: Award, title: "Sustainable Results", desc: "We focus on building lasting habits and lifestyle changes rather than quick fixes, ensuring your results stand the test of time.", color: "#8b5cf6" }
                                ].map((philosophy, index) => (
                                    <motion.div
                                        key={index}
                                        {...fadeInUp}
                                        transition={{ delay: index * 0.15 }}
                                        className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group"
                                    >
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300"
                                            style={{ backgroundColor: `${philosophy.color}15` }}
                                        >
                                            <philosophy.icon className="h-8 w-8" style={{ color: philosophy.color }} />
                                        </div>
                                        <h3 className="font-['Instrument_Serif'] text-xl font-bold text-zinc-900 mb-3">{philosophy.title}</h3>
                                        <p className="text-zinc-600 text-sm leading-relaxed">{philosophy.desc}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </section>

                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default About;