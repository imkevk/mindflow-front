import { Pipe, PipeTransform } from '@angular/core';
import { Workflow } from 'src/app/models/workflow.model';

@Pipe({
  name: 'includedInMultipleSteps'
})
export class IncludedInMultipleStepsPipe implements PipeTransform {
  transform(stepId: number, workflow: Workflow): unknown {
    return workflow.steps
      .filter(step => step.nextStep.length > 1)
      .findIndex(step => step.nextStep.includes(stepId)) !== -1;
  }
}
