import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from'./home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'welcome', component: AppComponent},
  { path: 'login', component: LoginComponent },
 /* {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },*/
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}