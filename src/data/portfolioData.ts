import {
  SkillItem,
  SoftSkill,
  ProjectDetail,
  CertificationTrack,
  AchievementItem,
  ResidentRecord,
  ClearanceRequest,
} from '../types';

export const PERSONAL_INFO = {
  fullName: 'Steven P. Fran',
  nickname: 'Steven',
  title: '4th-Year BSIT Student & System Developer',
  tagline: 'Aspiring IT Professional passionate about building simple, useful systems that solve real community challenges.',
  school: 'Innovative College of Science & Information Technology',
  degree: 'Bachelor of Science in Information Technology (BSIT)',
  period: '2023 – 2027 (Expected Graduation)',
  location: 'Bongabong, Oriental Mindoro, Philippines',
  address: 'Barangay Pulosahi, Bongabong, Oriental Mindoro 5211',
  email: 'stevennarf17@gmail.com',
  mobile: '09936924735',
  photoUrl: 'https://plain-apac-prod-public.komododecks.com/202609/11/1pYu8FfQQTgsnmwQ5vdK/image.jpg',
  github: 'https://github.com/stevenfran',
  githubUser: 'stevenfran',
  linkedin: 'https://linkedin.com/in/steven-fran',
  linkedinUser: 'steven-fran',
  portfolioUrl: 'https://stevenfran.dev',
  resumeFileName: 'Fran Steven.pdf',
  status: 'Ready for Internship / OJT & Junior Roles',
  bioParagraph1:
    'Welcome! I am Steven P. Fran, a 4th-year Bachelor of Science in Information Technology student (2023–2027) at Innovative College of Science & Information Technology, province of Oriental Mindoro. I focus on system development, database management, and programming, with a strong commitment to writing clean, reliable code and crafting user-oriented database architectures.',
  bioParagraph2:
    'I love turning real-world manual processes into efficient digital tools that help people and communities. As a fast learner and hardworking developer, I bridge the gap between user requirements and functional systems, recently demonstrated through the successful development and defense of our computerized Barangay Management System. I am enthusiastic about learning modern industry workflows and contributing effectively to a forward-thinking IT team.',
};

export const TECHNICAL_SKILLS: SkillItem[] = [
  // Programming
  {
    name: 'Java',
    level: 'Proficient',
    category: 'programming',
    description: 'Object-Oriented Programming, MVC structure, backend business logic, and desktop/service systems.',
  },
  {
    name: 'Basic JavaScript',
    level: 'Fundamental',
    category: 'programming',
    description: 'DOM interaction, form validation, event handling, and client-side logic.',
  },

  // Web Development
  {
    name: 'HTML',
    level: 'Proficient',
    category: 'web',
    description: 'Semantic markup, accessible UI components, structured content layout.',
  },
  {
    name: 'CCS',
    level: 'Proficient',
    category: 'web',
    description: 'Responsive styling, Flexbox/Grid, form layouts, and clean user interface aesthetics.',
  },

  // Database
  {
    name: 'MySQL',
    level: 'Proficient',
    category: 'database',
    description: 'Relational schema design, SQL syntax, foreign key normalization, queries, and data integrity.',
  },

  // Tools
  {
    name: 'Visual Studio Code',
    level: 'Proficient',
    category: 'tools',
    description: 'Primary code editor, extensions, integrated terminal, and debugging.',
  },
  {
    name: 'XAMPP',
    level: 'Proficient',
    category: 'tools',
    description: 'Local Apache & MySQL server configuration, phpMyAdmin management, and test environments.',
  },
  {
    name: 'Microsoft Office',
    level: 'Proficient',
    category: 'tools',
    description: 'Word for documentation, Excel for data organization, PowerPoint for technical defense presentations.',
  },
  {
    name: 'Canva',
    level: 'Familiar',
    category: 'tools',
    description: 'System UI wireframing, presentation assets, infographics, and visual mockups.',
  },

  // Others
  {
    name: 'Basic Computer Troubleshooting',
    level: 'Working Knowledge',
    category: 'others',
    description: 'Hardware diagnostics, OS installation, peripherals setup, and driver configuration.',
  },
  {
    name: 'Data Encoding',
    level: 'Proficient',
    category: 'others',
    description: 'High accuracy typing, dataset sanitization, record verification, and clerical IT workflows.',
  },
  {
    name: 'Basic Networking',
    level: 'Fundamental',
    category: 'others',
    description: 'LAN configuration, IP subnetting fundamentals, router setup, and connectivity testing.',
  },
];

