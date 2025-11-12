import { Routes } from '@angular/router';
import { YoutubeComponent } from './features/article/youtube/youtube.component';
import { GithubComponent } from './features/article/github/github.component';
import { SpotifyComponent } from './features/article/spotify/spotify.component';

export const routes: Routes = [
  { path: '', component: YoutubeComponent },
  { path: 'youtube', component: YoutubeComponent },
  { path: 'github', component: GithubComponent },
  { path: 'spotify', component: SpotifyComponent },
];
