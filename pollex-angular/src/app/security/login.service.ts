import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AUTH_URL} from '../URLS_REST';
import {CanLoad, Route} from '@angular/router';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanLoad {

  private user: User;

  canLoad(route: Route): boolean {
    return !!this.user.token;
  }

  constructor(private http: HttpClient) { }

  login(username: string, password: string): boolean {
    if (!username || !password) return false;

    this.http.post(AUTH_URL, { username, password }).subscribe(response => {
      this.user = new User(response);
      return true;
    }, error => {
      return false;
    });
  }

  logout() {
    this.user = new User();
  }
}
