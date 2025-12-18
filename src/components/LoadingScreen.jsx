import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500;
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-darkBg overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Background Effects */}
          <div className="pointer-events-none absolute inset-0 aurora animate-aurora" />
          <div className="pointer-events-none absolute inset-0 grid-overlay opacity-20" />
          <div className="noise-overlay" />
          
          {/* Animated Blobs */}
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/20 blur-3xl rounded-full animate-blob" />
          <div className="absolute bottom-0 -right-10 w-80 h-80 bg-secondary/20 blur-3xl rounded-full animate-blob" style={{ animationDelay: '2s' }} />

          {/* Main Content Container */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Logo Circle */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                type: 'spring', 
                stiffness: 150,
                damping: 15 
              }}
            >
              {/* Outer glow ring */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary via-secondary to-primary blur-2xl opacity-40"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Main logo circle */}
              <motion.div
                className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-2xl shadow-primary/50 animate-float"
                animate={{
                  boxShadow: [
                    '0 10px 30px -10px rgba(201, 162, 39, 0.5)',
                    '0 15px 50px -10px rgba(230, 199, 90, 0.6)',
                    '0 10px 30px -10px rgba(201, 162, 39, 0.5)',
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <span className="text-6xl font-extrabold text-white">HP</span>
              </motion.div>

              {/* Orbiting particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
                  style={{
                    top: '50%',
                    left: '50%',
                    marginTop: '-4px',
                    marginLeft: '-4px',
                    transformOrigin: `${50 + i * 20}px 0px`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: i * 0.4,
                    },
                    scale: {
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.4,
                    },
                  }}
                />
              ))}
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
                Haripriyan
              </h2>
              <p className="text-slate-400 text-sm font-medium">
                Full Stack Developer
              </p>
            </motion.div>

            {/* Progress Bar Container */}
            <motion.div
              className="w-80 max-w-[90vw]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {/* Progress Bar */}
              <div className="relative h-1.5 bg-cardBg rounded-full overflow-hidden border border-primary/20">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: 'linear' }}
                />
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>

              {/* Progress Percentage */}
              <motion.div
                className="flex justify-between items-center mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-xs text-slate-500 font-medium">Loading Portfolio</span>
                <span className="text-xs text-primary font-bold">{Math.round(progress)}%</span>
              </motion.div>
            </motion.div>

            {/* Floating dots animation */}
            <motion.div
              className="flex gap-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
                  animate={{
                    y: [0, -12, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Bottom tagline */}
          <motion.p
            className="absolute bottom-10 text-slate-600 text-xs font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Crafting innovative solutions...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
