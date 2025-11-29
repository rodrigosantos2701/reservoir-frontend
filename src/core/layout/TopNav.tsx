import { Link, NavLink } from "react-router-dom";

export function TopNav() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-sm font-semibold text-slate-900">
          Reservoir Frontend Project
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `px-2 py-1 rounded ${
                isActive
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `px-2 py-1 rounded ${
                isActive
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`
            }
          >
            Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
