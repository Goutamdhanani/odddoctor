import React, { useState } from 'react';
import { Calendar, Clock, Plus } from 'lucide-react';
import { mockAppointments } from '../../mock/appointments';

interface Props { onBook: () => void; }

export const AppointmentsScreen: React.FC<Props> = ({ onBook }) => {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');
  const list = mockAppointments.filter(a => tab === 'upcoming' ? (a.status === 'confirmed') : (a.status === 'completed'));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Your Schedule</div>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: -0.5 }}>Appointments</h2>
        </div>
        <button onClick={onBook} style={{ width: 42, height: 42, borderRadius: 16, background: 'var(--btn-primary-bg)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
          <Plus size={20} color="var(--btn-primary-text)" />
        </button>
      </div>

      {/* Tab switch */}
      <div className="theme-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: 4, borderRadius: 22 }}>
        {(['upcoming', 'past'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: '10px 0', borderRadius: 18, fontSize: 13, fontWeight: 700, border: 'none', cursor: 'pointer', background: tab === t ? 'var(--btn-primary-bg)' : 'transparent', color: tab === t ? 'var(--btn-primary-text)' : 'var(--text-secondary)', transition: 'all 0.2s ease' }}>
            {t === 'upcoming' ? 'Upcoming' : 'History'}
          </button>
        ))}
      </div>

      {/* List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {list.map(apt => (
          <div key={apt.id} className="theme-card" style={{ padding: '16px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <img src={apt.dentistAvatar} alt="" style={{ width: 48, height: 48, borderRadius: 16, objectFit: 'cover', border: '0.5px solid rgba(255,255,255,0.2)' }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)' }}>{apt.dentistName}</div>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>{apt.serviceName}</div>
              </div>
              <span style={{ padding: '4px 10px', borderRadius: 99, fontSize: 10, fontWeight: 800, background: 'rgba(255,255,255,0.12)', color: 'var(--text-primary)' }}>
                {apt.status === 'confirmed' ? 'Confirmed' : 'Done'}
              </span>
            </div>
            <div style={{ display: 'flex', gap: 16, marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Calendar size={13} />{apt.date}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={13} />{apt.time}</span>
            </div>
            {apt.notes && (
              <p style={{ marginTop: 10, padding: '8px 12px', borderRadius: 12, background: 'rgba(255,255,255,0.05)', fontSize: 11, color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.5 }}>"{apt.notes}"</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
