import React, { ReactNode } from 'react';

interface HolographicUIProps {
  children: ReactNode;
}

const HolographicUI: React.FC<HolographicUIProps> = ({ children }) => {
  return (
    <div className="holographic-container">
      <div className="holo-projection">
        <div className="floating-interface">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HolographicUI;
