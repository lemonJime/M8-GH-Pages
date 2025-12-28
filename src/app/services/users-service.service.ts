import { Injectable } from '@angular/core';
import { RandomUserResponse, User } from '../model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UsersService {
  //private users : User[] = []
  private url = `https://randomuser.me/api?results=10`;


  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<RandomUserResponse> {
    return this.http.get<RandomUserResponse>(this.url);
  }

}
