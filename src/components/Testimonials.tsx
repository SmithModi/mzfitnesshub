import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
    {
        text: "Joining MZ Fitnezz Hub was the best decision I've made for my health. The trainers are knowledgeable and supportive.",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        name: "Priya Patel",
        role: "Member since 2023",
    },
    {
        text: "The equipment is top-notch and the atmosphere is always energetic. It pushes me to work harder every day.",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        name: "Rahul Mehta",
        role: "Fitness Enthusiast",
    },
    {
        text: "I've seen amazing results with the personal training program. My strength and stamina have improved significantly.",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        name: "Anjali Shah",
        role: "Personal Training Client",
    },
    {
        text: "The group classes are so much fun! Zumba and Yoga sessions are my absolute favorites.",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        name: "Vikram Singh",
        role: "Group Class Regular",
    },
    {
        text: "Staff is very friendly and the gym is always clean. Highly recommend MZ Fitnezz Hub to anyone in Rajkot.",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
        name: "Sneha Joshi",
        role: "Member",
    },
    {
        text: "Lost 10kg in 3 months thanks to the nutrition guidance and workout plan provided here.",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
        name: "Kavita Desai",
        role: "Transformation Success",
    },
    {
        text: "The best gym in Gujarat! The vibe, the people, the equipment - everything is perfect for serious training.",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
        name: "Amit Trivedi",
        role: "Bodybuilder",
    },
    {
        text: "Flexible timings and great location. Perfect for my busy schedule.",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
        name: "Neha Gupta",
        role: "Working Professional",
    },
    {
        text: "My back pain has reduced significantly after the physio sessions and strengthening exercises here.",
        image: "https://randomuser.me/api/portraits/men/9.jpg",
        name: "Rajesh Kumar",
        role: "Physio Client",
    },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const Testimonials = () => {
    return (
        <section className="bg-background my-20 relative">

            <div className="container z-10 mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
                >
                    <div className="flex justify-center">
                        <div className="border border-orange-200 bg-orange-50 text-orange-600 py-1 px-4 rounded-full text-sm font-medium mb-4">Testimonials</div>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 text-center mb-4">
                        What our members say
                    </h2>
                    <p className="text-center text-xl text-gray-600 max-w-2xl mx-auto">
                        Real stories from real people transforming their lives at MZ Fitnezz Hub.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
