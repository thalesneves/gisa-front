import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfoCadastralComponent } from './info-cadastral/info-cadastral.component';
import { LoginFormComponent } from './seguranca/login-form/login-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'infocadastral', component: InfoCadastralComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
