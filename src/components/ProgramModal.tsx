
import React from 'react';
import { X, Star, Clock, Users, Target } from 'lucide-react';

interface ProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
  program: {
    title: string;
    description: string;
    features: string[];
    duration: string;
    level: string;
    participants: string;
  };
}

const ProgramModal = ({ isOpen, onClose, program }: ProgramModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-card rounded-3xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto border border-border/20">
        {/* Header */}
        <div className="sticky top-0 bg-card/95 backdrop-blur-sm rounded-t-3xl border-b border-border/10 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-foreground">{program.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Description */}
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            {program.description}
          </p>

          {/* Program Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-primary/5 rounded-2xl p-4 text-center border border-primary/10">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm text-primary font-medium">Duration</div>
              <div className="text-lg font-bold text-foreground">{program.duration}</div>
            </div>
            <div className="bg-primary/5 rounded-2xl p-4 text-center border border-primary/10">
              <Star className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm text-primary font-medium">Level</div>
              <div className="text-lg font-bold text-foreground">{program.level}</div>
            </div>
            <div className="bg-primary/5 rounded-2xl p-4 text-center border border-primary/10">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm text-primary font-medium">Class Size</div>
              <div className="text-lg font-bold text-foreground">{program.participants}</div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
              <Target className="h-6 w-6 text-primary mr-2" />
              What You'll Get
            </h3>
            <div className="space-y-3">
              {program.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1 border border-primary/20">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-lg hover:from-primary/90 hover:to-primary/70 transition-all duration-200 shadow-lg hover:shadow-xl">
              Join This Program
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramModal;
