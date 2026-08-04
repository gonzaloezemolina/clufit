---
title: Módulo Fitness
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - ../contracts/fitness.contract.md
used_by:
  - Product
  - Design
  - Engineering
---

# Fitness

# Objetivo

Fitness es el núcleo operativo de Clufit: permite planificar, registrar y analizar entrenamientos con la menor fricción posible.

La especificación técnica y las reglas completas viven en [`contracts/fitness.contract.md`](../contracts/fitness.contract.md).

---

# Descripción General

La aplicación nunca debe interrumpir una sesión de entrenamiento. El registro debe sentirse natural: crear rutinas, ejecutarlas, y dejar que Clufit construya el historial y las estadísticas automáticamente.

---

# Pantallas

## Rutinas

Listado de rutinas del usuario (crear, editar, duplicar, archivar), cada una con una cantidad ilimitada de ejercicios.

## Sesión de Entrenamiento

Pantalla de ejecución en vivo: series, repeticiones, peso y descansos, con el menor número de toques posible.

## Historial y Calendario

Entrenamientos pasados, días entrenados y omitidos, rachas y frecuencia semanal.

## Estadísticas

Volumen total, evolución de cargas, ejercicios más utilizados, grupos musculares trabajados.

---

# Interacción con Argus

Argus analiza el historial para detectar estancamiento, sobrecarga o falta de descanso, y puede recomendar ajustes de rutina — siempre sujetos a confirmación del usuario.

---

# Interacción con Sincronización

Con sincronización activa, el usuario puede ver si su compañero entrenó, comparar frecuencia semanal, copiar una rutina compartida y participar en retos relacionados con entrenamientos.

---

# Integraciones

Apple Health y Apple Watch enriquecen la precisión de los registros (calorías, frecuencia cardíaca).

---

# Fuera de Alcance (MVP)

- Temporizador inteligente, superseries, dropsets, circuitos.
- Rutinas compartidas y biblioteca pública de rutinas.
- Generación de rutinas por IA.
