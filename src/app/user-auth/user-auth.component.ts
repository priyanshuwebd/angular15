import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { login } from '../data-type';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  showLogin: boolean = true;
  authError: string = "";
  
  constructor(private user: UserService) { }

  ngOnInit(): void {
    // to check if the user is already logged in
    this.user.userAuthReload();
  }

  login(data: login) {
    this.user.userLogin(data);
    this.user.invalidUserAuth.subscribe((result) => {
      console.warn(result);
      if (result) {
        this.authError = "Invalid Credentials";
      }
    });
  }

  openLogin() {
    this.showLogin = true;
  }
}
