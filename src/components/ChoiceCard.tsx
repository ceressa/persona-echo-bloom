
import React from 'react';
import { Question } from '../utils/questionData';

type ChoiceCardProps = {
  question: Question;
  onChoiceMade: (questionId: number, choiceId: string) => void;
  animate?: boolean;
};

const ChoiceCard: React.FC<ChoiceCardProps> = ({ 
  question, 
  onChoiceMade,
  animate = true
}) => {
  return (
    <div className={`nexus-card max-w-md w-full mx-auto ${animate ? 'animate-scale-in' : ''}`}>
      <h3 className="text-xl font-medium text-center mb-8">{question.question}</h3>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          className="choice-button flex-1 text-center"
          onClick={() => onChoiceMade(question.id, question.firstChoice.id)}
        >
          {question.firstChoice.text}
        </button>
        <button
          className="choice-button flex-1 text-center"
          onClick={() => onChoiceMade(question.id, question.secondChoice.id)}
        >
          {question.secondChoice.text}
        </button>
      </div>
    </div>
  );
};

export default ChoiceCard;
