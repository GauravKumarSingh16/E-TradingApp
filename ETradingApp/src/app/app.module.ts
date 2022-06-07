import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from 'src/app/components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './components/registration/registration.component';
import { SharesComponent } from './components/shares/shares.component';
import { AddSharesComponent } from './components/add-shares/add-shares.component';
import { UpdatesharesComponent } from './components/updateshares/updateshares.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BusinessownerComponent } from './components/businessowner/businessowner.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    SharesComponent,
    AddSharesComponent,
    UpdatesharesComponent,
    ProfileComponent,
    BusinessownerComponent,
    CompanyComponent,
    CustomerComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
