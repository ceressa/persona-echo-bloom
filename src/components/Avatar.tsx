
import React from 'react';

type AvatarProps = {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
  };

  return (
    <div className={`rounded-full overflow-hidden ${sizeClasses[size]} ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Avatar;
