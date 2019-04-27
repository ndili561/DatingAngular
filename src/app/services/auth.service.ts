import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:60511/api/auth/';
  jwthelper = new JwtHelperService();


constructor(private http: HttpClient) {

}

 login(model: any) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };
  return this.http.post(this.baseUrl + 'login',
  new HttpParams({fromObject: {UserName: model.UserName, Password: model.Password}}), httpOptions)
  .pipe(
    map((response: any) => {
      const user = response;
      if (user) {
        localStorage.setItem('token', user.value.token);
        this.decodedToken = this.jwthelper.decodeToken(user.value.token);
        console.log(this.decodedToken);
      }
    })
  );
 }

 register(model: any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };
  return this.http.post(this.baseUrl + 'register', new HttpParams({fromObject: {UserName: model.UserName, Password: model.Password}}),
    httpOptions);
 }

 loggedIn(){
   const token = localStorage.getItem('token');
   return !this.jwthelper.isTokenExpired(token);
 }

 decodedToken(){
  this.jwthelper.decodeToken(localStorage.getItem('token'));
 }




}
