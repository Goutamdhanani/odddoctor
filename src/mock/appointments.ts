export interface Appointment {
  id: string;
  dentistId: string;
  dentistName: string;
  dentistAvatar: string;
  serviceName: string;
  date: string;
  time: string;
  status: 'confirmed' | 'completed' | 'rescheduled' | 'cancelled';
  location: string;
  notes?: string;
  pricePaid?: number;
}

export const mockAppointments: Appointment[] = [
  {
    id: 'apt-001',
    dentistId: 'd-1',
    dentistName: 'Dr. Elena Vance, DDS',
    dentistAvatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=256',
    serviceName: 'Comprehensive Checkup & Cleaning',
    date: 'Tomorrow, Jul 7',
    time: '10:30 AM',
    status: 'confirmed',
    location: 'Aesthetic Dental Care — Suite 402',
    notes: 'Routine 6-month checkup, polish & fluoride application.',
    pricePaid: 120,
  },
  {
    id: 'apt-002',
    dentistId: 'd-2',
    dentistName: 'Dr. Marcus Thorne, DMD',
    dentistAvatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=256',
    serviceName: 'Invisalign Aligner Stage 3 Review',
    date: 'Fri, Jul 24',
    time: '02:00 PM',
    status: 'confirmed',
    location: 'Aesthetic Dental Care — Suite 405',
    notes: 'Pick up Aligner Tray Set #4 and verify attachment seating.',
    pricePaid: 85,
  },
  {
    id: 'apt-003',
    dentistId: 'd-1',
    dentistName: 'Dr. Elena Vance, DDS',
    dentistAvatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=256',
    serviceName: 'Laser Teeth Whitening Session',
    date: 'Apr 15, 2026',
    time: '11:00 AM',
    status: 'completed',
    location: 'Aesthetic Dental Care — Suite 402',
    notes: 'Brightened by 6 shades. Post-treatment enamel gel applied.',
    pricePaid: 290,
  },
  {
    id: 'apt-004',
    dentistId: 'd-3',
    dentistName: 'Dr. Sophia Chen, DDS',
    dentistAvatar: 'https://images.unsplash.com/photo-1594824813566-78a055d28b86?auto=format&fit=crop&q=80&w=256',
    serviceName: 'Dental X-Ray & Screening',
    date: 'Jan 12, 2026',
    time: '09:00 AM',
    status: 'completed',
    location: 'Aesthetic Dental Care — Suite 401',
    notes: 'Bite-wing X-rays completed. Zero cavities detected.',
    pricePaid: 150,
  },
];
