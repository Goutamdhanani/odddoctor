import React from 'react';
import { motion, Variants } from 'framer-motion';
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 26,
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
      style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
    >
      {/* 1. Top Bar Header */}
      <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img
            src={mockPatient.avatar}
            alt=""
            style={{
              width: 48, height: 48, borderRadius: 99, objectFit: 'cover',
              border: '0.5px solid rgba(255,255,255,0.3)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.6)',
              filter: 'grayscale(100%)',
            }}
          />
          <div>
            <div className="apple-mono-subhead">
              Good Evening
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
              {mockPatient.name.split(' ')[0]}
            </div>
          </div>
        </div>

        {/* Status Pill */}
        <span
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '6px 14px', borderRadius: 99,
            background: 'var(--theme-card-bg)', backdropFilter: 'blur(20px)',
            border: 'var(--theme-card-border)',
            fontSize: 11, fontWeight: 700, color: 'var(--text-primary)',
            boxShadow: 'var(--theme-card-shadow)',
          }}
        >
          <Sparkles size={13} color="var(--accent-1)" />
          MetLife VIP
        </span>
      </motion.div>

      {/* 2. iOS Live Activity Banner */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        onClick={onAppointments}
        className="theme-activity"
        style={{
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ position: 'relative' }}>
            <img
              src={next.dentistAvatar}
              alt=""
              style={{ width: 44, height: 44, borderRadius: 99, objectFit: 'cover', border: '1.5px solid rgba(255,255,255,0.4)', filter: 'grayscale(100%)' }}
            />
            <span style={{ position: 'absolute', bottom: 0, right: 0, width: 10, height: 10, borderRadius: 99, background: 'var(--accent-1)', border: '2px solid #000000' }} />
          </div>

          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Next Appointment · Tomorrow
            </div>
            <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--text-primary)', marginTop: 1, letterSpacing: '-0.01em' }}>
              {next.dentistName.split(',')[0]}
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 1, fontWeight: 600 }}>
              {next.serviceName} · {next.time}
            </div>
          </div>
        </div>

        <div style={{ width: 34, height: 34, borderRadius: 99, background: 'rgba(255,255,255,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ChevronRight size={18} color="var(--text-primary)" />
        </div>
      </motion.div>

      {/* 3. Apple Health Activity Rings Summary Card */}
      <motion.div
        variants={itemVariants}
        className="theme-card"
        style={{ padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Apple Health Integration
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginTop: 2, letterSpacing: '-0.02em' }}>
            Oral Health Index
          </div>

          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, color: 'var(--text-primary)' }}>
              <span style={{ width: 8, height: 8, borderRadius: 99, background: 'var(--accent-1)' }} />
              <span>Overall Score: <strong>88%</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, color: 'var(--text-primary)' }}>
              <span style={{ width: 8, height: 8, borderRadius: 99, background: 'var(--accent-2)' }} />
              <span>Floss Streak: <strong>24 Days</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, color: 'var(--text-primary)' }}>
              <span style={{ width: 8, height: 8, borderRadius: 99, background: 'var(--accent-3)' }} />
              <span>Aligner Wear: <strong>18.5/22 hrs</strong></span>
            </div>
          </div>
        </div>

        {/* Concentric Apple Health Rings */}
        <div style={{ position: 'relative', width: 100, height: 100 }}>
          <svg width="100" height="100" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
            {/* Outer Ring */}
            <circle cx="50" cy="50" r={r1} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="7" />
            <motion.circle
              cx="50" cy="50" r={r1} fill="none"
              stroke="var(--accent-1)" strokeWidth="7" strokeLinecap="round"
              strokeDasharray={c1}
              initial={{ strokeDashoffset: c1 }}
              animate={{ strokeDashoffset: off1 }}
              transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
            />

            {/* Middle Ring */}
            <circle cx="50" cy="50" r={r2} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
            <motion.circle
              cx="50" cy="50" r={r2} fill="none"
              stroke="var(--accent-2)" strokeWidth="7" strokeLinecap="round"
              strokeDasharray={c2}
              initial={{ strokeDashoffset: c2 }}
              animate={{ strokeDashoffset: off2 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            />

            {/* Inner Ring */}
            <circle cx="50" cy="50" r={r3} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="7" />
            <motion.circle
              cx="50" cy="50" r={r3} fill="none"
              stroke="var(--accent-3)" strokeWidth="7" strokeLinecap="round"
              strokeDasharray={c3}
              initial={{ strokeDashoffset: c3 }}
              animate={{ strokeDashoffset: off3 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            />
          </svg>
        </div>
      </motion.div>

      {/* 4. 3D Interactive Tooth Mapping Module */}
      <motion.div variants={itemVariants}>
        <InteractiveTooth3D />
      </motion.div>

      {/* 5. iOS Widget Grid (2x2) */}
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
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              onClick={w.onClick}
              className="theme-card theme-card-interactive"
              style={{
                padding: 16,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 110,
                cursor: 'pointer',
              }}
            >
              <div style={{ width: 38, height: 38, borderRadius: 14, background: 'var(--btn-primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={20} color="var(--btn-primary-text)" strokeWidth={1.8} />
              </div>

              <div>
                <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                  {w.title}
                </div>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-secondary)', marginTop: 2 }}>
                  {w.sub}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* 6. Invisalign Stage 3 Card */}
      <motion.div
        variants={itemVariants}
        className="theme-card"
        style={{ padding: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: 16, background: 'var(--btn-primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Smile size={22} color="var(--btn-primary-text)" strokeWidth={1.8} />
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--text-primary)' }}>Invisalign Stage 3</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 1 }}>Upper incisor rotation · 4 days left</div>
          </div>
        </div>

        <button
          onClick={onTreatment}
          style={{
            padding: '6px 14px', borderRadius: 99,
            background: 'var(--btn-primary-bg)', border: 'none',
            fontSize: 11, fontWeight: 800, color: 'var(--btn-primary-text)', cursor: 'pointer',
          }}
        >
          Track
        </button>
      </motion.div>
    </motion.div>
  );
};