export const SOFT_SKILLS: SoftSkill[] = [
  {
    title: 'Teamwork & Collaboration',
    description:
      'Proven ability to work harmoniously with group mates in multi-role capstone development, actively communicating database and UI needs.',
    iconName: 'Users',
  },
  {
    title: 'Willingness to Learn',
    description:
      'Self-driven learner who independently mastered CSS improvements and SQL debugging to resolve project roadblocks.',
    iconName: 'Sparkles',
  },
  {
    title: 'Problem Solving',
    description:
      'Methodical approach to diagnosing error logs, isolating syntax discrepancies, and refining database relationships under pressure.',
    iconName: 'Lightbulb',
  },
  {
    title: 'Time Management',
    description:
      'Consistently delivered deliverables on schedule across all academic terms while balancing system development milestones.',
    iconName: 'Clock',
  },
];

export const CAPSTONE_PROJECT: ProjectDetail = {
  id: 'barangay-management-system',
  name: 'Barangay Management System',
  role: 'System Developer & Programmer',
  teamRole: 'Handled database design, core coding, and system interface',
  techStack: ['Java', 'HTML', 'CCS', 'MySQL', 'VS Code', 'XAMPP'],
  problem:
    'Barangay offices still rely on manual physical logbooks to record resident information, issue clearances, and keep community records. This outdated paper workflow causes slow queue processing times, risk of lost or water-damaged papers, difficult record retrieval, and high clerical overhead for local government staff.',
  objectives: [
    'Create a centralized digital database system to securely store and manage barangay resident records.',
    'Make the processing and issuance of Barangay Clearances and Certificates significantly faster.',
    'Organize data with instant search, multi-criteria filtering, and automated one-click printable official reports.',
    'Provide an intuitive, user-friendly interface that barangay staff with basic computer skills can operate effortlessly.',
  ],
  features: [
    'Resident Information Registration & Records (Demographics, household data, contact info)',
    'Clearance & Certificate Request & Instant PDF/Print Issuance (Indigency, Residency, Clearance)',
    'Search & Filter Records by Name, Purok, Voter Status, or Certificate ID',
    'Automated Report Generation for population statistics and monthly issuance summaries',
    'Role-Based User Authentication & Secure Activity Logging for administrative staff',
    'User-Friendly, Clean Responsive Interface designed for rapid clerical entry',
  ],
  architecture: {
    client: 'HTML, CSS (Clean responsive presentation layer with customized forms and tabular record viewers)',
    server: 'Java (Modular backend services executing business validation, transaction handling, and clearance logic)',
    database: 'MySQL on XAMPP (Normalized relational database with dedicated tables: Residents, Users, Transactions, Clearances)',
  },
  challenges: [
    {
      challenge: 'Database connection errors',
      solution: 'Investigated SQL connection strings, studied precise SQL syntax, and leveraged local XAMPP configuration for consistent port testing.',
    },
    {
      challenge: 'Data not saving properly',
      solution: 'Implemented comprehensive front-to-back input validation checks, corrected field data types, and re-verified foreign key constraints across tables.',
    },
    {
      challenge: 'Interface design looked plain',
      solution: 'Studied modern CSS UI principles, introduced structured spacing, typography, and card containers to ensure barangay staff can navigate effortlessly.',
    },
  ],
  results: [
    'Successfully replaced slow manual paper recording with an efficient, modernized digital system.',
    'Barangay records are now completely organized, searchable, and securely backed up.',
    'Dramatically reduced the time required to locate a resident record from 5-10 minutes down to just seconds.',
    'Officially approved by the academic faculty panel with high praise during the working live system demonstration.',
  ],
  githubUrl: 'https://github.com/stevenfran/barangay-management-system',
  documentationUrl: 'https://github.com/stevenfran/barangay-management-system/blob/main/DOCUMENTATION.md',
  screenshots: [
    {
      title: 'Resident Registry & Filtering Dashboard',
      caption: 'Real-time resident lookup with instant purok filtering and demographics view.',
    },
    {
      title: 'Clearance & Certification Generator',
      caption: 'Automated certificate formatting with control numbering and official sign-off headers.',
    },
    {
      title: 'Database Schema & Relational Structure',
      caption: 'Normalized MySQL entity relationships linking residents to transactional clearances.',
    },
  ],
};

