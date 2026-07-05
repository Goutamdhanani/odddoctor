import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, Eye } from 'lucide-react';
import { mockTreatmentPlan } from '../../mock/treatmentPlan';

export const TreatmentScreen: React.FC = () => {
  const plan = mockTreatmentPlan;
  const circ = 2 * Math.PI * 42;
  const off = circ - (plan.overallProgressPercent / 100) * circ;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Care Journey</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: -0.5 }}>Treatment Plan</h2>
      </div>

      {/* Progress header */}
      <div className="theme-card" style={{ padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Aligner & Whitening</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--text-primary)', marginTop: 4 }}>Stage 3 of 5</div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 4, fontWeight: 600 }}>{plan.primaryDentistName}</div>
        </div>
        <div style={{ position: 'relative', width: 86, height: 86 }}>
          <svg width="86" height="86" viewBox="0 0 90 90" style={{ transform: 'rotate(-90deg)' }}>
            <circle cx="45" cy="45" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
            <motion.circle cx="45" cy="45" r="42" fill="none" stroke="var(--text-primary)" strokeWidth="6" strokeLinecap="round" strokeDasharray={circ} initial={{ strokeDashoffset: circ }} animate={{ strokeDashoffset: off }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} />
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 800, color: 'var(--text-primary)' }}>{plan.overallProgressPercent}%</div>
        </div>
      </div>

      {/* X-Ray */}
      <div className="theme-card" style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 40, height: 40, borderRadius: 14, background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Eye size={18} color="var(--text-primary)" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}>3D Panoramic Scan</div>
          <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 2 }}>{plan.xrayMilestone.scanDate} · {plan.xrayMilestone.status}</div>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>Timeline</div>
        {plan.stages.map((s, i) => {
          const done = s.status === 'completed';
          const current = s.status === 'current';
          return (
            <div key={s.id} style={{ display: 'flex', gap: 14, paddingBottom: i < plan.stages.length - 1 ? 0 : 0 }}>
              {/* Line + dot */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 24 }}>
                {done ? <CheckCircle size={20} color="var(--text-primary)" fill="var(--text-primary)" stroke="#000" /> :
                  current ? <div style={{ width: 20, height: 20, borderRadius: 99, background: 'var(--text-primary)', border: '3px solid #000' }} /> :
                    <Circle size={20} color="var(--text-muted)" />}
                {i < plan.stages.length - 1 && <div style={{ width: 2, flex: 1, minHeight: 40, background: done || current ? 'var(--text-primary)' : 'rgba(255,255,255,0.1)', borderRadius: 99 }} />}
              </div>

              {/* Content */}
              <div className={current ? 'theme-card' : ''} style={{ flex: 1, padding: current ? '14px 16px' : '4px 0 20px', borderRadius: current ? 20 : 0, border: current ? 'var(--theme-card-border)' : 'none', opacity: !done && !current ? 0.5 : 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)' }}>{s.title}</div>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 3, lineHeight: 1.5 }}>{s.description}</div>
                {s.dentistNotes && <div style={{ marginTop: 8, padding: '8px 12px', borderRadius: 12, background: 'rgba(255,255,255,0.06)', fontSize: 11, color: 'var(--text-secondary)', lineHeight: 1.5 }}><strong style={{ color: 'var(--text-primary)' }}>Note:</strong> {s.dentistNotes}</div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
