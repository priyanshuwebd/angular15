import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  {path:'', component:TodoComponent},
  { path: 'user-auth', component: UserAuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
