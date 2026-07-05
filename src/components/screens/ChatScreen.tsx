import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, Video } from 'lucide-react';
import { initialMessages, Message, getAutoReply } from '../../mock/messages';
import { mockDentists } from '../../mock/dentists';

export const ChatScreen: React.FC = () => {
  const doc = mockDentists[0];
  const [msgs, setMsgs] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs, typing]);

  const send = () => {
    if (!input.trim()) return;
    const text = input.trim();
    setMsgs(p => [...p, { id: `u-${Date.now()}`, sender: 'patient', text, timestamp: 'Just now' }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs(p => [...p, { id: `d-${Date.now()}`, sender: 'dentist', text: getAutoReply(text), timestamp: 'Just now' }]);
    }, 1400);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 140px)' }}>
      {/* Header */}
      <div className="theme-card" style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ position: 'relative' }}>
            <img src={doc.avatar} alt="" style={{ width: 42, height: 42, borderRadius: 14, objectFit: 'cover' }} />
            <span style={{ position: 'absolute', bottom: -1, right: -1, width: 10, height: 10, borderRadius: 99, background: 'var(--text-primary)', border: '2px solid #000' }} />
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--text-primary)' }}>{doc.name}</div>
            <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Online</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <button style={{ width: 36, height: 36, borderRadius: 12, background: 'rgba(255,255,255,0.1)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Phone size={16} color="var(--text-primary)" /></button>
          <button style={{ width: 36, height: 36, borderRadius: 12, background: 'rgba(255,255,255,0.1)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Video size={16} color="var(--text-primary)" /></button>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 10, padding: '4px 0' }}>
        {msgs.map(m => {
          const mine = m.sender === 'patient';
          return (
            <motion.div key={m.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', flexDirection: 'column', alignItems: mine ? 'flex-end' : 'flex-start' }}>
              <div style={{
                maxWidth: '78%',
                padding: '12px 16px',
                borderRadius: mine ? '20px 20px 6px 20px' : '20px 20px 20px 6px',
                background: mine ? 'var(--btn-primary-bg)' : 'var(--theme-card-bg)',
                backdropFilter: 'blur(16px)',
                border: mine ? 'none' : 'var(--theme-card-border)',
                color: mine ? 'var(--btn-primary-text)' : 'var(--text-primary)',
                fontSize: 14, lineHeight: 1.55, fontWeight: 600,
                boxShadow: mine ? '0 4px 16px rgba(0,0,0,0.2)' : '0 2px 8px rgba(0,0,0,0.1)',
              }}>
                {m.text}
              </div>
              <span style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 4, padding: '0 4px' }}>{m.timestamp}</span>
            </motion.div>
          );
        })}

        <AnimatePresence>
          {typing && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="theme-card" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 16px', borderRadius: 20, width: 'fit-content' }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)' }}>Typing</span>
              <span style={{ display: 'flex', gap: 3 }}>
                {[0, 1, 2].map(i => <span key={i} style={{ width: 5, height: 5, borderRadius: 99, background: 'var(--text-primary)', animation: `bounce 1s infinite ${i * 0.15}s` }} />)}
              </span>
              <style>{`@keyframes bounce { 0%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-5px); } }`}</style>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 12 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="Message Dr. Vance..."
          className="theme-card"
          style={{
            flex: 1, minHeight: 48, padding: '0 18px', borderRadius: 22,
            fontSize: 14, color: 'var(--text-primary)', outline: 'none',
            fontFamily: 'inherit', fontWeight: 600,
          }}
        />
        <button onClick={send} style={{ width: 48, height: 48, borderRadius: 18, background: 'var(--btn-primary-bg)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.3)', flexShrink: 0 }}>
          <Send size={18} color="var(--btn-primary-text)" />
        </button>
      </div>
    </div>
  );
};
