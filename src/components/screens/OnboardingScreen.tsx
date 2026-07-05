import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Star, Zap } from 'lucide-react';

interface Props {
  onEnter: () => void;
  onBook: () => void;
}

export const OnboardingScreen: React.FC<Props> = ({ onEnter, onBook }) => (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 'calc(100vh - 40px)', paddingTop: 16, paddingBottom: 28 }}>
    {/* Top Badge */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{ textAlign: 'center' }}
    >
      <span
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '6px 16px', borderRadius: 99,
          background: 'var(--theme-card-bg)', backdropFilter: 'blur(20px)',
          border: 'var(--theme-card-border)',
          fontSize: 12, fontWeight: 700, color: 'var(--text-primary)',
          boxShadow: 'var(--theme-card-shadow)',
        }}
      >
        <Sparkles size={13} color="var(--accent-1)" /> Lumina Dental Experience
      </span>
    </motion.div>

    {/* Hero Graphic Card */}
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
      style={{ margin: '30px 0', textAlign: 'center' }}
    >
      {/* Icon */}
      <div
        style={{
          width: 80, height: 80, margin: '0 auto 24px', borderRadius: 26,
          background: 'var(--btn-primary-bg)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 16px 40px rgba(0,0,0,0.3)',
        }}
      >
        <Zap size={38} color="var(--btn-primary-text)" strokeWidth={2} />
      </div>

      <h1 style={{ fontSize: 34, fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.15, letterSpacing: '-0.035em' }}>
        Your Smile,<br />
        <span style={{ color: 'var(--text-secondary)' }}>Perfected.</span>
      </h1>

      <p style={{ marginTop: 14, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.55, maxWidth: 280, marginLeft: 'auto', marginRight: 'auto', fontWeight: 500 }}>
        Apple Health synced oral tracking, 3D intraoral mapping, and 1-tap specialist care.
      </p>
    </motion.div>

    {/* Trust Badges */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}
    >
      <div className="theme-card" style={{ padding: '16px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 40, height: 40, borderRadius: 14, background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ShieldCheck size={19} color="var(--text-primary)" strokeWidth={1.8} />
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--text-primary)' }}>Insured</div>
          <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>MetLife Verified</div>
        </div>
      </div>

      <div className="theme-card" style={{ padding: '16px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 40, height: 40, borderRadius: 14, background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Star size={19} color="var(--text-primary)" fill="var(--text-primary)" strokeWidth={1.8} />
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--text-primary)' }}>4.98 ★</div>
          <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>412 Reviews</div>
        </div>
      </div>
    </motion.div>

    {/* Actions */}
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
    >
      <button className="theme-btn-primary" onClick={onEnter}>
        Enter Patient Portal <ArrowRight size={18} />
      </button>

      <button className="theme-btn-secondary" onClick={onBook}>
        Book Appointment Fast
      </button>
    </motion.div>
  </div>
);
