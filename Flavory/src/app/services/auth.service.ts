import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/Login.model';
import { Register } from '../models/Register.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();
  
  getLoginStatus(){
    return this.loggedIn.value;
  }
  updateLoginState(loginState: boolean) {
    this.loggedIn.next(loginState);
  }

  constructor(private http: HttpClient) {}
  postLogin(loginObj: Login) {
    if (!loginObj) return;
    console.log(loginObj);
    return this.http.post<any>('http://127.0.0.1:8000/api/login', loginObj);
  }
  postRegister(registerObj: Register) {
    if (!registerObj) return;
    console.log(registerObj);
    return this.http.post<any>(
      'http://127.0.0.1:8000/api/register',
      registerObj
    );
  }




logOut(){



}


}
