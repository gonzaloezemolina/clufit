---
title: Notifications Contract
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-03
depends_on:
  - argus.contract.md
  - synchronization.contract.md
used_by:
  - Mobile
  - Backend
  - Argus
---

# Notifications Contract

# Objetivo

El Sistema de Notificaciones es el encargado de comunicar eventos relevantes al usuario.

Su objetivo no es generar la mayor cantidad posible de notificaciones, sino enviar la notificación correcta, en el momento correcto y con el contexto adecuado.

Las notificaciones forman parte de la experiencia principal de Clufit.

---

# Filosofía

Una notificación debe aportar valor.

Nunca deberá interrumpir al usuario sin una razón clara.

Argus tendrá la capacidad de decidir cuándo una notificación merece ser enviada.

---

# Notification Score

Cada usuario posee un Notification Score.

Este indicador representa la probabilidad de que una notificación genere una acción positiva.

Argus utilizará este score para decidir:

- Cuándo enviar.
- Cuándo esperar.
- Qué prioridad utilizar.
- Qué tipo de mensaje mostrar.

---

# Tipos

## Sistema

Eventos importantes.

Ejemplos:

- Bienvenida.
- Cuenta creada.
- Cambio de plan.
- Actualización.

---

## Recordatorios

Ayudan a cumplir objetivos.

Ejemplos:

- Hora de entrenar.
- Hora de comer.
- Tomar agua.
- Dormir.

---

## Fitness

Relacionadas con entrenamiento.

Ejemplos:

- Entrenamiento pendiente.
- Entrenamiento completado.
- Nuevo récord.
- Nueva racha.

---

## Recuperación

Relacionadas con bienestar.

Ejemplos:

- Dormiste menos de lo habitual.
- Hace varias horas que no registrás agua.
- Tu recuperación disminuyó.

---

## Productividad

Relacionadas con procrastinación.

Ejemplos:

- Hoy aumentó tu tiempo en redes sociales.
- Llevás demasiado tiempo sin avanzar en tus objetivos.
- Argus detectó un cambio en tu enfoque.

---

## Argus

Insights inteligentes.

Ejemplos:

- Detecté una mejora en tu disciplina.
- Tu rendimiento viene creciendo.
- Esta semana estás entrenando mejor.
- Hoy sería un buen día para descansar.

---

## Sincronización

Relacionadas con el compañero.

Ejemplos:

- Recibiste una invitación.
- Tu compañero terminó su entrenamiento.
- Ambos alcanzaron una nueva racha.
- Tu compañero te desafió.

---

## Challenge Engine

Relacionadas con retos.

Ejemplos:

- Nuevo reto.
- Reto aceptado.
- Reto rechazado.
- Reto finalizado.
- Ganaste un reto.

---

# Prioridad

Cada notificación tendrá una prioridad.

## Critical

Eventos imprescindibles.

---

## High

Eventos importantes.

---

## Medium

Recordatorios.

---

## Low

Información general.

---

# Context Awareness

Antes de enviar una notificación, Argus evaluará el contexto actual del usuario.

Variables consideradas:

- Hora del día.
- Estado de recuperación.
- Entrenamiento en curso.
- Apple Health.
- Calendario interno.
- Historial de interacción.
- Notification Score.
- Tiempo desde la última notificación.

---

# Frecuencia

El sistema evitará enviar múltiples notificaciones consecutivas sin aportar valor.

Argus podrá:

- Posponer.
- Agrupar.
- Cancelar.
- Priorizar.

---

# Interacción

Cada notificación podrá generar acciones rápidas.

Ejemplos:

- Marcar hábito como completado.
- Registrar agua.
- Aceptar reto.
- Rechazar reto.
- Iniciar entrenamiento.
- Abrir recomendación.

---

# Integración con Otros Sistemas

## Dashboard

Actualiza eventos próximos.

---

## Objetivos

Recordatorios y progreso.

---

## Disciplina

Hábitos pendientes.

---

## Fitness

Entrenamientos y récords.

---

## Recuperación

Sueño, hidratación y energía.

---

## Nutrición

Comidas y agua.

---

## Argus

Insights y recomendaciones.

---

## Synchronization

Eventos del compañero.

---

## Challenge Engine

Estado de los retos.

---

# Restricciones

Las notificaciones nunca deberán:

- Generar spam.
- Repetir el mismo mensaje constantemente.
- Interrumpir entrenamientos.
- Mostrar información privada sin autorización.

---

# Futuras Versiones

Phase 2

- Respuestas rápidas.
- Notificaciones enriquecidas.
- Widgets interactivos.

---

Phase 3

- Live Activities.
- Apple Watch.
- Resúmenes inteligentes del día.
- Resúmenes semanales generados por Argus.

---

# Decisions

## Decision 001

Toda notificación debe aportar valor.

---

## Decision 002

Argus decidirá cuándo y cómo enviar notificaciones inteligentes.

---

## Decision 003

El Notification Score será utilizado para optimizar la experiencia del usuario.

---

## Decision 004

Las notificaciones deberán adaptarse al contexto actual del usuario.

---

## Decision 005

Las acciones rápidas serán priorizadas para reducir la fricción y fomentar la interacción.
