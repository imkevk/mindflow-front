import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationLayoutComponent } from './shared/smart-components/navigation-layout/navigation-layout.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./workflow-designer/workflow-designer.module').then(m => m.WorkflowDesignerModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
