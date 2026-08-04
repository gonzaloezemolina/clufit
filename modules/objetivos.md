---
title: Módulo Objetivos
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - ../contracts/objetivos.contract.md
used_by:
  - Product
  - Design
  - Engineering
---

# Objetivos

# Objetivo

El módulo Objetivos es el destino. Todos los demás módulos de Clufit (Fitness, Recuperación, Nutrición, Productividad, Disciplina) son el camino hacia ese destino.

La especificación técnica y las reglas completas viven en [`contracts/objetivos.contract.md`](../contracts/objetivos.contract.md).

---

# Descripción General

Un objetivo representa un resultado que el usuario quiere alcanzar: bajar de peso, correr una media maratón, aprobar una materia, ahorrar dinero. Clufit no impone categorías cerradas: el usuario define qué es importante para él.

---

# Objetivo Principal

Entre todos los objetivos activos, el usuario designa uno como **Objetivo Principal**: el que define su etapa de vida actual.

El Objetivo Principal:

- Aparece primero en el Dashboard.
- Recibe el foco de las recomendaciones de Argus.
- Pesa más en el Overall Score.
- Puede alinear retos y sincronización específicamente hacia él.

Menos dispersión, más foco: esa es la razón de ser de este concepto.

---

# Pantallas

## Listado de Objetivos

Todos los objetivos del usuario, agrupados por estado (Activo, En progreso, Pausado, Completado, Archivado), con el Objetivo Principal siempre visible arriba de todo.

## Detalle de un Objetivo

Progreso, racha asociada, última actividad, próximo paso sugerido por Argus, y — si hay sincronización activa — el progreso del compañero cuando el objetivo es compartido.

## Crear / Editar Objetivo

Nombre, descripción, categoría, fecha de inicio, fecha objetivo, prioridad.

---

# Interacción con Argus

Argus observa el progreso de cada objetivo y genera insights sobre estancamiento, avances sostenidos u objetivos poco realistas, siempre como recomendación, nunca como modificación automática.

---

# Interacción con Sincronización

Con una sincronización activa, dos usuarios pueden compartir objetivos, crear objetivos conjuntos y comparar avances. Argus puede generar insights comparativos motivacionales.

---

# Fuera de Alcance (MVP)

- Dependencias entre objetivos.
- Plantillas de objetivos.
- Objetivos generados automáticamente por IA.
