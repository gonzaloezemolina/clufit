---
title: Product Principles
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-02
depends_on:
  - 01-vision.md
used_by:
  - Product
  - Design
  - Engineering
  - AI
---

# 02 - Product Principles

## Objetivo

Este documento define las reglas fundamentales que rigen el desarrollo de Clufit.

Toda nueva funcionalidad, diseño o decisión técnica deberá respetar estos principios.

Si una propuesta contradice alguno de ellos, deberá ser replanteada.

---

# Principio 1 — Progress Together

El progreso compartido es el centro del producto.

Siempre que tenga sentido, una funcionalidad deberá contemplar cómo puede potenciar la colaboración entre dos personas.

Clufit no busca únicamente mejorar individuos.

Busca ayudar a que dos personas crezcan juntas.

---

# Principio 2 — El usuario mantiene el control

La aplicación nunca tomará decisiones importantes automáticamente.

Argus podrá:

- Analizar.
- Detectar.
- Recomendar.
- Explicar.

Pero nunca:

- Modificar rutinas.
- Cambiar objetivos.
- Alterar hábitos.
- Crear compromisos sin consentimiento.

La decisión final siempre pertenece al usuario.

---

# Principio 3 — Automatizar antes que preguntar

Toda información que pueda obtenerse automáticamente deberá sincronizarse mediante integraciones.

Solo se solicitará información manual cuando no exista otra alternativa.

Reducir la carga manual mejora la adherencia al producto.

---

# Principio 4 — El contexto tiene prioridad

Las decisiones de Clufit deben considerar el contexto actual del usuario.

No es suficiente conocer datos históricos.

Es necesario comprender qué está ocurriendo en este momento.

El contexto influye en:

- Argus.
- Notificaciones.
- Recomendaciones.
- Dashboard.
- Retos.

---

# Principio 5 — Toda métrica debe generar una acción

No se mostrarán métricas únicamente por interés visual.

Cada Score debe responder:

- ¿Qué significa?
- ¿Por qué cambió?
- ¿Qué puedo hacer para mejorarlo?

Los datos sin acciones no generan valor.

---

# Principio 6 — La IA explica

Argus siempre deberá justificar sus recomendaciones.

Nunca mostrará resultados sin contexto.

El usuario debe comprender:

- Qué detectó.
- Por qué lo detectó.
- Qué evidencia utilizó.
- Qué recomienda hacer.

---

# Principio 7 — Simplicidad sobre cantidad

Cada nueva funcionalidad aumenta la complejidad del producto.

Antes de incorporar una característica deberá demostrarse que aporta un beneficio claro.

Menos funciones, mejor integradas, generan una mejor experiencia.

---

# Principio 8 — La sincronización es transversal

La sincronización no es un módulo independiente.

Es un sistema que puede integrarse en cualquier parte de la aplicación.

Ejemplos:

- Objetivos compartidos.
- Rutinas compartidas.
- Retos.
- Dashboard.
- Notificaciones.
- Argus.

---

# Principio 9 — La competencia debe motivar

Los retos y comparaciones existen para generar compromiso.

Nunca para avergonzar al usuario.

La competencia debe fortalecer la relación entre las personas.

No deteriorarla.

---

# Principio 10 — La privacidad es configurable

Toda información compartida requiere autorización explícita.

Cada usuario decide qué datos comparte con su compañero.

La sincronización nunca implica pérdida de control sobre la información personal.

---

# Principio 11 — Un único ecosistema

Clufit funciona como un único producto.

No existen versiones diferentes para usuarios individuales o sincronizados.

La sincronización es una capacidad adicional que puede activarse o desactivarse en cualquier momento.

---

# Principio 12 — Construir para escalar

Toda nueva funcionalidad debe diseñarse pensando en su evolución futura.

Se evitarán soluciones específicas que dificulten el crecimiento del producto.

---

# Anti Principles

Clufit nunca será:

- Una red social.
- Un marketplace.
- Una aplicación de mensajería.
- Un sistema que obligue al usuario a registrar información innecesaria.
- Una IA que tome decisiones por las personas.
- Un producto lleno de funciones sin propósito.

---

# The Clufit Rule

Antes de aprobar cualquier funcionalidad deberá responder afirmativamente al menos una de estas preguntas:

- ¿Ayuda al usuario a progresar?
- ¿Ayuda a su compañero a progresar?
- ¿Reduce la carga manual?
- ¿Permite a Argus comprender mejor al usuario?
- ¿Hace la experiencia más simple?

Si la respuesta es "no" a todas ellas, la funcionalidad no debe desarrollarse.

---

# Decisions

## Decision 001

El progreso compartido tiene prioridad sobre las funcionalidades individuales.

---

## Decision 002

Argus actúa como asistente inteligente, nunca como reemplazo del usuario.

---

## Decision 003

La automatización es preferible al ingreso manual de información.

---

## Decision 004

La sincronización forma parte de toda la arquitectura del producto y no de un módulo específico.

---

## Decision 005

Cada nueva funcionalidad debe reforzar la visión y los principios definidos en Clufit.