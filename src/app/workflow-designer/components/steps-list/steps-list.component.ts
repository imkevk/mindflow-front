import { Component, Input } from '@angular/core';
import { Workflow } from 'src/app/models/workflow.model';

@Component({
  selector: 'app-steps-list',
  templateUrl: './steps-list.component.html',
  styleUrls: ['./steps-list.component.scss']
})
export class StepsListComponent {
  @Input() workflow: Workflow | null = null;

  getStepById(id: number) {
    return this.workflow?.steps.find(step => step.id === id);
  }
}
