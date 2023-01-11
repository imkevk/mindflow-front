import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workflow, WorkflowStep, WorkflowStepType } from 'src/app/models/workflow.model';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  constructor(private readonly http: HttpClient) { }

  // Should be a get /workflow/:id
  getWorkflowById(): Observable<Workflow> {
    return this.http.get('assets/workflow.json') as Observable<Workflow>;
  }

  // Should have a get workflow elements to get all actions available


  // Should be a put /workflow/:id
  addNewWorkflowStep(workflow: Workflow, newStep: any, stepType: WorkflowStepType): Workflow {
    const newStepId = workflow.steps.length + 1;
    const newAddedStep: WorkflowStep = {
      id: newStepId,
      title: newStep.title,
      type: stepType,
      subtitle: newStep.subtitle ?? null,
      nextStep: []
    };
    const updatedSteps: WorkflowStep[] = [];

    workflow.steps.forEach(step => {
      const isPreviousNewStep = newStep.previousStep === step.id;

      if (isPreviousNewStep) {
        newAddedStep.nextStep = step.nextStep;
        step = { ...step, nextStep: [newStepId] };
        updatedSteps.push(step);
        updatedSteps.push(newAddedStep);
      } else {
        updatedSteps.push(step);
      }
    });

    return {
      ...workflow,
      steps: updatedSteps
    };
  }
}
