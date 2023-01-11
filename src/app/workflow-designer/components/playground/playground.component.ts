import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { WorkflowService } from 'src/app/core/services/workflow.service';
import { Workflow, WorkflowStepType } from 'src/app/models/workflow.model';
import { workflowContext } from '../../workflow.context';
import { AddElementDialogComponent } from '../add-element-dialog/add-element-dialog.component';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {
  workflow$ = new BehaviorSubject(workflowContext.workflow);
  workflowStepType = WorkflowStepType;

  constructor(private readonly dialog: MatDialog, private readonly wkfService: WorkflowService) { }

  addWorkflowElement(stepType: WorkflowStepType, stepTitle?: string): void {
    const dialogRef = this.dialog.open(AddElementDialogComponent, {
      data: { stepType, steps: this.workflow$?.value?.steps, stepTitle }
    });

    dialogRef.afterClosed().subscribe(newStepData => {
      const updatedWorkflow = this.wkfService.addNewWorkflowStep(this.workflow$.value as Workflow, newStepData, stepType);
      console.log(updatedWorkflow);

      this.workflow$.next(updatedWorkflow);
    });
  }
}
