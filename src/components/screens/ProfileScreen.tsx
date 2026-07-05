import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Bell } from 'lucide-react';
import { mockPatient } from '../../mock/patient';

export const ProfileScreen: React.FC = () => {
  const p = mockPatient;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Account</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: -0.5 }}>Profile</h2>
      </div>

      {/* Avatar card */}
      <div className="theme-card" style={{ padding: 20, display: 'flex', alignItems: 'center', gap: 16, textAlign: 'left' }}>
        <img src={p.avatar} alt="" style={{ width: 60, height: 60, borderRadius: 20, objectFit: 'cover', border: '0.5px solid rgba(255,255,255,0.3)', filter: 'grayscale(50%)' }} />
        <div>
          <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--text-primary)' }}>{p.name}</div>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>{p.email}</div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{p.phone}</div>
        </div>
      </div>

      {/* Insurance */}
      <div className="theme-card" style={{ padding: '16px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 40, height: 40, borderRadius: 14, background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Shield size={18} color="var(--text-primary)" />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}>{p.insurance.provider}</div>
              <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>{p.insurance.policyNumber}</div>
            </div>
          </div>
          <span style={{ padding: '3px 10px', borderRadius: 99, fontSize: 10, fontWeight: 800, background: 'rgba(255,255,255,0.12)', color: 'var(--text-primary)' }}>{p.insurance.status}</span>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 12 }}>
          {[
            ['Annual Limit', `$${p.insurance.coverageLimit}`],
            ['Remaining', `$${p.insurance.coverageLimit - p.insurance.usedAmount}`],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '4px 0' }}>
              <span style={{ color: 'var(--text-secondary)' }}>{k}</span>
              <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Settings */}
      <div className="theme-card" style={{ padding: '6px 0' }}>
        {[
          { icon: Eye, label: 'Reduced Motion', sub: 'Pause ambient animations' },
          { icon: Bell, label: 'Notifications', sub: 'Appointment reminders' },
        ].map((item, i) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: i === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 38, height: 38, borderRadius: 12, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <item.icon size={17} color="var(--text-primary)" />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)' }}>{item.label}</div>
                <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 1 }}>{item.sub}</div>
              </div>
            </div>
            <div style={{ width: 44, height: 24, borderRadius: 99, background: 'rgba(255,255,255,0.2)', position: 'relative', cursor: 'pointer' }}>
              <div style={{ width: 18, height: 18, borderRadius: 99, background: 'var(--text-primary)', boxShadow: '0 1px 4px rgba(0,0,0,0.3)', position: 'absolute', top: 3, left: 23, transition: 'left 0.2s ease' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
