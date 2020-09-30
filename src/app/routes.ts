import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UsersGuard } from './guards/users-guard.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, canActivate: [UsersGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }
