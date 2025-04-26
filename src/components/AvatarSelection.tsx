
import React, { useState, useEffect } from 'react';
import Avatar from './Avatar';
import { avatarOptions, generateRandomNickname } from '../utils/avatarData';

type AvatarSelectionProps = {
  onComplete: (avatarId: number, nickname: string) => void;
};

const AvatarSelection: React.FC<AvatarSelectionProps> = ({ onComplete }) => {
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);
  const [nickname, setNickname] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    // Generate 3 random nickname suggestions
    const newSuggestions = Array.from({ length: 3 }, () => generateRandomNickname());
    setSuggestions(newSuggestions);
    setNickname(newSuggestions[0]);
  }, []);

  const generateNewSuggestions = () => {
    const newSuggestions = Array.from({ length: 3 }, () => generateRandomNickname());
    setSuggestions(newSuggestions);
  };

  const handleNext = () => {
    if (selectedAvatar !== null && nickname.trim() !== '') {
      onComplete(selectedAvatar, nickname);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-10">
      <div className="max-w-lg w-full animate-scale-in">
        <h1 className="text-2xl font-semibold mb-8 text-center">Choose Your Identity</h1>

        <div className="nexus-card mb-8">
          <h2 className="text-lg font-medium mb-4">Select an Avatar</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {avatarOptions.map((avatar) => (
              <div
                key={avatar.id}
                className={`avatar-select ${selectedAvatar === avatar.id ? 'selected' : ''}`}
                onClick={() => setSelectedAvatar(avatar.id)}
              >
                <Avatar src={avatar.src} alt={avatar.alt} size="md" />
              </div>
            ))}
          </div>
        </div>

        <div className="nexus-card mb-10">
          <h2 className="text-lg font-medium mb-4">Choose a Nickname</h2>
          
          <div className="mb-4">
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Enter your nickname"
              maxLength={25}
            />
          </div>
          
          <div className="mb-2">
            <p className="text-sm text-gray-500 mb-2">Suggestions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="px-3 py-1 bg-pastel-purple/20 hover:bg-pastel-purple/40 rounded-full text-sm transition-colors"
                  onClick={() => setNickname(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
              <button
                className="px-3 py-1 bg-pastel-gray hover:bg-pastel-gray/70 rounded-full text-sm transition-colors"
                onClick={generateNewSuggestions}
              >
                ⟳ New
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className={`nexus-button ${(!selectedAvatar || nickname.trim() === '') ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleNext}
            disabled={!selectedAvatar || nickname.trim() === ''}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarSelection;
