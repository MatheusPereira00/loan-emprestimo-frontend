import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { guardGuard } from './guard.guard';
import { ProdutoComponent } from './produto/produto.component';
import { AdmComponent } from './adm/adm.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  }, {
    path: 'home', component: HomeComponent, canActivate: [guardGuard]
  }, {
    path: 'produtos', component: ProdutoComponent, canActivate: [guardGuard]
  }, {
    path: 'adm', component: AdmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
