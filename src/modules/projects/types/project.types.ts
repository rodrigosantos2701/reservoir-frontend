export type ProjectApiResponseSchema = {
  name_project: string;
  type_ccus_strategies_id: number;
  id: number;
  project_id: string;
  created_at: string;
};

export type ProjectDTO = {
  id: number;
  projectId: string;
  name: string;
  strategyTypeId: number;
  createdAt: string;
};
