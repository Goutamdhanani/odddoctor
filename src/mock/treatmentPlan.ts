export interface TreatmentStage {
  id: string;
  stageNumber: number;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  dateCompleted?: string;
  estimatedDate?: string;
  dentistNotes?: string;
}

export interface TreatmentPlan {
  id: string;
  planTitle: string;
  overallProgressPercent: number;
  startDate: string;
  targetCompletionDate: string;
  primaryDentistName: string;
  stages: TreatmentStage[];
  xrayMilestone: {
    scanDate: string;
    status: string;
    summary: string;
  };
}

export const mockTreatmentPlan: TreatmentPlan = {
  id: 'plan-901',
  planTitle: 'Clear Aligner & Whitening Care Journey',
  overallProgressPercent: 60,
  startDate: 'Feb 10, 2026',
  targetCompletionDate: 'Sep 30, 2026',
  primaryDentistName: 'Dr. Marcus Thorne, DMD',
  xrayMilestone: {
    scanDate: 'Apr 15, 2026',
    status: 'Healthy Alignment',
    summary: '3D Panoramic scan confirms 1.8mm lateral arch widening. Root integrity optimal.',
  },
  stages: [
    {
      id: 'stg-1',
      stageNumber: 1,
      title: 'Initial Scan & Deep Hygiene Clean',
      description: 'Full 3D intraoral digital mapping and ultrasonic scaling.',
      status: 'completed',
      dateCompleted: 'Feb 12, 2026',
      dentistNotes: 'Plaque index reduced to 2%. Excellent enamel baseline.',
    },
    {
      id: 'stg-2',
      stageNumber: 2,
      title: 'Aligner Trays #1 & #2 (Arch Expansion)',
      description: '22 hours daily wear time. Initial alignment shifts.',
      status: 'completed',
      dateCompleted: 'May 04, 2026',
      dentistNotes: 'Patient compliance high. Arch widening proceeding as planned.',
    },
    {
      id: 'stg-[#3]',
      stageNumber: 3,
      title: 'Aligner Tray #3 (Current Stage)',
      description: 'Active tooth rotation adjustment for upper incisors.',
      status: 'current',
      estimatedDate: 'Jul 24, 2026',
      dentistNotes: 'Maintain wear routine. Use chewies twice daily for optimal tray seating.',
    },
    {
      id: 'stg-4',
      stageNumber: 4,
      title: 'Refinement Trays & Contour Check',
      description: 'Micro-adjustments for perfect bite symmetry.',
      status: 'upcoming',
      estimatedDate: 'Aug 20, 2026',
    },
    {
      id: 'stg-5',
      stageNumber: 5,
      title: 'Laser Whitening & Final Retainer',
      description: 'Shade enhancement and custom night retainer fitting.',
      status: 'upcoming',
      estimatedDate: 'Sep 30, 2026',
    },
  ],
};
