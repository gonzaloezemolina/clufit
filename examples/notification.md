---
title: Ejemplo — Notification
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - ../contracts/notifications.contract.md
  - ../systems/notifications.md
used_by:
  - Product
  - Design
---

# Ejemplo: Notification

# Escenario

Ilustra cómo Argus (Notification Intelligence) decide si enviar, posponer o descartar una notificación, según el contrato `notifications.contract.md`.

---

## Caso 1 — Se envía

**Evento:** el usuario lleva 3 días sin registrar hidratación (Nutrición).

**Evaluación de contexto:**

- Hora: 11:00 am (horario habitual de actividad).
- El usuario no está entrenando.
- Notification Score alto para este tipo de recordatorio.
- Última notificación enviada: hace 6 horas.

**Decisión:** enviar.

> 🔔 "Hace tres días que no registrás tu hidratación. ¿Tomaste agua hoy?"
>
> Prioridad: Medium — Recordatorio.

---

## Caso 2 — Se pospone

**Evento:** Argus detecta una mejora en la racha de Disciplina y quiere comunicarlo.

**Evaluación de contexto:**

- Hora: 6:45 am.
- Contexto: el usuario está durmiendo (Recovery + Context Engine).

**Decisión:** posponer hasta que el Context Engine detecte que el usuario está activo.

> (la notificación se reprograma automáticamente, sin acción del usuario)

---

## Caso 3 — Se agrupa

**Evento:** en un lapso de 10 minutos se generan tres eventos: racha de hábito alcanzada, entrenamiento completado y compañero terminó su entrenamiento.

**Decisión:** Argus agrupa los tres eventos en una sola notificación para evitar spam.

> 🔔 "Gran día: completaste tu entrenamiento, alcanzaste una racha de 7 días y Gonza también entrenó."
>
> Prioridad: High.

---

## Caso 4 — Se descarta

**Evento:** el sistema detecta que el usuario no interactúa hace semanas con recordatorios de un hábito específico.

**Decisión:** Argus reduce la frecuencia de ese recordatorio en lugar de seguir enviándolo sin generar acción, y en su lugar genera un insight distinto:

> 🤖 "Hace tiempo que no marcás este hábito. ¿Seguís queriendo mantenerlo activo?"

---

# Principios aplicados en este ejemplo

- El contexto (hora, actividad, sueño) determina el momento de envío, no un horario fijo.
- Notificaciones relacionadas se agrupan para reducir interrupciones.
- Un recordatorio que nunca genera acción se reevalúa en lugar de repetirse indefinidamente.
- Toda notificación de Argus busca aportar valor, nunca simplemente recordar por recordar.
