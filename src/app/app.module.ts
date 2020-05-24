import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component'; 
import { AuthService } from './shared/services/user/auth.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AccountsService } from './shared/services/accounts/accounts.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    UserProfileComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
