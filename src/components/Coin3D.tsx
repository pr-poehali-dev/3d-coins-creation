import { useState } from "react";

type CoinProps = {
  color: string;
  value: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
};

const Coin3D = ({ color, value, size = "md", onClick }: CoinProps) => {
  const [isFlipping, setIsFlipping] = useState(false);
  
  const handleClick = () => {
    if (!isFlipping) {
      setIsFlipping(true);
      setTimeout(() => setIsFlipping(false), 1000);
      onClick && onClick();
    }
  };
  
  const sizeClasses = {
    sm: "w-16 h-16 text-sm",
    md: "w-24 h-24 text-base",
    lg: "w-32 h-32 text-xl",
  };
  
  return (
    <div 
      className={`relative ${sizeClasses[size]} cursor-pointer perspective-500 select-none`}
      onClick={handleClick}
    >
      <div 
        className={`absolute w-full h-full rounded-full transform-style-3d transition-transform duration-1000 ${isFlipping ? 'rotate-y-180' : ''}`}
      >
        {/* Лицевая сторона */}
        <div 
          className={`absolute w-full h-full rounded-full flex items-center justify-center ${color} border-4 border-opacity-20 border-black backface-hidden shadow-lg`}
          style={{
            boxShadow: `0 6px 10px rgba(0, 0, 0, 0.3), inset 0 -8px 16px rgba(0, 0, 0, 0.2), inset 0 8px 12px rgba(255, 255, 255, 0.3)`,
          }}
        >
          <span className="font-bold">{value}</span>
        </div>
        
        {/* Обратная сторона */}
        <div 
          className={`absolute w-full h-full rounded-full flex items-center justify-center ${color} border-4 border-opacity-20 border-black backface-hidden rotate-y-180 shadow-lg`}
          style={{
            boxShadow: `0 6px 10px rgba(0, 0, 0, 0.3), inset 0 -8px 16px rgba(0, 0, 0, 0.2), inset 0 8px 12px rgba(255, 255, 255, 0.3)`,
          }}
        >
          <div className="grid grid-cols-3 gap-1 w-1/2 h-1/2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="bg-white bg-opacity-10 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin3D;
