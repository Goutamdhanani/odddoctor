import React, { useState, useEffect } from 'react';
import { Home, Calendar, MessageSquare, User, Activity, Sun, Moon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { OnboardingScreen } from './components/screens/OnboardingScreen';
import { HomeScreen } from './components/screens/HomeScreen';
import { BookingScreen } from './components/screens/BookingScreen';
import { AppointmentsScreen } from './components/screens/AppointmentsScreen';
import { ChatScreen } from './components/screens/ChatScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';
import { TreatmentScreen } from './components/screens/TreatmentScreen';

type Screen = 'welcome' | 'home' | 'book' | 'appointments' | 'chat' | 'profile' | 'treatment';
type Theme = 'day' | 'night';

const tabs = [
  { id: 'home' as Screen, icon: Home, label: 'Home' },
  { id: 'appointments' as Screen, icon: Calendar, label: 'Visits' },
  { id: 'chat' as Screen, icon: MessageSquare, label: 'Chat' },
  { id: 'treatment' as Screen, icon: Activity, label: 'Plan' },
  { id: 'profile' as Screen, icon: User, label: 'Profile' },
];

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [theme, setTheme] = useState<Theme>('day'); // Dreamy Day Mode default, tap Night for Black & White

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const showNav = screen !== 'welcome' && screen !== 'book';

  return (
    <div className="app-shell" data-theme={theme}>
      {/* Ambient Spotlight */}
      <div className="theme-spotlight" />

      {/* Header Bar with Day Mode / Night Mode Capsule Switcher (Exact match to reference image) */}
      <div style={{ position: 'absolute', top: 18, right: 18, zIndex: 60 }}>
        <button
          className="day-night-toggle"
          onClick={() => setTheme(prev => prev === 'day' ? 'night' : 'day')}
        >
          <div className={`toggle-pill ${theme === 'day' ? 'active' : ''}`}>
            <Sun size={12} /> Day
          </div>
          <div className={`toggle-pill ${theme === 'night' ? 'active' : ''}`}>
            <Moon size={12} /> Night
          </div>
        </button>
      </div>

      {/* Screen Content Container */}
      <div style={{ position: 'relative', zIndex: 1, padding: '20px 20px 0', minHeight: '100vh' }} className="safe-bottom">
        <AnimatePresence mode="wait">
          {screen === 'welcome' && (
            <ScreenWrap key="welcome">
              <OnboardingScreen onEnter={() => setScreen('home')} onBook={() => setScreen('book')} />
            </ScreenWrap>
          )}
          {screen === 'home' && (
            <ScreenWrap key="home">
              <HomeScreen
                onBook={() => setScreen('book')}
                onChat={() => setScreen('chat')}
                onTreatment={() => setScreen('treatment')}
                onAppointments={() => setScreen('appointments')}
              />
            </ScreenWrap>
          )}
          {screen === 'book' && (
            <ScreenWrap key="book">
              <BookingScreen onDone={() => setScreen('home')} onBack={() => setScreen('home')} />
            </ScreenWrap>
          )}
          {screen === 'appointments' && (
            <ScreenWrap key="appointments">
              <AppointmentsScreen onBook={() => setScreen('book')} />
            </ScreenWrap>
          )}
          {screen === 'chat' && (
            <ScreenWrap key="chat">
              <ChatScreen />
            </ScreenWrap>
          )}
          {screen === 'treatment' && (
            <ScreenWrap key="treatment">
              <TreatmentScreen />
            </ScreenWrap>
          )}
          {screen === 'profile' && (
            <ScreenWrap key="profile">
              <ProfileScreen />
            </ScreenWrap>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Glass Bottom Navigation Dock */}
      {showNav && (
        <nav style={{
          position: 'fixed',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 40px)',
          maxWidth: 380,
          zIndex: 50,
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(35px) saturate(180%)',
          WebkitBackdropFilter: 'blur(35px) saturate(180%)',
          border: 'var(--nav-border)',
          borderRadius: 32,
          padding: '6px 4px',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-around',
          boxShadow: '0 16px 48px rgba(0,0,0,0.3), inset 0 1.5px 0 rgba(255,255,255,0.4)',
        }}>
          {tabs.map((tab) => {
            const active = screen === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setScreen(tab.id)}
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                  minWidth: 56,
                  minHeight: 48,
                  padding: '6px 10px',
                  borderRadius: 24,
                  border: 'none',
                  background: active ? 'var(--nav-active-bg)' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
                  boxShadow: active ? '0 6px 20px rgba(0,0,0,0.2)' : 'none',
                }}
              >
                <Icon size={20} strokeWidth={2} color={active ? 'var(--nav-active-text)' : 'var(--nav-icon-inactive)'} />
                <span style={{
                  fontSize: 10,
                  fontWeight: 800,
                  color: active ? 'var(--nav-active-text)' : 'var(--nav-icon-inactive)',
                  letterSpacing: '-0.01em',
                }}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}

function ScreenWrap({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, y: -6 }}
      transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
