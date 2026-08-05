---
title: Monetization
version: 0.1
status: Draft — pendiente de revisar oferta de valor final
owner: Clufit
last_updated: 2026-08-05
depends_on:
  - 01-vision.md
  - 03-product-specification.md
used_by:
  - Product
  - Engineering
---

# 14 - Monetization

# Objetivo

Definir los planes comerciales de Clufit y qué incluye cada uno.

Este documento reemplaza la referencia a "documentación de monetización" mencionada en `03-product-specification.md`.

**Estado:** la división de features está definida; la redacción final de la oferta de valor de cada plan (nombres, copy de venta) queda pendiente de revisión.

---

# Principio No Negociable

El Sistema de Sincronización (vincular un compañero, dashboard compartido, retos básicos) está disponible **en el plan Free**.

Es la esencia del producto y no debe quedar detrás de un paywall: el objetivo es que cualquier persona pueda probar la propuesta central de Clufit —progresar acompañado— sin fricción de pago.

---

# Qué diferencia a los planes

Dado que Synchronization está en todos los planes, la diferenciación se apoya en tres ejes:

1. **Profundidad de Argus** — frecuencia de insights, explicabilidad bajo demanda, análisis predictivo.
2. **Cantidad** — objetivos y hábitos activos simultáneos.
3. **Integraciones** — cuántas fuentes externas de datos puede conectar el usuario.

---

# Free

## Incluye

- Onboarding completo.
- Hasta 3 objetivos activos (con Objetivo Principal).
- Hasta 5 hábitos activos en Disciplina.
- Fitness completo: rutinas ilimitadas e historial completo.
- Recuperación y Nutrición: check-in diario básico.
- Productividad: Índice de Procrastinación básico.
- **Synchronization y Challenge Engine completos**, con un compañero activo.
- Argus: un insight destacado por día en el Dashboard, sin explicabilidad bajo demanda ilimitada.
- Integraciones: Apple Health.
- Notificaciones esenciales.

---

# Starter — $9/mes

## Incluye todo lo de Free, más

- Objetivos y hábitos ilimitados.
- Estadísticas avanzadas en todos los módulos.
- Argus: insights diarios completos por módulo + explicabilidad ilimitada ("¿por qué me recomendás esto?").
- Notificaciones inteligentes completas (Notification Score optimizado).
- Integraciones: + Apple Watch, Screen Time.

---

# Premium — $39/mes

## Incluye todo lo de Starter, más

- Argus avanzado: mayor frecuencia y profundidad de insights, análisis predictivo (cuando esté disponible), prioridad de respuesta.
- Integraciones futuras: Garmin, Fitbit, WHOOP.
- Exportación de datos.
- Soporte prioritario.
- Acceso anticipado a nuevas funcionalidades.

---

# Estimación de Costo de IA (referencial)

El costo por usuario no depende del plan en sí, sino de la cantidad de llamadas a Argus (OpenAI) que genera. Con un modelo económico y contexto acotado por request (snapshot diario, nunca historial completo), el costo estimado de IA por usuario activo ronda fracciones de centavo por insight.

Esta cifra es una referencia de diseño, no una cotización: antes de fijar el pricing público conviene validarla con una prueba de carga real y el pricing vigente del proveedor de IA en ese momento.

---

# Fuera de Alcance (por ahora)

- Precios anuales / descuentos por prepago.
- Planes de equipo o grupales (dependen de la sincronización grupal, prevista para versiones futuras).
- Trial pago-a-pago o períodos de prueba de planes pagos.

---

# Decisions

## Decision 001

Synchronization y Challenge Engine básico nunca estarán detrás de un paywall.

---

## Decision 002

La diferenciación entre planes se basa en profundidad de Argus, cantidad de objetivos/hábitos e integraciones — nunca en la posibilidad de sincronizarse.

---

## Decision 003

El pricing público se validará contra el costo real de IA medido en producción antes de su lanzamiento definitivo.
