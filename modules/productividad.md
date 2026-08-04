---
title: Módulo Productividad
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - ../contracts/productividad.contract.md
used_by:
  - Product
  - Design
  - Engineering
---

# Productividad

# Objetivo

El módulo Productividad no mide trabajo. Mide procrastinación.

Es lo que diferencia a Clufit de un gestor de tareas tipo Todoist o Notion: no busca que el usuario organice más, busca que dedique más tiempo real a lo que le importa.

La especificación técnica y las reglas completas viven en [`contracts/productividad.contract.md`](../contracts/productividad.contract.md).

---

# Descripción General

Clufit registra automáticamente el tiempo de enfoque y el tiempo de distracción del usuario (vía integración con Screen Time), y traduce esa información en un Índice de Procrastinación fácil de entender.

No le decimos al usuario "sos productivo". Le decimos: **"hoy procrastinaste menos que ayer"**.

---

# Pantallas

## Resumen de Productividad

Índice de Procrastinación del día, tiempo dedicado a objetivos, horarios más y menos productivos.

## Historial

Evolución semanal y mensual del índice, comparado con entrenamiento, sueño y disciplina para dar contexto (por ejemplo: "dormir mejor también mejoró tu concentración").

---

# Interacción con Argus

Argus identifica patrones de procrastinación (redes sociales, cambios de app, inactividad) y ofrece recomendaciones. Nunca bloquea aplicaciones ni impone límites de uso del teléfono.

---

# Interacción con Sincronización

Con sincronización activa, el usuario puede comparar su nivel de enfoque con el de su compañero, con insights como "hoy Gonza te sacó ventaja" — siempre en tono motivador, nunca comparativo negativo.

---

# Fuera de Alcance (MVP)

- Clasificación automática de actividades.
- Bloqueo de aplicaciones.
- Rankings de enfoque entre compañeros.
