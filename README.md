# Reservoir-frontend

> Frontend em React para gestão de projetos, reservatórios e poços.

## Tecnologias utilizadas

- **React** + **TypeScript**
- **Vite** (bundler / dev server)
- **React Router DOM** (roteamento)
- **@tanstack/react-query** (data fetching e cache)
- **React Hook Form** (formulários)
- **Tailwind CSS** (estilização utilitária)
- **ESLint** + **TypeScript ESLint** (linting)

## Estrutura de pastas

```txt
src/
  api/                    # clients e helpers genéricos de API
  core/
    router/               # AppRouter, rotas principais, guards
    layout/               # layouts globais (Shell, Navbar, Sidebar)

  modules/
    projects/
      api/                # chamadas HTTP específicas de projetos (infra de dados)
      types/              # tipos/DTOs de domínio (Project, ProjectApi, etc.)
      domain/             # regras de negócio e mapeamentos (ex.: project.mappers)
      hooks/              # hooks de data (React Query) que usam api + domain
      ui/                 # componentes de UI reutilizáveis (ProjectForm, ProjectsTable)
      pages/              # páginas de roteamento (ProjectsPage)

    reservoirs/
      api/
      types/
      ui/
      pages/
      hooks/

    wells/
      api/
      types/
      ui/
      pages/
      hooks/

    dashboard/
      pages/              # páginas de dashboard
      hooks/              # hooks relacionados a dados do dashboard
```

## Como rodar o projeto

```bash
npm install
npm run dev
```
