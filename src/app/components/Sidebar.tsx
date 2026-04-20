import { useNavigate, useLocation } from "react-router";
import { motion } from "motion/react";
import { Home, Heart, Compass, MessageCircle, Settings, Sparkles } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", path: "/home" },
  { icon: Heart, label: "Matches", path: "/match" },
  { icon: Compass, label: "Explore", path: "/explore" },
  { icon: MessageCircle, label: "Messages", path: "/chat/1" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div 
      className="hidden lg:flex lg:flex-col w-[280px] h-screen border-r fixed left-0 top-0 backdrop-blur-xl z-50"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      {/* Logo */}
      <div className="h-[72px] flex items-center px-6">
        <h1 
          className="font-clash text-2xl tracking-tight"
          style={{
            background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-tertiary) 50%, var(--accent-secondary) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          TAPS
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <motion.button
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.96 }}
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex items-center gap-3 w-full h-12 px-5 rounded-xl mb-1"
              style={{
                backgroundColor: active ? 'var(--accent-primary-soft)' : 'transparent',
                color: active ? 'var(--accent-primary)' : 'var(--text-secondary)',
              }}
            >
              <Icon size={20} strokeWidth={active ? 2.5 : 2} />
              <span className={`text-[15px] ${active ? 'font-semibold' : 'font-medium'}`}>
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </nav>

      {/* Premium CTA */}
      <div className="p-4">
        <motion.button 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="w-full p-4 rounded-2xl border"
          style={{
            backgroundColor: 'var(--accent-primary-soft)',
            borderColor: 'var(--accent-primary)',
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Sparkles size={16} style={{ color: 'var(--accent-primary)' }} />
            <span className="text-sm font-bold" style={{ color: 'var(--accent-primary)' }}>
              Go Premium
            </span>
          </div>
          <p className="text-xs text-left" style={{ color: 'var(--text-secondary)' }}>
            Unlock unlimited likes & more
          </p>
        </motion.button>
      </div>

      {/* User profile */}
      <div 
        onClick={() => navigate("/settings")}
        className="h-20 border-t px-4 flex items-center gap-3 cursor-pointer"
        style={{ borderColor: 'var(--border-subtle)' }}
      >
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
          style={{ backgroundColor: 'var(--accent-primary)' }}
        >
          A
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
            Alex
          </p>
          <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
            View profile
          </p>
        </div>
      </div>
    </div>
  );
}
