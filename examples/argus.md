---
title: Ejemplo — Argus
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - ../contracts/argus.contract.md
  - ../systems/argus.md
used_by:
  - Product
  - Design
  - AI
---

# Ejemplo: Argus

# Escenario

Ilustra el razonamiento completo de Argus al generar una recomendación, desde los datos crudos hasta la explicación entregada al usuario.

---

## 1. Datos disponibles

Durante la última semana:

- Fitness: 4 entrenamientos (habitual: 5).
- Recuperación: promedio de sueño 5.5 horas (habitual: 7).
- Productividad: aumento del 25% en tiempo de redes sociales por la mañana.
- Nutrición: 2 comidas omitidas, ambas después de las 22:00.

---

## 2. Contexto (Context Engine)

- El usuario suele entrenar por la mañana.
- Esta semana, la mayoría de sus entrenamientos fueron a la noche.
- No hay sincronización activa esta semana con actividad conjunta relevante.

---

## 3. Detección

Argus identifica una correlación: cuando el sueño baja de 6 horas, el usuario entrena menos, procrastina más por la mañana y omite comidas nocturnas.

---

## 4. Recomendación generada

> 🤖 "Esta semana dormiste menos de lo habitual y eso vino acompañado de menos entrenamientos y más tiempo en redes por la mañana. Priorizar el sueño esta noche podría ayudarte a recuperar tu ritmo."

---

## 5. Explicabilidad

Si el usuario toca "¿Por qué me recomendás esto?", Argus expone:

- **Qué detectó:** caída en horas de sueño y su correlación con entrenamiento y procrastinación.
- **Qué información utilizó:** Recovery Score, historial de Fitness, tiempo de pantalla de Productividad.
- **Por qué lo recomienda:** el patrón se repitió los últimos 4 días.
- **Qué beneficio puede generar:** recuperar la frecuencia de entrenamiento y reducir la procrastinación matutina.

---

## 6. Acción del usuario

El usuario puede:

- Aceptar el consejo (sin ninguna acción requerida en la app; es solo informativo).
- Ignorarlo.
- Ajustar su check-in de Recuperación esa misma noche.

Argus nunca modifica la rutina de Fitness ni el plan de Nutrición por su cuenta: solo informa y explica.

---

# Principios aplicados en este ejemplo

- Argus cruza información de múltiples módulos para generar un insight con contexto, no una alerta aislada.
- Toda recomendación es explicable bajo demanda.
- La decisión final —descansar más, entrenar igual, ignorar el insight— siempre es del usuario.
