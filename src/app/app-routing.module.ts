import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AssetsComponent} from './assets/assets.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import { AssetsAddAssetComponent} from './assets-add-asset/assets-add-asset.component';
import { LiabilitiesComponent} from './liabilities/liabilities.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'assets', component: AssetsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'liabilities', component: LiabilitiesComponent},
  {path: 'addAsset', component: AssetsAddAssetComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}