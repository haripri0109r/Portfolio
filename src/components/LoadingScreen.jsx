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


            {/* Loading Text */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
                Haripriyan A.
              </h2>
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
