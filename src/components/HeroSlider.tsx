import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlide {
    image: string;
    alt: string;
}

interface HeroSliderProps {
    slides?: HeroSlide[];
    autoPlayInterval?: number;
    children?: React.ReactNode;
}

const HeroSlider: React.FC<HeroSliderProps> = ({
    slides = [
        { image: '/hero-slide-1.jpg', alt: 'Fitness Training' },
        { image: '/hero-slide-2.jpg', alt: 'Gym Equipment' },
        { image: '/hero-slide-3.jpg', alt: 'Personal Training' },
    ],
    autoPlayInterval = 5000,
    children,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    // Auto-play functionality
    useEffect(() => {
        const timer = setInterval(nextSlide, autoPlayInterval);
        return () => clearInterval(timer);
    }, [nextSlide, autoPlayInterval]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? '-100%' : '100%',
            opacity: 0,
        }),
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-black flex items-center">
            {/* Background Image Slider */}
            <div className="absolute inset-0">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: 'spring', stiffness: 400, damping: 25 },
                            opacity: { duration: 0.2 },
                        }}
                        className="absolute inset-0"
                    >
                        <img
                            src={slides[currentIndex].image}
                            alt={slides[currentIndex].alt}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Dark Overlay for content visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full">
                {children}
            </div>



            {/* Pagination Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-orange-500 w-8'
                            : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;
