---
title: Database Design
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-03
depends_on:
  - 03-product-specification.md
  - 05-technical-architecture.md
used_by:
  - Backend
  - Mobile
  - AI
---

# 06 - Database Design

# Objetivo

Definir la estructura de datos de Clufit.

La base de datos debe ser escalable, modular y permitir agregar nuevas funcionalidades sin modificar la arquitectura principal.

El motor de base de datos será PostgreSQL mediante Supabase.

---

# Principios

- Una única fuente de verdad.
- Evitar duplicación de datos.
- Relaciones claras entre entidades.
- Preparada para sincronización en tiempo real.
- Optimizada para IA y analítica.
- Escalable.

---

# Entidades Principales

## Users

Información principal del usuario.

Campos principales:

- id
- fullname
- username
- email
- birthday
- gender
- avatar
- timezone
- created_at

---

## Profiles

Configuración personal.

Campos:

- user_id
- height
- weight
- target_weight
- activity_level
- fitness_level
- notification_preferences
- privacy_settings

---

## Goals

Objetivos del usuario.

Campos:

- id
- user_id
- title
- description
- category
- target
- progress
- status
- created_at
- completed_at

---

## Habits

Hábitos pertenecientes al módulo Disciplina.

Campos:

- id
- user_id
- title
- frequency
- reminder
- streak
- status

---

## Habit Logs

Historial de cumplimiento.

Campos:

- habit_id
- date
- completed
- completed_at

---

## Workouts

Rutinas creadas.

Campos:

- id
- user_id
- name
- description
- difficulty
- created_at

---

## Workout Exercises

Ejercicios pertenecientes a una rutina.

Campos:

- workout_id
- exercise_id
- order
- sets
- reps
- weight
- rest_time

---

## Workout Sessions

Historial de entrenamientos.

Campos:

- id
- workout_id
- started_at
- finished_at
- duration
- calories
- average_heart_rate

---

## Exercises

Catálogo de ejercicios.

Campos:

- id
- name
- muscle_group
- equipment
- difficulty
- instructions

---

## Recovery

Datos de recuperación.

Campos:

- user_id
- sleep
- stress
- energy
- mood
- hydration
- recovery_score
- date

---

## Nutrition

Registro nutricional.

Campos:

- user_id
- calories
- protein
- carbs
- fats
- water
- meals
- date

---

## Challenges

Retos.

Campos:

- id
- creator_id
- title
- description
- reward
- punishment
- start_date
- end_date
- status

---

## Challenge Participants

Participantes.

Campos:

- challenge_id
- user_id
- progress
- completed

---

## Synchronizations

Relaciones entre usuarios.

Campos:

- id
- owner_id
- partner_id
- status
- created_at

---

## Notifications

Notificaciones.

Campos:

- id
- user_id
- title
- body
- type
- priority
- sent_at
- read_at

---

## Argus Insights

Insights generados por IA.

Campos:

- id
- user_id
- type
- title
- description
- confidence
- created_at

---

## Recommendations

Recomendaciones.

Campos:

- id
- user_id
- category
- recommendation
- accepted
- dismissed
- created_at

---

## Procrastination History

Historial del índice de procrastinación.

Campos:

- id
- user_id
- score
- screen_time
- social_media_time
- date

---

## Devices

Dispositivos registrados.

Campos:

- id
- user_id
- device
- os
- push_token
- last_seen

---

## Integrations

Servicios conectados.

Campos:

- id
- user_id
- provider
- status
- last_sync

---

## Subscription

Suscripción.

Campos:

- id
- user_id
- plan
- status
- renew_at
- lemon_customer_id

---

# Relaciones

User

↓

Profile

↓

Goals

↓

Habits

↓

Workouts

↓

Recovery

↓

Nutrition

↓

Argus

↓

Notifications

---

Synchronization

↓

Challenges

↓

Shared Dashboard

↓

Argus

---

# Auditoría

Todas las tablas críticas deberán incluir:

- created_at
- updated_at

Cuando corresponda:

- deleted_at (Soft Delete)

---

# Seguridad

- Row Level Security en todas las tablas.
- Cada usuario únicamente accede a sus propios datos.
- Las tablas compartidas respetan permisos de sincronización.

---

# Escalabilidad

La estructura permitirá:

- Nuevos módulos.
- Nuevos proveedores de salud.
- Nuevos modelos de IA.
- Nuevos tipos de retos.
- Nuevos planes de suscripción.

Sin romper la estructura existente.

---

# Futuro

Tablas previstas para futuras versiones:

- Communities
- Posts
- Comments
- Achievements
- Badges
- Marketplace
- CMS
- Blog

---

# Decisions

## Decision 001

Toda la información gira alrededor del usuario.

---

## Decision 002

La sincronización utiliza relaciones independientes y no modifica la estructura del usuario.

---

## Decision 003

Argus almacena únicamente insights y recomendaciones, nunca modifica datos originales.

---

## Decision 004

El historial nunca se sobrescribe; todas las métricas son acumulativas para permitir análisis de evolución.

---

## Decision 005

La base de datos debe estar preparada para soportar millones de usuarios sin cambios estructurales.