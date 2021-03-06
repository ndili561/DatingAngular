import { Component, OnInit } from '@angular/core';
import { AuthService } from '../app/services/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jwttoken = new JwtHelperService();
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    console.log(token);
    if(token){
      this.authService.decodedToken = this.jwttoken.decodeToken(token);

    }

  }


}
