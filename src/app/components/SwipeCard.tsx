import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MapPin, Star } from "lucide-react";

interface SwipeCardProps {
  name: string;
  age: number;
  location: string;
  distance: string;
  bio: string;
  isPremium?: boolean;
  imageUrl: string;
  onSwipe?: (direction: "left" | "right") => void;
}

export function SwipeCard({
  name,
  age,
  location,
  distance,
  bio,
  isPremium,
  imageUrl,
  onSwipe,
}: SwipeCardProps) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 0, 1, 0]);
  const likeOpacity = useTransform(x, [20, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, -20], [1, 0]);

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(e, { offset, velocity }) => {
        const swipe = Math.abs(offset.x) * velocity.x;
        if (swipe > 10000) {
          onSwipe?.(offset.x > 0 ? "right" : "left");
        }
      }}
      className="relative w-full h-[480px] lg:w-[460px] lg:h-[580px] rounded-3xl lg:rounded-[28px] overflow-hidden cursor-grab active:cursor-grabbing border border-white/10"
      style={{
        x, 
        rotate,
        boxShadow: '0 20px 60px -10px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Photo */}
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover"
      />

      {/* LIKE Overlay */}
      <motion.div
        className="absolute top-10 left-10 z-20 px-6 py-2 border-4 border-green-500 rounded-xl"
        style={{ opacity: likeOpacity, rotate: -15 }}
      >
        <span className="text-4xl font-bold text-green-500 tracking-wider">LIKE</span>
      </motion.div>

      {/* NOPE Overlay */}
      <motion.div
        className="absolute top-10 right-10 z-20 px-6 py-2 border-4 border-rose-500 rounded-xl"
        style={{ opacity: nopeOpacity, rotate: 15 }}
      >
        <span className="text-4xl font-bold text-rose-500 tracking-wider">NOPE</span>
      </motion.div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(9,9,11,1) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
        {/* Premium badge */}
        {isPremium && (
          <div 
            className="inline-flex items-center gap-1 px-2 py-1 rounded-full mb-2 text-[11px] font-bold tracking-wide"
            style={{
              backgroundColor: 'var(--accent-gold-soft)',
              color: 'var(--accent-gold)',
            }}
          >
            <Star size={12} fill="currentColor" />
            PREMIUM
          </div>
        )}

        {/* Name & Age */}
        <h2 className="font-clash text-[28px] lg:text-[32px] leading-tight tracking-tight text-white mb-1">
          {name}, {age}
        </h2>

        {/* Location */}
        <div className="flex items-center gap-1 mb-3">
          <MapPin size={13} style={{ color: 'var(--text-secondary)' }} />
          <p className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>
            {location} · {distance}
          </p>
        </div>

        {/* Stats pills */}
        <div className="flex gap-2">
          <div 
            className="px-3 py-1.5 rounded-full text-xs border"
            style={{
              backgroundColor: 'rgba(255,240,245,0.90)',
              borderColor: 'rgba(237,217,232,0.60)',
              color: 'var(--text-primary)',
            }}
          >
            {bio}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
