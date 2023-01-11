import { Workflow } from "../models/workflow.model";

export interface WorkflowContext {
  workflow: Workflow | null;
}

export const workflowContext: WorkflowContext = {
  workflow: null
};