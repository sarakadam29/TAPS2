import { useNavigate } from "react-router";
import { Home } from "lucide-react";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-5"
      style={{ backgroundColor: 'var(--bg-base)' }}
    >
      <div className="text-center max-w-md">
        <h1 
          className="font-clash text-[120px] leading-none mb-4"
          style={{
            background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-tertiary) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          404
        </h1>
        <h2 
          className="font-clash text-2xl mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          Page not found
        </h2>
        <p 
          className="text-base mb-8"
          style={{ color: 'var(--text-secondary)' }}
        >
          Looks like this page got ghosted 👻
        </p>
        <button
          onClick={() => navigate("/home")}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold"
          style={{
            backgroundColor: 'var(--accent-primary)',
            color: 'white',
            boxShadow: '0 0 20px rgba(232,130,154,0.30)',
          }}
        >
          <Home size={18} />
          Back to Home
        </button>
      </div>
    </div>
  );
}
