import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
import 'rxjs/add/operator/publishReplay';


@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  public isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;
  public uid: string;
  currentUser: any;

  constructor(public afAuth: AngularFireAuth, private router: Router) { 
    
    this.afAuth.authState.subscribe(auth=>{
      if(auth == null){
        console.log("AuthService: logged out");
        this.isLoggedIn = false;
        this.user_displayName = '';
        this.user_email = '';
        this.router.navigate(['home']);
      }else{
        this.isLoggedIn = true;
        this.user_displayName = auth.displayName;
        this.user_email = auth.email;
        this.router.navigate(['home']);
        this.uid = auth.uid;
        console.log(`AuthService: logged in user: ${this.user_email}. Id: ${this.uid}`);

      }
    })
    

    
  }

  loginWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider);
    //console.log(this.user);
    //console.log(this.afAuth);
  }

  logout(){
    this.uid = '';
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/home');
    
    
    console.log(`Logged out user. User: ${this.uid}`);
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        
        //console.log('Nice, it worked!');
        this.router.navigateByUrl('/profile');
      })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
      });
  }

  emailSignup(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        //console.log('Sucess', value);
        this.router.navigateByUrl('/profile');
      })
      .catch(error => {
        console.log('Something went wrong: ', error);
      });
  }
  updateProfile(displayName: string){
    this.currentUser = this.afAuth.auth.currentUser;
    this.currentUser.updateProfile({
      displayName: displayName
    }).then(function() {
      window.location.reload();
      //console.log("name changed");
    }).catch(function(error) {
      console.log(error);
    });
    
  }
  getUserId(){
    return this.uid;
  }

}
