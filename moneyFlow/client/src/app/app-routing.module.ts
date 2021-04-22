import { SigninComponent } from './pages/auth/signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthRequiredGuard } from './guards/auth-required.guard';
import { UnAuthRequiredGuard } from './guards/un-auth-required.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthRequiredGuard],
  },
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [UnAuthRequiredGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [UnAuthRequiredGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
