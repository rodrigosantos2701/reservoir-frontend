import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import { ProjectsTable } from "./ProjectsTable";
import type { ProjectDTO } from "../types/project.types";

function makeProject(overrides: Partial<ProjectDTO> = {}): ProjectDTO {
  return {
    id: 1,
    name: "Project X",
    strategyTypeId: 10,
    projectId: "uuid-123",
    createdAt: new Date("2025-01-01T00:00:00Z").toISOString(),
    ...overrides,
  };
}

describe("ProjectsTable", () => {
  it("shows empty state when there are no projects", () => {
    render(<ProjectsTable projects={[]} />);

    expect(screen.getByText(/No projects found/i)).toBeInTheDocument();
  });

  it("renders a row for each project", () => {
    const projects: ProjectDTO[] = [
      makeProject({ id: 1, name: "Project A" }),
      makeProject({ id: 2, name: "Project B" }),
    ];

    render(<ProjectsTable projects={projects} />);

    expect(screen.getByText("Project A")).toBeInTheDocument();
    expect(screen.getByText("Project B")).toBeInTheDocument();

    // header row + 2 data rows
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(1 + projects.length);
  });
});
