---
title: Nutrition Contract
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-03
depends_on:
  - recovery.contract.md
  - notifications.contract.md
  - argus.contract.md
used_by:
  - Mobile
  - Backend
  - Argus
---

# Nutrition Contract

# Objetivo

El módulo Nutrición tiene como objetivo ayudar al usuario a construir consistencia alimenticia.

Clufit no busca controlar qué alimentos consume una persona ni realizar un seguimiento exhaustivo de calorías o macronutrientes.

Su propósito es responder una única pregunta:

**¿Estás cumpliendo el plan alimenticio que vos mismo decidiste seguir?**

---

# Filosofía

La nutrición es un hábito.

Clufit mide la consistencia con la que el usuario cumple sus comidas planificadas.

Mientras menor sea la fricción para registrar una comida, mayor será la probabilidad de generar adherencia a largo plazo.

Argus utilizará esta información para detectar patrones y generar recomendaciones, nunca para reemplazar el criterio del usuario o de un profesional.

---

# Funcionalidades

## Plan Alimenticio

El usuario podrá definir:

- Cantidad de comidas diarias.
- Nombre de cada comida.
- Horarios aproximados.
- Objetivo diario de hidratación.

Clufit no necesita conocer el contenido de cada comida para cumplir su objetivo durante la Phase 1.

---

## Cumplimiento

Cada comida tendrá únicamente tres estados posibles:

- ✅ Cumplida
- ⏳ Pendiente
- ❌ No cumplida

Opcionalmente el usuario podrá agregar una observación.

En futuras versiones podrá adjuntar una fotografía.

---

## Hidratación

El usuario podrá configurar:

- Objetivo diario.
- Cantidad consumida.
- Horarios de recordatorio.

El progreso será visible durante todo el día.

---

## Calendario

El calendario permitirá visualizar:

- Días cumplidos.
- Días incompletos.
- Consistencia semanal.
- Consistencia mensual.
- Rachas.

---

## Estadísticas

El sistema calculará automáticamente:

- Porcentaje de cumplimiento.
- Consistencia semanal.
- Consistencia mensual.
- Racha nutricional.
- Comidas más omitidas.
- Horarios más consistentes.

---

# Argus

Argus analizará la consistencia nutricional del usuario.

Podrá detectar:

- Falta de hidratación.
- Horarios irregulares.
- Comidas omitidas con frecuencia.
- Relación entre nutrición y entrenamiento.
- Relación entre nutrición y recuperación.

Ejemplos de Insights:

- "Hace siete días que cumplís todas tus comidas."
- "Los viernes suele bajar tu consistencia."
- "Cuando entrenás por la mañana cumplís mejor con tu alimentación."
- "Tu hidratación mejoró un 20% respecto al mes pasado."

Argus únicamente sugerirá mejoras.

Nunca modificará objetivos ni registros automáticamente.

---

# Integraciones

El módulo podrá utilizar información proveniente de:

- Apple Health

Las integraciones servirán para enriquecer el análisis de Argus.

---

# Sincronización

Cuando exista una sincronización activa, el usuario podrá compartir:

- Estado de cumplimiento del día.
- Objetivo de hidratación.
- Rachas.
- Consistencia nutricional.

Nunca se compartirá el detalle de las comidas, salvo que el usuario lo autorice en futuras versiones.

---

# Notificaciones

El sistema podrá generar:

- Recordatorio de comidas.
- Recordatorio de hidratación.
- Objetivo diario cumplido.
- Objetivo diario pendiente.
- Insights generados por Argus.

La frecuencia será administrada mediante el Notification Score.

---

# Restricciones

El módulo nunca:

- Contará calorías.
- Contará macronutrientes.
- Generará planes alimenticios automáticamente.
- Modificará registros del usuario.

Toda modificación requerirá intervención del usuario.

---

# Futuras Versiones

## Phase 2

- Registro mediante fotografías.
- Reconocimiento de alimentos mediante IA.
- Integración con aplicaciones de nutrición.

---

## Phase 3

- Recomendaciones nutricionales personalizadas.
- Objetivos compartidos de hidratación.
- Relación entre alimentación, entrenamiento y recuperación.

---

# Decisions

## Decision 001

Clufit mide consistencia nutricional, no calorías.

---

## Decision 002

El registro de una comida deberá completarse en pocos segundos.

---

## Decision 003

Argus analizará patrones de adherencia nutricional y generará recomendaciones, pero nunca modificará información automáticamente.

---

## Decision 004

La hidratación será el principal indicador cuantitativo del módulo durante la Phase 1.

---

## Decision 005

El objetivo del módulo es ayudar al usuario a sostener hábitos alimenticios, no reemplazar herramientas especializadas de nutrición.