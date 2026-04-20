import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ChevronDown } from "lucide-react";

export function Login() {
  const [phone, setPhone] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  const handleSendOTP = () => {
    if (phone.length >= 10) {
      setShowOTP(true);
    }
  };

  const handleOTPChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }

      // Navigate when all filled
      if (newOtp.every(d => d) && index === 5) {
        setTimeout(() => navigate("/setup"), 500);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:items-center lg:justify-center" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="w-full max-w-[480px] lg:rounded-3xl lg:p-12" style={{ backgroundColor: 'var(--bg-base)' }}>
        {/* Back button (mobile only) */}
        <button
          onClick={() => navigate(-1)}
          className="p-2 mb-8 lg:hidden"
          style={{ color: 'var(--text-primary)' }}
        >
          <ArrowLeft size={24} />
        </button>

        {!showOTP ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-5 lg:px-0"
          >
            <h1 
              className="font-clash text-[32px] leading-tight tracking-tight mt-8 lg:mt-0"
              style={{ color: 'var(--text-primary)' }}
            >
              Join TAPS
            </h1>
            
            <p className="mt-3 text-[15px]" style={{ color: 'var(--text-secondary)' }}>
              Enter your phone number to get started
            </p>

            <div className="mt-8 space-y-4">
              {/* Country code */}
              <div className="flex gap-3">
                <button 
                  className="flex items-center justify-between px-4 h-[52px] rounded-xl border min-w-[100px]"
                  style={{
                    backgroundColor: 'var(--bg-elevated)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <span style={{ color: 'var(--text-primary)' }}>🇮🇳 +91</span>
                  <ChevronDown size={16} style={{ color: 'var(--text-tertiary)' }} />
                </button>

                {/* Phone input */}
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone number"
                  className="flex-1 h-[52px] px-4 rounded-xl border focus:outline-none transition-all duration-200"
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

              {/* CTA */}
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleSendOTP}
                disabled={phone.length < 10}
                className="w-full h-14 rounded-full text-sm font-bold tracking-wider mt-6 transition-all duration-200"
                style={{
                  backgroundColor: phone.length >= 10 ? 'var(--accent-primary)' : '#F2D0D8',
                  color: phone.length >= 10 ? 'var(--text-on-accent)' : 'var(--text-tertiary)',
                  boxShadow: phone.length >= 10 ? '0 0 20px rgba(232,130,154,0.30)' : 'none',
                }}
              >
                Send OTP
              </motion.button>

              {/* Legal text */}
              <p className="text-[11px] leading-relaxed pt-4" style={{ color: 'var(--text-tertiary)' }}>
                By continuing, you agree to our Terms of Service and Privacy Policy. 
                We'll send you a verification code via SMS.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-5 lg:px-0"
          >
            <h1 
              className="font-clash text-[32px] leading-tight tracking-tight mt-8 lg:mt-0"
              style={{ color: 'var(--text-primary)' }}
            >
              Enter Code
            </h1>
            
            <p className="mt-3 text-[15px]" style={{ color: 'var(--text-secondary)' }}>
              We sent a code to +91 {phone}
            </p>

            {/* OTP Boxes */}
            <div className="flex gap-2.5 mt-8 justify-center">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  type="text"
                  inputMode="numeric"
                  value={digit}
                  onChange={(e) => handleOTPChange(i, e.target.value)}
                  maxLength={1}
                  className="w-12 h-14 text-center text-2xl font-bold rounded-xl border focus:outline-none transition-all duration-200"
                  style={{
                    backgroundColor: digit ? 'var(--bg-elevated)' : 'var(--bg-surface)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-primary)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--accent-primary)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(176,158,232,0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border-subtle)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              ))}
            </div>

            <button
              className="w-full mt-6 text-sm font-medium"
              style={{ color: 'var(--text-link)' }}
            >
              Resend code
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
