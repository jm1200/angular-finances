import { Component, OnInit } from '@angular/core';

import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
     email: '',
     password: ''
  };

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  signInWithEmail() {
     this.authService.createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((res) => {
           console.log(res);
     
           //this.router.navigate(['assets']);
        })
        .catch((err) => console.log('error: ' + err));
  }

}
