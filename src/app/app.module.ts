import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AssetsComponent } from './assets/assets.component';
import { LoginComponent } from './login/login.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AssetsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
