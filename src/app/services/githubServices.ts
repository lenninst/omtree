import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubUser } from '../core/models/github.model';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private readonly apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getUserDetails(username: string) {
    return this.http.get<GithubUser>(`${this.apiUrl}/${username}`);
  }
}
