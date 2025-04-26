import React, { useState } from 'react';
import Avatar from './Avatar';
import ChoiceCard from './ChoiceCard';
import { UserRound } from 'lucide-react';
import { avatarOptions } from '../utils/avatarData';
import { dailyChoices, sampleMatches } from '../utils/questionData';

type DailyChoicesProps = {
  nickname: string;
  avatarId: number;
  personality: string;
  onViewProfile: () => void;
};

const DailyChoices: React.FC<DailyChoicesProps> = ({ 
  nickname,
  avatarId,
  personality,
  onViewProfile
}) => {
  const [todayChoice, setTodayChoice] = useState(dailyChoices[0]);
  const [hasAnswered, setHasAnswered] = useState(false);
  const avatar = avatarOptions.find(a => a.id === avatarId) || avatarOptions[0];
  
  const handleChoice = (questionId: number, choiceId: string) => {
    console.log(`Selected ${choiceId} for question ${questionId}`);
    setHasAnswered(true);
  };
  
  const affinityProgress = 65; // This would normally be calculated based on user activity
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-semibold">Persona Nexus</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={onViewProfile}
              className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
              <UserRound size={20} />
              View Profile
            </button>
            <div className="flex items-center">
              <span className="text-sm font-medium mr-3">{nickname}</span>
              <Avatar src={avatar.src} alt={nickname} size="sm" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Profile Summary */}
        <div className="flex items-center mb-8">
          <Avatar src={avatar.src} alt={nickname} size="lg" />
          <div className="ml-6">
            <h2 className="text-xl font-semibold mb-1">{nickname}</h2>
            <p className="text-gray-600 mb-3">{personality}</p>
            
            {/* Affinity Progress */}
            <div className="flex items-center">
              <div className="w-40 h-2 bg-gray-100 rounded-full mr-3">
                <div 
                  className="h-2 bg-primary rounded-full" 
                  style={{ width: `${affinityProgress}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-500">
                Profile Affinity: {affinityProgress}%
              </span>
            </div>
          </div>
        </div>
        
        {/* Today's Choice */}
        <div className="mb-12">
          <h2 className="text-lg font-medium mb-6">Today's Question</h2>
          
          {hasAnswered ? (
            <div className="nexus-card text-center">
              <h3 className="text-xl font-medium mb-2">Thanks for your answer!</h3>
              <p className="text-gray-600 mb-4">Come back tomorrow for a new question.</p>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pastel-purple/20 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ) : (
            <ChoiceCard
              question={todayChoice}
              onChoiceMade={handleChoice}
            />
          )}
        </div>
        
        {/* Soul Twin Matches */}
        <div>
          <h2 className="text-lg font-medium mb-6">Your Soul Twins</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sampleMatches.slice(0, 2).map((match) => (
              <div key={match.id} className="nexus-card">
                <div className="flex items-center">
                  <Avatar src={match.avatar} alt={match.nickname} size="md" />
                  <div className="ml-4">
                    <h3 className="font-medium">{match.nickname}</h3>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500">{match.descriptor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyChoices;
