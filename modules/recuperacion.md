---
title: Módulo Recuperación
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - ../contracts/recuperacion.contract.md
used_by:
  - Product
  - Design
  - Engineering
---

# Recuperación

# Objetivo

El módulo Recuperación ayuda al usuario a entender su estado físico y mental, y a decidir cuándo exigirse y cuándo descansar.

La especificación técnica y las reglas completas viven en [`contracts/recuperacion.contract.md`](../contracts/recuperacion.contract.md).

---

# Descripción General

Un check-in diario de pocos segundos (sueño, estrés, energía, ánimo, hidratación) alimenta el Recovery Score, que Argus utiliza para contextualizar recomendaciones en Fitness, Nutrición y Productividad.

---

# Pantallas

## Check-in Diario

Registro rápido de sueño, estrés, energía, ánimo e hidratación.

## Recovery Score

Vista del score del día y su evolución reciente.

## Calendario y Estadísticas

Evolución del score, correlación con entrenamientos y descansos, promedio de sueño.

---

# Interacción con Argus

Argus detecta falta de sueño sostenida, estrés elevado o señales de sobreentrenamiento, y sugiere ajustes — nunca impide que el usuario entrene.

---

# Interacción con Sincronización

El usuario puede compartir su Recovery Score general y nivel de energía con su compañero. El detalle emocional del check-in (sueño, estrés, ánimo) nunca se comparte sin autorización explícita.

---

# Integraciones

Apple Health y Apple Watch aportan datos de sueño y frecuencia cardíaca en reposo para enriquecer el score.

---

# Fuera de Alcance (MVP)

- Variabilidad de frecuencia cardíaca (HRV).
- Recomendación automática de días de descanso.
- Integraciones con Garmin, Fitbit, WHOOP y Oura.
