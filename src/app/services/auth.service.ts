import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:60511/api/auth/';

constructor(private http: HttpClient) {

}

 login(model: any) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };
  return this.http.post(this.baseUrl + 'login',
  new HttpParams({fromObject: {UserName:model.UserName, Password: model.Password}}), httpOptions)
  .pipe(
    map((response: any) => {
      const user = response;
      if (user) {
        localStorage.setItem('token', user.token);
      }
    })
  );
 }

 register(model:any){
   return this.http.post(this.baseUrl + "register", model);
 }

}
