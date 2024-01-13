import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';

const ADMIN_API = 'http://localhost:8080/api/admin/';
const USERS_KEY = 'users'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users!: User[];

  constructor(private http: HttpClient, private tokenService: TokenStorageService) {
    // this.getUsers();
   }

  async getUsers(){
    const headers = this.createAuthHeaders();
    this.http.get<User[]>(ADMIN_API + 'users', { headers }).subscribe(
      data => {
        window.sessionStorage.removeItem(USERS_KEY);
        window.sessionStorage.setItem(USERS_KEY, JSON.stringify(data));
      },
      err => {
        console.log("Users load error: " + err.error.message);
      }
    )
    this.users = <User[]>JSON.parse(window.sessionStorage.getItem(USERS_KEY) || "").usersWithRoleNames;
  }

  updateUser(_id: string, roles: string[], isBanned: boolean){
    const headers = this.createAuthHeaders();
    this.http.patch(ADMIN_API + 'user/' + _id, {roles, isBanned}, {headers}).subscribe(
      data => {
        console.log(`User ${_id} updated successfuly`);
        this.getUsers();
      },
      err => {
        console.log(`User ${_id} update error: ` + err.error.message);
      }
    )

  }

  public createAuthHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.tokenService.getToken() || '',
    });
    return headers;
  }
}
