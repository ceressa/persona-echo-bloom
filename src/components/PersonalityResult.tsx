
import React from 'react';
import { getRandomPersonality } from '../utils/questionData';

type PersonalityResultProps = {
  onContinue: () => void;
  choices?: Record<number, string>;
};

const PersonalityResult: React.FC<PersonalityResultProps> = ({ onContinue, choices }) => {
  // In a real implementation, we would use the choices to determine the personality
  // For now, we'll just get a random one
  const personality = getRandomPersonality();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-10">
      <div className="max-w-lg w-full animate-scale-in">
        <div className="mb-16 text-center">
          <h1 className="text-2xl font-semibold mb-2">Your Personality Profile</h1>
          <p className="text-gray-500">Based on your choices, we've discovered your archetype</p>
        </div>
        
        <div className="nexus-card text-center mb-12">
          <div className="mb-4">
            <div className="w-20 h-20 bg-pastel-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                  fill="#6C5CE7"
                />
                <circle cx="12" cy="12" r="4" fill="#6C5CE7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">{personality.type}</h2>
            <div className="flex justify-center gap-2 mb-6">
              {personality.traits.map((trait, index) => (
                <span key={index} className="px-3 py-1 bg-pastel-purple/20 rounded-full text-sm">
                  {trait}
                </span>
              ))}
            </div>
            <p className="text-gray-700">{personality.description}</p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button className="nexus-button" onClick={onContinue}>
            Discover Connections
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalityResult;
