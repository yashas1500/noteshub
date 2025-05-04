
import { Note, NoteRequest, Subject } from './types';

// Sample notes data
export const notes: Note[] = [
  {
    id: '1',
    title: 'Calculus I - Integration Techniques',
    subject: 'Mathematics',
    description: 'Comprehensive notes covering various integration techniques including substitution, integration by parts, and partial fractions.',
    fileUrl: '/placeholder.svg',
    uploadedBy: 'Alex Johnson',
    uploadDate: new Date('2023-10-15'),
    downloads: 127
  },
  {
    id: '2',
    title: 'Introduction to Quantum Mechanics',
    subject: 'Physics',
    description: 'Detailed explanation of foundational quantum mechanics concepts including wave functions, Schrödinger equation, and uncertainty principle.',
    fileUrl: '/placeholder.svg',
    uploadedBy: 'Samantha Lee',
    uploadDate: new Date('2023-10-20'),
    downloads: 95
  },
  {
    id: '3',
    title: 'Organic Chemistry - Reaction Mechanisms',
    subject: 'Chemistry',
    description: 'Notes detailing common organic chemistry reaction mechanisms with step-by-step explanations and example problems.',
    fileUrl: '/placeholder.svg',
    uploadedBy: 'Michael Chen',
    uploadDate: new Date('2023-10-25'),
    downloads: 83
  },
  {
    id: '4',
    title: 'Data Structures and Algorithms',
    subject: 'Computer Science',
    description: 'Comprehensive notes on fundamental data structures (arrays, linked lists, trees, graphs) and algorithms (sorting, searching, dynamic programming).',
    fileUrl: '/placeholder.svg',
    uploadedBy: 'Priya Patel',
    uploadDate: new Date('2023-11-02'),
    downloads: 156
  },
  {
    id: '5',
    title: 'Macroeconomics - Fiscal Policy',
    subject: 'Economics',
    description: 'Notes covering fiscal policy tools, government spending, taxation, and their effects on economic growth and stability.',
    fileUrl: '/placeholder.svg',
    uploadedBy: 'James Wilson',
    uploadDate: new Date('2023-11-05'),
    downloads: 72
  },
  {
    id: '6',
    title: 'Cell Biology - Membrane Structure and Function',
    subject: 'Biology',
    description: 'Detailed notes on cell membrane composition, structure, and functions including transport mechanisms and signaling.',
    fileUrl: '/placeholder.svg',
    uploadedBy: 'Emily Rodriguez',
    uploadDate: new Date('2023-11-10'),
    downloads: 89
  },
];

// Sample note requests data
export const noteRequests: NoteRequest[] = [
  {
    id: '1',
    title: 'Advanced Statistical Methods',
    subject: 'Mathematics',
    description: 'Looking for comprehensive notes on advanced statistical methods including multivariate analysis and time series forecasting.',
    requestedBy: 'Daniel Smith',
    requestDate: new Date('2023-11-12'),
    isFulfilled: false
  },
  {
    id: '2',
    title: 'Thermodynamics - Entropy and Free Energy',
    subject: 'Physics',
    description: 'Need detailed notes explaining entropy, enthalpy, Gibbs free energy, and their applications in chemical reactions and physical processes.',
    requestedBy: 'Olivia Brown',
    requestDate: new Date('2023-11-13'),
    isFulfilled: false
  },
  {
    id: '3',
    title: 'Neural Networks and Deep Learning',
    subject: 'Computer Science',
    description: 'Requesting notes on neural network architectures, backpropagation, and applications in modern AI systems.',
    requestedBy: 'Jason Kim',
    requestDate: new Date('2023-11-15'),
    isFulfilled: false
  },
  {
    id: '4',
    title: 'Shakespeare\'s Tragedies - Critical Analysis',
    subject: 'Literature',
    description: 'Looking for in-depth analysis notes on major Shakespearean tragedies including Hamlet, Macbeth, and King Lear.',
    requestedBy: 'Sophia Garcia',
    requestDate: new Date('2023-11-16'),
    isFulfilled: true
  },
];

export const allSubjects: Subject[] = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science",
  "Literature",
  "History",
  "Geography",
  "Economics",
  "Business Studies",
  "Psychology",
  "Sociology",
  "Other"
];
