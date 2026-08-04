---
title: Sistema Context Engine
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - ../docs/04-ai-blueprint.md
  - argus.md
used_by:
  - Product
  - Engineering
  - AI
---

# Context Engine

# Objetivo

El Context Engine determina qué está ocurriendo ahora mismo en la vida del usuario, para que Argus y el Sistema de Notificaciones actúen en el momento correcto y no según reglas fijas.

Comprender el contexto es tan importante como conocer las métricas históricas del usuario.

---

# Filosofía

Una misma recomendación tiene distinto valor según el momento en que se entrega. Recomendar hidratarse durante un entrenamiento no es lo mismo que recomendarlo a medianoche. El Context Engine existe para que Clufit sepa la diferencia.

---

# Señales que consume

- Horario actual y zona horaria del usuario.
- Entrenamiento en curso o recién finalizado (Fitness).
- Estado de sueño reciente (Recuperación).
- Actividad reciente en la aplicación.
- Tiempo de pantalla y uso de redes sociales (Productividad).
- Horario laboral habitual del usuario.
- Estado de la sincronización (compañero activo o inactivo).

---

# Ejemplos de contexto detectado

- El usuario está entrenando.
- El usuario está durmiendo.
- El usuario acaba de terminar un entrenamiento.
- El usuario lleva varias horas sin actividad.
- El usuario se encuentra en horario laboral.
- El usuario está utilizando excesivamente el teléfono.

---

# A quién alimenta

- **Argus** — ajusta qué recomendación generar y con qué urgencia.
- **Notifications** — decide si el momento es adecuado para interrumpir al usuario.

---

# Restricciones

El Context Engine únicamente produce una lectura del momento actual. Nunca almacena un perfil de comportamiento permanente por sí mismo ni toma decisiones directamente sobre los datos del usuario — esa responsabilidad es exclusiva de Argus.

---

# Futuras Versiones

- Detección de rutinas horarias recurrentes del usuario.
- Contexto basado en ubicación (gimnasio, casa, trabajo) mediante integraciones futuras.
