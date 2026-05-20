export interface ProjectBackground {
  industryProblem: string;
  userProblem: string;
  businessGoal: string;
}

export interface ProjectStrategy {
  insights: string[];
  uxStrategy: string;
  designDirection: string;
}

export interface ShowcaseSection {
  title: string;
  description: string;
  category: 'Research' | 'UX Strategy' | 'Information Architecture' | 'Interaction Design' | 'Final UI' | 'Design System' | 'Reflection';
  artifacts: Array<{
    id: string;
    title: string;
    type: 'mindmap' | 'wireframe' | 'flow' | 'ui' | 'tokens' | 'metrics' | 'architecture';
    data: any; // programmatic data used to draw high-fidelity SVG diagrams
  }>;
}

export interface Project {
  id: string;
  category: string;
  name: string;
  title: string;
  subtitle: string;
  keywords: string[];
  year: string;
  role: string;
  coreStatement: string;
  timeline: string;
  projectType: string;
  background: ProjectBackground;
  strategy: ProjectStrategy;
  showcaseSections: ShowcaseSection[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[]; // split by paragraphs or sub-headers for nice layout
}
