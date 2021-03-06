import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/AlertifyService.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Input() lookfor: any;
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService, private alertyfy: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('success');
      this.alertyfy.success('User successfully registered');
    }, error => {
      console.log('error');
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }


}
