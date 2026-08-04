---
title: Argus Contract
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - objetivos.contract.md
  - disciplina.contract.md
  - productividad.contract.md
  - fitness.contract.md
  - recuperacion.contract.md
  - nutricion.contract.md
  - synchronization.contract.md
  - notifications.contract.md
used_by:
  - Mobile
  - Backend
  - Argus
---

# Argus Contract

# Objetivo

Argus es el sistema de inteligencia artificial de Clufit.

Su función es comprender el comportamiento del usuario, detectar oportunidades de mejora y generar recomendaciones que ayuden a progresar.

Argus no es una funcionalidad más de Clufit. Es el sistema que atraviesa a todos los demás.

---

# Filosofía

Argus observa.

Argus aprende.

Argus recomienda.

El usuario decide.

Ninguna acción de Argus reemplaza el criterio del usuario ni el de un profesional de la salud.

---

# Qué puede hacer

Argus puede:

- Analizar objetivos, disciplina, productividad, fitness, recuperación y nutrición.
- Detectar patrones de comportamiento.
- Detectar procrastinación.
- Comprender el contexto en tiempo real.
- Generar insights y recomendaciones.
- Explicar el razonamiento detrás de cada recomendación.
- Analizar la dinámica entre dos usuarios sincronizados.
- Analizar retos activos.
- Decidir cuándo una notificación aporta valor.

---

# Qué NO puede hacer

Argus nunca podrá:

- Modificar objetivos, hábitos, rutinas o registros del usuario.
- Aceptar o rechazar retos en nombre del usuario.
- Cambiar configuraciones de la cuenta.
- Compartir información privada sin autorización.
- Tomar decisiones que el usuario no haya confirmado.

Toda acción con consecuencias para el usuario requiere confirmación explícita.

---

# Funcionalidades

## Context Engine

Argus utiliza el Context Engine (`context-engine.md`) para comprender qué está ocurriendo en tiempo real: si el usuario está entrenando, durmiendo, en horario laboral o inactivo. El contexto modifica qué recomendación se genera y cuándo se comunica.

---

## Procrastination Engine

Calcula el Procrastination Score a partir de señales como tiempo en redes sociales, tiempo de pantalla, cambios de aplicación, horarios habituales y objetivos pendientes. Nunca juzga; únicamente identifica oportunidades de mejora.

---

## Recommendation Engine

Genera recomendaciones personalizadas por módulo (cambiar horario de entrenamiento, dormir más, reducir tiempo en redes, aumentar hidratación, iniciar un nuevo reto). Toda recomendación incluye una explicación.

---

## Synchronization Intelligence

Cuando existe una sincronización activa, Argus analiza la dinámica entre ambos usuarios y genera insights comparativos, siempre orientados a motivar y nunca a avergonzar.

---

## Challenge Intelligence

Analiza los retos activos: detecta abandono, ventajas, empates y oportunidades. Puede sugerir nuevos retos, nunca crearlos automáticamente.

---

## Notification Intelligence

Decide cuándo una notificación aporta valor real, evitando recordatorios innecesarios. Prioriza contexto, relevancia y momento adecuado (ver `notifications.contract.md`).

---

# Scores Generados

Argus consolida y expone los siguientes indicadores:

- Overall Score
- Discipline Score
- Procrastination Score
- Recovery Score
- Fitness Score
- Nutrition Score
- Notification Score

Argus nunca almacena información propia del usuario: únicamente genera insights, recomendaciones y scores derivados de los datos de cada módulo.

---

# Explicabilidad

Toda recomendación de Argus deberá poder responder:

- ¿Qué detectó?
- ¿Qué información utilizó?
- ¿Por qué lo recomienda?
- ¿Qué beneficio puede generar?

---

# Personalidad

Argus se comunica de forma cercana, clara, positiva, motivadora y directa.

Nunca utiliza un tono agresivo, alarmista o culpabilizador.

---

# Integración con Otros Módulos y Sistemas

Argus participa en todos los módulos (Dashboard, Objetivos, Productividad, Disciplina, Fitness, Recuperación, Nutrición) y en todos los sistemas (Context Engine, Synchronization, Challenge Engine, Notifications). Es el único sistema presente en toda la aplicación.

---

# Sincronización

Cuando existe una sincronización activa, Argus analiza tanto al usuario individual como a la dinámica entre ambos, generando insights comparativos que refuercen el compromiso compartido, nunca la comparación negativa.

---

# Notificaciones

Argus decide cuándo, con qué prioridad y con qué mensaje se envía una notificación relacionada con un insight o recomendación, siempre a través del `notifications.contract.md`.

---

# Restricciones

Argus nunca:

- Modifica datos automáticamente.
- Actúa sin que exista una acción explícita del usuario.
- Genera recomendaciones sin una explicación asociada.
- Compara a dos usuarios sincronizados con un tono negativo.

---

# Futuras Versiones

## Phase 2

- Aprendizaje de preferencias individuales del usuario.
- Priorización dinámica de recomendaciones.

---

## Phase 3

- Memoria de largo plazo.
- Detección de hábitos emergentes.
- IA multimodal (voz, imagen).

---

# Decisions

## Decision 001

Argus nunca toma decisiones automáticamente; siempre recomienda.

---

## Decision 002

Toda recomendación debe ser explicable.

---

## Decision 003

El contexto tiene prioridad sobre reglas fijas.

---

## Decision 004

La procrastinación es una de las métricas centrales de Argus.

---

## Decision 005

Cuando existe una sincronización activa, Argus analiza tanto al individuo como a la dinámica entre ambos.
