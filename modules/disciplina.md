---
title: Módulo Disciplina
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - ../contracts/disciplina.contract.md
used_by:
  - Product
  - Design
  - Engineering
---

# Disciplina

# Objetivo

El módulo Disciplina ayuda al usuario a construir y sostener hábitos mediante rachas y consistencia, no mediante una lista interminable de tareas.

La especificación técnica y las reglas completas viven en [`contracts/disciplina.contract.md`](../contracts/disciplina.contract.md).

---

# Descripción General

Cuantos menos hábitos activos y más consistentes, mejor. Cada hábito se registra en un solo toque, con tres estados posibles: cumplido, pendiente o no cumplido.

---

# Pantallas

## Hábitos del Día

Lista de hábitos activos para hoy, cada uno marcable en un toque.

## Detalle de un Hábito

Racha actual, racha más larga, consistencia semanal y mensual, calendario histórico.

## Crear / Editar Hábito

Nombre, frecuencia (diaria, semanal, días específicos), horario de recordatorio.

---

# Interacción con Argus

Argus detecta hábitos en riesgo de perder su racha y mejoras sostenidas, generando insights como "estás a un día de tu racha más larga". Nunca marca un hábito como cumplido en nombre del usuario.

---

# Interacción con Sincronización

Dos usuarios sincronizados pueden crear hábitos compartidos, donde la racha depende del cumplimiento de ambos — reforzando el compromiso mutuo.

---

# Fuera de Alcance (MVP)

- Hábitos con múltiples registros diarios.
- Plantillas de hábitos frecuentes.
- Rankings de consistencia entre compañeros.
