import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';


interface IUserData {
  id: number;
  username: string;
  email: string;
  age: number;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient)

  getUserData(id: number) {
    return this.http.get<IUserData>(`http://localhost:3000/api/users/${id}`)
  }
}
