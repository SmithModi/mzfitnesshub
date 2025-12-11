
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Scale, Ruler, Apple, TrendingUp } from 'lucide-react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (height && weight && parseFloat(height) > 0 && parseFloat(weight) > 0) {
      const heightInMeters = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);

      setBmi(Math.round(bmiValue * 10) / 10);

      if (bmiValue < 18.5) {
        setCategory('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    } else {
      setBmi(null);
      setCategory('');
    }
  }, [height, weight]);

  const getBMIColor = () => {
    if (!bmi) return 'text-gray-400';
    if (bmi < 18.5) return 'text-blue-400';
    if (bmi >= 18.5 && bmi < 25) return 'text-green-400';
    if (bmi >= 25 && bmi < 30) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getBMIBgColor = () => {
    if (!bmi) return 'bg-gray-900/50';
    if (bmi < 18.5) return 'bg-blue-900/50';
    if (bmi >= 18.5 && bmi < 25) return 'bg-green-900/50';
    if (bmi >= 25 && bmi < 30) return 'bg-yellow-900/50';
    return 'bg-red-900/50';
  };

  return (
    <div className="min-h-screen relative">
      {/* Universal Gradient Background - Darker Black */}
      <div className="fixed inset-0 bg-gradient-to-r from-black via-black to-orange-500 -z-10"></div>

      {/* Additional Glow for depth */}
      <div className="fixed top-[-20%] right-[-20%] w-[70%] h-[90%] bg-orange-500/30 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-4">
              BMI Calculator
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Calculate your Body Mass Index and understand your health status
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="relative py-8 sm:py-12">
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-10 shadow-2xl"
          >
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Height Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Height (cm)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="Enter height"
                      className="w-full px-4 py-3.5 pr-12 bg-white/10 border-2 border-white/20 text-white placeholder-gray-400 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all duration-200"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-500">
                      <Ruler className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Weight Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Weight (kg)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="Enter weight"
                      className="w-full px-4 py-3.5 pr-12 bg-white/10 border-2 border-white/20 text-white placeholder-gray-400 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all duration-200"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-500">
                      <Scale className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

              {/* BMI Result */}
              {bmi && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className={`${getBMIBgColor()} backdrop-blur-sm rounded-xl p-8 mb-8 border-2 border-white/10`}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-4">
                      <Heart className={`h-7 w-7 ${getBMIColor()} mr-2`} strokeWidth={1.5} />
                      <span className="text-xl font-normal text-white">Your BMI Result</span>
                    </div>
                    <div className={`text-6xl font-normal ${getBMIColor()} mb-3`}>
                      {bmi}
                    </div>
                    <div className={`text-2xl font-normal ${getBMIColor()} mb-4`}>
                      {category}
                    </div>
                    <p className="text-gray-300 leading-relaxed max-w-md mx-auto">
                      {bmi < 18.5 && "You may be underweight. Consider consulting with a healthcare provider."}
                      {bmi >= 18.5 && bmi < 25 && "You have a healthy weight! Keep up with balanced diet and exercise."}
                      {bmi >= 25 && bmi < 30 && "You may be overweight. Consider adopting healthier lifestyle habits."}
                      {bmi >= 30 && "You may be obese. We recommend consulting with a healthcare provider."}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* BMI Scale Reference */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-normal text-white mb-4 text-center">BMI Categories</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex justify-between items-center p-3 bg-blue-900/30 rounded-lg border border-blue-500/20">
                    <span className="font-medium text-blue-300">Underweight</span>
                    <span className="text-blue-400 font-semibold">&lt; 18.5</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-900/30 rounded-lg border border-green-500/20">
                    <span className="font-medium text-green-300">Normal</span>
                    <span className="text-green-400 font-semibold">18.5 - 24.9</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-900/30 rounded-lg border border-yellow-500/20">
                    <span className="font-medium text-yellow-300">Overweight</span>
                    <span className="text-yellow-400 font-semibold">25.0 - 29.9</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-900/30 rounded-lg border border-red-500/20">
                    <span className="font-medium text-red-300">Obese</span>
                    <span className="text-red-400 font-semibold">≥ 30.0</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Health Tips */}
      <section className="relative py-16 sm:py-20 md:py-24">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-normal text-white mb-4">
              Health <span className="text-orange-500">Tips</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Actionable advice for better health and wellness
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Regular Exercise',
                description: 'Aim for 150 minutes of moderate exercise per week for optimal health and fitness.'
              },
              {
                icon: Apple,
                title: 'Balanced Diet',
                description: 'Focus on whole foods, fruits, vegetables, lean proteins, and healthy fats.'
              },
              {
                icon: TrendingUp,
                title: 'Track Progress',
                description: 'Monitor your health metrics regularly to stay motivated and on track.'
              }
            ].map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 h-full">
                    <div className="relative">
                      <div className="inline-flex items-center justify-center p-4 rounded-xl bg-orange-500/20 group-hover:bg-orange-500/30 transition-colors duration-300 mb-5">
                        <IconComponent className="h-8 w-8 text-orange-500" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl font-normal text-white mb-3">
                        {tip.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BMICalculator;
