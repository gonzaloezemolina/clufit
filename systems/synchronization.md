---
title: Sistema Synchronization
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - ../contracts/synchronization.contract.md
used_by:
  - Product
  - Design
  - Engineering
  - AI
---

# Synchronization

# Qué es

El Sistema de Sincronización conecta a dos usuarios de Clufit para que progresen juntos: entrenan, cumplen hábitos y alcanzan objetivos con visibilidad y compromiso mutuo.

Es el diferencial principal de Clufit. No es un módulo más — es una capa transversal que puede activarse dentro de Dashboard, Objetivos, Fitness, Disciplina, Challenge Engine, Notifications y Argus.

Las reglas técnicas completas viven en [`contracts/synchronization.contract.md`](../contracts/synchronization.contract.md).

---

# Por qué existe

La premisa de Clufit es que la constancia aumenta cuando existe compromiso compartido. La mayoría de las apps de salud y productividad están pensadas para un único usuario; Clufit está pensada para dos.

---

# Cómo funciona (resumen)

1. Un usuario envía una invitación de sincronización a otro.
2. El otro usuario la acepta o la rechaza.
3. Una vez aceptada, se habilitan funcionalidades colaborativas: dashboard compartido, retos, objetivos conjuntos, comparación de rachas.
4. Cualquiera de los dos puede cancelar la sincronización en cualquier momento, sin perder su historial individual.

---

# Qué habilita

- Ver el estado y progreso del compañero (según lo que este haya autorizado en Perfil).
- Crear y recibir retos mediante el Challenge Engine.
- Compartir objetivos y compararlos.
- Copiar rutinas de Fitness.
- Insights comparativos generados por Argus.

---

# Qué nunca hace

- Modificar datos personales o registros del compañero.
- Compartir información que el usuario no haya autorizado explícitamente.
- Reemplazar la experiencia individual: todo módulo sigue funcionando igual sin sincronización activa.

---

# Límite en Phase 1

Un usuario solo puede mantener una sincronización activa a la vez. La sincronización grupal (equipos, rankings) queda para versiones futuras.
