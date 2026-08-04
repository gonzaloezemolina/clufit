---
title: Productivity Contract
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - objetivos.contract.md
  - notifications.contract.md
  - argus.contract.md
used_by:
  - Mobile
  - Backend
  - Argus
---

# Productivity Contract

# Objetivo

El módulo Productividad tiene como objetivo ayudar al usuario a reducir su procrastinación y aumentar el tiempo dedicado a sus objetivos personales.

Clufit no pretende convertirse en un gestor de tareas ni en una aplicación de organización.

Su propósito es responder una única pregunta:

**¿Estás dedicando tiempo a lo que realmente importa?**

---

# Filosofía

La productividad no consiste en hacer más cosas.

Consiste en invertir más tiempo en aquello que realmente acerca al usuario a sus objetivos.

Clufit mide la procrastinación, detecta patrones y ayuda a recuperar el enfoque.

Argus acompaña este proceso mediante insights y recomendaciones.

Nunca bloquea aplicaciones ni impone restricciones.

---

# Funcionalidades

## Objetivos

El usuario podrá vincular sesiones de enfoque a un objetivo definido en el módulo Objetivos.

Cada sesión podrá incluir:

- Objetivo asociado.
- Duración estimada.
- Duración real.
- Resultado.

---

## Tiempo de Enfoque

Clufit registrará automáticamente:

- Tiempo dedicado a los objetivos.
- Tiempo sin actividad relevante.
- Tiempo estimado de concentración.

---

## Procrastinación

Argus calculará un Índice de Procrastinación utilizando múltiples señales.

Entre ellas:

- Tiempo en redes sociales.
- Cambios constantes entre aplicaciones.
- Tiempo de inactividad.
- Horarios habituales.
- Contexto del usuario.

El índice será mostrado como una métrica de mejora, nunca como un castigo.

---

## Estadísticas

El sistema calculará automáticamente:

- Tiempo productivo.
- Tiempo de procrastinación.
- Evolución semanal.
- Evolución mensual.
- Horarios más productivos.
- Horarios con mayor procrastinación.

---

# Argus

Argus analizará continuamente el comportamiento del usuario.

Podrá detectar:

- Aumento de procrastinación.
- Pérdida de foco.
- Horarios de mayor productividad.
- Cambios positivos en la disciplina.
- Relación entre entrenamiento, recuperación y productividad.

Ejemplos de Insights:

- "Hoy reduciste un 18% tu tiempo en redes sociales."
- "Las mañanas siguen siendo tu momento más productivo."
- "Hace tres días que aumentó tu nivel de procrastinación."
- "Dormir mejor también mejoró tu capacidad de concentración."

Argus únicamente ofrecerá recomendaciones.

Nunca bloqueará aplicaciones ni modificará objetivos automáticamente.

---

# Integraciones

El módulo utilizará información proveniente de:

- Screen Time (Apple)

Esta integración permitirá enriquecer el análisis realizado por Argus.

---

# Sincronización

Cuando exista una sincronización activa:

El usuario podrá compartir:

- Tiempo dedicado a sus objetivos.
- Nivel de procrastinación.
- Rachas de productividad.
- Objetivos compartidos.

Argus también podrá generar insights comparativos.

Ejemplos:

- "Hoy Gonza te sacó ventaja."
- "Ambos redujeron su procrastinación esta semana."
- "Tu compañero completó su objetivo antes que vos."

---

# Notificaciones

El sistema podrá generar:

- Recordatorios de objetivos.
- Insights de Argus.
- Alertas de procrastinación.
- Progreso diario.
- Actividad del compañero.

La frecuencia será administrada mediante el Notification Score.

---

# Restricciones

El módulo nunca:

- Bloqueará aplicaciones.
- Limitará el uso del teléfono.
- Modificará objetivos automáticamente.
- Registrará información innecesaria.

Toda intervención será sugerida y nunca impuesta.

---

# Futuras Versiones

## Phase 2

- Clasificación automática de actividades.
- Detección inteligente de sesiones de trabajo.
- Insights predictivos.

---

## Phase 3

- Objetivos compartidos.
- Rankings de enfoque.
- Análisis avanzado de procrastinación mediante IA.

---

# Decisions

## Decision 001

Clufit mide procrastinación, no productividad tradicional.

---

## Decision 002

Argus nunca bloqueará aplicaciones ni limitará el uso del dispositivo.

---

## Decision 003

El objetivo del módulo es aumentar el tiempo dedicado a los objetivos del usuario.

---

## Decision 004

Toda recomendación será sugerida y nunca aplicada automáticamente.

---

## Decision 005

La productividad se analizará en conjunto con Fitness, Recuperación y Disciplina para comprender el contexto completo del usuario.
