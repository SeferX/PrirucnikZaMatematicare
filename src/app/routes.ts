import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UsersGuard } from './guards/users-guard.guard';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from './questions/question/question.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'questions', component: QuestionsComponent, children: [
      { path: ':id', component: QuestionComponent },
    ]
  },
  { path: 'users', component: UsersComponent, canActivate: [UsersGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }
