import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Camera, Check } from "lucide-react";

const vibes = [
  "Coffee dates ☕", "Night owl 🦉", "Gym rat 💪", "Foodie 🍜",
  "Travel bug ✈️", "Movie buff 🎬", "Music lover 🎵", "Book worm 📚",
  "Adventure seeker 🏔️", "Homebody 🏠", "Party animal 🎉", "Beach bum 🏖️"
];

export function ProfileSetup() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const [selectedVibes, setSelectedVibes] = useState<number[]>([]);
  const navigate = useNavigate();

  const progress = ((step + 1) / 3) * 100;

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      navigate("/home");
    }
  };

  const toggleVibe = (index: number) => {
    if (selectedVibes.includes(index)) {
      setSelectedVibes(selectedVibes.filter(i => i !== index));
    } else if (selectedVibes.length < 5) {
      setSelectedVibes([...selectedVibes, index]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-base)' }}>
      {/* Progress bar */}
      <div className="w-full h-1" style={{ backgroundColor: 'var(--border-subtle)' }}>
        <motion.div
          initial={{ width: "33%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
          className="h-full"
          style={{ backgroundColor: 'var(--accent-primary)' }}
        />
      </div>

      {/* Step label */}
      <div className="px-5 pt-4 pb-2">
        <p className="text-xs font-medium" style={{ color: 'var(--text-tertiary)' }}>
          Step {step + 1} of 3
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 px-5 pb-8 overflow-y-auto">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6 pt-4"
        >
          {step === 0 && (
            <>
              <h1 className="font-clash text-[32px] leading-tight" style={{ color: 'var(--text-primary)' }}>
                Add your photo
              </h1>

              {/* Photo upload */}
              <div className="flex justify-center py-8">
                <button 
                  className="relative w-32 h-32 rounded-full border-2 border-dashed flex items-center justify-center transition-all duration-200 hover:scale-105"
                  style={{ borderColor: 'var(--accent-primary)' }}
                >
                  <Camera size={32} style={{ color: 'var(--accent-primary)' }} />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                    style={{ backgroundColor: 'var(--accent-primary)' }}
                  >
                    <span className="text-white text-lg">+</span>
                  </div>
                </button>
              </div>

              <p className="text-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                Add at least one photo to continue
              </p>
            </>
          )}

          {step === 1 && (
            <>
              <h1 className="font-clash text-[32px] leading-tight" style={{ color: 'var(--text-primary)' }}>
                About you
              </h1>

              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                    NAME
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full h-[52px] px-4 rounded-xl border focus:outline-none transition-all duration-200"
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-primary)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--border-active)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(176,158,232,0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-subtle)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Age */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                    AGE
                  </label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="18+"
                    className="w-full h-[52px] px-4 rounded-xl border focus:outline-none transition-all duration-200"
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-primary)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--border-active)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(176,158,232,0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-subtle)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                    BIO
                  </label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Tell us about yourself..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-all duration-200 resize-none"
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-primary)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--border-active)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(176,158,232,0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-subtle)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="font-clash text-[32px] leading-tight" style={{ color: 'var(--text-primary)' }}>
                Pick your vibes
              </h1>
              
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Choose up to 5 tags that describe you
              </p>

              <div className="grid grid-cols-3 gap-2 pt-2">
                {vibes.map((vibe, i) => (
                  <button
                    key={i}
                    onClick={() => toggleVibe(i)}
                    className="relative px-3 py-2.5 rounded-full text-[13px] font-medium transition-all duration-200 border"
                    style={{
                      backgroundColor: selectedVibes.includes(i) ? 'var(--accent-primary-soft)' : 'var(--bg-elevated)',
                      borderColor: selectedVibes.includes(i) ? 'var(--accent-primary)' : 'var(--border-subtle)',
                      color: selectedVibes.includes(i) ? 'var(--accent-primary)' : 'var(--text-primary)',
                    }}
                  >
                    {vibe}
                    {selectedVibes.includes(i) && (
                      <div 
                        className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: 'var(--accent-primary)' }}
                      >
                        <Check size={12} style={{ color: 'white' }} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <div className="p-5 pt-2">
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
          {step === 2 ? "Complete Profile" : "Continue"}
        </motion.button>
      </div>
    </div>
  );
}
