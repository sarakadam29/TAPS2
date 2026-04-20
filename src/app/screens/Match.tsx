import { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Heart, Clock } from "lucide-react";
import confetti from "canvas-confetti";
import { mockUsers } from "../data/mockUsers";
import { FloatingHearts3D } from "../components/FloatingHearts3D";

export function Match() {
  const navigate = useNavigate();
  const you = mockUsers[0];
  const matchUser = mockUsers[1];

  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 50 * (timeLeft / duration);
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ['#f43f5e', '#8b5cf6', '#06b6d4']
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-5 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-base)' }}
    >
      {/* Radial gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle 400px at 50% 35%, var(--accent-primary-soft) 0%, var(--bg-base) 65%)'
        }}
      />

      <FloatingHearts3D count={25} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-md">
        {/* Overlapping photos */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          {/* Left photo */}
          <motion.div
            initial={{ x: -20, rotate: -8 }}
            animate={{ x: 0, rotate: -8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-32 h-32 rounded-full border-[3px] overflow-hidden"
            style={{
              borderImage: 'linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary)) 1',
              boxShadow: '0 4px 24px rgba(44,32,56,0.10)',
            }}
          >
            <img
              src={you.imageUrl}
              alt="You"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right photo */}
          <motion.div
            initial={{ x: 20, rotate: 8 }}
            animate={{ x: 0, rotate: 8 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-32 h-32 rounded-full border-[3px] overflow-hidden absolute top-0 left-20"
            style={{
              borderImage: 'linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary)) 1',
              boxShadow: '0 4px 24px rgba(44,32,56,0.10)',
            }}
          >
            <img
              src={matchUser.imageUrl}
              alt="Match"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Floating heart */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5, type: "spring" }}
            className="absolute top-12 left-12 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ 
              backgroundColor: 'var(--accent-primary)',
              boxShadow: '0 4px 16px rgba(232,130,154,0.40)',
            }}
          >
            <Heart size={20} fill="white" style={{ color: 'white' }} />
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-xl mb-2" style={{ color: 'var(--text-secondary)' }}>
            it's a
          </p>
          <h1 
            className="font-clash text-[56px] leading-tight tracking-[-1.5px]"
            style={{ color: 'var(--text-primary)' }}
          >
            match
          </h1>
          <p 
            className="text-[15px] max-w-[280px] mx-auto mt-3"
            style={{ color: 'var(--text-secondary)' }}
          >
            You and {matchUser.name} liked each other!
          </p>
        </motion.div>

        {/* 24hr pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
          style={{
            backgroundColor: 'var(--accent-primary-pale)',
            borderColor: 'var(--accent-primary)',
            color: 'var(--accent-primary)',
          }}
        >
          <Clock size={16} />
          <span className="text-sm font-medium">23:59 remaining</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-full space-y-3"
        >
          <button
            onClick={() => navigate("/chat/1")}
            className="w-full h-14 rounded-full text-sm font-bold tracking-wider transition-all duration-200"
            style={{
              backgroundColor: 'var(--accent-secondary)',
              color: 'white',
              boxShadow: '0 0 18px rgba(244,162,97,0.28)',
            }}
          >
            CHAT NOW
          </button>

          <button
            onClick={() => navigate("/home")}
            className="w-full text-sm font-medium underline"
            style={{ color: 'var(--text-link)' }}
          >
            Keep swiping
          </button>
        </motion.div>
      </div>
    </div>
  );
}
