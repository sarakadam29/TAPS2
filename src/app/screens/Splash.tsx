import { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { FloatingHearts3D } from "../components/FloatingHearts3D";

export function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: 'var(--bg-base)' }}>
      {/* Soft radial gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle 300px at 50% 40%, var(--bg-muted) 0%, var(--bg-base) 70%)'
        }}
      />
      
      {/* Decorative blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute w-64 h-64 rounded-full blur-3xl"
        style={{ 
          backgroundColor: 'var(--accent-primary-soft)',
          top: '20%',
          left: '10%'
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute w-80 h-80 rounded-full blur-3xl"
        style={{ 
          backgroundColor: 'var(--accent-tertiary-soft)',
          bottom: '15%',
          right: '5%'
        }}
      />

      <FloatingHearts3D count={10} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-md px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-clash text-[56px] leading-[60px] tracking-[-1.5px]"
          style={{ color: 'var(--text-primary)' }}
        >
          TAPS
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-3 text-base"
          style={{ color: 'var(--text-secondary)' }}
        >
          Daddy se Baddie tak
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 h-0.5 w-20 rounded-full"
          style={{
            background: 'linear-gradient(90deg, var(--accent-primary) 0%, var(--accent-tertiary) 100%)'
          }}
        />

        {/* Loading dots */}
        <div className="flex gap-2 mt-12">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2,
              }}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--accent-primary)' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
