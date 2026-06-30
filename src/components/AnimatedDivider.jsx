import React from 'react';

const AnimatedDivider = ({ color = '#F0F0EB' }) => {
  return (
    <div className="w-full relative h-[40px] md:h-[80px] -mt-[40px] md:-mt-[80px] z-10 pointer-events-none">
      <svg 
        viewBox="0 0 1440 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover sm:object-fill"
        preserveAspectRatio="none"
      >
        <path 
          d="M0 80L1440 80V40C1440 40 1080 0 720 0C360 0 0 40 0 40V80Z" 
          fill={color}
        />
      </svg>
    </div>
  );
};

export default AnimatedDivider;
