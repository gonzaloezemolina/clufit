---
title: API Design
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-03
depends_on:
  - 05-technical-architecture.md
  - 06-database-design.md
  - 06.1-entity-relationship-model.md
used_by:
  - Backend
  - Mobile
  - AI
---

# 07 - API Design

# Objetivo

Definir la comunicación entre la aplicación móvil, Supabase y los servicios de Clufit.

La API deberá ser consistente, escalable y orientada a recursos.

Toda la lógica de negocio crítica se ejecutará en el backend.

---

# Arquitectura

```text
Mobile App
      │
      ▼
API / Edge Functions
      │
      ▼
Supabase Database
      │
      ▼
Argus Services
      │
      ▼
OpenAI
```

---

# Principios

- Una responsabilidad por endpoint.
- Respuestas consistentes.
- Validación en backend.
- Autenticación obligatoria.
- Nunca confiar en el cliente.
- Versionado desde el inicio.
- Mantener compatibilidad hacia atrás.

---

# Base URL

```text
/api/v1
```

---

# Autenticación

Todos los endpoints privados requieren un JWT emitido por Supabase Auth.

Header:

```http
Authorization: Bearer <token>
```

---

# Convenciones

## Métodos

| Método | Uso |
|---------|-----|
| GET | Obtener información |
| POST | Crear recursos |
| PUT | Reemplazar completamente |
| PATCH | Actualización parcial |
| DELETE | Eliminación lógica |

---

# Formato de respuesta

## Success

```json
{
  "success": true,
  "data": {}
}
```

---

## Error

```json
{
  "success": false,
  "error": {
    "code": "INVALID_DATA",
    "message": "Validation failed."
  }
}
```

---

# Endpoints

## Auth

```text
POST   /auth/login
POST   /auth/logout
POST   /auth/register
POST   /auth/refresh
GET    /auth/me
```

---

## Profile

```text
GET    /profile
PATCH  /profile
DELETE /profile
```

---

## Dashboard

```text
GET /dashboard
GET /dashboard/history
```

---

## Goals

```text
GET    /goals
GET    /goals/:id
POST   /goals
PATCH  /goals/:id
DELETE /goals/:id
```

---

## Habits

```text
GET    /habits
POST   /habits
PATCH  /habits/:id
DELETE /habits/:id

POST   /habits/:id/check
```

---

## Fitness

```text
GET    /workouts
POST   /workouts
PATCH  /workouts/:id
DELETE /workouts/:id

POST   /workouts/:id/start
POST   /workouts/:id/finish
```

---

## Exercises

```text
GET /exercises
GET /exercises/:id
```

---

## Recovery

```text
GET /recovery

PATCH /recovery
```

---

## Nutrition

```text
GET /nutrition

PATCH /nutrition
```

---

## Challenges

```text
GET    /challenges
POST   /challenges
PATCH  /challenges/:id
DELETE /challenges/:id

POST   /challenges/:id/accept
POST   /challenges/:id/reject
POST   /challenges/:id/finish
```

---

## Synchronization

```text
POST /sync/request

POST /sync/accept

POST /sync/reject

DELETE /sync
```

---

## Notifications

```text
GET /notifications

PATCH /notifications/:id/read

PATCH /notifications/read-all
```

---

## Argus

```text
GET /argus

GET /argus/insights

GET /argus/recommendations

POST /argus/analyze
```

---

## Integrations

```text
GET /integrations

POST /integrations/apple-health

DELETE /integrations/apple-health
```

---

## Subscription

```text
GET /subscription

POST /subscription/checkout

PATCH /subscription/change-plan

DELETE /subscription/cancel
```

---

# Versionado

Toda modificación incompatible deberá publicarse en una nueva versión.

Ejemplo:

```text
/api/v2
```

---

# Rate Limiting

Se aplicarán límites para:

- Login
- Registro
- IA
- Sincronización
- Notificaciones

---

# Logs

Toda petición crítica registrará:

- Usuario
- Endpoint
- Fecha
- Tiempo de respuesta
- Código HTTP
- Error (si existe)

---

# Seguridad

- HTTPS obligatorio.
- JWT obligatorio.
- Validación de permisos.
- Rate limiting.
- Sanitización de entradas.
- Validación de tipos.
- Protección contra ataques comunes.

---

# Tiempo de respuesta esperado

| Endpoint | Objetivo |
|----------|----------:|
| Dashboard | < 300 ms |
| Goals | < 200 ms |
| Habits | < 200 ms |
| Fitness | < 300 ms |
| Notifications | < 150 ms |
| Argus | < 2 s |

---

# Futuras APIs

- Apple Watch Sync
- Garmin
- Fitbit
- WHOOP
- Comunidad
- CMS
- Blog

---

# Decisions

## Decision 001

Toda lógica de negocio se ejecutará en el backend.

---

## Decision 002

La API será RESTful y versionada desde el inicio.

---

## Decision 003

Todos los endpoints privados requerirán autenticación mediante Supabase Auth.

---

## Decision 004

Argus será consumido mediante endpoints dedicados y nunca directamente desde OpenAI.

---

## Decision 005

La aplicación móvil será el único cliente público durante la primera etapa del proyecto.