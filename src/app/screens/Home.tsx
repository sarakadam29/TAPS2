import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Bell, SlidersHorizontal, Heart, X, MessageCircle } from "lucide-react";
import { SwipeCard } from "../components/SwipeCard";
import { BottomNav } from "../components/BottomNav";
import { Sidebar } from "../components/Sidebar";

import { mockUsers as profiles } from "../data/mockUsers";


export function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"for-you" | "nearby">("for-you");
  const navigate = useNavigate();

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "right" && Math.random() > 0.5) {
      // 50% chance of match
      navigate("/match");
    } else {
      setCurrentIndex((prev) => (prev + 1) % profiles.length);
    }
  };

  const handleLike = () => {
    handleSwipe("right");
  };

  const handlePass = () => {
    handleSwipe("left");
  };

  const currentProfile = profiles[currentIndex];

  return (
    <>
      <Sidebar />
      <div className="min-h-screen pb-20 lg:pb-0 lg:ml-[280px]" style={{ backgroundColor: 'var(--bg-base)' }}>
        {/* Top bar */}
        <div className="h-14 px-5 flex items-center justify-between">
          {/* Logo */}
          <h1 
            className="font-clash text-xl tracking-tight"
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-tertiary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            TAPS
          </h1>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button className="p-2">
              <Bell size={20} style={{ color: 'var(--text-secondary)' }} />
            </button>
            <button className="p-2">
              <SlidersHorizontal size={20} style={{ color: 'var(--text-secondary)' }} />
            </button>
          </div>
        </div>

        {/* Toggle */}
        <div className="px-5 mb-6">
          <div 
            className="inline-flex p-1 rounded-full"
            style={{ backgroundColor: 'var(--bg-elevated)' }}
          >
            <button
              onClick={() => setActiveTab("for-you")}
              className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: activeTab === "for-you" ? 'var(--accent-primary)' : 'transparent',
                color: activeTab === "for-you" ? 'white' : 'var(--text-secondary)',
              }}
            >
              FOR YOU
            </button>
            <button
              onClick={() => setActiveTab("nearby")}
              className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: activeTab === "nearby" ? 'var(--accent-primary)' : 'transparent',
                color: activeTab === "nearby" ? 'white' : 'var(--text-secondary)',
              }}
            >
              NEARBY
            </button>
          </div>
        </div>

        {/* Swipe Card */}
        <div className="flex justify-center px-5">
          <SwipeCard
            key={currentProfile.id}
            {...currentProfile}
            onSwipe={handleSwipe}
          />
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-center gap-4 mt-6 px-5">
          {/* Pass button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handlePass}
            className="w-[100px] lg:w-[120px] h-14 rounded-full border-[1.5px] flex items-center justify-center"
            style={{
              backgroundColor: 'var(--btn-pass)',
              borderColor: 'var(--btn-pass-border)',
              boxShadow: '0 1px 4px rgba(176,158,232,0.10)',
            }}
          >
            <X size={24} style={{ color: 'var(--btn-pass-icon)' }} />
          </motion.button>

          {/* Message button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full border flex items-center justify-center"
            style={{
              backgroundColor: 'var(--btn-message)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <MessageCircle size={20} style={{ color: 'var(--btn-message-icon)' }} />
          </motion.button>

          {/* Like button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleLike}
            className="w-[164px] h-14 rounded-full flex items-center justify-center gap-2"
            style={{
              backgroundColor: 'var(--accent-primary)',
              boxShadow: '0 0 20px rgba(232,130,154,0.30)',
            }}
          >
            <Heart size={20} fill="white" style={{ color: 'white' }} />
            <span className="text-white font-bold text-sm tracking-wide">LIKE</span>
          </motion.button>
        </div>
      </div>
      <BottomNav />
    </>
  );
}
