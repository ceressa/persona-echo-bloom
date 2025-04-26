
import React, { useState } from 'react';
import ChoiceCard from './ChoiceCard';
import { initialQuestions } from '../utils/questionData';

type QuickChoiceProps = {
  onComplete: (choices: Record<number, string>) => void;
};

const QuickChoice: React.FC<QuickChoiceProps> = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userChoices, setUserChoices] = useState<Record<number, string>>({});
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChoice = (questionId: number, choiceId: string) => {
    setIsAnimating(true);
    
    // Update user choices
    setUserChoices(prev => ({
      ...prev,
      [questionId]: choiceId
    }));
    
    // Wait for animation to complete before moving to next question
    setTimeout(() => {
      if (currentQuestionIndex < initialQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setIsAnimating(false);
      } else {
        onComplete(userChoices);
      }
    }, 300);
  };

  const currentQuestion = initialQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / initialQuestions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-10">
      <div className="max-w-lg w-full">
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-semibold mb-2">Quick Choices</h1>
          <p className="text-gray-500">Question {currentQuestionIndex + 1} of {initialQuestions.length}</p>
        </div>
        
        <div className="mb-8 w-full bg-gray-100 rounded-full h-1.5">
          <div
            className="bg-primary h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className={`transform transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <ChoiceCard
            question={currentQuestion}
            onChoiceMade={handleChoice}
            animate={currentQuestionIndex === 0}
          />
        </div>
      </div>
    </div>
  );
};

export default QuickChoice;
