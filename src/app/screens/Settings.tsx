import { useState } from "react";
import { useNavigate } from "react-router";
import { 
  User, Bell, Lock, Heart, HelpCircle, LogOut, ChevronRight, 
  Sparkles, Shield, Eye, MessageCircle 
} from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { Sidebar } from "../components/Sidebar";

const settingsSections = [
  {
    title: "Account",
    items: [
      { icon: User, label: "Edit Profile", hasChevron: true },
      { icon: Eye, label: "Privacy Settings", hasChevron: true },
      { icon: Bell, label: "Notifications", hasToggle: true },
      { icon: Lock, label: "Password & Security", hasChevron: true },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: Heart, label: "Discovery Settings", hasChevron: true },
      { icon: MessageCircle, label: "Chat Settings", hasChevron: true },
      { icon: Shield, label: "Blocked Users", hasChevron: true },
    ],
  },
  {
    title: "Support",
    items: [
      { icon: HelpCircle, label: "Help & Support", hasChevron: true },
      { icon: LogOut, label: "Log Out", isDanger: true },
    ],
  },
];

export function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <Sidebar />
      <div className="min-h-screen pb-20 lg:pb-8 lg:ml-[280px]" style={{ backgroundColor: 'var(--bg-base)' }}>
        {/* Header */}
        <div className="px-5 pt-8 pb-6">
          <h1 className="font-clash text-[28px] leading-tight" style={{ color: 'var(--text-primary)' }}>
            Settings
          </h1>
        </div>

        {/* Premium banner */}
        <div className="mx-5 mb-6">
          <button 
            className="w-full p-4 rounded-2xl border-l-[3px] flex items-center justify-between transition-all duration-200 hover:scale-[1.01]"
            style={{
              backgroundColor: 'var(--accent-primary-pale)',
              borderColor: 'var(--accent-primary)',
            }}
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--accent-primary)' }}
              >
                <Sparkles size={20} style={{ color: 'white' }} />
              </div>
              <div className="text-left">
                <p className="font-bold text-sm mb-0.5" style={{ color: 'var(--accent-primary)' }}>
                  Upgrade to TAPS Premium
                </p>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  Unlimited likes, see who likes you & more
                </p>
              </div>
            </div>
            <ChevronRight size={20} style={{ color: 'var(--accent-primary)' }} />
          </button>
        </div>

        {/* Settings sections */}
        <div className="space-y-6 px-5 max-w-2xl">
          {settingsSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {/* Section header */}
              <h3 
                className="text-xs font-bold tracking-wider uppercase mb-3 px-1"
                style={{ color: 'var(--text-tertiary)' }}
              >
                {section.title}
              </h3>

              {/* Section items */}
              <div 
                className="rounded-2xl overflow-hidden border"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                {section.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  const isLast = itemIndex === section.items.length - 1;

                  return (
                    <div key={itemIndex}>
                      <button
                        onClick={() => {
                          if (item.hasToggle) {
                            setNotificationsEnabled(!notificationsEnabled);
                          }
                        }}
                        className="w-full h-[52px] px-4 flex items-center justify-between transition-all duration-200 hover:bg-opacity-50"
                        style={{
                          backgroundColor: 'transparent',
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <Icon 
                            size={20} 
                            style={{ 
                              color: item.isDanger ? '#E8829A' : 'var(--text-secondary)' 
                            }} 
                          />
                          <span 
                            className="text-[15px] font-medium"
                            style={{ 
                              color: item.isDanger ? '#E8829A' : 'var(--text-primary)' 
                            }}
                          >
                            {item.label}
                          </span>
                        </div>

                        {/* Right side */}
                        {item.hasChevron && (
                          <ChevronRight size={18} style={{ color: 'var(--text-tertiary)' }} />
                        )}
                        {item.hasToggle && (
                          <div 
                            className="relative w-12 h-7 rounded-full transition-all duration-200 cursor-pointer"
                            style={{
                              backgroundColor: notificationsEnabled 
                                ? 'var(--accent-primary)' 
                                : 'var(--border-subtle)',
                            }}
                          >
                            <div 
                              className="absolute top-1 w-5 h-5 rounded-full bg-white transition-all duration-200"
                              style={{
                                left: notificationsEnabled ? '26px' : '4px',
                              }}
                            />
                          </div>
                        )}
                      </button>

                      {/* Divider */}
                      {!isLast && (
                        <div 
                          className="h-px ml-14"
                          style={{ backgroundColor: 'var(--border-subtle)' }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* App version */}
        <div className="text-center mt-12 mb-8">
          <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
            TAPS v2.0 · Made with ❤️ in India
          </p>
        </div>
      </div>
      <BottomNav />
    </>
  );
}
