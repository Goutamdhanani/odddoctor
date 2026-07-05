import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check, CheckCircle, Star } from 'lucide-react';
import { mockServices, mockDentists } from '../../mock/dentists';

interface Props { onDone: () => void; onBack: () => void; }

export const BookingScreen: React.FC<Props> = ({ onDone, onBack }) => {
  const [step, setStep] = useState(1);
  const [serviceId, setServiceId] = useState(mockServices[0].id);
  const [dentistId, setDentistId] = useState(mockDentists[0].id);
  const [slot, setSlot] = useState('10:30 AM');

  const service = mockServices.find(s => s.id === serviceId)!;
  const dentist = mockDentists.find(d => d.id === dentistId)!;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 40px)', gap: 20 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={() => step > 1 ? setStep(step - 1) : onBack()} className="theme-card" style={{ width: 40, height: 40, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: 'var(--theme-card-border)' }}>
          <ArrowLeft size={18} color="var(--text-primary)" />
        </button>
        <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-secondary)' }}>Step {step} of 3</span>
        <div style={{ width: 40 }} />
      </div>

      {/* Progress dots */}
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ width: i === step ? 28 : 8, height: 8, borderRadius: 99, background: i <= step ? 'var(--btn-primary-bg)' : 'rgba(255,255,255,0.15)', transition: 'all 0.3s ease' }} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} style={{ flex: 1 }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: -0.5 }}>Choose a Service</h2>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 4, marginBottom: 20 }}>Select your dental care option</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {mockServices.map(s => {
                const active = serviceId === s.id;
                return (
                  <button key={s.id} onClick={() => setServiceId(s.id)} className="theme-card theme-card-interactive" style={{ padding: '16px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', textAlign: 'left', border: active ? '1.5px solid var(--text-primary)' : 'var(--theme-card-border)', background: active ? 'var(--theme-card-active)' : 'var(--theme-card-bg)' }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)' }}>{s.name}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 3 }}>{s.durationMinutes} min · ${s.priceEstimate}</div>
                    </div>
                    {active && <div style={{ width: 24, height: 24, borderRadius: 99, background: 'var(--btn-primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Check size={14} color="var(--btn-primary-text)" /></div>}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} style={{ flex: 1 }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: -0.5 }}>Pick a Dentist</h2>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 4, marginBottom: 16 }}>Select specialist & time</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
              {mockDentists.map(d => {
                const active = dentistId === d.id;
                return (
                  <button key={d.id} onClick={() => setDentistId(d.id)} className="theme-card theme-card-interactive" style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', textAlign: 'left', border: active ? '1.5px solid var(--text-primary)' : 'var(--theme-card-border)' }}>
                    <img src={d.avatar} alt="" style={{ width: 48, height: 48, borderRadius: 16, objectFit: 'cover' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)' }}>{d.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
                        <Star size={11} color="var(--text-primary)" fill="var(--text-primary)" /> {d.rating} · {d.specialty}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.5 }}>Available Times</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {dentist.timeSlots.map(t => (
                <button key={t} onClick={() => setSlot(t)} className="theme-card" style={{ padding: '12px 0', fontSize: 13, fontWeight: 700, cursor: 'pointer', border: slot === t ? '1.5px solid var(--text-primary)' : 'var(--theme-card-border)', background: slot === t ? 'var(--theme-card-active)' : 'var(--theme-card-bg)', color: 'var(--text-primary)' }}>
                  {t}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="s3" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} style={{ flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: [0, 1.15, 1] }} transition={{ duration: 0.5 }}>
              <div style={{ width: 90, height: 90, borderRadius: 99, background: 'var(--btn-primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
                <CheckCircle size={42} color="var(--btn-primary-text)" strokeWidth={1.5} />
              </div>
            </motion.div>
            <div>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: 'var(--text-primary)' }}>Booked!</h2>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 6 }}>Your appointment is confirmed</p>
            </div>
            <div className="theme-card" style={{ padding: '18px 20px', width: '100%', textAlign: 'left' }}>
              {[
                ['Service', service.name],
                ['Dentist', dentist.name],
                ['Time', `Tomorrow · ${slot}`],
                ['Location', dentist.location],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: 13 }}>
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{k}</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 700, textAlign: 'right', maxWidth: '60%' }}>{v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <button className="theme-btn-primary" onClick={() => step < 3 ? setStep(step + 1) : onDone()} style={{ marginTop: 'auto' }}>
        {step < 3 ? 'Continue' : 'Back to Home'}
      </button>
    </div>
  );
};
