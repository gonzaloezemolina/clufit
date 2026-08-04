---
title: Módulo Nutrición
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - ../contracts/nutricion.contract.md
used_by:
  - Product
  - Design
  - Engineering
---

# Nutrición

# Objetivo

El módulo Nutrición ayuda al usuario a sostener consistencia alimenticia. No cuenta calorías ni macronutrientes: mide si el usuario cumple el plan que él mismo definió.

La especificación técnica y las reglas completas viven en [`contracts/nutricion.contract.md`](../contracts/nutricion.contract.md).

---

# Descripción General

El usuario define cuántas comidas hace al día, sus horarios aproximados y su objetivo de hidratación. Cada comida se marca en segundos con uno de tres estados: cumplida, pendiente o no cumplida.

---

# Pantallas

## Plan Alimenticio

Configuración de comidas diarias y objetivo de hidratación.

## Registro del Día

Marcar cada comida como cumplida, pendiente o no cumplida; registrar hidratación consumida.

## Calendario y Estadísticas

Días cumplidos, consistencia semanal y mensual, racha nutricional, comidas más omitidas.

---

# Interacción con Argus

Argus detecta falta de hidratación, horarios irregulares o comidas omitidas con frecuencia, y relaciona la nutrición con entrenamiento y recuperación. Nunca genera planes alimenticios automáticamente.

---

# Interacción con Sincronización

El usuario puede compartir su estado de cumplimiento del día, objetivo de hidratación, rachas y consistencia — nunca el detalle de las comidas, salvo autorización futura.

---

# Fuera de Alcance (MVP)

- Registro mediante fotografías.
- Reconocimiento de alimentos por IA.
- Recomendaciones nutricionales personalizadas.
