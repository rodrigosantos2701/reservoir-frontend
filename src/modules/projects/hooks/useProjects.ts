import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchProjects,
  createProject,
  type CreateProjectPayload,
} from "../api/projects.api";

const PROJECTS_KEY = ["projects"];

export function useProjects() {
  return useQuery({
    queryKey: PROJECTS_KEY,
    queryFn: fetchProjects,
  });
}

export function useCreateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateProjectPayload) => createProject(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROJECTS_KEY });
    },
  });
}
