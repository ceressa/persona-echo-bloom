
import React, { useState } from 'react';
import SplashScreen from '../components/SplashScreen';
import WelcomeScreen from '../components/WelcomeScreen';
import AvatarSelection from '../components/AvatarSelection';
import QuickChoice from '../components/QuickChoice';
import PersonalityResult from '../components/PersonalityResult';
import MatchDiscovery from '../components/MatchDiscovery';
import DailyChoices from '../components/DailyChoices';

type AppStage = 
  | 'splash'
  | 'welcome'
  | 'avatar-selection'
  | 'quick-choices'
  | 'personality-result'
  | 'match-discovery'
  | 'daily-choices';

const Index = () => {
  const [stage, setStage] = useState<AppStage>('splash');
  const [userProfile, setUserProfile] = useState({
    avatarId: 0,
    nickname: '',
    personality: 'Thoughtful Idealist',
    choices: {} as Record<number, string>
  });

  const handleSplashComplete = () => {
    setStage('welcome');
  };

  const handleWelcomeComplete = () => {
    setStage('avatar-selection');
  };

  const handleAvatarSelectionComplete = (avatarId: number, nickname: string) => {
    setUserProfile(prev => ({
      ...prev,
      avatarId,
      nickname
    }));
    setStage('quick-choices');
  };

  const handleQuickChoicesComplete = (choices: Record<number, string>) => {
    setUserProfile(prev => ({
      ...prev,
      choices
    }));
    setStage('personality-result');
  };

  const handlePersonalityResultComplete = () => {
    setStage('match-discovery');
  };

  const handleMatchDiscoveryComplete = () => {
    setStage('daily-choices');
  };

  // Render the appropriate screen based on the current stage
  return (
    <div>
      {stage === 'splash' && <SplashScreen onComplete={handleSplashComplete} />}
      
      {stage === 'welcome' && <WelcomeScreen onStart={handleWelcomeComplete} />}
      
      {stage === 'avatar-selection' && (
        <AvatarSelection onComplete={handleAvatarSelectionComplete} />
      )}
      
      {stage === 'quick-choices' && (
        <QuickChoice onComplete={handleQuickChoicesComplete} />
      )}
      
      {stage === 'personality-result' && (
        <PersonalityResult 
          onContinue={handlePersonalityResultComplete}
          choices={userProfile.choices}
        />
      )}
      
      {stage === 'match-discovery' && (
        <MatchDiscovery onContinue={handleMatchDiscoveryComplete} />
      )}
      
      {stage === 'daily-choices' && (
        <DailyChoices
          nickname={userProfile.nickname}
          avatarId={userProfile.avatarId}
          personality={userProfile.personality}
        />
      )}
    </div>
  );
};

export default Index;
