---
title: Recovery Contract
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - fitness.contract.md
  - notifications.contract.md
  - argus.contract.md
used_by:
  - Mobile
  - Backend
  - Argus
---

# Recovery Contract

# Objetivo

El módulo Recuperación tiene como objetivo ayudar al usuario a comprender su estado físico y mental, y a tomar mejores decisiones sobre cuándo entrenar y cuándo descansar.

Su propósito es responder una única pregunta:

**¿Estás en condiciones de exigirte hoy?**

---

# Filosofía

La recuperación no es la ausencia de entrenamiento.

Es la base que permite sostener el esfuerzo en el tiempo.

Clufit mide sueño, energía, estrés, ánimo e hidratación como un conjunto, no como datos aislados.

Argus utiliza esta información para contextualizar recomendaciones en Fitness, Nutrición y Productividad, nunca para prohibir ni imponer descanso.

---

# Funcionalidades

## Check-in Diario

El usuario podrá registrar diariamente:

- Horas y calidad de sueño.
- Nivel de estrés.
- Nivel de energía.
- Estado de ánimo.
- Hidratación del día.

El registro debe poder completarse en pocos segundos.

---

## Recovery Score

Clufit calculará automáticamente un Recovery Score diario a partir de las variables del check-in y, cuando estén disponibles, de datos de Apple Health.

El score se expresa como una escala simple de comprensión inmediata, nunca como un valor clínico.

---

## Calendario

El calendario permitirá visualizar:

- Evolución del Recovery Score.
- Días de buena y mala recuperación.
- Correlación con entrenamientos y descansos.

---

## Estadísticas

El sistema calculará automáticamente:

- Promedio de sueño.
- Evolución semanal y mensual del Recovery Score.
- Días de mejor y peor recuperación.
- Relación entre recuperación y rendimiento en Fitness.

---

# Argus

Argus analizará continuamente el estado de recuperación del usuario.

Podrá detectar:

- Falta de sueño sostenida.
- Estrés elevado.
- Sobreentrenamiento.
- Relación entre recuperación y productividad.
- Relación entre recuperación y disciplina nutricional.

Ejemplos de Insights:

- "Dormiste menos que tu promedio habitual durante tres días."
- "Tu energía baja los días posteriores a entrenamientos intensos."
- "Tu recuperación mejoró un 20% esta semana."
- "Hoy sería un buen día para priorizar el descanso."

Argus únicamente sugerirá ajustes.

Nunca modificará rutinas, objetivos ni registros automáticamente.

---

# Integraciones

El módulo podrá utilizar información proveniente de:

- Apple Health
- Apple Watch

Estas integraciones permitirán enriquecer el Recovery Score con datos como sueño y frecuencia cardíaca en reposo.

---

# Sincronización

Cuando exista una sincronización activa, el usuario podrá compartir:

- Recovery Score general.
- Estado de energía y ánimo.
- Nivel de hidratación.

El detalle de sueño, estrés y ánimo nunca se comparte automáticamente, salvo autorización explícita del usuario.

Argus podrá generar insights comparativos.

Ejemplos:

- "Ambos vienen durmiendo mejor esta semana."
- "Gonza está más recuperado que vos; podría ser un buen día para que entrene más intenso."

---

# Notificaciones

El sistema podrá generar:

- Recordatorio del check-in diario.
- Alerta de baja recuperación.
- Recomendación de descanso.
- Insights de Argus.

La frecuencia será administrada mediante el Notification Score.

---

# Restricciones

El módulo nunca:

- Impedirá que el usuario entrene.
- Modificará rutinas de Fitness automáticamente.
- Compartirá el detalle emocional del check-in sin autorización.

Toda recomendación de descanso es sugerida, nunca impuesta.

---

# Futuras Versiones

## Phase 2

- Integración de variabilidad de frecuencia cardíaca (HRV).
- Recomendaciones automáticas de días de descanso.

---

## Phase 3

- Integración con Garmin, Fitbit, WHOOP y Oura.
- Predicción de riesgo de lesión o sobreentrenamiento.

---

# Decisions

## Decision 001

La recuperación se mide de forma integral: física y mental.

---

## Decision 002

El check-in diario deberá completarse en pocos segundos.

---

## Decision 003

Argus utilizará el Recovery Score para contextualizar recomendaciones de Fitness, Nutrición y Productividad.

---

## Decision 004

El detalle emocional del check-in nunca se comparte sin autorización explícita del usuario.

---

## Decision 005

El módulo nunca bloqueará ni impedirá el entrenamiento; únicamente informará y recomendará.
