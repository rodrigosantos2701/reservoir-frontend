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
      use-cases/          # casos de uso de projetos (ex.: create/list projects)
      hooks/              # hooks de data (React Query) que usam api + domain + use-cases
      ui/                 # componentes de UI reutilizáveis (ProjectForm, ProjectsTable)
      pages/              # páginas de roteamento (ProjectsPage)

    reservoirs/
      api/                # chamadas HTTP específicas de reservatórios
      types/              # tipos/DTOs de domínio (Reservoir, ReservoirApi, etc.)
      domain/             # regras de negócio e mapeamentos (reservoir.mappers, schemas)
      use-cases/          # casos de uso para criação e listagem de reservatórios
      hooks/              # hooks de data (React Query) que usam api + domain + use-cases
      ui/                 # componentes de UI reutilizáveis (ReservoirForm, ReservoirsTable)
      pages/              # páginas de roteamento (ReservoirsPage)

    wells/
      api/                # chamadas HTTP específicas de reservatórios
      types/              # tipos/DTOs para poços e vínculos
      ui/                 # componentes de UI (WellForm, WellsTable)
      pages/              # página principal de poços (WellsPage)
      use-cases/          # casos de uso (ex.: linkWellToReservoir)
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

## TODO / Próximos passos sugeridos

- **Paginação de listas**
  - Adicionar paginação em tabelas de projetos, reservatórios e poços (backend + frontend).

- **Validação e UX de formulários**
  - Refinar mensagens de erro e estados de `disabled`/`loading` em todos os formulários.
  - Tratar casos de valores inválidos vindos da API com Zod (safeParse + fallback para UI amigável).

- **Tratamento de erros de API**
  - Centralizar handling de erros HTTP no cliente de API (`src/api/client.ts`).
  - Exibir feedback consistente no layout (toasts, banners, etc.) para erros de rede/servidor.

- **Integração real de poços**
  - Substituir o estado em memória de poços (`useWells`) por chamadas reais de API.
  - Enviar o payload de associação poço x reservatório a partir do `WellForm` para o backend.

- **Melhorias de dashboard**
  - Fazer o card de "Wells linked" e a tabela de "Reservoirs x Wells" consumirem dados reais da API.
  - Adicionar filtros e períodos (por exemplo, últimos 7/30 dias) quando houver suporte no backend.

- **Experiência de loading**
  - Padronizar skeletons de carregamento nas principais páginas (dashboard, projects, reservoirs, wells).

- **Testes automatizados**
  - Introduzir testes unitários para use-cases e domain mappers.
  - Adicionar smoke tests de componentes principais (formulários e tabelas).

## Como rodar o projeto

### Pré-requisitos

- Node.js **>= 18 LTS** (recomendado usar `nvm`)
- `npm` (ou `pnpm`/`yarn` se preferir adaptar os comandos)

Para verificar sua versão do Node:

```bash
node -v
```

### Passos para executar em desenvolvimento

1. Instalar dependências:

```bash
npm install
```

1. Subir o servidor de desenvolvimento (Vite):

```bash
npm run dev
```

1. Acessar a aplicação no navegador (por padrão):

- `http://localhost:5173`
