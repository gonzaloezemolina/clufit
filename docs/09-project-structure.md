---
title: Project Structure
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-03
depends_on:
  - 05-technical-architecture.md
  - 08-development-standards.md
used_by:
  - Engineering
  - AI
---

# 09 - Project Structure

# Objetivo

Definir la estructura oficial del proyecto Clufit.

Todo nuevo archivo deberá respetar esta organización.

El objetivo es mantener una arquitectura modular, escalable y fácil de mantener.

---

# Monorepo

El proyecto estará organizado como un monorepo.

```text
clufit/

├── apps/
├── packages/
├── docs/
├── scripts/
├── .github/
└── README.md
```

---

# Apps

```text
apps/

mobile/
admin/
```

## mobile

Aplicación principal utilizada por los usuarios.

Stack:

- React Native
- Expo
- TypeScript

---

## admin

Panel administrativo.

Uso exclusivo del equipo de Clufit.

Stack:

- Next.js
- Tailwind
- TypeScript

---

# Packages

Código compartido entre aplicaciones.

```text
packages/

ui/

types/

config/

utils/

api/
```

---

## ui

Componentes reutilizables.

Ejemplo:

```text
Button

Card

Modal

Avatar

Badge
```

---

## types

Tipos globales.

```text
User

Workout

Goal

Challenge

Notification
```

---

## config

Configuraciones compartidas.

Ejemplos:

- colores
- constantes
- variables
- planes

---

## utils

Funciones reutilizables.

Ejemplo:

```text
formatDate()

calculateAge()

calculateBMI()

calculateOverallScore()
```

---

## api

Cliente compartido para consumir Supabase y Edge Functions.

---

# Mobile

```text
mobile/

app/

assets/

components/

features/

hooks/

services/

store/

lib/

types/

utils/

constants/

providers/
```

---

# Features

Toda funcionalidad deberá vivir dentro de una Feature.

```text
features/

dashboard/

objetivos/

productividad/

disciplina/

fitness/

recuperacion/

nutricion/

perfil/

integraciones/
```

---

Cada Feature será completamente independiente.

Ejemplo:

```text
fitness/

components/

hooks/

screens/

services/

types/

utils/

constants/
```

---

# Components

Componentes reutilizables.

Nunca contendrán lógica de negocio.

---

# Hooks

Toda lógica reutilizable deberá abstraerse mediante Custom Hooks.

Ejemplo:

```text
useWorkout()

useNotifications()

useHydration()

useRecovery()
```

---

# Services

Responsables de comunicarse con APIs.

No deberán contener lógica de interfaz.

---

# Store

Estado global mediante Zustand.

Ejemplo:

```text
auth.store.ts

user.store.ts

notification.store.ts
```

---

# Providers

Context Providers.

Ejemplos:

```text
ThemeProvider

QueryProvider

AuthProvider
```

---

# Lib

Configuraciones.

Ejemplos:

- Supabase
- OpenAI
- Expo
- Lemon Squeezy

---

# Constants

Valores constantes del proyecto.

Ejemplos:

- colores
- límites
- planes
- categorías

---

# Naming Convention

## Archivos

```text
dashboard-card.tsx

workout-service.ts

notification-store.ts
```

Siempre en **kebab-case**.

---

## Componentes

```text
DashboardCard

WorkoutCard

ChallengeModal
```

Siempre en **PascalCase**.

---

## Hooks

```text
useWorkout()

useRecovery()

useArgus()
```

Siempre comienzan con `use`.

---

## Stores

```text
auth.store.ts

user.store.ts
```

---

## Types

```text
user.types.ts

workout.types.ts
```

---

## Services

```text
workout.service.ts

argus.service.ts

notification.service.ts
```

---

# Imports

Orden obligatorio.

1. Librerías externas.
2. Packages compartidos.
3. Services.
4. Hooks.
5. Components.
6. Utils.
7. Types.
8. Styles.

---

# Assets

```text
assets/

fonts/

icons/

images/

animations/
```

---

# Documentación

Toda documentación oficial vivirá dentro de:

```text
docs/
```

---

# Tests

```text
tests/

unit/

integration/

e2e/
```

Cada Feature deberá poseer sus propios tests.

---

# Principios

- Modular.
- Escalable.
- Reutilizable.
- Desacoplado.
- Fácil de navegar.

---

# Decisions

## Decision 001

Toda funcionalidad nueva deberá implementarse dentro de una Feature.

---

## Decision 002

No se permitirá lógica de negocio dentro de componentes visuales.

---

## Decision 003

Todo código compartido deberá vivir dentro de `packages`.

---

## Decision 004

La estructura del proyecto deberá mantenerse consistente entre todas las aplicaciones.

---

## Decision 005

La organización por Features será el estándar oficial de Clufit.