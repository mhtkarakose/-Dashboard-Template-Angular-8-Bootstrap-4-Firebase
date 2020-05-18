import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { AuthGuard } from "./shared/guard/auth.guard";
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AccountsComponent } from './components/accounts/accounts.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'}, 
  { path: 'login', component: LoginComponent, },
  { path: 'signup', component: SignUpComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  { path: 'accounts', component: AccountsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
