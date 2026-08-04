---
title: Technical Architecture
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-03
depends_on:
  - 01-vision.md
  - 02-product-principles.md
  - 03-product-specification.md
  - 04-ai-blueprint.md
used_by:
  - Engineering
  - AI
---

# 05 - Technical Architecture

# Objetivo

Definir la arquitectura técnica de Clufit, estableciendo las tecnologías, responsabilidades y comunicación entre cada componente del sistema.

---

# Arquitectura General

Clufit estará compuesto por tres aplicaciones principales.

1. Aplicación Mobile (Usuario)
2. Panel Administrativo (SaaS)
3. Backend (Supabase)

Toda la información será centralizada en Supabase.

---

# Stack Tecnológico

## Mobile

- React Native
- Expo
- TypeScript
- Expo Router
- NativeWind
- React Query
- Zustand

---

## Panel Administrativo

- Next.js
- TypeScript
- Tailwind CSS
- Shadcn/UI

Uso exclusivo para administración.

No será utilizado por los usuarios finales.

---

## Backend

- Supabase
- PostgreSQL
- Row Level Security
- Edge Functions
- Realtime
- Storage
- Auth

---

## Inteligencia Artificial

- OpenAI
- Embeddings (futuro)
- pgvector (futuro)

Toda la lógica de IA será gestionada por Argus.

---

## Pagos

- Lemon Squeezy

Inicialmente utilizado únicamente para suscripciones.

---

## Notificaciones

- Expo Push Notifications

---

## Integraciones

- Apple Health
- Apple Watch

Versiones futuras:

- Garmin
- Fitbit
- WHOOP
- MyFitnessPal

---

# Arquitectura

```text
                Mobile App
                     │
                     │
             Supabase Backend
                     │
     ┌───────────────┼───────────────┐
     │               │               │
Database        Edge Functions    Storage
     │               │
     │           Argus Services
     │               │
     └───────────────┘
             │
      OpenAI API
```

---

# Organización del Proyecto

## Mobile

```text
app/
components/
features/
hooks/
lib/
services/
store/
types/
utils/
```

Cada módulo del producto tendrá su propia carpeta.

Ejemplo:

```text
features/
    dashboard/
    fitness/
    objetivos/
    nutricion/
    recuperacion/
```

---

## Panel Web

```text
app/
components/
modules/
services/
lib/
```

---

# Gestión de Estado

Estado global:

- Zustand

Estado del servidor:

- React Query

No se utilizará Redux.

---

# Base de Datos

Motor:

PostgreSQL

Proveedor:

Supabase

Toda la información será sincronizada entre dispositivos.

---

# Autenticación

Proveedor:

Supabase Auth

Métodos:

- Email
- Apple Sign In

Futuro:

- Google

---

# Sincronización

Toda sincronización se realizará mediante Supabase Realtime.

Permite:

- Actualización inmediata.
- Retos.
- Dashboard compartido.
- Estado del compañero.
- Notificaciones.

---

# Seguridad

- Row Level Security
- JWT
- HTTPS
- Secrets en servidor
- Nunca exponer API Keys

---

# Arquitectura de Argus

Argus estará compuesto por servicios independientes.

- Context Engine
- Recommendation Engine
- Procrastination Engine
- Synchronization Intelligence
- Challenge Intelligence
- Notification Intelligence

Todos consumirán información desde Supabase.

---

# Flujo General

Usuario

↓

React Native

↓

Supabase

↓

Edge Functions

↓

Argus

↓

OpenAI

↓

Respuesta

↓

Supabase

↓

Aplicación

---

# Escalabilidad

La arquitectura deberá permitir:

- Nuevos módulos.
- Nuevos sistemas.
- Nuevas integraciones.
- Nuevos modelos de IA.
- Nuevos planes.

Sin modificar la estructura principal.

---

# Principios Técnicos

- Mobile First.
- Backend as a Service.
- Arquitectura modular.
- Componentes reutilizables.
- Servicios desacoplados.
- Tipado estricto con TypeScript.
- Una única fuente de verdad (Supabase).

---

# Arquitectura por Capas

Presentation

↓

Business Logic

↓

Services

↓

Database

↓

External APIs

Cada capa tendrá una única responsabilidad.

---

# Convenciones

- TypeScript obligatorio.
- ESLint.
- Prettier.
- Conventional Commits.
- Feature-based architecture.
- Componentes pequeños.
- Funciones puras siempre que sea posible.

---

# Rendimiento

Objetivos:

- Inicio < 2 segundos.
- Navegación fluida.
- Sincronización en tiempo real.
- Consumo mínimo de batería.
- Mínima cantidad de llamadas a OpenAI.

---

# Decisiones

## Decision 001

React Native + Expo será la única plataforma móvil inicial.

---

## Decision 002

Supabase será el backend principal.

---

## Decision 003

Next.js será utilizado únicamente para el panel administrativo.

---

## Decision 004

Toda la IA estará centralizada en Argus.

---

## Decision 005

La aplicación será Mobile First.

---

## Decision 006

Toda lógica crítica residirá en el backend y no en el cliente.

---

## Decision 007

La arquitectura será modular y orientada a features para facilitar el crecimiento del producto.