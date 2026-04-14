import React from 'react';

interface FolderCardProps {
  title: string;
  description: string;
  color?: string; 
  children?: React.ReactNode; 
}

const FolderCard = ({ title, description, color = "#3b82f6", children }: FolderCardProps) => {
  return (
    <div className="group relative w-full max-w-sm transition-transform duration-300 hover:-translate-y-2">
      <div 
        className="relative h-6 w-24 rounded-t-lg"
        style={{ 
          backgroundColor: color,
          clipPath: "polygon(0 0, 80% 0, 100% 100%, 0% 100%)" 
        }}
      ></div>
      <div 
        className="relative -mt-[2px] min-h-[180px] rounded-b-xl rounded-tr-xl p-6 shadow-xl border-t-4"
        style={{ 
          backgroundColor: '#1e293b', 
          borderColor: color,
          color: '#f8fafc'
        }}
      >
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          {description}
        </p>
        
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FolderCard;