import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PlaygroundComponent } from './components/playground/playground.component';
import { IncludedInMultipleStepsPipe } from './pipes/included-in-multiple-steps.pipe';
import { WorkflowDesignerRoutingModule } from './workflow-designer-routing.module';
import { StepsListComponent } from './components/steps-list/steps-list.component';
import { AddElementDialogComponent } from './components/add-element-dialog/add-element-dialog.component';


@NgModule({
  declarations: [
    PlaygroundComponent,
    IncludedInMultipleStepsPipe,
    StepsListComponent,
    AddElementDialogComponent
  ],
  imports: [
    CommonModule,
    WorkflowDesignerRoutingModule,
    SharedModule
  ]
})
export class WorkflowDesignerModule { }
