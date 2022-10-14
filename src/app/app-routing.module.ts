import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponentComponent } from './pages/chat-component/chat-component.component';
import { LoginComponent } from './pages/login/login.component';
import { PathConditionGuard } from './path-condition.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'chat', component: ChatComponentComponent, canActivate: [PathConditionGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
