import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';




import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public af: AuthService, private router:Router) {
    
  }

  ngOnInit() {
  }

  login(email, password){
    this.af.login(email, password);
  }

  createAccount(email, password, event){
    event.preventDefault();
    console.log(email, password)
    this.af.emailSignup(email, password);
  }

  loginWithGoogle(event){
    event.preventDefault();
    this.af.loginWithGoogle();
  }

  logout(){
    this.af.logout();
  }


  

}
