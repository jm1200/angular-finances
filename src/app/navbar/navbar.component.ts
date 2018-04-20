import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isCollapsed = false;
  
   
  constructor(public af: AuthService) { 
    //console.log(af.afAuth.auth.currentUser);
  
  }

  ngOnInit() {
  }

  logout(event){
    event.preventDefault();
    this.af.logout();
    
  }
  

}
