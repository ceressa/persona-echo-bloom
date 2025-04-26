
export type Choice = {
  id: string;
  text: string;
};

export type Question = {
  id: number;
  question: string;
  firstChoice: Choice;
  secondChoice: Choice;
};

export const initialQuestions: Question[] = [
  {
    id: 1,
    question: "Freedom or Security?",
    firstChoice: { id: "freedom", text: "Freedom" },
    secondChoice: { id: "security", text: "Security" }
  },
  {
    id: 2,
    question: "Morning or Night?",
    firstChoice: { id: "morning", text: "Morning" },
    secondChoice: { id: "night", text: "Night" }
  },
  {
    id: 3,
    question: "Ocean or Mountains?",
    firstChoice: { id: "ocean", text: "Ocean" },
    secondChoice: { id: "mountains", text: "Mountains" }
  },
  {
    id: 4,
    question: "Logic or Intuition?",
    firstChoice: { id: "logic", text: "Logic" },
    secondChoice: { id: "intuition", text: "Intuition" }
  },
  {
    id: 5,
    question: "City or Countryside?",
    firstChoice: { id: "city", text: "City" },
    secondChoice: { id: "countryside", text: "Countryside" }
  },
  {
    id: 6,
    question: "Books or Movies?",
    firstChoice: { id: "books", text: "Books" },
    secondChoice: { id: "movies", text: "Movies" }
  },
  {
    id: 7,
    question: "Plan or Spontaneity?",
    firstChoice: { id: "plan", text: "Plan" },
    secondChoice: { id: "spontaneity", text: "Spontaneity" }
  },
  {
    id: 8,
    question: "Tradition or Innovation?",
    firstChoice: { id: "tradition", text: "Tradition" },
    secondChoice: { id: "innovation", text: "Innovation" }
  },
  {
    id: 9,
    question: "Solitude or Company?",
    firstChoice: { id: "solitude", text: "Solitude" },
    secondChoice: { id: "company", text: "Company" }
  },
  {
    id: 10,
    question: "Silence or Music?",
    firstChoice: { id: "silence", text: "Silence" },
    secondChoice: { id: "music", text: "Music" }
  },
];

export const dailyChoices: Question[] = [
  {
    id: 11,
    question: "Art or Science?",
    firstChoice: { id: "art", text: "Art" },
    secondChoice: { id: "science", text: "Science" }
  },
  {
    id: 12,
    question: "Change or Stability?",
    firstChoice: { id: "change", text: "Change" },
    secondChoice: { id: "stability", text: "Stability" }
  },
  {
    id: 13,
    question: "Journey or Destination?",
    firstChoice: { id: "journey", text: "Journey" },
    secondChoice: { id: "destination", text: "Destination" }
  },
];

export type PersonalityType = {
  type: string;
  traits: string[];
  description: string;
};

export const personalityTypes: PersonalityType[] = [
  {
    type: "Thoughtful Idealist",
    traits: ["Creative", "Sensitive", "Insightful"],
    description: "You see possibilities where others see limitations. Your inner world is rich with ideas and emotions."
  },
  {
    type: "Serene Observer",
    traits: ["Patient", "Analytical", "Precise"],
    description: "You analyze the world with calm objectivity, finding patterns and solutions others might miss."
  },
  {
    type: "Vibrant Explorer",
    traits: ["Curious", "Adaptable", "Enthusiastic"],
    description: "Your adventurous spirit leads you to new experiences and connections that enrich your life."
  },
  {
    type: "Steady Harmonizer",
    traits: ["Reliable", "Empathetic", "Grounded"],
    description: "You create balance and connection wherever you go, valuing deep bonds and authentic relationships."
  },
];

export const getRandomPersonality = (): PersonalityType => {
  const randomIndex = Math.floor(Math.random() * personalityTypes.length);
  return personalityTypes[randomIndex];
};

export type MatchUser = {
  id: number;
  nickname: string;
  avatar: string;
  descriptor: string;
  compatibilityScore: number;
};

export const sampleMatches: MatchUser[] = [
  {
    id: 101,
    nickname: "Ethereal Echo",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Lyra&backgroundColor=ffdfbf",
    descriptor: "Listener",
    compatibilityScore: 92
  },
  {
    id: 102,
    nickname: "Cosmic Wanderer",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Nova&backgroundColor=c0aede",
    descriptor: "Explorer",
    compatibilityScore: 87
  },
  {
    id: 103,
    nickname: "Midnight Thinker",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Orion&backgroundColor=d1d4f9",
    descriptor: "Dreamer",
    compatibilityScore: 85
  }
];

export const predefinedMessages = [
  "Hello!",
  "You seem interesting.",
  "I appreciate your perspective.",
  "We seem to have things in common.",
  "Would you like to connect?"
];
