---
title: Development Standards
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-03
depends_on:
  - 05-technical-architecture.md
used_by:
  - Engineering
  - AI
---

# 08 - Development Standards

# Objetivo

Definir los estándares de desarrollo que deberán seguir todos los desarrolladores e inteligencias artificiales que contribuyan al proyecto.

Estas reglas son obligatorias.

---

# Principios

Todo cambio en el código debe priorizar:

- Simplicidad.
- Legibilidad.
- Escalabilidad.
- Reutilización.
- Mantenibilidad.

---

# SOLID

Todo desarrollo deberá respetar los principios SOLID.

- Single Responsibility Principle
- Open / Closed Principle
- Liskov Substitution Principle
- Interface Segregation Principle
- Dependency Inversion Principle

---

# DRY

Don't Repeat Yourself.

No se deberá duplicar lógica.

Si una funcionalidad comienza a repetirse, deberá abstraerse.

---

# KISS

Keep It Simple.

Siempre se elegirá la solución más simple que resuelva correctamente el problema.

---

# YAGNI

You Aren't Gonna Need It.

No desarrollar funcionalidades "por si acaso".

Todo código debe responder a una necesidad real.

---

# Clean Code

El código debe ser:

- Claro.
- Pequeño.
- Expresivo.
- Fácil de leer.
- Fácil de mantener.

Los nombres deben explicar su propósito.

---

# Arquitectura

La aplicación seguirá una arquitectura basada en Features.

No se organizará por tipo de archivo.

---

# TypeScript

Se utilizará TypeScript en modo Strict.

No se permitirá el uso de `any`, salvo casos excepcionales y justificados.

---

# Componentes

Los componentes deben tener una única responsabilidad.

Preferir componentes pequeños y reutilizables.

---

# Hooks

Toda lógica reutilizable deberá abstraerse mediante Custom Hooks.

---

# Estado

Estado global:

- Zustand.

Estado remoto:

- React Query.

No duplicar estados.

---

# Testing

Todo código crítico deberá ser testeado.

Tipos:

- Unit Tests.
- Integration Tests.
- E2E Tests.

---

# Documentación

Toda funcionalidad importante deberá estar documentada.

Toda decisión arquitectónica deberá registrarse.

---

# Commits

Se utilizará Conventional Commits.

Ejemplos:

- feat:
- fix:
- refactor:
- docs:
- chore:
- test:

---

# Pull Requests

Todo Pull Request deberá:

- Compilar correctamente.
- Pasar los tests.
- Mantener cobertura.
- No romper funcionalidades existentes.
- Respetar este documento.

---

# Definition of Done

Una tarea se considera finalizada únicamente cuando:

- Funciona correctamente.
- Está testeada.
- Está documentada.
- Respeta la arquitectura.
- No introduce deuda técnica innecesaria.

---

# Reglas para IA

Toda IA deberá:

- Respetar la arquitectura existente.
- No inventar funcionalidades.
- No modificar comportamiento sin autorización.
- Reutilizar componentes existentes.
- Evitar duplicación.
- Generar código legible.
- Mantener consistencia en nombres y estructura.

---

# Decisions

## Decision 001

La calidad del código tiene prioridad sobre la velocidad de desarrollo.

---

## Decision 002

Toda funcionalidad deberá respetar SOLID, DRY y KISS.

---

## Decision 003

El proyecto utilizará TypeScript Strict de forma obligatoria.

---

## Decision 004

La arquitectura Feature-Based será el estándar oficial.

---

## Decision 005

Todo cambio deberá ser mantenible por un desarrollador distinto a quien lo escribió.

---

# Git Workflow

## Estrategia

El proyecto utilizará una estrategia simple basada en ramas.

La rama principal siempre deberá permanecer estable.

```text
main
```

Nunca se desarrollará directamente sobre `main`.

---

## Branch Naming Convention

Todas las ramas deberán seguir alguno de los siguientes formatos.

### Features

```text
feature/dashboard

feature/fitness-module

feature/argus-context-engine

feature/challenge-engine
```

---

### Fixes

```text
fix/login

fix/dashboard-score

fix/notifications
```

---

### Refactors

```text
refactor/workout-service

refactor/auth

refactor/database
```

---

### Documentation

```text
docs/product-principles

docs/database-design

docs/api
```

---

### Tests

```text
test/dashboard

test/fitness

test/argus
```

---

### Chores

```text
chore/update-dependencies

chore/eslint

chore/github-actions
```

---

## Commit Convention

Todos los commits deberán utilizar Conventional Commits.

Ejemplos:

```text
feat: add workout history

feat: implement challenge engine

fix: resolve dashboard score calculation

docs: update product specification

refactor: simplify notification service

test: add unit tests for Argus

chore: update dependencies
```

---

## Pull Requests

Todo Pull Request deberá cumplir:

- Compilar correctamente.
- Pasar todos los tests.
- No introducir deuda técnica innecesaria.
- Respetar la arquitectura del proyecto.
- Mantener la documentación actualizada cuando corresponda.

---

## Merge Strategy

Se utilizará **Squash & Merge** como estrategia principal.

Beneficios:

- Historial limpio.
- Commits organizados.
- Fácil trazabilidad.
- Menor ruido en Git.

---

## Protección de la rama Main

La rama `main` deberá estar protegida.

No se permitirán:

- Push directos.
- Commits sin revisión.
- Código que no compile.

Toda modificación deberá ingresar mediante Pull Request.

---

## Releases

Las versiones seguirán Semantic Versioning.

Formato:

```text
MAJOR.MINOR.PATCH
```

Ejemplos:

```text
1.0.0

1.1.0

1.1.3

2.0.0
```

---

## Decisions

### Decision 006

Nunca se desarrollará directamente sobre `main`.

---

### Decision 007

Todos los commits utilizarán Conventional Commits.

---

### Decision 008

Todas las ramas seguirán la convención oficial definida en este documento.

---

### Decision 009

Se utilizará Squash & Merge para mantener un historial limpio.

---

### Decision 010

La rama `main` deberá permanecer siempre estable y lista para producción.