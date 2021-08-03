import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from './authentication/authorize.guard';
import { LoginComponent } from './authentication/login/login.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';


const routes: Routes = [
  {
    path: "authentication/login",
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: "authentication/logout",
    component: LogoutComponent,
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeMenuComponent,
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
