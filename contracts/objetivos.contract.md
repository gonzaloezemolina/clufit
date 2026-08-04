---
title: Goals Contract
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-03
depends_on:
  - productivity.contract.md
  - discipline.contract.md
  - synchronization.contract.md
  - argus.contract.md
used_by:
  - Mobile
  - Backend
  - Argus
---

# Goals Contract

# Objetivo

El módulo Objetivos permite al usuario definir aquello que desea alcanzar y medir el progreso hacia ese resultado.

Todos los demás módulos de Clufit existen para ayudar al usuario a cumplir sus objetivos.

---

# Filosofía

Un objetivo representa un resultado.

Los hábitos, la disciplina, la productividad, el entrenamiento y la recuperación son los medios para alcanzarlo.

Clufit ayuda al usuario a mantener el foco en aquello que realmente importa.

Argus analizará continuamente el progreso y sugerirá oportunidades de mejora.

---

# Funcionalidades

## Objetivos

El usuario podrá:

- Crear objetivos.
- Editarlos.
- Pausarlos.
- Archivarlos.
- Eliminarlos.

Cada objetivo podrá incluir:

- Nombre.
- Descripción.
- Categoría.
- Fecha de inicio.
- Fecha objetivo.
- Prioridad.
- Estado.

---

## Categorías

Ejemplos:

- Fitness
- Salud
- Productividad
- Estudio
- Trabajo
- Finanzas
- Personal

El usuario también podrá crear categorías personalizadas.

---

## Estados

Cada objetivo podrá encontrarse en uno de los siguientes estados:

- Activo
- En progreso
- Pausado
- Completado
- Archivado

---

## Progreso

Cada objetivo mostrará:

- Porcentaje de avance.
- Tiempo restante.
- Racha asociada.
- Última actividad.
- Próximo paso sugerido por Argus.

---

## Dashboard

Los objetivos activos aparecerán automáticamente en el Dashboard.

El progreso diario impactará directamente en el Overall Score.

---

# Argus

Argus analizará continuamente el progreso de cada objetivo.

Podrá detectar:

- Falta de actividad.
- Estancamiento.
- Avances sostenidos.
- Cambios de comportamiento.
- Objetivos poco realistas.

Ejemplos de Insights:

- "Hace cinco días que no avanzás en este objetivo."

- "Tu disciplina aumentó y eso mejoró el progreso."

- "Estás adelantado respecto al plan inicial."

- "Los entrenamientos están impactando positivamente en este objetivo."

Argus únicamente ofrecerá recomendaciones.

Nunca modificará objetivos automáticamente.

---

# Sincronización

Cuando exista una sincronización activa:

El usuario podrá:

- Compartir objetivos.
- Crear objetivos conjuntos.
- Ver el progreso del compañero.
- Comparar avances.
- Crear retos relacionados con un objetivo.

Argus podrá generar insights comparativos.

Ejemplos:

- "Ambos avanzaron esta semana."

- "Gonza completó primero el objetivo."

---

# Integración con otros módulos

## Disciplina

Los hábitos impulsan el cumplimiento de los objetivos.

---

## Productividad

El tiempo de enfoque impacta directamente sobre el progreso.

---

## Fitness

Los entrenamientos pueden contribuir al cumplimiento de determinados objetivos.

---

## Recuperación

El estado físico influye sobre la capacidad de cumplir objetivos.

---

## Nutrición

La adherencia nutricional podrá formar parte del progreso cuando corresponda.

---

## Dashboard

Los objetivos constituyen uno de los principales indicadores del Dashboard.

---

# Notificaciones

El sistema podrá generar:

- Objetivo creado.
- Objetivo próximo a vencer.
- Objetivo completado.
- Objetivo sin actividad.
- Insights de Argus.

La frecuencia será administrada mediante el Notification Score.

---

# Restricciones

El módulo nunca:

- Modificará objetivos automáticamente.
- Cambiará prioridades sin autorización.
- Eliminará información histórica.

Toda modificación requerirá confirmación del usuario.

---

# Futuras Versiones

## Phase 2

- Objetivos colaborativos.
- Dependencias entre objetivos.
- Plantillas.

---

## Phase 3

- Objetivos inteligentes generados por IA.
- Roadmaps automáticos.
- Objetivos grupales.

---

# Decisions

## Decision 001

Todo objetivo deberá tener un propósito claro y medible.

---

## Decision 002

Los objetivos representan el destino; los demás módulos representan el camino.

---

## Decision 003

Argus nunca modificará objetivos automáticamente.

---

## Decision 004

El progreso de los objetivos impactará directamente en el Overall Score.

---

## Decision 005

Los objetivos podrán ser individuales o compartidos mediante una sincronización activa.