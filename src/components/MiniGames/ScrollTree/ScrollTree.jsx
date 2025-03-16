import React, { useState, useEffect } from 'react';
import './ScrollTree.css';

const ScrollTree = () => {
  const [height, setHeight] = useState(0);

  const handleScroll = () => {
    setHeight(prev => prev + 5);
  };

  return (
    <div className="scroll-tree" onWheel={handleScroll}>
      <div className="tree" style={{ height: `${height}px` }}></div>
      <p>Tree Height: {height}px</p>
    </div>
  );
};

export default ScrollTree;

