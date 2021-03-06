import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSharesComponent } from './components/add-shares/add-shares.component';

import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SharesComponent } from './components/shares/shares.component';

import { UpdatesharesComponent } from './components/updateshares/updateshares.component';

const routes: Routes = [
  {path:'logins',component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'', component:RegistrationComponent},
  {path:'addshares',component:AddSharesComponent},
  {path:'updateshares',component:UpdatesharesComponent},
  {path:'shares',component:SharesComponent},
  {path:'editprofile',component:ProfileComponent}

  
];
6
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
