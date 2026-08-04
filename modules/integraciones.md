---
title: Módulo Integraciones
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - ../docs/05-technical-architecture.md
used_by:
  - Product
  - Design
  - Engineering
---

# Integraciones

# Objetivo

El módulo Integraciones conecta Clufit con fuentes externas de datos de salud y actividad, para que la aplicación registre automáticamente lo que ya puede obtenerse sin pedírselo al usuario.

Es la implementación directa del principio: **toda información que pueda obtenerse automáticamente no debe pedirse manualmente**.

---

# Descripción General

Cada integración es una conexión independiente que el usuario activa o desactiva desde su Perfil. Ninguna integración es obligatoria para usar Clufit.

---

# Integraciones Soportadas (MVP)

## Apple Health

Fuente principal de datos: pasos, sueño, frecuencia cardíaca, entrenamientos registrados por otras apps.

## Apple Watch

Entrenamientos en vivo, frecuencia cardíaca durante la sesión, calorías.

---

# Pantalla de Integraciones

Listado de servicios disponibles, cada uno con:

- Estado (conectado / desconectado).
- Última sincronización.
- Qué datos aporta y a qué módulos alimenta.
- Acción de conectar / desconectar.

---

# Flujo de Conexión

1. Usuario selecciona una integración.
2. Se solicita autorización nativa del sistema operativo (permisos de HealthKit).
3. Clufit confirma la conexión y realiza la primera sincronización.
4. Los módulos correspondientes (Fitness, Recuperación, Nutrición) comienzan a recibir datos automáticamente.

---

# Interacción con Argus

Los datos de integraciones enriquecen el análisis de Argus (por ejemplo, sueño real desde Apple Health en lugar de solo el check-in manual de Recuperación), pero nunca son la única fuente: el usuario siempre puede operar sin ninguna integración conectada.

---

# Restricciones

- Desconectar una integración no elimina el historial ya sincronizado.
- Ninguna integración puede escribir datos hacia el dispositivo externo; el flujo es siempre de lectura hacia Clufit.

---

# Futuras Versiones

## Phase 2

- MyFitnessPal
- Cronometer

## Phase 3

- Garmin
- Fitbit
- WHOOP
- Strava
- Oura
