
import React from 'react';
import { Card } from './ui/card';
import Avatar from './Avatar';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';
import { ScrollArea } from './ui/scroll-area';
import { UsersRound } from 'lucide-react';

type ProfileScreenProps = {
  nickname: string;
  avatarId: number;
  personality: string;
  onBack: () => void;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({
  nickname,
  avatarId,
  personality,
  onBack
}) => {
  const profileStats = {
    choices: 42,
    connections: 3,
    affinity: 75
  };

  const recentChoices = [
    { question: "Freedom or Security?", answer: "Freedom" },
    { question: "Morning or Night?", answer: "Night" },
    { question: "Logic or Intuition?", answer: "Intuition" }
  ];

  return (
    <div className="min-h-screen bg-white p-6 animate-fade-in">
      {/* Header Section */}
      <button
        onClick={onBack}
        className="text-primary mb-6 flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        ← Back
      </button>
      
      <div className="max-w-2xl mx-auto">
        <Card className="p-8 mb-6">
          <div className="flex items-center gap-6">
            <Avatar
              src={`https://api.dicebear.com/7.x/personas/svg?seed=profile${avatarId}&backgroundColor=b6e3f4`}
              alt={nickname}
              size="xl"
              className="animate-scale-in"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold">{nickname}</h1>
              <p className="text-gray-600">{personality}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{profileStats.choices} choices</span>
                <span>•</span>
                <span>{profileStats.connections} connections</span>
              </div>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Affinity Progress</h2>
            <div className="flex items-center gap-4">
              <Progress value={profileStats.affinity} className="flex-1" />
              <span className="text-sm text-gray-600">{profileStats.affinity}%</span>
            </div>
          </div>
        </Card>

        {/* Recent Choices */}
        <Card className="p-6 mb-6 animate-slide-up">
          <h2 className="text-lg font-medium mb-4">Recent Choices</h2>
          <ScrollArea className="h-[200px] rounded-md border p-4">
            <div className="space-y-4">
              {recentChoices.map((choice, index) => (
                <div
                  key={index}
                  className="p-3 bg-pastel-purple/10 rounded-lg"
                >
                  <p className="text-sm text-gray-600 mb-1">{choice.question}</p>
                  <p className="font-medium">{choice.answer}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </Card>

        {/* Connections */}
        <Card className="p-6 animate-slide-up">
          <div className="flex items-center gap-2 mb-4">
            <UsersRound className="text-primary" />
            <h2 className="text-lg font-medium">Soul Connections</h2>
          </div>
          <div className="grid gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-pastel-purple/5 rounded-lg hover:bg-pastel-purple/10 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Avatar
                  src={`https://api.dicebear.com/7.x/personas/svg?seed=connection${index}&backgroundColor=d1d4f9`}
                  alt={`Connection ${index + 1}`}
                  size="sm"
                />
                <div>
                  <p className="font-medium">Silent Voyager {index + 1}</p>
                  <p className="text-sm text-gray-500">85% match</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfileScreen;

