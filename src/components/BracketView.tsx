import React from 'react';

export const BracketView: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-between h-[240px] px-2 py-4 select-none">
      
      {/* Column 1: Quarter Finals (4 Teams) */}
      <div className="flex flex-col justify-between h-full w-[28%] z-10">
        <div className="h-8 w-full bg-[#3e4149] rounded-md" />
        <div className="h-8 w-full bg-[#3e4149] rounded-md" />
        <div className="h-8 w-full bg-[#3e4149] rounded-md" />
        <div className="h-8 w-full bg-[#3e4149] rounded-md" />
      </div>

      {/* Column 2: First Round Connectors */}
      <div className="flex flex-col justify-around h-full w-[8%] relative">
        {/* Upper bracket lines */}
        <div className="h-1/2 w-full relative">
          <div className="absolute top-[16px] left-0 w-1/2 h-[2px] bg-brand-red" />
          <div className="absolute bottom-[16px] left-0 w-1/2 h-[2px] bg-brand-red" />
          <div className="absolute top-[16px] bottom-[16px] right-1/2 w-[2px] bg-brand-red" />
          <div className="absolute top-1/2 right-0 w-1/2 h-[2px] bg-brand-red -translate-y-1/2" />
        </div>

        {/* Lower bracket lines */}
        <div className="h-1/2 w-full relative">
          <div className="absolute top-[16px] left-0 w-1/2 h-[2px] bg-brand-red" />
          <div className="absolute bottom-[16px] left-0 w-1/2 h-[2px] bg-brand-red" />
          <div className="absolute top-[16px] bottom-[16px] right-1/2 w-[2px] bg-brand-red" />
          <div className="absolute top-1/2 right-0 w-1/2 h-[2px] bg-brand-red -translate-y-1/2" />
        </div>
      </div>

      {/* Column 3: Semi Finals (2 Teams) */}
      <div className="flex flex-col justify-around h-full w-[28%] z-10">
        <div className="h-8 w-full bg-[#3e4149] rounded-md" />
        <div className="h-8 w-full bg-[#3e4149] rounded-md" />
      </div>

      {/* Column 4: Second Round Connectors */}
      <div className="flex flex-col justify-center h-full w-[8%] relative">
        <div className="h-[60%] w-full relative">
          <div className="absolute top-[16px] left-0 w-1/2 h-[2px] bg-brand-red" />
          <div className="absolute bottom-[16px] left-0 w-1/2 h-[2px] bg-brand-red" />
          <div className="absolute top-[16px] bottom-[16px] right-1/2 w-[2px] bg-brand-red" />
          <div className="absolute top-1/2 right-0 w-1/2 h-[2px] bg-brand-red -translate-y-1/2" />
        </div>
      </div>

      {/* Column 5: Grand Finals Winner (1 Team Box) */}
      <div className="flex flex-col justify-center h-full w-[28%] z-10">
        <div className="h-8 w-full bg-[#3e4149] rounded-md" />
      </div>

    </div>
  );
};
