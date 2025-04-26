
import React, { useEffect } from 'react';

type SplashScreenProps = {
  onComplete: () => void;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="animate-fade-in flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-pastel-purple flex items-center justify-center mb-6">
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
        <h1 className="text-2xl font-semibold mb-2">Persona Nexus</h1>
        <p className="text-gray-500 animate-slide-up" style={{ animationDelay: "0.3s" }}>Find your true self.</p>
      </div>
    </div>
  );
};

export default SplashScreen;
