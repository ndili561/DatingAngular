import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
   constructor(private authService: AuthService) {}

   ngOnInit() {}

   login() {
     this.authService.login(this.model).subscribe(x => {
       console.log('Logged In');
     }, error => {
       console.log(error);
     });
    }
    loggedIn() {
      const token = localStorage.getItem('token');
      return !!token;
    }

    loggedOut() {
      localStorage.removeItem('token');
    }
}
