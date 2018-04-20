import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {Asset} from '../models/data.model';
import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/observable';
import {Subscription} from 'rxjs/Subscription';



@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css'],
  providers:[DataService]
})
export class AssetsComponent implements OnInit {
  assets: Asset[];
  loadCompleted: boolean = false;
  itemsSubscription: Subscription;
  constructor(public data: DataService, private afs: AngularFirestore) { 
    
  }

  ngOnInit() {
    this.itemsSubscription = this.data.getAssets().subscribe(
      (assets)=>{
        console.log(assets);
        this.assets = assets;
      }
    ) 
  }
  ngOnDestroy(){
    this.itemsSubscription.unsubscribe();
    }
}
