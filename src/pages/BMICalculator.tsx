
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calculator, Heart, Activity, Target, TrendingUp } from 'lucide-react';

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
    if (!bmi) return 'text-gray-500';
    if (bmi < 18.5) return 'text-blue-500';
    if (bmi >= 18.5 && bmi < 25) return 'text-green-500';
    if (bmi >= 25 && bmi < 30) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getBMIBgColor = () => {
    if (!bmi) return 'bg-gray-50';
    if (bmi < 18.5) return 'bg-blue-50';
    if (bmi >= 18.5 && bmi < 25) return 'bg-green-50';
    if (bmi >= 25 && bmi < 30) return 'bg-yellow-50';
    return 'bg-red-50';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Calculator className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            BMI Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Calculate your Body Mass Index and understand your health status
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Height Input */}
              <div>
                <label className="block text-base font-semibold text-gray-800 mb-3">
                  Height (cm)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Enter height"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                  />
                  <div className="absolute right-3 top-3 text-gray-400">
                    <Activity className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Weight Input */}
              <div>
                <label className="block text-base font-semibold text-gray-800 mb-3">
                  Weight (kg)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter weight"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                  />
                  <div className="absolute right-3 top-3 text-gray-400">
                    <Target className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* BMI Result */}
            {bmi && (
              <div className={`${getBMIBgColor()} rounded-xl p-6 mb-6 border-2 border-opacity-20`}>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Heart className={`h-6 w-6 ${getBMIColor()} mr-2`} />
                    <span className="text-lg font-semibold text-gray-800">Your BMI Result</span>
                  </div>
                  <div className={`text-4xl font-bold ${getBMIColor()} mb-2`}>
                    {bmi}
                  </div>
                  <div className={`text-lg font-semibold ${getBMIColor()} mb-3`}>
                    {category}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {bmi < 18.5 && "You may be underweight. Consider consulting with a healthcare provider."}
                    {bmi >= 18.5 && bmi < 25 && "You have a healthy weight! Keep up with balanced diet and exercise."}
                    {bmi >= 25 && bmi < 30 && "You may be overweight. Consider adopting healthier lifestyle habits."}
                    {bmi >= 30 && "You may be obese. We recommend consulting with a healthcare provider."}
                  </p>
                </div>
              </div>
            )}

            {/* BMI Scale Reference */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="text-base font-semibold text-gray-800 mb-3 text-center">BMI Categories</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded-lg">
                  <span className="font-medium text-blue-800 text-sm">Underweight</span>
                  <span className="text-blue-600 font-semibold text-sm">&lt; 18.5</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-green-50 rounded-lg">
                  <span className="font-medium text-green-800 text-sm">Normal</span>
                  <span className="text-green-600 font-semibold text-sm">18.5 - 24.9</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-yellow-50 rounded-lg">
                  <span className="font-medium text-yellow-800 text-sm">Overweight</span>
                  <span className="text-yellow-600 font-semibold text-sm">25.0 - 29.9</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-red-50 rounded-lg">
                  <span className="font-medium text-red-800 text-sm">Obese</span>
                  <span className="text-red-600 font-semibold text-sm">≥ 30.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Tips */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Health Tips
            </h2>
            <p className="text-lg text-gray-600">
              Actionable advice for better health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Regular Exercise</h3>
              <p className="text-gray-600 text-sm">
                Aim for 150 minutes of moderate exercise per week for optimal health.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Balanced Diet</h3>
              <p className="text-gray-600 text-sm">
                Focus on whole foods, fruits, vegetables, and lean proteins.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Track Progress</h3>
              <p className="text-gray-600 text-sm">
                Monitor your health metrics regularly to stay on track.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BMICalculator;
