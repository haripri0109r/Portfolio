import React, { useRef, useState, useCallback, useLayoutEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const [pageHeight, setPageHeight] = useState(0);

  const resizePageHeight = useCallback((entries) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    );
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const { scrollY } = useScroll();
  
  // Ultra-smooth glide settings (low stiffness, balanced damping to prevent wobble)
  const smoothY = useSpring(scrollY, {
    stiffness: 50,
    damping: 20,
    mass: 1.2,
    restDelta: 0.001
  });
  
  const y = useTransform(smoothY, (v) => `-${v}px`);

  return (
    <>
      {/* Invisible div that creates the native scrollbar height */}
      <div style={{ height: pageHeight }} />
      
      {/* The visible content that translates smoothly */}
      <motion.div
        ref={scrollRef}
        style={{ y }}
        className="fixed top-0 left-0 w-full overflow-hidden will-change-transform"
      >
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;
