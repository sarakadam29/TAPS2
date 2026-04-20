import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Moon, Dices, Ghost, Shield } from "lucide-react";

const onboardingSteps = [
  {
    title: "Your vibe starts here",
    description: "Real people. Real connections. Zero ghosts.",
    Icon: Sparkles,
  },
  {
    title: "Pick Your Vibe",
    description: "Tell us what you're looking for",
    Icon: Moon,
    options: [
      { text: "Something real 💫", emoji: "💫" },
      { text: "Just vibing ✨", emoji: "✨" },
      { text: "Casual hang 🌙", emoji: "🌙" },
      { text: "Let fate decide 🎲", emoji: "🎲" },
    ],
  },
  {
    title: "No Ghost Mode™",
    description: "Reply within 24 hours or matches expire. Keep the convo alive.",
    Icon: Ghost,
  },
  {
    title: "Every profile is real",
    description: "All profiles are verified. No bots, no catfish, just vibes.",
    Icon: Shield,
  },
];

export function Onboarding() {
  const [step, setStep] = useState(0);
  const [selectedVibe, setSelectedVibe] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < onboardingSteps.length - 1) {
      setStep(step + 1);
    } else {
      navigate("/login");
    }
  };

  const handleSkip = () => {
    navigate("/login");
  };

  const currentStep = onboardingSteps[step];
  const CurrentIcon = currentStep.Icon;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-base)' }}>
      {/* Header */}
      <div className="flex justify-between items-center p-5 pt-14">
        {/* Progress dots */}
        <div className="flex gap-2">
          {onboardingSteps.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300`}
              style={{
                width: i === step ? '10px' : '8px',
                height: i === step ? '10px' : '8px',
                backgroundColor: i === step ? 'var(--accent-primary)' : 'var(--border-subtle)',
              }}
            />
          ))}
        </div>

        {/* Skip button */}
        <button
          onClick={handleSkip}
          className="text-[13px] font-medium"
          style={{ color: 'var(--text-tertiary)' }}
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-5 pb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col"
          >
            {/* Illustration zone (55% of content) */}
            <div className="flex-1 flex items-center justify-center mb-8">
              <div className="relative">
                {/* Abstract background shape */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.15 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 -m-20"
                >
                  <div 
                    className="w-64 h-64 rounded-full blur-3xl mx-auto"
                    style={{
                      background: `linear-gradient(135deg, var(--accent-primary-soft) 0%, var(--accent-tertiary-soft) 100%)`
                    }}
                  />
                </motion.div>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="relative z-10"
                >
                  <CurrentIcon 
                    size={120} 
                    strokeWidth={1.5}
                    style={{ color: 'var(--accent-primary)' }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Text zone (45% of content) */}
            <div className="space-y-4">
              <h1 
                className="font-clash text-4xl leading-tight tracking-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                {currentStep.title}
              </h1>
              
              <p 
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {currentStep.description}
              </p>

              {/* Options for step 2 */}
              {currentStep.options && (
                <div className="grid grid-cols-2 gap-3 pt-4">
                  {currentStep.options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedVibe(i)}
                      className="p-4 rounded-2xl border transition-all duration-200"
                      style={{
                        backgroundColor: selectedVibe === i ? 'var(--accent-primary-soft)' : 'var(--bg-surface)',
                        borderColor: selectedVibe === i ? 'var(--accent-primary)' : 'var(--border-subtle)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      <div className="text-2xl mb-1">{option.emoji}</div>
                      <div className="text-sm font-medium">{option.text}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA Button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleNext}
          className="w-full h-14 rounded-full text-sm font-bold tracking-wider transition-all duration-200"
          style={{
            backgroundColor: 'var(--accent-primary)',
            color: 'var(--text-on-accent)',
            boxShadow: '0 0 20px rgba(232,130,154,0.30)',
          }}
        >
          {step === onboardingSteps.length - 1 ? "Get Started" : "Continue"}
        </motion.button>
      </div>
    </div>
  );
}
