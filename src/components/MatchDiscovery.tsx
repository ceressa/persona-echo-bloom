
import React, { useState } from 'react';
import Avatar from './Avatar';
import { Card } from './ui/card';
import { sampleMatches, predefinedMessages } from '../utils/questionData';

type MatchDiscoveryProps = {
  onContinue: () => void;
};

const MatchDiscovery: React.FC<MatchDiscoveryProps> = ({ onContinue }) => {
  const [showMessageOptions, setShowMessageOptions] = useState<number | null>(null);
  const [sentMessages, setSentMessages] = useState<Record<number, string>>({});
  const [recentInteractions, setRecentInteractions] = useState<{[key: number]: string[]}>({
    101: ["Hello!", "You seem interesting."],
    102: ["I appreciate your perspective."],
    103: ["Would you like to connect?", "Hello!"]
  });
  
  const handleShowMessages = (userId: number) => {
    setShowMessageOptions(showMessageOptions === userId ? null : userId);
  };
  
  const sendMessage = (userId: number, message: string) => {
    setSentMessages(prev => ({
      ...prev,
      [userId]: message
    }));
    setRecentInteractions(prev => ({
      ...prev,
      [userId]: [...(prev[userId] || []), message]
    }));
    setShowMessageOptions(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-10">
      <div className="max-w-lg w-full animate-scale-in">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold mb-2">Soul Twins</h1>
          <p className="text-gray-500">People who share your perspective</p>
        </div>
        
        <div className="space-y-4 mb-10">
          {sampleMatches.map((match) => (
            <Card key={match.id} className="p-6 bg-white shadow-sm border border-gray-100">
              <div className="flex items-center">
                <Avatar src={match.avatar} alt={match.nickname} size="md" />
                <div className="ml-4 flex-1">
                  <h3 className="font-medium">{match.nickname}</h3>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500">{match.descriptor}</span>
                    <span className="ml-auto text-sm font-medium text-primary">{match.compatibilityScore}% match</span>
                  </div>
                </div>
              </div>
              
              {/* Recent Interactions */}
              {recentInteractions[match.id] && recentInteractions[match.id].length > 0 && (
                <div className="mt-4 space-y-2">
                  {recentInteractions[match.id].map((message, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="p-3 bg-pastel-purple/10 rounded-lg flex-1">
                        <p className="text-sm text-gray-700">{message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Message Controls */}
              <div className="mt-4">
                <button
                  className="nexus-button-secondary text-sm w-full"
                  onClick={() => handleShowMessages(match.id)}
                >
                  Send Greeting
                </button>
                
                {showMessageOptions === match.id && (
                  <div className="mt-3 bg-white border border-gray-100 rounded-lg shadow-lg p-2 animate-scale-in">
                    <div className="space-y-1">
                      {predefinedMessages.map((message, index) => (
                        <button
                          key={index}
                          className="w-full text-left px-3 py-2 hover:bg-pastel-purple/10 rounded-md text-sm transition-colors"
                          onClick={() => sendMessage(match.id, message)}
                        >
                          {message}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center">
          <button className="nexus-button" onClick={onContinue}>
            Continue to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchDiscovery;
