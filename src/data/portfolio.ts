

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Shalab Kumar Shrivastava',
  displayName: 'Shalab Kumar Shrivastava',
  firstName: 'SHALAB',
  lastName: 'SHRIVASTAVA',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SHRIVASTAVA ORIGINAL',
  role: 'Software Developer',
  tagline: ['Software Developer', 'Java Programmer', 'AI Enthusiast'],
  intro:
    'B.Tech CSE student at GGITS, Jabalpur, specializing in IoT, Cybersecurity, and Blockchain (2028). Skilled in Java, Python, C++, SQL, and web technologies. Top 10 finalist at CodeNakshatra 2.0, passionate about software engineering and building practical solutions.',
  location: 'Jabalpur Madhya pradesh',
  phone: '9534052005',
  email: 'aiverseofshalab@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/aiverseofshalab/',
    github: 'https://github.com/aiverseofshalab',
    twitter: 'https://twitter.com/aiverseofshalab',
    instagram: 'https://www.instagram.com/aiverseofshalab/',
    leetcode: 'https://leetcode.com/shalabksr/',
  },
  resumeFileName: 'shalab_resume.pdf',
  resumePdf: '/assets/shalab_resume.pdf?v=20261015-3',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Shalab Shrivastava',
  },
  interests: ['Software Engineering', 'Java Development', 'Practical Software Solutions'],
};

export const education = [
  {
    school: 'Gyan Ganga Institute of Technology and Sciences',
    place: 'Jabalpur, Madhya Pradesh',
    degree: 'Bachelor of Technology — Iot and CyberSecurity including Blockchain Technology',
    period: 'September 2024 – Present',
    score: 'CGPA 7.5',
  },
  {
    school: 'Nav Bharat Intermediate College',
    degree: 'Intermediate — Science (PCMB)',
    period: 'May 2022 – May 2024',
    score: 'Percentage 73.2%',
  },
];

