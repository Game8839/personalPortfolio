import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyIntroductionComponent } from './my-introduction/my-introduction.component';
import { MyStackComponent } from './my-stack/my-stack.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ECommerceComponent } from './my-projects/e-commerce/e-commerce.component';
import { TodolistComponent } from './my-projects/todolist/todolist.component';
import { OreoComponent } from './my-projects/oreo/oreo.component';

const routes: Routes = [
  { path: '', component: MyIntroductionComponent },
  { path: 'mystack', component: MyStackComponent },
  {
    path: 'myproject',
    component: MyProjectsComponent,
    children: [
      { path: 'ecommerce', component: ECommerceComponent },
      { path: 'oreo', component: OreoComponent },
      { path: 'todolist', component: TodolistComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
