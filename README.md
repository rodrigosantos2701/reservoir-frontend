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
- **Zod** (validação e schemas)

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
      api/                # chamadas HTTP específicas de reservatórios
      types/              # tipos/DTOs de domínio (Reservoir, ReservoirApi, etc.)
      domain/             # regras de negócio e mapeamentos (reservoir.mappers, schemas)
      hooks/              # hooks de data (React Query) que usam api + domain
      ui/                 # componentes de UI reutilizáveis (ReservoirForm, ReservoirsTable)
      pages/              # páginas de roteamento (ReservoirsPage)

    wells/
      api/                # chamadas HTTP específicas de reservatórios
      types/              # tipos/DTOs para poços e vínculos
      ui/                 # componentes de UI (WellForm, WellsTable)
      pages/              # página principal de poços (WellsPage)
      hooks/              # hooks de estado em memória (useWells)

    dashboard/
      pages/              # páginas de dashboard (DashboardPage)
      hooks/              # hooks relacionados a dados do dashboard (useDashboardData)
      ui/                 # componentes de UI (DashboardKpiCards, ReservoirsWellsTable)

## Funcionalidades implementadas no desafio

- **Cadastro e listagem de Projetos**
  - Formulário de criação de projetos.
  - Tabela com listagem de projetos cadastrados.

- **Cadastro e listagem de Reservatórios**
  - Formulário com validação de `project_id` como UUID (Zod).
  - Tabela de reservatórios vinculados a projetos.

- **Cadastro e listagem de Poços**
  - Formulário para vincular poço a reservatório, escolhendo nome do poço a partir de `type_well_targets`.
  - Tabela com todos os vínculos de poço x reservatório.
  - Filtro destacado por reservatório, afetando apenas a tabela.
  - Implementação em memória para o estado de poços (`useWells`), simulando a API.

- **Dashboard / Relatórios**
  - Cards com quantidade de **Projetos**, **Reservatórios** e **Poços vinculados**.
  - Tabela **Reservatórios x Poços** mostrando a quantidade de poços por reservatório.
  - Dados combinando APIs reais (projetos, reservatórios) com os vínculos de poço em memória.
```

## Como rodar o projeto

```bash
npm install
npm run dev
```
