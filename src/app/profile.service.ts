import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

import { User } from './searchClasses/user'
import { Repositories } from './searchClasses/repositories'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  userProfile: User

  userRepo!: Repositories;

  // apiUrl = environment.API_URL;
  // apiKey = environment.API_KEY;

  constructor(private http: HttpClient) {
    this.userProfile = new User('', '', 0, 0, '', '', '', '');

  }

  searchUser(user: any) {
    interface Responsee {
      login: string,
      avatar_url: string,
      followers: number,
      following: number,
      bio: string,
      location: string,
      email: string,
      public_repos: string,

    }

    let baseUrl = environment.API_URL + user + '?access_token=' + environment.API_KEY;
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<Responsee>(baseUrl).toPromise().then(res => {
        this.userProfile = res;
        //console.log(res);
        resolve()

      }, error => {
        reject();
      })

    });
    return promise
  }

  displayRepos(user) {
    interface apiResponse {
      name: string,
      description: string,
      html_url: string,
      language: string

    }

    let url = environment.API_URL + user + '/repos' + '?access_token=' + environment.API_KEY;
    let promise = new Promise((resolve, reject) => {
      this.http.get<apiResponse>(url).toPromise().then(response => {
        this.userRepo = response;
        resolve()

      }, error => {
        reject();
      })

    });
    return promise
  }


}
