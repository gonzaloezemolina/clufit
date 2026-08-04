---
title: Módulo Perfil
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - ../docs/06-database-design.md
used_by:
  - Product
  - Design
  - Engineering
---

# Perfil

# Objetivo

El módulo Perfil concentra la información personal del usuario, sus configuraciones, su privacidad y su suscripción. No forma parte del progreso diario; existe para que el resto de la aplicación funcione correctamente.

---

# Descripción General

A diferencia de los módulos de progreso (Fitness, Nutrición, Recuperación, Productividad, Disciplina, Objetivos), Perfil no genera Score ni recibe insights de Argus sobre sí mismo. Es la capa de configuración de toda la experiencia.

---

# Secciones

## Información Personal

Nombre, usuario, email, fecha de nacimiento, género, avatar, zona horaria.

## Datos Físicos

Altura, peso, peso objetivo, nivel de actividad, nivel de entrenamiento — utilizados por Fitness y Recuperación para personalizar cálculos y recomendaciones.

## Notificaciones

Preferencias de notificación por módulo y horarios de silencio (ver `systems/notifications.md`).

## Privacidad y Sincronización

Qué información específica se comparte con el compañero cuando existe una sincronización activa. Cada categoría (Fitness, Recuperación, Nutrición, Disciplina, Productividad) puede activarse o desactivarse de forma independiente.

## Suscripción

Plan actual (Free, Starter, Pro), gestión de pago mediante Lemon Squeezy, cambio e cancelación de plan.

## Integraciones

Acceso directo a `modules/integraciones.md`.

---

# Interacción con Argus

Argus no opera directamente sobre Perfil, pero consume los datos físicos y las preferencias de privacidad para ajustar cómo analiza y qué comparte en la sincronización.

---

# Restricciones

- El usuario mantiene control total sobre qué comparte con su compañero en todo momento.
- Ningún dato personal se comparte por defecto: toda categoría de sincronización requiere activación explícita.
- Eliminar la cuenta elimina también la sincronización activa, sin afectar los datos históricos del compañero.

---

# Fuera de Alcance (MVP)

- Múltiples perfiles físicos (por ejemplo, distintos objetivos corporales en paralelo).
- Exportación de datos personales.
