
export type Avatar = {
  id: number;
  src: string;
  alt: string;
};

export const avatarOptions: Avatar[] = [
  {
    id: 1,
    src: "https://api.dicebear.com/7.x/personas/svg?seed=Luna&backgroundColor=b6e3f4",
    alt: "Avatar 1"
  },
  {
    id: 2,
    src: "https://api.dicebear.com/7.x/personas/svg?seed=Nova&backgroundColor=d1d4f9",
    alt: "Avatar 2"
  },
  {
    id: 3,
    src: "https://api.dicebear.com/7.x/personas/svg?seed=Orion&backgroundColor=ffdfbf",
    alt: "Avatar 3"
  },
  {
    id: 4,
    src: "https://api.dicebear.com/7.x/personas/svg?seed=Phoenix&backgroundColor=c0aede",
    alt: "Avatar 4"
  },
  {
    id: 5,
    src: "https://api.dicebear.com/7.x/personas/svg?seed=Aurora&backgroundColor=ffd5dc",
    alt: "Avatar 5"
  },
  {
    id: 6,
    src: "https://api.dicebear.com/7.x/personas/svg?seed=Zen&backgroundColor=ffb3ba",
    alt: "Avatar 6"
  },
  {
    id: 7,
    src: "https://api.dicebear.com/7.x/personas/svg?seed=Echo&backgroundColor=bae1ff",
    alt: "Avatar 7"
  },
  {
    id: 8,
    src: "https://api.dicebear.com/7.x/personas/svg?seed=Mist&backgroundColor=baffc9",
    alt: "Avatar 8"
  },
  {
    id: 9,
    src: "https://api.dicebear.com/7.x/personas/svg?seed=Sage&backgroundColor=ffffba",
    alt: "Avatar 9"
  },
  {
    id: 10,
    src: "https://api.dicebear.com/7.x/personas/svg?seed=River&backgroundColor=ffdfba",
    alt: "Avatar 10"
  },
  {
    id: 11,
    src: "https://api.dicebear.com/7.x/personas/svg?seed=Nebula&backgroundColor=e0c5ff",
    alt: "Avatar 11"
  },
  {
    id: 12,
    src: "https://api.dicebear.com/7.x/personas/svg?seed=Aura&backgroundColor=dcd3ff",
    alt: "Avatar 12"
  },
];

export const nicknameOptions: string[] = [
  "Quiet Dreamer",
  "Silent Voyager",
  "Gentle Observer",
  "Cosmic Wanderer",
  "Curious Soul",
  "Subtle Rebel",
  "Thoughtful Nomad",
  "Ethereal Echo",
  "Patient Listener",
  "Midnight Thinker",
  "Serene Spirit",
  "Enigmatic Smile",
  "Kind Stranger",
  "Distant Horizon",
  "Whispered Secret"
];

export const generateRandomNickname = (): string => {
  const randomIndex = Math.floor(Math.random() * nicknameOptions.length);
  return nicknameOptions[randomIndex];
};
