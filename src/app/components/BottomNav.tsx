import { useNavigate, useLocation } from "react-router";
import { motion } from "motion/react";
import { Home, Heart, Compass, MessageCircle, User } from "lucide-react";

const tabs = [
  { icon: Home, label: "Home", path: "/home" },
  { icon: Heart, label: "Matches", path: "/match" },
  { icon: Compass, label: "Explore", path: "/explore" },
  { icon: MessageCircle, label: "Messages", path: "/chat/1" },
  { icon: User, label: "Profile", path: "/settings" },
];

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 h-[72px] border-t lg:hidden backdrop-blur-xl z-50"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderColor: 'var(--border-subtle)',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.3)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div className="flex items-center justify-around h-full px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = isActive(tab.path);
          
          return (
            <motion.button
              whileTap={{ scale: 0.90 }}
              whileHover={{ scale: 1.05 }}
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center justify-center gap-1 flex-1 relative"
            >
              {active && (
                <div
                  className="absolute -top-2 w-5 h-0.5 rounded-full"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                />
              )}
              <Icon
                size={22}
                style={{ 
                  color: active ? 'var(--accent-primary)' : 'var(--text-tertiary)',
                  strokeWidth: active ? 2.5 : 2,
                }}
              />
              <span 
                className="text-[10px] font-medium"
                style={{ 
                  color: active ? 'var(--accent-primary)' : 'var(--text-tertiary)'
                }}
              >
                {tab.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
