import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './Auth/signin/signin.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
   path: 'signin',
   component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
   },
   {
    path: 'task',
    component: TaskComponent
   },
  {
    path: '',
    redirectTo: '/main', pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
