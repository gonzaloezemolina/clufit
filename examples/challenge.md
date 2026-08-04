---
title: Ejemplo — Challenge
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - ../systems/challenge-engine.md
  - ../contracts/synchronization.contract.md
used_by:
  - Product
  - Design
---

# Ejemplo: Challenge

# Escenario

Vale y Gonza están sincronizados hace un mes. Argus sugirió crear un reto tras detectar que ambos entrenaron con frecuencia esa semana.

---

## 1. Crear el reto

Vale abre "Crear Reto" desde el Dashboard compartido y configura:

- **Tipo:** Cantidad de entrenamientos.
- **Meta:** 5 entrenamientos cada uno.
- **Plazo:** 7 días.
- **Apuesta:** quien pierda paga el almuerzo.

---

## 2. Gonza recibe la invitación

> 🔔 "Vale te desafió: 5 entrenamientos en 7 días. Quien pierda paga el almuerzo."

Gonza abre la app, revisa las condiciones (meta, plazo, apuesta) y decide.

---

## 3. Aceptación

Gonza acepta. Estado del reto: **Activo**.

> 🔔 "¡Reto en marcha! Vale vs. Gonza — 5 entrenamientos en 7 días."

---

## 4. Progreso en tiempo real

Cada entrenamiento registrado en Fitness actualiza el progreso del reto automáticamente. Ninguno de los dos carga información extra: el Challenge Engine solo lee lo que Fitness ya registró.

Día 4:

- Vale: 3/5
- Gonza: 4/5

---

## 5. Insight de Argus a mitad de camino

> 🤖 "Gonza te lleva ventaja en el reto. Todavía tenés 3 días para alcanzarlo."

El mensaje es informativo y motivador, nunca comparativo en tono negativo.

---

## 6. Cierre del reto

Día 7, 23:59: el Challenge Engine evalúa el resultado.

- Vale: 5/5 — completó la meta.
- Gonza: 4/5 — no llegó.

> 🔔 "¡Vale ganó el reto! Gonza, te toca invitar el almuerzo."

Ambos ven el resultado reflejado en su historial de retos.

---

# Variante: Reto rechazado

Si Gonza hubiese rechazado la invitación, el reto pasa a estado **Rechazado**, no se genera ningún progreso ni notificación adicional, y Vale recibe un aviso simple del rechazo.

---

# Principios aplicados en este ejemplo

- Todo reto requiere sincronización activa.
- El progreso se calcula a partir de datos ya existentes en otros módulos, nunca de registros manuales adicionales.
- La aceptación o el rechazo siempre son una acción explícita del invitado.
- Argus puede sugerir e informar, pero nunca decide el resultado ni fuerza la aceptación.
