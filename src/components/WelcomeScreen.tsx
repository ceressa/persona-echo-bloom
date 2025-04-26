
import React from 'react';

type WelcomeScreenProps = {
  onStart: () => void;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="max-w-lg w-full animate-scale-in">
        <h1 className="text-3xl font-semibold mb-6 text-center">Welcome to Persona Nexus</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Discover your inner self through simple choices and connect with like-minded souls.
        </p>
        <div className="nexus-card mb-10">
          <p className="text-gray-700 mb-6">
            Each day, we'll present you with a choice that helps refine your unique personality profile. 
            The more choices you make, the more accurate your matches will be.
          </p>
          <p className="text-gray-700">
            Your journey begins now with a few quick choices to establish your initial profile.
          </p>
        </div>
        <div className="flex justify-center">
          <button 
            className="nexus-button"
            onClick={onStart}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
