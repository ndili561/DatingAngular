import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/AlertifyService.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
   constructor(public authService: AuthService, private alertyfy: AlertifyService) {}

   ngOnInit() {}

   login() {
     this.authService.login(this.model).subscribe(x => {
       this.alertyfy.success('Logged In');
     }, error => {
       console.log(error);
     });
    }
    loggedIn() {
      // const token = localStorage.getItem('token');
      // return !!token;
      return this.authService.loggedIn();
    }

    loggedOut() {
      localStorage.removeItem('token');
      this.alertyfy.success('Logged out');
    }

    decodedToken(){
      return this.authService.decodedToken();

    }
}
