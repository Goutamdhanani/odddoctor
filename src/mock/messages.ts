export interface Message {
  id: string;
  sender: 'patient' | 'dentist';
  text: string;
  timestamp: string;
  read?: boolean;
}

export const initialMessages: Message[] = [
  {
    id: 'm-1',
    sender: 'dentist',
    text: 'Hello Sarah! Dr. Vance here. Just checking in after your whitening session. How are your teeth feeling today?',
    timestamp: 'Yesterday, 4:15 PM',
    read: true,
  },
  {
    id: 'm-2',
    sender: 'patient',
    text: 'Hi Dr. Vance! They feel great. Slight sensitivity to iced coffee yesterday, but it passed completely today.',
    timestamp: 'Yesterday, 4:30 PM',
    read: true,
  },
  {
    id: 'm-3',
    sender: 'dentist',
    text: 'That is completely normal! Keep using the sensitivity toothpaste for another 48 hours. See you tomorrow at 10:30 AM for your checkup!',
    timestamp: 'Yesterday, 4:35 PM',
    read: true,
  },
];

export const getAutoReply = (userMsg: string): string => {
  const lower = userMsg.toLowerCase();
  if (lower.includes('pain') || lower.includes('hurt') || lower.includes('sensitive')) {
    return 'Thank you for letting me know, Sarah! If sensitivity persists, apply the fluoride gel included in your kit. Please call our clinic if severe.';
  } else if (lower.includes('reschedule') || lower.includes('time') || lower.includes('cancel')) {
    return 'I see! You can easily reschedule your appointment directly from the Appointments tab in the app, or I can notify our receptionist.';
  } else if (lower.includes('aligner') || lower.includes('invisalign') || lower.includes('tray')) {
    return 'Great question about your aligner progress! Make sure to wear Tray #3 for 22 hours daily. Your 3D progress scan looks fantastic!';
  } else {
    return 'Thanks for your message, Sarah! I have noted this in your dental care record. Let me know if you need anything else before tomorrow!';
  }
};
