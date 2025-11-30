import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchProjects,
  createProject,
  type CreateProjectPayload,
} from "../api/projects.api";
import { listProjectsUseCase } from "../use-cases/listProjects.use-case";
import { createProjectUseCase } from "../use-cases/createProject.use-case";

const PROJECTS_KEY = ["projects"];

export function useProjects() {
  return useQuery({
    queryKey: PROJECTS_KEY,
    queryFn: () => listProjectsUseCase({ fetchProjectsApi: fetchProjects }),
  });
}

export function useCreateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateProjectPayload) =>
      createProjectUseCase(payload, { createProjectApi: createProject }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROJECTS_KEY });
    },
  });
}
