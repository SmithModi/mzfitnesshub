
import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Calculate BMI whenever height or weight changes
  useEffect(() => {
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      
      setBmi(Math.round(bmiValue * 10) / 10);
      
      // Determine BMI category
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

  return (
    <div className="relative">
      {/* BMI Calculator Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg"
      >
        <Calculator className="h-4 w-4" />
        <span className="hidden sm:block">BMI Calculator</span>
      </button>

      {/* BMI Calculator Modal */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 z-50">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">BMI Calculator</h3>
          
          {/* Height Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Height (cm)
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height in cm"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Weight Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Weight (kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight in kg"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* BMI Result */}
          {bmi && (
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="text-center">
                <div className={`text-3xl font-bold ${getBMIColor()}`}>
                  {bmi}
                </div>
                <div className={`text-sm font-medium ${getBMIColor()}`}>
                  {category}
                </div>
              </div>
            </div>
          )}

          {/* BMI Scale Reference */}
          <div className="text-xs text-gray-500 space-y-1">
            <div className="flex justify-between">
              <span>Underweight:</span> <span>&lt; 18.5</span>
            </div>
            <div className="flex justify-between">
              <span>Normal:</span> <span>18.5 - 24.9</span>
            </div>
            <div className="flex justify-between">
              <span>Overweight:</span> <span>25.0 - 29.9</span>
            </div>
            <div className="flex justify-between">
              <span>Obese:</span> <span>≥ 30.0</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
