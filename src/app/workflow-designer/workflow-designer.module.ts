import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PlaygroundComponent } from './components/playground/playground.component';
import { WorkflowDesignerRoutingModule } from './workflow-designer-routing.module';


@NgModule({
  declarations: [
    PlaygroundComponent
  ],
  imports: [
    CommonModule,
    WorkflowDesignerRoutingModule,
    SharedModule
  ]
})
export class WorkflowDesignerModule { }