export const CERTIFICATIONS: CertificationTrack[] = [
  {
    status: 'Completed',
    title: 'Introduction to Modern AI',
    provider: 'AI & Emerging Technologies',
    focus: 'Foundational concepts of artificial intelligence, machine learning principles, generative AI tools, and ethical implementation.',
    targetDate: '2026',
  },
  {
    status: 'Completed',
    title: 'IT Customer Support Basics',
    provider: 'IT Support & Helpdesk Services',
    focus: 'Technical troubleshooting methodologies, helpdesk ticketing, effective user communication, and hardware/software problem resolution.',
    targetDate: '2026',
  },
  {
    status: 'Completed',
    title: 'Digital Safety and Security Awareness',
    provider: 'Cybersecurity & Information Assurance',
    focus: 'Cyber hygiene fundamentals, threat mitigation against phishing and malware, data privacy standards, and credential protection.',
    targetDate: '2026',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: 'Consistent Student (1st to 3rd Year)',
    organization: 'Innovative College of Science & Information Technology',
    year: '2023 – 2026',
    description: 'Maintained strong academic performance and dedicated attendance across all prerequisite IT courses.',
    type: 'academic',
  },
  {
    title: 'Capstone Project — Successfully Defended',
    organization: 'ICSIT College of Computer Studies Panel',
    year: '2026',
    description: 'Led the database design and core system programming for the Barangay Management System, earning panel approval.',
    type: 'capstone',
  },
  {
    title: 'College IT Seminar & Tech Forum Participant',
    organization: 'Innovative College of Science & Information Technology',
    year: '2024 – 2025',
    description: 'Actively participated in campus technology symposia on software development, data privacy, and emerging tech.',
    type: 'seminar',
  },
];

export const MOCK_RESIDENTS: ResidentRecord[] = [
  {
    id: 'RES-001',
    fullName: 'Juan C. Dela Cruz',
    age: 34,
    gender: 'Male',
    purok: 'Purok 1 - Sampaguita',
    civilStatus: 'Married',
    voterStatus: 'Registered',
    contact: '0917-889-1021',
    registeredDate: '2025-01-14',
  },
  {
    id: 'RES-002',
    fullName: 'Maria Elena Santos',
    age: 28,
    gender: 'Female',
    purok: 'Purok 2 - Ilang-Ilang',
    civilStatus: 'Single',
    voterStatus: 'Registered',
    contact: '0928-445-9812',
    registeredDate: '2025-02-03',
  },
  {
    id: 'RES-003',
    fullName: 'Roberto D. Alcantara',
    age: 52,
    gender: 'Male',
    purok: 'Purok 3 - Rosas',
    civilStatus: 'Married',
    voterStatus: 'Registered',
    contact: '0995-123-4567',
    registeredDate: '2025-02-18',
  },
  {
    id: 'RES-004',
    fullName: 'Ana Luisa Perez',
    age: 21,
    gender: 'Female',
    purok: 'Purok 1 - Sampaguita',
    civilStatus: 'Single',
    voterStatus: 'Registered',
    contact: '0939-771-0022',
    registeredDate: '2025-03-01',
  },
  {
    id: 'RES-005',
    fullName: 'Danilo M. Ramos',
    age: 63,
    gender: 'Male',
    purok: 'Purok 4 - Camia',
    civilStatus: 'Widowed',
    voterStatus: 'Unregistered',
    contact: '0912-349-8801',
    registeredDate: '2025-03-12',
  },
];

export const INITIAL_CLEARANCES: ClearanceRequest[] = [
  {
    id: 'CLR-2026-081',
    residentName: 'Juan C. Dela Cruz',
    type: 'Barangay Clearance',
    purpose: 'Local Employment Requirement',
    status: 'Issued',
    issueDate: '2026-03-02',
    controlNo: 'BGY-CLR-2026-0041',
  },
  {
    id: 'CLR-2026-082',
    residentName: 'Maria Elena Santos',
    type: 'Certificate of Indigency',
    purpose: 'Medical Assistance / PhilHealth',
    status: 'Issued',
    issueDate: '2026-03-05',
    controlNo: 'BGY-IND-2026-0019',
  },
  {
    id: 'CLR-2026-083',
    residentName: 'Ana Luisa Perez',
    type: 'Certificate of Residency',
    purpose: 'Scholarship Application',
    status: 'Approved',
    issueDate: '2026-03-10',
    controlNo: 'BGY-RES-2026-0012',
  },
];
