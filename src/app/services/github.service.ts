import { Injectable } from '@angular/core';
//http client
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  //injecting
  constructor(private http: HttpClient) {}

  //it will return observable
  getUserDetails(username: string) {
    return this.http.get(`https://api.github.com/users/${username}`);
  }

  //it will return observable
  getRepos(repoUrl: string) {
    return this.http.get(repoUrl);
  }
}
