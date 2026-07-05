export interface ServiceOption {
  id: string;
  name: string;
  durationMinutes: number;
  priceEstimate: number;
  iconName: string;
  description: string;
}

export interface Dentist {
  id: string;
  name: string;
  title: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  experienceYears: number;
  avatar: string;
  location: string;
  bio: string;
  availableDays: string[];
  timeSlots: string[];
}

export const mockServices: ServiceOption[] = [
  {
    id: 's-1',
    name: 'Comprehensive Checkup & Cleaning',
    durationMinutes: 45,
    priceEstimate: 120,
    iconName: 'Sparkles',
    description: 'Full oral exam, plaque scaling, polish & fluoride treatment',
  },
  {
    id: 's-2',
    name: 'Invisalign & Ortho Consult',
    durationMinutes: 30,
    priceEstimate: 85,
    iconName: 'Smile',
    description: '3D oral scan, aligner stage review & progress tracking',
  },
  {
    id: 's-3',
    name: 'Laser Teeth Whitening',
    durationMinutes: 60,
    priceEstimate: 290,
    iconName: 'Zap',
    description: 'Professional LED shade brightening up to 8 shades whiter',
  },
  {
    id: 's-4',
    name: 'Emergency Tooth Relief',
    durationMinutes: 30,
    priceEstimate: 150,
    iconName: 'AlertCircle',
    description: 'Immediate relief for severe sensitivity, chipped teeth, or aches',
  },
];

export const mockDentists: Dentist[] = [
  {
    id: 'd-1',
    name: 'Dr. Elena Vance, DDS',
    title: 'Senior Cosmetic & General Dentist',
    specialty: 'Cosmetic Dentistry & Whitening',
    rating: 4.95,
    reviewCount: 342,
    experienceYears: 12,
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=256',
    location: 'Aesthetic Dental Care — Suite 402',
    bio: 'Specializing in gentle, minimally invasive cosmetic enhancements and preventive oral health.',
    availableDays: ['Today', 'Tomorrow', 'Thu, Jul 9', 'Fri, Jul 10'],
    timeSlots: ['09:00 AM', '10:30 AM', '02:00 PM', '04:15 PM'],
  },
  {
    id: 'd-2',
    name: 'Dr. Marcus Thorne, DMD',
    title: 'Orthodontics & Aligner Specialist',
    specialty: 'Invisalign & Digital Scanning',
    rating: 4.89,
    reviewCount: 218,
    experienceYears: 9,
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=256',
    location: 'Aesthetic Dental Care — Suite 405',
    bio: 'Expert in 3D digital smile design and accelerated clear aligner therapy.',
    availableDays: ['Tomorrow', 'Thu, Jul 9', 'Mon, Jul 13'],
    timeSlots: ['08:30 AM', '11:00 AM', '01:30 PM', '03:45 PM'],
  },
  {
    id: 'd-3',
    name: 'Dr. Sophia Chen, DDS',
    title: 'Pediatric & Preventive Dentist',
    specialty: 'Preventive Care & Hygiene',
    rating: 4.98,
    reviewCount: 412,
    experienceYears: 15,
    avatar: 'https://images.unsplash.com/photo-1594824813566-78a055d28b86?auto=format&fit=crop&q=80&w=256',
    location: 'Aesthetic Dental Care — Suite 401',
    bio: 'Dedicated to stress-free, painless routine dental visits and long-term enamel protection.',
    availableDays: ['Today', 'Thu, Jul 9', 'Fri, Jul 10'],
    timeSlots: ['09:30 AM', '11:15 AM', '02:30 PM'],
  },
];
