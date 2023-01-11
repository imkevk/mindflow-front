export interface Workflow {
  id: number;
  name: string;
  steps: WorkflowStep[];
}

export interface WorkflowStep {
  id: number;
  title: string;
  subtitle?: string;
  type: WorkflowStepType;
  nextStep: number[];
}

export enum WorkflowStepType {
  Trigger = 'trigger',
  Operator = 'operator',
  Task = 'task'
}