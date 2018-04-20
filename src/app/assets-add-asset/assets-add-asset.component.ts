import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {DataService} from '../services/data.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Asset} from '../models/data.model';

@Component({
  selector: 'app-assets-add-asset',
  templateUrl: './assets-add-asset.component.html',
  styleUrls: ['./assets-add-asset.component.css']
})
export class AssetsAddAssetComponent implements OnInit {
  addAssetForm: FormGroup;
  obj: any;
  asset: Asset = {
    name: '',
    value: null,
    uid: ''
  };
  constructor(public af: AuthService, private fb: FormBuilder, public data: DataService) { 
    this.addAssetForm = fb.group({
      'id': [''],
      'name': [''],
      'value': [''],
      'uid': [this.af.getUserId()],
      
    })
    console.log("USER ID", this.af.getUserId());
  }

  ngOnInit() {
    this.obj= {[this.af.uid]: {
      assets: []
    }}
    
    
    
  }

  onSubmit(value): void {
    
    console.log('you submitted: ', value);
    this.asset.name = value.name;
    this.asset.value = value.value;
    this.asset.uid = this.af.getUserId();

    console.log(this.asset);

    if(this.asset.name != '' && this.asset.value){
      this.data.addAsset(this.asset);
    }
    


    //console.log(this.obj);
  }

}