export type Experience = { company: string; role: string; place: string; period: string; points: string[] };
export const experience: Experience[] = [];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'open-pulse',
    title: 'OpenPulse — 3D Dependency Graph Explorer',
    year: '2026',
    genre: 'Developer Tools / Full-Stack Web Application',
    logline: 'An interactive 3D dependency graph explorer that analyzes public GitHub repositories and visualizes their direct package dependencies, connectivity, and illustrative risk scores.',
    stack: ['Next.js', 'React', 'TypeScript', 'Three.js', 'React Three Fiber', 'Zustand', 'Python', 'FastAPI', 'GitHub API'],
    build: [
      'Built a web interface for analyzing public GitHub repositories.',
      'Developed a FastAPI backend to retrieve package metadata and direct dependencies.',
      'Created an interactive 3D graph with selectable nodes and dependency connections.',
      'Added fallback demo data, API error handling, and deployment configuration.',
    ],
    features: [
      'Interactive 3D dependency visualization',
      'Repository analysis through the GitHub API',
      'Node inspection and connectivity details',
      'Illustrative deterministic package risk scores',
      'Demo graph fallback and deployment support',
    ],
    metrics: [],
    github: 'https://github.com/aiverseofshalab/Open-Pulse',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
    id: 'civic-chain',
    title: 'CivicChain — AI-Powered Civic Reporting',
    year: '2026',
    genre: 'AI / Blockchain / Civic Technology',
    logline: 'A civic issue reporting platform that combines AI-based image verification, duplicate detection, IPFS evidence storage, and Ethereum testnet NFTs to create traceable civic reports.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'Solidity', 'Hardhat', 'ethers.js', 'Google Gemini Vision', 'Pinata IPFS', 'Ethereum Sepolia', 'Capacitor'],
    build: [
      'Integrated AI-based classification of civic issue images.',
      'Implemented rule-based fraud checks and image duplicate detection.',
      'Designed an evidence storage and NFT recording workflow.',
      'Included civic report status tracking and participation rewards.',
    ],
    features: [
      'Photo-based civic issue reporting',
      'AI-assisted issue verification',
      'Duplicate image detection',
      'IPFS evidence and metadata storage',
      'ERC-721 civic issue NFTs on Ethereum Sepolia',
      'Report status tracking and civic reputation',
    ],
    metrics: [],
    github: 'https://github.com/aiverseofshalab/CivicChain',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'shield',
  },
  {
    id: 'ir-survey-agent',
    title: 'AI-Powered IR Survey Agent',
    year: '2026',
    genre: 'Full-Stack Development / Voice Automation',
    logline: 'An automated Interactive Voice Response (IVR) survey platform that calls contacts, asks survey questions, and records responses in Excel-compatible files.',
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'Twilio IVR', 'Supabase PostgreSQL', 'Excel processing', 'Vercel', 'Render / Railway'],
    build: [
      'Developed a survey dashboard and contact-file upload workflow.',
      'Integrated backend voice survey functionality with Twilio.',
      'Connected survey processing with Supabase.',
      'Implemented response export and survey progress tracking.',
    ],
    features: [
      'Automated outbound survey calls',
      'Personalized voice greetings',
      'Survey question delivery',
      'Excel contact import and response export',
      'Survey progress monitoring',
      'Cloud deployment support',
    ],
    metrics: [],
    github: 'https://github.com/aiverseofshalab/Call-Agent',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'ciphera-password-intelligence',
    title: 'Ciphera — Personal Password Intelligence',
    year: '2026',
    genre: 'Cybersecurity / Full-Stack Application',
    logline: 'A password analysis application that evaluates password characteristics, provides a strength score, and displays clear feedback without storing passwords.',
    stack: ['Java 21+', 'Spring Boot 3', 'Maven', 'Python 3', 'HTML5', 'CSS3', 'JavaScript'],
    build: [
      'Developed a Java-based REST API for password analysis.',
      'Integrated a Python analyzer using JSON over standard input/output.',
      'Built a responsive interface with password visibility controls.',
      'Added error handling and health checks for the analysis service.',
    ],
    features: [
      'Password strength scoring',
      'Length and character checks',
      'Clear password feedback and warnings',
      'Show/hide password control',
      'Java-to-Python integration',
      'No password database or persistent password storage',
    ],
    metrics: [],
    github: 'https://github.com/aiverseofshalab/ciphera-password-intelligence',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'shield',
  },
  {
    id: 'murf-livekit-voice-agent',
    title: 'Real-Time AI Voice Agent — Murf & LiveKit',
    year: '2026',
    genre: 'Generative AI / Voice AI / Real-Time Applications',
    logline: 'A real-time voice agent starter that connects speech recognition, a language model, text-to-speech generation, and LiveKit audio streaming to support conversational voice interactions.',
    stack: ['Python', 'LiveKit', 'Murf Falcon TTS', 'Deepgram Speech-to-Text', 'Google Gemini or OpenAI API', 'Node.js', 'React / Next.js frontend', 'pnpm', 'uv'],
    build: [
      'Set up the voice-agent architecture connecting speech input and generated audio output.',
      'Integrated the documented speech-to-text, language model, and text-to-speech workflow.',
      'Configured the frontend and backend development environment.',
      'Prepared local startup scripts and environment-variable configuration.',
    ],
    features: [
      'Microphone-based voice interaction',
      'Speech-to-text processing',
      'LLM-generated responses',
      'Text-to-speech using Murf Falcon',
      'LiveKit audio communication',
      'Configurable API integrations',
    ],
    metrics: [],
    github: 'https://github.com/aiverseofshalab/murf-livekit-starter',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'codenakshtra-top-10',
    title: 'Top 10 Finalist — CodeNakshtra 2.0',
    org: 'CodeNakshtra 2.0',
    detail: 'Secured a Top 10 position at CodeNakshtra 2.0, held in Noida, India.',
    laurel: 'TOP 10 · CODENAKSHTRA 2.0',
  },
  {
    id: 'college-semester-project-first-rank',
    title: '1st Rank — Exposition 3.0',
    org: 'Gyan Ganga Institute of Technology & Science (GGITS), Jabalpur',
    detail: 'Contributed to the frontend development of Sentinelle (Safelet), a smart IoT-based personal safety wearable project featuring real-time GPS tracking, fall detection, secure communication, and blockchain-backed tamper detection. The project secured 1st rank in the college semester project evaluation, with guidance and support from SMARTSPHERE IoT Club.',
    laurel: '1ST RANK · EXPOSITION 3.0',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'HackerRank', name: 'SQL (Advanced)', link: 'https://www.hackerrank.com/certificates/39c7213524d6' },
  { issuer: 'Cisco', name: 'Data Analytics Essentials', link: 'https://www.credly.com/badges/5f4cc810-4e95-47ff-a5ef-696459d55d90/public_url' },
  { issuer: 'Cisco', name: 'Find Insights with AI', link: 'https://www.credly.com/badges/e54056e3-6b12-4d47-9367-6ed2b7980e0e/public_url' },
  { issuer: 'Cisco', name: 'Introduction to Modern AI', link: 'https://www.credly.com/badges/1bb9c80f-baa0-49ca-a06d-156ff6d60743/public_url' },
  { issuer: 'Udacity', name: 'Introducing Generative AI with AWS', link: 'https://www.udacity.com/certificate/e/176544d6-512a-11f0-bd72-57770896e639' },
  { issuer: 'Amazon Web Services (AWS)', name: 'AWS Educate Machine Learning Foundations', link: 'https://www.credly.com/badges/ea030138-1e4c-4bed-8894-6052a418dd0a/linked_in_profile' },
  { issuer: 'Cisco', name: 'IT Essentials', link: 'https://www.credly.com/badges/d3bed7d4-8eed-42b0-801b-1a191ab28ece/linked_in_profile' },
  { issuer: 'Microsoft', name: 'Introduction to Git' },
  { issuer: 'Oracle', name: 'Java Programming' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Programming languages',
    skills: [
      { name: 'Java', mono: 'Jv' },
      { name: 'Python', mono: 'Py' },
      { name: 'C++', mono: 'C+' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'SQL', mono: 'SQL' },
    ],
  },
  {
    id: 'data-structures-algorithms',
    title: 'Data Structures & Algorithms',
    subtitle: 'Problem-solving topics',
    skills: [
      { name: 'Data Structures and Algorithms (DSA) using Java', mono: 'DS' },
      { name: 'Arrays and Strings', mono: 'A/S' },
      { name: 'Searching and Sorting', mono: 'S/S' },
      { name: 'Linked Lists', mono: 'LL' },
      { name: 'Stacks and Queues', mono: 'S/Q' },
      { name: 'Recursion', mono: 'Rc' },
      { name: 'Basic Problem-Solving', mono: 'BP' },
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    subtitle: 'Web technologies',
    skills: [
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'C3' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'React.js', mono: 'Re' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'Responsive Web Design', mono: 'RW' },
    ],
  },
  {
    id: 'backend-apis',
    title: 'Backend Development & APIs',
    subtitle: 'Server-side tools and APIs',
    skills: [
      { name: 'Java Spring Boot', mono: 'SB' },
      { name: 'REST API Development', mono: 'API' },
      { name: 'Python FastAPI', mono: 'FA' },
      { name: 'API Integration', mono: 'AI' },
      { name: 'Maven', mono: 'Mv' },
    ],
  },
  {
    id: 'data-analytics',
    title: 'Databases & Data Analytics',
    subtitle: 'Data and databases',
    skills: [
      { name: 'SQL', mono: 'SQL' },
      { name: 'Data Analysis Fundamentals', mono: 'DA' },
      { name: 'Data Interpretation', mono: 'DI' },
      { name: 'Data Visualization Fundamentals', mono: 'DV' },
    ],
  },
  {
    id: 'cs-fundamentals',
    title: 'Computer Science Fundamentals',
    subtitle: 'Computer science topics',
    skills: [
      { name: 'Object-Oriented Programming (OOP)', mono: 'OP' },
      { name: 'Database Management Systems (DBMS)', mono: 'DB' },
      { name: 'Operating Systems (OS)', mono: 'OS' },
      { name: 'Computer Networks (CN)', mono: 'CN' },
      { name: 'Software Engineering Fundamentals', mono: 'SE' },
      { name: 'Computer Organization and Architecture (COA)', mono: 'CO' },
    ],
  },
  {
    id: 'ai-generative-ai',
    title: 'Artificial Intelligence & Generative AI',
    subtitle: 'AI and voice technologies',
    skills: [
      { name: 'AI Fundamentals', mono: 'AI' },
      { name: 'Machine Learning Fundamentals', mono: 'ML' },
      { name: 'Generative AI Fundamentals', mono: 'GA' },
      { name: 'AI API Integration', mono: 'API' },
      { name: 'Speech-to-Text Integration', mono: 'STT' },
      { name: 'Text-to-Speech Integration', mono: 'TTS' },
    ],
  },
  {
    id: 'iot-embedded',
    title: 'IoT & Embedded Systems',
    subtitle: 'IoT and sensor technologies',
    skills: [
      { name: 'Internet of Things (IoT)', mono: 'IoT' },
      { name: 'ESP32 Microcontroller', mono: 'E32' },
      { name: 'MPU6050 Accelerometer and Gyroscope', mono: 'MPU' },
      { name: 'NEO-6M GPS Module', mono: 'GPS' },
      { name: 'Sensor Integration', mono: 'SI' },
      { name: 'Sensor Data Acquisition', mono: 'SD' },
      { name: 'GPS-Based Location Tracking', mono: 'GPS' },
      { name: 'Fall Detection Systems', mono: 'FD' },
      { name: 'Real-Time Monitoring', mono: 'RT' },
      { name: 'IoT–Cloud Integration', mono: 'IC' },
    ],
  },
  {
    id: 'cybersecurity-blockchain',
    title: 'Cybersecurity & Blockchain',
    subtitle: 'Security and distributed systems',
    skills: [
      { name: 'Cybersecurity Fundamentals', mono: 'CS' },
      { name: 'Password Strength Analysis', mono: 'PS' },
      { name: 'Blockchain Fundamentals', mono: 'BC' },
      { name: 'Solidity Fundamentals', mono: 'So' },
      { name: 'Smart Contracts', mono: 'SC' },
      { name: 'Ethereum Sepolia Testnet', mono: 'ES' },
      { name: 'IPFS Fundamentals', mono: 'IP' },
    ],
  },
  {
    id: 'tools-platforms',
    title: 'Tools & Platforms',
    subtitle: 'Development tools and services',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'GH' },
      { name: 'Visual Studio Code', mono: 'VS' },
      { name: 'IntelliJ IDEA', mono: 'IJ' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'AWS', mono: 'AWS' },
      { name: 'LiveKit', mono: 'LK' },
      { name: 'Twilio', mono: 'Tw' },
      { name: 'Docker Fundamentals', mono: 'Dk' },
    ],
  },
  {
    id: 'design-productivity',
    title: 'Design & Productivity Tools',
    subtitle: 'Design and productivity tools',
    skills: [
      { name: 'Canva', mono: 'Ca' },
      { name: 'Figma', mono: 'Fg' },
      { name: 'Microsoft Word', mono: 'MW' },
      { name: 'Microsoft Excel', mono: 'ME' },
      { name: 'Microsoft PowerPoint', mono: 'MP' },
      { name: 'Google Workspace', mono: 'GW' },
    ],
  },
  {
    id: 'aptitude-non-technical',
    title: 'Aptitude & Non-Technical Skills',
    subtitle: 'Aptitude and collaboration',
    skills: [
      { name: 'Quantitative Aptitude', mono: 'QA' },
      { name: 'Logical Reasoning', mono: 'LR' },
      { name: 'Analytical Thinking', mono: 'AT' },
      { name: 'Problem-Solving', mono: 'PS' },
      { name: 'Communication', mono: 'Cm' },
      { name: 'Teamwork and Collaboration', mono: 'TC' },
      { name: 'Time Management', mono: 'TM' },
      { name: 'Adaptability', mono: 'Ad' },
      { name: 'Presentation Skills', mono: 'Pr' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Ciphera — Java REST API', 'Oracle — Java Programming'],
  Python: ['OpenPulse — FastAPI backend', 'Ciphera — Python analyzer', 'Murf & LiveKit voice agent'],
  'JavaScript': ['Ciphera — responsive JavaScript interface'],
  SQL: ['HackerRank — SQL (Advanced)', 'IR Survey Agent — Supabase PostgreSQL'],
  'HTML5': ['Ciphera — interface stack'],
  'CSS3': ['Ciphera — interface stack'],
  'React.js': ['OpenPulse', 'CivicChain', 'IR Survey Agent'],
  'Next.js': ['OpenPulse', 'IR Survey Agent', 'Murf & LiveKit voice agent'],
  TypeScript: ['OpenPulse', 'IR Survey Agent'],
  'Node.js': ['CivicChain', 'IR Survey Agent', 'Murf & LiveKit voice agent'],
  'Express.js': ['CivicChain', 'IR Survey Agent'],
  'Responsive Web Design': ['Ciphera — responsive interface'],
  'Java Spring Boot': ['Ciphera'],
  'REST API Development': ['Ciphera — Java REST API', 'OpenPulse — FastAPI backend'],
  'Python FastAPI': ['OpenPulse'],
  'API Integration': ['OpenPulse — GitHub API', 'CivicChain — Gemini Vision', 'IR Survey Agent — Twilio'],
  Maven: ['Ciphera'],
  PostgreSQL: ['IR Survey Agent — Supabase PostgreSQL'],
  'Data Analysis Fundamentals': ['Cisco — Data Analytics Essentials'],
  'AI Fundamentals': ['Cisco — Introduction to Modern AI', 'Cisco — Find Insights with AI'],
  'Machine Learning Fundamentals': ['AWS — AWS Educate Machine Learning Foundations'],
  'Generative AI Fundamentals': ['Udacity — Introducing Generative AI with AWS'],
  'AI API Integration': ['CivicChain — Gemini Vision', 'Murf & LiveKit voice agent — configurable LLM APIs'],
  'Speech-to-Text Integration': ['Murf & LiveKit voice agent — Deepgram'],
  'Text-to-Speech Integration': ['Murf & LiveKit voice agent — Murf Falcon'],
  'Internet of Things (IoT)': ['1st Rank — College Semester Project Evaluation (Sentinelle / Safelet)'],
  'GPS-Based Location Tracking': ['Sentinelle (Safelet) — real-time GPS tracking'],
  'Fall Detection Systems': ['Sentinelle (Safelet) — fall detection'],
  'Cybersecurity Fundamentals': ['Ciphera — password analysis'],
  'Password Strength Analysis': ['Ciphera'],
  'Blockchain Fundamentals': ['CivicChain'],
  'Solidity Fundamentals': ['CivicChain — Solidity stack'],
  'Smart Contracts': ['CivicChain — ERC-721 civic issue NFTs'],
  'Ethereum Sepolia Testnet': ['CivicChain'],
  'IPFS Fundamentals': ['CivicChain — IPFS evidence storage'],
  GitHub: ['OpenPulse — GitHub API integration'],
  AWS: ['AWS Educate Machine Learning Foundations', 'Introducing Generative AI with AWS'],
  LiveKit: ['Murf & LiveKit voice agent'],
  Twilio: ['IR Survey Agent'],
  'Microsoft Excel': ['IR Survey Agent — Excel contact import and response export'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Developer Journey',
    period: '2024–2026',
    synopsis: 'The journey of a Computer Science and Engineering student specializing in IoT, Cybersecurity, and Blockchain Technology, building technical skills through programming, software projects, certifications, and college-level achievements. This season highlights the foundations of software development, exploration of AI-powered applications, and practical project work while pursuing a career as a Software Engineer.',
    episodes: [
      {
        code: 'S01E01',
        title: 'The Foundations',
        description: 'An introduction to my B.Tech journey at GGITS, Jabalpur, and my academic specialization in IoT, Cybersecurity, and Blockchain Technology.',
        tags: ['Education', 'CSE', 'IoT', 'Cybersecurity', 'Blockchain'],
        runtime: '2 min',
        palette: amber,
      },
      {
        code: 'S01E02',
        title: 'Learning to Code',
        description: 'Building programming foundations in Java, Python, C++, SQL, and web technologies while developing an interest in software engineering.',
        tags: ['Java', 'Python', 'C++', 'SQL', 'Programming'],
        runtime: '3 min',
        palette: crimson,
      },
      {
        code: 'S01E03',
        title: 'Building Real-World Projects',
        description: 'Exploring application development through projects including OpenPulse, CivicChain, Call-Agent, and Ciphera Password Intelligence.',
        tags: ['Projects', 'Full-Stack Development', 'APIs', 'Software Engineering'],
        runtime: '4 min',
        palette: ocean,
      },
      {
        code: 'S01E04',
        title: 'Exploring AI and Voice Technology',
        description: 'Working with AI-related project concepts and exploring voice-agent technologies through the Murf LiveKit starter project.',
        tags: ['Generative AI', 'Voice AI', 'LiveKit', 'APIs'],
        runtime: '3 min',
        palette: violet,
      },
      {
        code: 'S01E05',
        title: 'IoT and Innovation',
        description: 'Contributing to frontend development for Sentinelle (Safelet), an IoT-based personal safety project that secured first rank in the college project evaluation at Exposition 3.0.',
        tags: ['IoT', 'Frontend Development', 'Sentinelle', 'Exposition 3.0'],
        runtime: '3 min',
        palette: jade,
      },
      {
        code: 'S01E06',
        title: 'Learning Beyond the Classroom',
        description: 'Highlighting certifications in SQL, data analytics, AI, machine learning foundations, Git, and Java programming, alongside a Top 10 finish at CodeNakshtra 2.0 in Noida.',
        tags: ['Certifications', 'Hackathon', 'Data Analytics', 'AI', 'Professional Development'],
        runtime: '3 min',
        palette: amber,
      },
      {
        code: 'S01E07',
        title: 'The Software Engineer Goal',
        description: 'Focusing on continued development of Java, DSA, computer science fundamentals, backend development, and placement preparation.',
        tags: ['Software Engineer', 'Java Developer', 'DSA', 'Career Development'],
        runtime: '2 min',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

const highlightPalettes = [crimson, amber, ocean, violet, jade];
const highlightCandidates: TopPick[] = [
  ...projects.map((project) => ({
    label: project.genre,
    title: project.title,
    detail: project.stack.slice(0, 3).join(' · '),
    palette: project.palette,
  })),
  ...achievements.map((achievement, index) => ({
    label: 'Achievement',
    title: achievement.title,
    detail: achievement.org,
    palette: highlightPalettes[index % highlightPalettes.length],
  })),
  ...certifications.map((certification, index) => ({
    label: `${certification.issuer} certification`,
    title: certification.name,
    detail: certification.issuer,
    palette: highlightPalettes[(index + achievements.length) % highlightPalettes.length],
  })),
];

export const topPicks: TopPick[] = highlightCandidates.slice(0, 10);

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · The Developer Journey',
    lines: [education[0].school, education[0].degree, `Expected graduation: 2028`],
    chips: [education[0].period, education[0].score],
  },
  {
    kicker: 'Skills',
    title: 'Software Engineering',
    lines: [
      `Programming: ${skillCategories[0].skills.map((skill) => skill.name).join(', ')}`,
      `Explore ${skillCategories.length} skill categories, including web, backend, data, AI, IoT, and cybersecurity.`,
    ],
    chips: profile.tagline,
  },
  {
    kicker: 'Projects',
    title: `${projects.length} Projects`,
    lines: projects.map((project) => project.title),
  },
  {
    kicker: 'Achievements',
    title: `${achievements.length} Achievements`,
    lines: achievements.map((achievement) => `${achievement.title} — ${achievement.org}`),
  },
  {
    kicker: 'Certifications',
    title: `${certifications.length} Certifications`,
    lines: certifications.map((certification) => `${certification.issuer}: ${certification.name}`),
  },
  {
    kicker: 'Journey',
    title: seasons[0].title,
    lines: seasons[0].episodes.map((episode) => `${episode.code} — ${episode.title}`),
  },
  {
    kicker: 'Career Focus',
    title: profile.role,
    lines: [
      'Java development and practical software solutions.',
      'Continuing to strengthen technical capabilities.',
    ],
  },
];

export type ProfileId = 'shalab' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'shalab',
    name: 'Shalab',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Profile & education', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Projects • ${projects[0]?.year ?? ''}`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: `${topPicks.length} Highlights`, palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories • ${skillCategories.reduce((n, category) => n + category.skills.length, 0)} Skills`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Achievements • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume sheet • Profile overview', palette: violet },
};
