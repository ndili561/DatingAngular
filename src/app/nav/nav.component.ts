import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/AlertifyService.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
   constructor(public authService: AuthService, private alertyfy: AlertifyService, private router: Router) {}

   ngOnInit() {}

   login() {
     this.authService.login(this.model).subscribe(x => {
       this.alertyfy.success('Logged In');
     }, error => {
       console.log(error);
     }, ()=> {
       this.router.navigate(['/members']);
     });
    }
    loggedIn() {
      // const token = localStorage.getItem('token');
      // return !!token;
      return this.authService.loggedIn();
    }

    loggedOut() {
      localStorage.removeItem('token');
      this.alertyfy.error('Logged out');
      this.router.navigate(['/home'])
    }

    decodedToken(){
      return this.authService.decodedToken();

    }
}
