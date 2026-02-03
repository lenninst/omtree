export interface GithubUser {
  login: string;
  id: number;
  node_id: string;

  avatar_url: string;
  html_url: string;
  url: string;

  name: string | null;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  bio: string | null;

  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;

  twitter_username: string | null;
  hireable: boolean | null;

  created_at: string;
  updated_at: string;

  type: 'User' | 'Organization';
  site_admin: boolean;
}
