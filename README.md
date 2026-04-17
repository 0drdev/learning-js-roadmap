# Ruta de Aprendizaje: Full Stack JavaScript Engineer

## Context

El usuario tiene base en HTML/CSS, GitHub, JS básico, y conocimientos breves de Node.js y SQL.
Objetivo: aprendizaje personal, sesiones nocturnas de 2+ horas. El mayor bloqueador histórico es frustrarse
y no terminar proyectos, por lo que la ruta prioriza **proyectos pequeños y terminables** con victorias rápidas
antes de escalar en complejidad. La progresión de bases de datos va de ejercicios aislados a integración real.

---

## Filosofía anti-frustración

- Cada fase produce **un proyecto deployado y visible** — no carpetas en local.
- Las primeras 2 semanas generan victorias rápidas para crear momentum.
- Las sesiones de 2h se dividen en: 30 min de teoría/lectura → 90 min de código.
- Si un concepto tarda más de 2 sesiones en entrar, se avanza y se vuelve después.
- GitHub como diario: un commit por sesión, aunque sea pequeño.

---

## Fase 0 — Setup profesional (3–5 días)

**Meta:** Tener un entorno que ya se siente de developer real.

- Instalar: Node.js LTS, VS Code con extensiones (ESLint, Prettier, GitLens), nvm
- Configurar GitHub con SSH keys
- Primer repositorio: `learning-js-roadmap` con carpetas por fase
- Aprender a usar la terminal para todo (nada de GUIs de Git)
- Herramienta: **Vite** para proyectos frontend rápidos desde el principio

---

## Fase 1 — JavaScript Sólido (3–4 semanas)

**Meta:** Dominar el JS moderno antes de frameworks.

### Conceptos clave

- ES6+: destructuring, spread/rest, template literals, optional chaining
- Módulos: import/export (ESM)
- Funciones de array: map, filter, reduce, find
- Async JS: Promises → async/await → manejo de errores
- Fetch API + consumir APIs públicas
- DOM avanzado: eventos, delegación, manipulación dinámica

### Proyectos progresivos (completos y deployados en Vercel/Netlify)

1. **Calculadora** — lógica pura, no librerías
2. **App de clima** — fetch a OpenWeatherMap API, async/await
3. **Quiz interactivo** — array methods, estado en JS puro, localStorage

### Herramientas

- Vite (dev server + build)
- ESLint + Prettier
- Vercel CLI para deploy

---

## Fase 2 — Node.js + Express: Backend real (4–5 semanas)

**Meta:** Construir APIs REST funcionales.

### Conceptos clave

- Node.js: módulos built-in (fs, path, http), EventEmitter
- npm: instalar, scripts, package.json
- Express: rutas, middleware, manejo de errores, CORS
- REST: verbos HTTP, status codes, estructura de respuesta
- Variables de entorno: `.env` + `dotenv`
- Validación básica: Zod

### Proyectos progresivos

1. **CLI de notas** — Node puro, fs module, sin framework
2. **API de recetas** — Express + datos en JSON (sin BD aún)
3. **API REST de tareas (To-Do API)** — CRUD completo, Zod para validación, Postman/Insomnia para probar

### Herramientas

- Express 4/5
- Zod (validación de schemas)
- Nodemon + tsx (live reload)
- Postman o Insomnia

---

## Fase 3 — Bases de Datos: Ejercicios Progresivos (3–4 semanas)

**Meta:** Entender BD de forma aislada antes de integrarlas en proyectos.
Esta fase es deliberadamente separada: no se construyen apps completas, solo ejercicios de BD.

### Semana 1–2: SQL + PostgreSQL

- Repaso de SQL: SELECT, WHERE, JOIN, GROUP BY, índices
- PostgreSQL local (Docker o instalación directa)
- Práctica en psql y TablePlus/DBeaver
- Ejercicios: modelar esquemas (usuarios, posts, comentarios), escribir 20+ queries
- ORM: **Prisma** — schema.prisma, migrations, queries

### Semana 3–4: MongoDB + Mongoose

- Diferencias documento vs relacional, cuándo usar cada uno
- MongoDB local + MongoDB Atlas (cloud gratuito)
- Mongoose: schemas, modelos, validaciones, populate
- Ejercicios: mismas entidades (usuarios, posts) modeladas en Mongo
- Comparar: implementar el mismo CRUD en SQL y en MongoDB

### Herramientas

- PostgreSQL (via Docker o instalación)
- Prisma ORM
- MongoDB Atlas + Mongoose
- TablePlus o DBeaver

---

## Fase 4 — Full Stack Básico: Node + Express + BD (4–5 semanas)

