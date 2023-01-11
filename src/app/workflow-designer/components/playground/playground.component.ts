import { Component } from '@angular/core';
import { Workflow, WorkflowStepType } from 'src/app/models/workflow.model';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {
  workflow: Workflow = {
    id: 1,
    name: 'Mon Workflow 1',
    steps: [
      { id: 1, title: 'Webhook', subtitle: 'Faire qqch', type: WorkflowStepType.Trigger, nextStep: [2] },
      { id: 2, title: 'Mon Step 2', subtitle: 'Faire autre chose', type: WorkflowStepType.Task, nextStep: [3] },
      { id: 3, title: 'Choix', type: WorkflowStepType.Operator, nextStep: [4, 5] },
      { id: 4, title: 'Mon Step 4', subtitle: 'Faire autre chose', type: WorkflowStepType.Task, nextStep: [6] },
      { id: 5, title: 'Mon Step 5', subtitle: 'Faire autre chose', type: WorkflowStepType.Task, nextStep: [6] }
    ]
  }
}
