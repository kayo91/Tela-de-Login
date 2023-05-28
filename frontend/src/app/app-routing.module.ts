

import { LoginComponent } from './views/login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrologinComponent } from './views/cadastrologin/cadastrologin.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastroLogin', component: CadastrologinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