**Meta:** Primera app full stack real, con auth y BD.

### Proyecto: **Blog API completa** (deployada)

- Express + PostgreSQL + Prisma
- Auth: JWT (login/registro, rutas protegidas)
- Endpoints: usuarios, posts, comentarios
- Middleware de auth, manejo de errores centralizado
- Deploy: **Railway** (backend + PostgreSQL gratis)

### Segunda iteración del mismo proyecto con MongoDB

- Migrar la misma Blog API a MongoDB + Mongoose
- Objetivo: comparar el flujo de trabajo, no aprender algo nuevo

### Herramientas

- Prisma + PostgreSQL (primera versión)
- Mongoose + MongoDB Atlas (segunda versión)
- Railway para deploy
- bcrypt para passwords

---

## Fase 5 — React: Frontend moderno (5–6 semanas)

**Meta:** Construir UIs reactivas profesionales.

### Conceptos clave

- Components, props, JSX
- useState, useEffect, useRef
- React Router v6
- Custom hooks
- Context API (manejo de estado global simple)
- Fetching data + loading/error states
- Formularios controlados

### Proyectos progresivos

1. **UI de To-Do** — componentes, estado local, sin backend
2. **Frontend del Blog** — conectar con la API de Fase 4, React Router, auth flow
3. **Dashboard de clima** — fetch a API pública, custom hooks, múltiples vistas

### Herramientas

- Vite + React
- Tailwind CSS (estilo sin perderse en CSS)
- TanStack Query (fetching/caching, estándar de industria)
- React Router v6

---

## Fase 6 — Full Stack Completo: PERN Stack (5–6 semanas)

**Meta:** App full stack de portfolio lista para mostrar.

### Proyecto final de fase: **App de gestión personal** (tipo Notion lite)

- Backend: Node + Express + PostgreSQL + Prisma
- Frontend: React + Tailwind + TanStack Query
- Auth completa: JWT + refresh tokens
- Features: notas, listas, tags, búsqueda
- Deploy completo: Vercel (frontend) + Railway (backend + BD)

### Herramientas nuevas

- TypeScript básico (migrar gradualmente, no reescribir)
- GitHub Actions: pipeline básico de CI (lint + test)
- Zod en frontend también (validación de formularios)

---

## Fase 7 — Astro + Herramientas Modernas (3–4 semanas)

**Meta:** Aprender el stack moderno para sitios de contenido y portfolio.

### Conceptos clave

- Astro: islands architecture, .astro components, routing basado en archivos
- Integrar React dentro de Astro (islands)
- MDX para contenido (posts de blog en markdown)
- SSG vs SSR en Astro
- Tailwind en Astro

### Proyecto: **Portfolio personal + Blog técnico**

- Astro + Tailwind + MDX
- Integrar componentes React donde se necesite interactividad
- Publicar en Vercel con dominio personalizado (opcional)
- Este proyecto documenta todo el aprendizaje anterior

---

## Stack completo al terminar

| Capa                 | Tecnología                 |
| -------------------- | -------------------------- |
| Frontend             | React, Astro, Tailwind CSS |
| Backend              | Node.js, Express           |
| BD Relacional        | PostgreSQL + Prisma        |
| BD Documental        | MongoDB + Mongoose         |
| Auth                 | JWT, bcrypt                |
| Validación           | Zod                        |
| Bundler              | Vite                       |
| Deploy               | Vercel, Railway            |
| Control de versiones | Git + GitHub               |
| Tipado (opcional)    | TypeScript básico          |

---

## Duración estimada

Con 2+ horas por noche, 5-6 noches por semana:

- Fase 0: 1 semana
- Fases 1–3: ~12 semanas (3 meses)
- Fases 4–6: ~14 semanas (3.5 meses)
- Fase 7: ~4 semanas (1 mes)
- **Total: ~7–8 meses** con ritmo consistente

---

## Recursos recomendados por fase

- **Fase 1:** javascript.info (el mejor recurso en JS puro)
- **Fase 2:** Documentación oficial de Express + roadmap.sh/nodejs
- **Fase 3:** Prisma docs + MongoDB University (free)
- **Fase 5:** React docs oficiales (react.dev)
- **General:** roadmap.sh/fullstack como mapa de referencia

---

## Verificación de progreso

Al terminar cada fase, el proyecto debe cumplir:

- [ ] Código subido a GitHub con commits descriptivos
- [ ] App deployada y accesible por URL pública
- [ ] README con descripción breve y stack usado
- [ ] Se puede explicar verbalmente qué hace cada parte del código
