export interface SkillItem {
  name: string;
  level: 'Proficient' | 'Familiar' | 'Fundamental' | 'Working Knowledge';
  category: 'programming' | 'web' | 'database' | 'tools' | 'others';
  icon?: string;
  description?: string;
}

export interface SoftSkill {
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectDetail {
  id: string;
  name: string;
  role: string;
  teamRole: string;
  techStack: string[];
  problem: string;
  objectives: string[];
  features: string[];
  architecture: {
    client: string;
    server: string;
    database: string;
  };
  challenges: Array<{
    challenge: string;
    solution: string;
  }>;
  results: string[];
  githubUrl: string;
  documentationUrl: string;
  screenshots: Array<{
    title: string;
    caption: string;
  }>;
}

export interface CertificationTrack {
  status: 'In Progress' | 'Target' | 'Completed';
  title: string;
  provider: string;
  focus: string;
  targetDate?: string;
}

export interface AchievementItem {
  title: string;
  organization: string;
  year: string;
  description: string;
  type: 'academic' | 'capstone' | 'seminar';
}

export interface ResidentRecord {
  id: string;
  fullName: string;
  age: number;
  gender: 'Male' | 'Female';
  purok: string;
  civilStatus: 'Single' | 'Married' | 'Widowed';
  voterStatus: 'Registered' | 'Unregistered';
  contact: string;
  registeredDate: string;
}

export interface ClearanceRequest {
  id: string;
  residentName: string;
  type: 'Barangay Clearance' | 'Certificate of Indigency' | 'Certificate of Residency';
  purpose: string;
  status: 'Approved' | 'Pending' | 'Issued';
  issueDate: string;
  controlNo: string;
}
