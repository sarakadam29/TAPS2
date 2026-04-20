import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { mockUsers, mockMessages as messages } from "../data/mockUsers";

import { ArrowLeft, Send, Clock } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { Sidebar } from "../components/Sidebar";

export function Chat() {
  const { id } = useParams();
  const chatUser = mockUsers.find(u => u.id.toString() === id) || mockUsers[1];

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSend = () => {
    if (message.trim()) {
      // Handle send
      setMessage("");
    }
  };

  return (
    <>
      <Sidebar />
      <div className="min-h-screen flex flex-col pb-20 lg:pb-0 lg:ml-[280px]" style={{ backgroundColor: 'var(--bg-base)' }}>
        {/* Top bar */}
        <div 
          className="h-16 px-4 flex items-center gap-3 border-b"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          <button onClick={() => navigate(-1)} className="p-2 lg:hidden">
            <ArrowLeft size={20} style={{ color: 'var(--text-primary)' }} />
          </button>

          {/* Avatar */}
          <div className="relative">
            <div className="w-9 h-9 rounded-full overflow-hidden">
              <img
                src={chatUser.imageUrl}
                alt={chatUser.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Online indicator */}
            <div 
              className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2"
              style={{ 
                backgroundColor: 'var(--status-online)',
                borderColor: 'var(--bg-surface)',
              }}
            />
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>
              {chatUser.name}
            </h3>
            <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
              Active now
            </p>
          </div>
        </div>

        {/* No Ghost Mode Banner */}
        <div 
          className="mx-4 my-3 p-3 rounded-lg border-l-[3px] flex items-center justify-between"
          style={{
            backgroundColor: 'var(--accent-secondary-pale)',
            borderColor: 'var(--accent-secondary)',
          }}
        >
          <div className="flex-1">
            <p className="text-[13px] font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
              Reply within 24 hours to keep this match alive
            </p>
            <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-secondary)' }}>
              <Clock size={12} />
              <span>18 hours remaining</span>
            </div>
          </div>
          <button 
            className="ml-3 px-4 py-2 rounded-full text-xs font-bold"
            style={{
              backgroundColor: 'var(--accent-secondary)',
              color: 'white',
            }}
          >
            Reply Now
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}
            >
              <div className="max-w-[260px] lg:max-w-[360px]">
                <div
                  className={`px-4 py-3 ${
                    msg.sent
                      ? 'rounded-3xl rounded-br-md'
                      : 'rounded-3xl rounded-bl-md border'
                  }`}
                  style={{
                    backgroundColor: msg.sent ? 'var(--accent-primary)' : 'var(--bg-surface)',
                    borderColor: msg.sent ? 'transparent' : 'var(--border-subtle)',
                    color: msg.sent ? 'white' : 'var(--text-primary)',
                    boxShadow: msg.sent ? 'none' : '0 1px 4px rgba(176,158,232,0.10)',
                  }}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
                <p 
                  className={`text-[10px] mt-1 ${msg.sent ? 'text-right' : 'text-left'}`}
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input bar */}
        <div 
          className="p-4 border-t"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          <div className="flex items-center gap-2 max-w-4xl mx-auto">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 h-11 px-4 rounded-full border-none focus:outline-none"
              style={{
                backgroundColor: 'var(--bg-elevated)',
                color: 'var(--text-primary)',
              }}
            />
            <button
              onClick={handleSend}
              disabled={!message.trim()}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                backgroundColor: message.trim() ? 'var(--accent-primary)' : 'var(--border-subtle)',
                opacity: message.trim() ? 1 : 0.5,
              }}
            >
              <Send size={18} style={{ color: 'white' }} />
            </button>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
}
