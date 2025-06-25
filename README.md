# KTern.AI Ticket Management System (TMS)

This repository contains a monorepo setup for KTern.AI's Ticket Management System. The project is structured using **Turborepo** and includes a Next.js frontend and a Nest.js backend. Shared packages provide UI components, configuration, libraries, utilities and global TypeScript types.

```
├── apps
│   ├── frontend (Next.js)
│   └── backend (Nest.js)
├── packages
│   ├── ui
│   ├── config
│   ├── lib
│   ├── utils
│   └── types
├── prisma
├── redis
├── workflows
├── tests
└── docs
```

The application follows SOLID principles, 12‑factor methodology and leverages design patterns such as Factory, Singleton, Adapter and Observer. See the documentation under `docs/` for more details.
