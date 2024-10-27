import React from 'react';
import FeedInterface from '../components/FeedInterface';
import HolographicUI from '../components/HolographicUI';
import VRFeed from '../components/VirtualReality/VRFeed';
import HologramChat from '../components/Hologram/HologramChat';
import ThoughtShare from '../components/BrainInterface/ThoughtShare';

const Home: React.FC = () => {
  return (
    <div className="future-social">
      <HolographicUI>
        <FeedInterface />
        <VRFeed />
        <HologramChat />
        <ThoughtShare />
      </HolographicUI>
    </div>
  );
};

export default Home;
