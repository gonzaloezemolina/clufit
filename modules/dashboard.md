---
title: Módulo Dashboard
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - ../contracts/dashboard.contract.md
used_by:
  - Product
  - Design
  - Engineering
---

# Dashboard

# Objetivo

El Dashboard es la primera pantalla que ve el usuario al abrir Clufit.

Responde, de un vistazo, a la pregunta: **¿cómo estoy hoy y qué debería hacer ahora?**

La especificación técnica y las reglas completas viven en [`contracts/dashboard.contract.md`](../contracts/dashboard.contract.md).

---

# Descripción General

El Dashboard es un resumen accionable, no un panel de métricas. Cada elemento que aparece existe porque ayuda al usuario a decidir su próximo paso, nunca por completitud visual.

---

# Pantalla Principal

De arriba hacia abajo:

1. **Overall Score** del día, con su tendencia respecto a días anteriores.
2. **Objetivo Principal** destacado, con progreso y próximo paso sugerido por Argus.
3. **Insight del día** de Argus (uno solo, el más relevante).
4. **Estado del compañero** (si hay una sincronización activa).
5. **Resumen por módulo**: Fitness, Recuperación, Nutrición, Productividad, Disciplina — cada uno como una tarjeta compacta que lleva a su pantalla.
6. **Retos activos**, con progreso y tiempo restante.
7. **Próximos eventos**: entrenamiento programado, comidas pendientes, hábitos del día.

---

# Estados

- **Sin sincronización**: el Dashboard muestra únicamente la información individual del usuario.
- **Con sincronización activa**: se agrega la sección de estado del compañero y los insights comparativos de Argus.
- **Sin Objetivo Principal definido**: se invita al usuario a designar uno desde el módulo Objetivos.

---

# Interacción con Argus

Argus decide qué módulo destacar y qué insight mostrar primero según el contexto del usuario (por ejemplo, prioriza Recuperación si detecta baja calidad de sueño reciente).

---

# Interacción con Sincronización

Cuando existe un compañero vinculado, el Dashboard se convierte parcialmente en un dashboard compartido, sin nunca ocultar el estado individual del usuario.

---

# Fuera de Alcance (MVP)

- Personalización del orden de las tarjetas.
- Widgets de pantalla de inicio (iOS).
- Comparativas históricas extendidas.
