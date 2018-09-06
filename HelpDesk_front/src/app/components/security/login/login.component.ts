import { AppComponent } from './../../../app.component';
import { UserModel } from './../../../model/user.model';
import { UserService } from './../../../services/user.service';
import { SharedService } from './../../../services/shared.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser } from '../../../model/current.user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user = new UserModel('','','','','');
  shared : SharedService;
  message : boolean;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.shared = SharedService.getInstance();
  }


  login(){  
    this.message = false;
    this.userService.login(this.user).subscribe( (userAuthentication: CurrentUser) => {
      this.shared = new SharedService(userAuthentication.token, userAuthentication.user);
      this.shared.emitirTrue();
      this.router.navigate(['/']);
    }, err => {
      this.shared = new SharedService(null, null);
      this.shared.emitirFalse();
      this.message = true;
    });
  }

  cancelLogin(){
    this.message = false;
    this.user = new UserModel('','','','','');
    window.location.href = '/login';
    window.location.reload();
  }

  getFormGroupClass(isInvalid: boolean, isDirty: boolean){
    return {
      "form-group": true,
      "has-error": isInvalid && isDirty,
      "has-success": !isInvalid && isDirty
    };
  }
}
