import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar, MessageSquare, Activity, Clock, ChevronRight,
  Sparkles, Smile
} from 'lucide-react';
import { mockPatient } from '../../mock/patient';
import { mockAppointments } from '../../mock/appointments';
import { InteractiveTooth3D } from '../widgets/InteractiveTooth3D';

interface Props {
  onBook: () => void;
  onChat: () => void;
  onTreatment: () => void;
  onAppointments: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 320,
      damping: 25,
    },
  },
};

export const HomeScreen: React.FC<Props> = ({ onBook, onChat, onTreatment, onAppointments }) => {
  const next = mockAppointments[0];
  const score = mockPatient.oralHealthScore;

  // Concentric Ring Calculations
  const r1 = 40; const c1 = 2 * Math.PI * r1; const off1 = c1 - (score / 100) * c1;
  const r2 = 30; const c2 = 2 * Math.PI * r2; const off2 = c2 - (24 / 30) * c2;
  const r3 = 20; const c3 = 2 * Math.PI * r3; const off3 = c3 - (18.5 / 22) * c3;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      style={{ display: 'flex', flexDirection: 'column', gap: 18 }}
    >
      {/* 1. Top Greeting Header */}
      <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img
            src={mockPatient.avatar}
            alt=""
            style={{
              width: 50, height: 50, borderRadius: 20, objectFit: 'cover',
              border: 'var(--theme-card-border)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            }}
          />
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Good Evening ✨
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
              {mockPatient.name.split(' ')[0]}
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <span
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '7px 14px', borderRadius: 99,
            background: 'var(--theme-card-bg)', backdropFilter: 'blur(20px)',
            border: 'var(--theme-card-border)',
            fontSize: 11, fontWeight: 800, color: 'var(--text-primary)',
            boxShadow: 'var(--theme-card-shadow)',
          }}
        >
          <Sparkles size={13} color="var(--accent-1)" />
          MetLife VIP
        </span>
      </motion.div>

      {/* 2. Live Activity Appointment Banner */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.01, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={onAppointments}
        className="theme-activity"
        style={{
          padding: '20px 22px',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          cursor: 'pointer',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ position: 'relative' }}>
            <img
              src={next.dentistAvatar}
              alt=""
              style={{
                width: 48, height: 48, borderRadius: 18, objectFit: 'cover',
                border: '1.5px solid rgba(255,255,255,0.4)',
                boxShadow: '0 6px 18px rgba(0,0,0,0.3)',
              }}
            />
            <span style={{ position: 'absolute', bottom: -2, right: -2, width: 12, height: 12, borderRadius: 99, background: 'var(--accent-1)', border: '2px solid #000000' }} />
          </div>

          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Next Appointment · Tomorrow
            </div>
            <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--text-primary)', marginTop: 1, letterSpacing: '-0.02em' }}>
              {next.dentistName.split(',')[0]}
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 1, fontWeight: 600 }}>
              {next.serviceName} · {next.time}
            </div>
          </div>
        </div>

        <div style={{
          width: 38, height: 38, borderRadius: 16,
          background: 'var(--btn-primary-bg)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
        }}>
          <ChevronRight size={18} color="var(--btn-primary-text)" />
        </div>
      </motion.div>

      {/* 3. Health Index Hub with Concentric Rings */}
      <motion.div
        variants={itemVariants}
        className="theme-card"
        style={{ padding: 22, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Oral Wellness Index
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', marginTop: 2, letterSpacing: '-0.02em' }}>
            Excellent ✨
          </div>

          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, color: 'var(--text-primary)' }}>
              <span style={{ width: 8, height: 8, borderRadius: 99, background: 'var(--accent-1)' }} />
              <span>Overall Score: <strong>88%</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, color: 'var(--text-primary)' }}>
              <span style={{ width: 8, height: 8, borderRadius: 99, background: 'var(--accent-2)' }} />
              <span>Floss Streak: <strong>24 Days</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, color: 'var(--text-primary)' }}>
              <span style={{ width: 8, height: 8, borderRadius: 99, background: 'var(--accent-3)' }} />
              <span>Aligner Wear: <strong>18.5/22 hrs</strong></span>
            </div>
          </div>
        </div>

        {/* Concentric Rings */}
        <div style={{ position: 'relative', width: 104, height: 104 }}>
          <svg width="104" height="104" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
            {/* Outer Ring */}
            <circle cx="50" cy="50" r={r1} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="7" />
            <motion.circle
              cx="50" cy="50" r={r1} fill="none"
              stroke="var(--accent-1)" strokeWidth="7" strokeLinecap="round"
              strokeDasharray={c1}
              initial={{ strokeDashoffset: c1 }}
              animate={{ strokeDashoffset: off1 }}
              transition={{ duration: 1.3, ease: [0.2, 0.8, 0.2, 1] }}
            />

            {/* Middle Ring */}
            <circle cx="50" cy="50" r={r2} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
            <motion.circle
              cx="50" cy="50" r={r2} fill="none"
              stroke="var(--accent-2)" strokeWidth="7" strokeLinecap="round"
              strokeDasharray={c2}
              initial={{ strokeDashoffset: c2 }}
              animate={{ strokeDashoffset: off2 }}
              transition={{ duration: 1.3, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            />

            {/* Inner Ring */}
            <circle cx="50" cy="50" r={r3} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="7" />
            <motion.circle
              cx="50" cy="50" r={r3} fill="none"
              stroke="var(--accent-3)" strokeWidth="7" strokeLinecap="round"
              strokeDasharray={c3}
              initial={{ strokeDashoffset: c3 }}
              animate={{ strokeDashoffset: off3 }}
              transition={{ duration: 1.3, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            />
          </svg>
        </div>
      </motion.div>

      {/* 4. 3D Interactive Tooth Mapping Canvas */}
      <motion.div variants={itemVariants}>
        <InteractiveTooth3D />
      </motion.div>

      {/* 5. 4 Glass Action Widgets */}
      <motion.div variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {[
          {
            title: 'Book Visit',
            sub: 'Instant 3D Slot',
            icon: Calendar,
            onClick: onBook,
          },
          {
            title: 'Dentist Chat',
            sub: 'Dr. Vance Online',
            icon: MessageSquare,
            onClick: onChat,
          },
          {
            title: 'Aligner Plan',
            sub: 'Tray 3/5 • 60%',
            icon: Activity,
            onClick: onTreatment,
          },
          {
            title: 'Visits Log',
            sub: 'History & Scans',
            icon: Clock,
            onClick: onAppointments,
          },
        ].map((w) => {
          const Icon = w.icon;
          return (
            <motion.div
              key={w.title}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              onClick={w.onClick}
              className="theme-card theme-card-interactive"
              style={{
                padding: 18,
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                minHeight: 116,
                cursor: 'pointer',
              }}
            >
              <div style={{
                width: 42, height: 42, borderRadius: 16,
                background: 'var(--btn-primary-bg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 6px 18px rgba(0,0,0,0.15)',
              }}>
                <Icon size={20} color="var(--btn-primary-text)" strokeWidth={2} />
              </div>

              <div>
                <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                  {w.title}
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-secondary)', marginTop: 2 }}>
                  {w.sub}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* 6. Invisalign Stage 3 Aligner Card */}
      <motion.div
        variants={itemVariants}
        className="theme-card"
        style={{ padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 46, height: 46, borderRadius: 18,
            background: 'var(--btn-primary-bg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
          }}>
            <Smile size={22} color="var(--btn-primary-text)" strokeWidth={2} />
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--text-primary)' }}>Invisalign Stage 3</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 1, fontWeight: 600 }}>Upper incisor rotation · 4 days left</div>
          </div>
        </div>

        <button
          onClick={onTreatment}
          style={{
            padding: '7px 16px', borderRadius: 99,
            background: 'var(--btn-primary-bg)',
            border: 'none', fontSize: 11, fontWeight: 800, color: 'var(--btn-primary-text)', cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
          }}
        >
          Track
        </button>
      </motion.div>
    </motion.div>
  );
};
