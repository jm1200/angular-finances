import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  updateProfileForm: FormGroup;
  private showUpdateForm: boolean = false;

  constructor(public af: AuthService, public fb: FormBuilder, private router: Router) { 
    this.updateProfileForm= fb.group({
      'displayName':['']
    });

  }
  onSubmit(value):void{
    console.log('submitted, ', value.displayName)
    this.af.updateProfile(value.displayName);
    this.router.navigateByUrl('/home');
    
    
  }

  ngOnInit() {
  }

  
  showForm(){
    this.showUpdateForm = !this.showUpdateForm;
  }

}
