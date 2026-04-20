import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { Sidebar } from "../components/Sidebar";

import { filters, stories, mockUsers as profiles } from "../data/mockUsers";


export function Explore() {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  return (
    <>
      <Sidebar />
      <div className="min-h-screen pb-20 lg:pb-8 lg:ml-[280px]" style={{ backgroundColor: 'var(--bg-base)' }}>
        {/* Header */}
        <div className="px-5 pt-8 pb-4">
          <h1 className="font-clash text-[32px] leading-tight" style={{ color: 'var(--text-primary)' }}>
            Explore
          </h1>
        </div>

        {/* Filter chips */}
        <div className="flex gap-2 px-5 pb-4 overflow-x-auto scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition-all duration-200"
              style={{
                backgroundColor: activeFilter === filter ? 'var(--accent-primary-soft)' : 'var(--bg-surface)',
                borderColor: activeFilter === filter ? 'var(--accent-primary)' : 'var(--border-subtle)',
                color: activeFilter === filter ? 'var(--accent-primary)' : 'var(--text-secondary)',
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Story avatars */}
        <div className="flex gap-3 px-5 pb-6 overflow-x-auto scrollbar-hide">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center gap-1.5 flex-shrink-0">
              <div 
                className="w-16 h-16 rounded-full p-0.5"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-tertiary) 100%)',
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden border-2" style={{ borderColor: 'var(--bg-base)' }}>
                  <img
                    src={story.imageUrl}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                {story.name}
              </span>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-5">
          {profiles.map((profile, i) => (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              key={profile.id}
              onClick={() => navigate(`/profile/${profile.id}`)}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
              style={{
                boxShadow: '0 2px 10px rgba(44,32,56,0.08)',
              }}
            >
              {/* Photo */}
              <img
                src={profile.imageUrl}
                alt={profile.name}
                className="w-full h-full object-cover"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(253,238,230,0.95) 0%, transparent 50%)',
                }}
              />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                <h3 className="font-bold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
                  {profile.name}, {profile.age}
                </h3>
                <div className="flex items-center gap-1">
                  <MapPin size={12} style={{ color: 'var(--text-secondary)' }} />
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    {profile.distance} away
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      <BottomNav />
    </>
  );
}
