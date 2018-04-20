import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/publishReplay';
import {AuthService} from '../services/auth.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';


import {Asset} from '../models/data.model';

@Injectable()
export class DataService {
  assetCollection: AngularFirestoreCollection<Asset>;
  assets: Observable<Asset[]>;
  queryObservable: Observable<Asset[]>;
  

  constructor(public afs: AngularFirestore, public af: AuthService) { 
    //this.assets = this.afs.collection('assets').valueChanges();
    

    
    console.log(`DataService constructor: uid check: ${this.af.uid}`)
    let uid = this.af.uid;
    this.assets = this.afs.collection('assets', ref => ref.where('uid', '==', uid)).snapshotChanges().map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as Asset;
        data.id = a.payload.doc.id;
        return data;
      })
    })
    //This will cache the last value and reemit it to new subscribers
    .publishReplay(1)
    .refCount();
    

  }

  getAssets(){
    return this.assets;
  }

  addAsset(asset: Asset){
    this.afs.collection('assets').add(asset);
  }

  
  
}

