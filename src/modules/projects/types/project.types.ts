// shape EXATO da API
export type ProjectApi = {
  name_project: string;
  type_ccus_strategies_id: number;
  id: number;
  project_id: string;
  created_at: string;
};

// shape usado na UI/domínio
export type Project = {
  id: number;
  projectId: string;
  name: string;
  strategyTypeId: number;
  createdAt: string;
};

export function mapProject(api: ProjectApi): Project {
  return {
    id: api.id,
    projectId: api.project_id,
    name: api.name_project,
    strategyTypeId: api.type_ccus_strategies_id,
    createdAt: api.created_at,
  };
}

export function mapProjects(apiList: ProjectApi[]): Project[] {
  return apiList.map(mapProject);
}
