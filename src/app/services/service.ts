import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private apiKey = environment.apiKey;
  private apiUrl = 'https://www.googleapis.com/youtube/v3';

  constructor(private http: HttpClient) {}

  searchChannel(username: string): Observable<any> {
    const url = `${this.apiUrl}/search?part=snippet&type=channel&q=${username}&key=${this.apiKey}`;
    return this.http.get(url);
  }

  getChannelDetails(channelId: string): Observable<any> {
    const url = `${this.apiUrl}/channels?part=snippet,statistics,contentDetails&id=${channelId}&key=${this.apiKey}`;
    return this.http.get(url);
  }

  searchGithubUser(username: string): Observable<any> {
    const url = `https://api.github.com/users/${username}`;
    return this.http.get(url);
  }
}

export class GithubService {
  private apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getUserDetails(username: string): Observable<any> {
    const url = `${this.apiUrl}/${username}`;
    return this.http.get(url);
  }
}
