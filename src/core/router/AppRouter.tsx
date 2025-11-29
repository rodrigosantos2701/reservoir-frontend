import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProjectsPage } from "../../modules/projects";
import { TopNav } from "../layout/TopNav";
import { DashboardPage } from "../../modules/dashboard/pages/DashboardPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <TopNav />
        <main className="mx-auto max-w-5xl px-4 py-6">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
