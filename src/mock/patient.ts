export interface PatientProfile {
  id: string;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  oralHealthScore: number;
  lastCheckupDate: string;
  nextRecommendedCheckup: string;
  insurance: {
    provider: string;
    policyNumber: string;
    status: 'Active' | 'Pending' | 'Expired';
    coverageLimit: number;
    usedAmount: number;
  };
  stats: {
    flossingStreakDays: number;
    brushingMinutesAvg: number;
    completedAlignerStages: number;
    totalAlignerStages: number;
  };
}

export const mockPatient: PatientProfile = {
  id: 'p-101',
  name: 'Sarah Jenkins',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256',
  email: 'sarah.jenkins@example.com',
  phone: '+1 (555) 234-8910',
  oralHealthScore: 88,
  lastCheckupDate: '2026-04-15',
  nextRecommendedCheckup: '2026-10-15',
  insurance: {
    provider: 'MetLife Dental Premier',
    policyNumber: 'ML-883921-X',
    status: 'Active',
    coverageLimit: 2500,
    usedAmount: 640,
  },
  stats: {
    flossingStreakDays: 24,
    brushingMinutesAvg: 2.5,
    completedAlignerStages: 3,
    totalAlignerStages: 5,
  },
};
