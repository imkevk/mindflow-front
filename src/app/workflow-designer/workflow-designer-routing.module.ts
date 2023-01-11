import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkflowGuard } from '../core/guards/workflow.guard';
import { PlaygroundComponent } from './components/playground/playground.component';

const routes: Routes = [
  { path: '', component: PlaygroundComponent, canActivate: [WorkflowGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowDesignerRoutingModule { }
