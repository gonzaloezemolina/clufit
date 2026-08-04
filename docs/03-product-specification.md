---
title: Product Specification
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-03
depends_on:
  - 01-vision.md
  - 02-product-principles.md
used_by:
  - Product
  - Design
  - Engineering
  - AI
---

# 03 - Product Specification

# Objetivo

Este documento define la estructura funcional de Clufit.

Su propósito es servir como mapa general del producto, describiendo los sistemas, módulos y la forma en que interactúan entre sí.

La especificación detallada de cada componente se encuentra en su correspondiente archivo dentro de `/modules` o `/systems`.

---

# Arquitectura del Producto

Clufit se divide en dos grandes grupos:

## Sistemas

Los sistemas representan la lógica transversal del producto. No son visibles como pantallas principales, sino que potencian la experiencia completa.

### Sistemas actuales

- Argus
- Context Engine
- Synchronization
- Challenge Engine
- Notifications

---

## Módulos

Los módulos representan las funcionalidades visibles para el usuario.

### Dashboard

Resumen general del estado del usuario.

Archivo:

modules/dashboard.md

---

### Objetivos

Módulo principal orientado al progreso.

Contiene:

- Productividad
- Disciplina

Archivo:

modules/objetivos.md

---

### Fitness

Creación, seguimiento e historial de entrenamientos.

Archivo:

modules/fitness.md

---

### Recuperación

Seguimiento de recuperación física y mental.

Archivo:

modules/recuperacion.md

---

### Nutrición

Seguimiento nutricional e hidratación.

Archivo:

modules/nutricion.md

---

### Perfil

Información personal.

Configuraciones.

Integraciones.

Privacidad.

Archivo:

modules/perfil.md

---

### Integraciones

Conexión con Apple Health y servicios externos.

Archivo:

modules/integraciones.md

---

# Relaciones entre Sistemas

Argus consume información proveniente de:

- Dashboard
- Objetivos
- Fitness
- Recuperación
- Nutrición
- Integraciones
- Context Engine
- Synchronization

---

Context Engine alimenta:

- Argus
- Notifications

---

Synchronization alimenta:

- Dashboard
- Fitness
- Objetivos
- Disciplina
- Challenge Engine
- Notifications
- Argus

---

Challenge Engine interactúa con:

- Synchronization
- Argus
- Notifications

---

Notifications recibe eventos desde:

- Todos los módulos
- Todos los sistemas

---

# Flujo General

Usuario

↓

Onboarding

↓

Configuración inicial

↓

Dashboard

↓

Uso diario

↓

Registro automático

↓

Argus analiza

↓

Genera recomendaciones

↓

Usuario mejora

↓

Nuevo análisis

---

# Integraciones

Actualmente soportadas:

- Apple Health
- Apple Watch
- Garmin
- Fitbit
- WHOOP
- MyFitnessPal
- Cronometer
- Lemon Squeezy (Pagos)

---

# Planes

## Free

Acceso básico.

Funciones limitadas.

---

## Starter

Funciones completas individuales.

Mayor capacidad de IA.

---

## Pro

Experiencia completa.

Sincronización avanzada.

Retos.

Funciones premium.

(La definición detallada se encuentra en la documentación de monetización.)

---

# Plataformas

Aplicación Mobile (prioridad)

Administrador Web

El usuario no utilizará inicialmente la versión web.

---

# Inteligencia Artificial

Todo el sistema de IA está centralizado en Argus.

Argus:

- analiza
- detecta
- recomienda
- explica

Nunca modifica información automáticamente.

---

# Sincronización

La sincronización es un sistema transversal.

No representa un modo de uso.

Cualquier usuario puede vincular o desvincular un compañero en cualquier momento.

Toda la experiencia individual continúa funcionando sin modificaciones.

---

# Filosofía del Producto

Clufit no busca registrar información.

Busca ayudar al usuario a progresar.

El registro de datos es únicamente el medio para generar mejores recomendaciones.

---

# Estado del Producto

## MVP

- Dashboard
- Objetivos
- Fitness
- Recuperación
- Nutrición
- Perfil
- Integraciones
- Argus
- Notifications
- Synchronization
- Challenge Engine

---

## Versiones Futuras

- Comunidad
- Feed social
- CMS
- Blog
- Exportaciones
- Integraciones adicionales

---

# Decisions

## Decision 001

El producto será Mobile First.

---

## Decision 002

La experiencia web inicial será únicamente administrativa.

---

## Decision 003

La sincronización será un sistema transversal.

---

## Decision 004

Argus será el único sistema de inteligencia artificial.

---

## Decision 005

Todos los módulos deberán poder funcionar tanto de forma individual como sincronizada.