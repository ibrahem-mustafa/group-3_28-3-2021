import { ArticleFormComponent } from './pages/article-form/article-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ArticleComponent } from './pages/article/article.component';
import { AuthRequiredGuard } from './guards/auth-required.guard';
import { UnAuthRequiredGuard } from './guards/un-auth-required.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthRequiredGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnAuthRequiredGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [UnAuthRequiredGuard],
  },
  {
    path: 'form',
    component: ArticleFormComponent,
    canActivate: [AuthRequiredGuard],
  },
  {
    path: 'form/:id',
    component: ArticleFormComponent,
    canActivate: [AuthRequiredGuard],
  },
  {
    path: 'articles/:id',
    component: ArticleComponent,
    canActivate: [AuthRequiredGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
