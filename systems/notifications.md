---
title: Sistema Notifications
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - ../contracts/notifications.contract.md
used_by:
  - Product
  - Design
  - Engineering
  - AI
---

# Notifications

# Qué es

El Sistema de Notificaciones comunica al usuario los eventos relevantes generados por el resto de la aplicación: recordatorios, hitos, actividad del compañero e insights de Argus.

Su objetivo no es la cantidad, sino la precisión: la notificación correcta, en el momento correcto, con el contexto adecuado.

Las reglas técnicas completas viven en [`contracts/notifications.contract.md`](../contracts/notifications.contract.md).

---

# Por qué existe

Una app que notifica mal se abandona. Clufit delega en Argus (Notification Intelligence) la decisión de cuándo una notificación realmente aporta valor, apoyándose en el Notification Score de cada usuario y en el Context Engine.

---

# Origen de las notificaciones

Todos los módulos y sistemas pueden generar eventos que el Sistema de Notificaciones traduce en notificaciones: Objetivos, Disciplina, Fitness, Recuperación, Nutrición, Productividad, Synchronization, Challenge Engine y Argus.

---

# Prioridades

- **Critical** — eventos imprescindibles.
- **High** — eventos importantes (invitaciones, resultados de retos).
- **Medium** — recordatorios.
- **Low** — información general.

---

# Qué nunca hace

- Generar spam o repetir el mismo mensaje.
- Interrumpir un entrenamiento en curso.
- Mostrar información privada del compañero sin autorización.
