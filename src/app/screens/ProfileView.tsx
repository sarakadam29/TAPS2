import { useNavigate, useParams } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, MapPin, Briefcase, GraduationCap, Heart, X, MessageCircle, Star } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { Sidebar } from "../components/Sidebar";
import { mockUsers } from "../data/mockUsers";


const vibes = ["Coffee dates ☕", "Night owl 🦉", "Foodie 🍜", "Travel bug ✈️", "Music lover 🎵"];

export function ProfileView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const profile = mockUsers.find(u => u.id.toString() === id) || mockUsers[0];

  return (
    <>
      <Sidebar />
      <div className="min-h-screen pb-20 lg:pb-0 lg:ml-[280px]" style={{ backgroundColor: 'var(--bg-base)' }}>
        {/* Header photo */}
        <div className="relative w-full h-[420px] lg:h-[480px]">
          <img
            src={profile.imageUrl}
            alt="Profile"
            className="w-full h-full object-cover"
          />

          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: 'var(--bg-surface)',
              boxShadow: '0 2px 10px rgba(44,32,56,0.08)',
            }}
          >
            <ArrowLeft size={20} style={{ color: 'var(--text-primary)' }} />
          </button>

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(253,238,230,0.95) 0%, transparent 60%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="px-5 -mt-20 relative z-10">
          {/* Premium badge */}
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

          {/* Name & Age */}
          <div className="flex items-center gap-2 mb-2">
            <h1 className="font-clash text-[28px] leading-tight" style={{ color: 'var(--text-primary)' }}>
              {profile.name}, {profile.age}
            </h1>
            <div 
              className="w-5 h-5 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--accent-mint)' }}
            >
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 mb-4">
            <MapPin size={14} style={{ color: 'var(--text-secondary)' }} />
            <p className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>
              {profile.location} · {profile.distance}
            </p>
          </div>

          {/* Stats pills */}
          <div className="flex gap-2 mb-6 flex-wrap">
            <div 
              className="px-3 py-1.5 rounded-full text-xs border flex items-center gap-1.5"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-secondary)',
              }}
            >
              <Briefcase size={12} />
              Product Designer
            </div>
            <div 
              className="px-3 py-1.5 rounded-full text-xs border flex items-center gap-1.5"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-secondary)',
              }}
            >
              <GraduationCap size={12} />
              NIFT Mumbai
            </div>
          </div>

          {/* About section */}
          <div className="mb-6">
            <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              About
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {profile.bio || "No bio available."}
            </p>
          </div>

          {/* Vibes section */}
          <div className="mb-6">
            <h3 className="text-base font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              My Vibes
            </h3>
            <div className="flex flex-wrap gap-2">
              {(profile.interests || vibes).map((vibe, i) => (
                <div
                  key={i}
                  className="px-3 py-2 rounded-full text-[13px] font-medium"
                  style={{
                    backgroundColor: 'var(--accent-primary-soft)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {vibe}
                </div>
              ))}
            </div>
          </div>

          {/* Photo grid */}
          <div className="mb-6">
            <h3 className="text-base font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              More Photos
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {(profile.images || [profile.imageUrl]).map((imgSrc, i) => (
                <div 
                  key={i}
                  className="aspect-square rounded-xl overflow-hidden"
                  style={{ backgroundColor: 'var(--bg-elevated)' }}
                >
                  <img
                    src={imgSrc}
                    alt={`Photo ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action bar - Fixed at bottom */}
        <div 
          className="fixed bottom-20 lg:bottom-0 left-0 right-0 p-5 lg:ml-[280px]"
          style={{ backgroundColor: 'var(--bg-base)' }}
        >
          <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
            {/* Pass button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
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
      </div>
      <BottomNav />
    </>
  );
}
