import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workflow } from 'src/app/models/workflow.model';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  constructor(private readonly http: HttpClient) { }

  // Should be a get /workflow/:id
  getWorkflowById(): Observable<Workflow> {
    return this.http.get('assets/workflow.json') as Observable<Workflow>;
  }
}
