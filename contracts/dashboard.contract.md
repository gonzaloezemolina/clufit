---
title: Dashboard Contract
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - objetivos.contract.md
  - synchronization.contract.md
  - notifications.contract.md
  - argus.contract.md
used_by:
  - Mobile
  - Backend
  - Argus
---

# Dashboard Contract

# Objetivo

El Dashboard es la pantalla principal de Clufit.

Su propósito no es mostrar la mayor cantidad de datos posible, sino responder una única pregunta al abrir la aplicación:

**¿Cómo estoy hoy y qué debería hacer a continuación?**

---

# Filosofía

El Dashboard no es un listado de métricas.

Es un resumen accionable del estado del usuario, construido a partir de todos los módulos y sistemas de Clufit.

Todo lo que aparece en el Dashboard debe ayudar al usuario a decidir su próximo paso.

Si un dato no genera una acción o una comprensión, no pertenece al Dashboard.

---

# Funcionalidades

## Overall Score

Indicador principal que resume el estado general del usuario.

Se calcula a partir de:

- Discipline Score
- Procrastination Score
- Recovery Score
- Fitness Score
- Nutrition Score

El Objetivo Principal (definido en `objetivos.contract.md`) recibe mayor ponderación que el resto.

---

## Objetivo Principal

El objetivo marcado como principal se destaca siempre en la parte superior del Dashboard.

Incluye:

- Progreso actual.
- Próximo paso sugerido por Argus.
- Tiempo restante.

---

## Resumen por Módulo

El Dashboard muestra un resumen compacto de cada módulo:

- Fitness — entrenamiento del día, racha.
- Recuperación — estado general, sueño, energía.
- Nutrición — cumplimiento del día, hidratación.
- Productividad — enfoque del día, procrastinación.
- Disciplina — hábitos del día, rachas.

Cada resumen enlaza directamente a su módulo correspondiente.

---

## Estado del Compañero

Cuando existe una sincronización activa, el Dashboard incluye una sección con el estado del compañero.

Ejemplos:

- Entrenó hoy.
- Mantiene una racha de 12 días.
- Completó su objetivo de hidratación.

---

## Retos Activos

Se muestran los retos en curso junto con su progreso y tiempo restante.

---

## Insights de Argus

El Dashboard reserva un espacio destacado para el insight más relevante del día, generado por Argus.

Nunca se muestra más de un insight principal a la vez para evitar saturar la pantalla.

---

## Próximos Eventos

Entrenamientos programados, comidas pendientes, hábitos del día y retos por vencer.

---

# Argus

Argus decide qué información destacar en el Dashboard según el contexto del usuario.

Podrá:

- Priorizar el módulo con mayor variación reciente.
- Elegir el insight más relevante del día.
- Sugerir el próximo paso sobre el Objetivo Principal.

Argus nunca modifica el contenido del Dashboard de forma permanente; únicamente decide qué mostrar primero.

---

# Sincronización

Cuando existe una sincronización activa, el Dashboard se convierte parcialmente en un dashboard compartido.

Incluye:

- Overall Score del compañero.
- Estado del día del compañero.
- Retos compartidos.
- Insights comparativos generados por Argus.

La información individual del usuario nunca se oculta ni se reemplaza por la del compañero.

---

# Notificaciones

El Dashboard puede originar notificaciones relacionadas con:

- Cambios relevantes en el Overall Score.
- Avances o estancamientos del Objetivo Principal.
- Actividad destacada del compañero.

La frecuencia será administrada mediante el Notification Score.

---

# Restricciones

El Dashboard nunca:

- Modificará datos de otros módulos.
- Calculará scores de forma distinta a la definida en cada contrato.
- Mostrará información privada del compañero sin autorización.

El Dashboard es una capa de lectura y priorización, no de escritura.

---

# Futuras Versiones

## Phase 2

- Personalización del orden de los módulos.
- Widgets iOS.
- Comparativas históricas.

---

## Phase 3

- Live Activities.
- Dashboard de equipo (sincronización grupal).
- Predicciones de Argus sobre el Overall Score.

---

# Decisions

## Decision 001

El Dashboard prioriza acción sobre volumen de información.

---

## Decision 002

El Objetivo Principal siempre ocupa el lugar más destacado del Dashboard.

---

## Decision 003

El Dashboard nunca calcula ni almacena su propia lógica de scores; consume la de cada módulo y sistema.

---

## Decision 004

Solo se muestra un insight principal de Argus a la vez.

---

## Decision 005

Cuando existe sincronización activa, el Dashboard incorpora el estado del compañero sin ocultar el estado individual del usuario.
