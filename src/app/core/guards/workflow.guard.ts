import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { workflowContext } from 'src/app/workflow-designer/workflow.context';
import { WorkflowService } from '../services/workflow.service';

@Injectable({
  providedIn: 'root'
})
export class WorkflowGuard implements CanActivate {
  constructor(private readonly workflowService: WorkflowService) { }

  canActivate(): Observable<boolean> | boolean {
    return workflowContext.workflow
      ? true : this.workflowService.getWorkflowById().pipe(
        tap(workflow => workflowContext.workflow = workflow),
        map(() => true)
      );
  }

}
