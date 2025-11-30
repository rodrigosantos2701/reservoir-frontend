import type { ProjectDTO } from "../types/project.types";

type Props = {
  projects: ProjectDTO[];
  isLoading?: boolean;
};

export function ProjectsTable({ projects }: Props) {
  if (!projects.length) {
    return <p className="text-sm text-slate-500">No projects found.</p>;
  }

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow mt-4">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Strategy ID</th>
            <th className="px-4 py-2 text-left">UUID</th>
            <th className="px-4 py-2 text-left">Created at</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="px-4 py-2">{p.id}</td>
              <td className="px-4 py-2">{p.name}</td>
              <td className="px-4 py-2">{p.strategyTypeId}</td>
              <td className="px-4 py-2 font-mono text-xs">{p.projectId}</td>
              <td className="px-4 py-2">
                {new Date(p.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
