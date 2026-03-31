export interface TeamMember {
  username: string;
  avatarUrl?: string;
}

export interface Project {
  id: string;
  members: TeamMember[];
  description: string;
  repoUrl: string;
}
