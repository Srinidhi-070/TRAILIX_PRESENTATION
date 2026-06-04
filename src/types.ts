export interface StatCard {
  id: string;
  value: string;
  label: string;
  change?: string;
  icon: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
}

export interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'algorithms' | 'database';
  logoText: string;
  variant: string;
  description: string;
}

export interface PerformanceMetric {
  id: string;
  value: string;
  label: string;
  unit?: string;
  details: string;
  color: string;
}

export interface TeamMember {
  name: string;
  role: string;
  usn: string;
  bio: string;
  github?: string;
  linkedin?: string;
  skills: string[];
}

export interface ProjectScreen {
  id: string;
  title: string;
  description: string;
  imageSeed: string;
  tag: string;
}
