import { Component } from '@angular/core';
import { workflowContext } from '../../workflow.context';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {
  workflow = workflowContext.workflow;
}
