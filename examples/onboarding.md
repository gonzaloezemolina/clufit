---
title: Ejemplo — Onboarding
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - ../docs/03-product-specification.md
  - ../modules/perfil.md
  - ../modules/objetivos.md
  - ../systems/synchronization.md
used_by:
  - Product
  - Design
---

# Ejemplo: Onboarding

# Nota

Este documento ilustra el flujo conceptual de onboarding descrito en `docs/03-product-specification.md` (Flujo General). No reemplaza el customer journey detallado ni el diseño en Figma, que se definen por fuera de esta documentación.

---

# Paso a paso

## 1. Bienvenida

El usuario abre Clufit por primera vez.

> "Clufit te ayuda a progresar. Solo o junto a alguien que te importa."

Se presenta brevemente el diferencial: progreso compartido, hábitos, entrenamiento y una IA que acompaña — nunca decide por vos.

---

## 2. Registro

Email o Apple Sign In. Datos mínimos: nombre, fecha de nacimiento, género.

---

## 3. Configuración Física

Altura, peso, peso objetivo, nivel de actividad. Estos datos alimentan `modules/perfil.md` y las recomendaciones iniciales de Fitness y Recuperación.

---

## 4. Elegir Objetivo Principal

> "¿Qué es lo más importante para vos en esta etapa?"

El usuario crea su primer objetivo (por ejemplo, "Bajar 8 kg") y este queda marcado automáticamente como Objetivo Principal (ver `modules/objetivos.md`).

---

## 5. Conectar Integraciones (opcional)

> "¿Querés conectar Apple Health? Así Clufit registra automáticamente tus entrenamientos y tu sueño."

El usuario puede omitir este paso y conectarlo después desde `modules/integraciones.md`.

---

## 6. Invitar a un Compañero (opcional)

> "Clufit funciona mejor cuando progresás con alguien. ¿Querés invitar a tu pareja, amigo o compañero de entrenamiento?"

Si el usuario acepta, se envía una invitación de sincronización (ver `examples/synchronization.md`). Si la omite, la experiencia individual queda completamente habilitada y podrá invitar a alguien en cualquier momento posterior.

---

## 7. Primer Dashboard

El usuario llega a su Dashboard con:

- Su Objetivo Principal recién creado.
- Un mensaje de bienvenida de Argus explicando que empezará a generar recomendaciones a medida que haya actividad registrada.
- Un estado vacío claro para cada módulo, invitando a la primera acción (por ejemplo, "Creá tu primera rutina").

---

# Principios aplicados en este flujo

- Automatización antes que preguntas (integraciones opcionales, no obligatorias).
- Un solo Objetivo Principal desde el primer momento.
- La sincronización se ofrece, nunca se impone.
- El usuario puede completar el onboarding sin compañero y sumar uno después sin fricción.
