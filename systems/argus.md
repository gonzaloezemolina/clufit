---
title: Sistema Argus
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - ../docs/04-ai-blueprint.md
  - ../contracts/argus.contract.md
used_by:
  - Product
  - Design
  - Engineering
  - AI
---

# Argus

# Qué es

Argus es el cerebro de Clufit: el sistema de inteligencia artificial que observa el comportamiento del usuario, detecta patrones y genera recomendaciones para ayudarlo a progresar.

Es el único sistema presente en toda la aplicación — participa en cada módulo y en cada sistema transversal.

La visión completa de su funcionamiento vive en [`docs/04-ai-blueprint.md`](../docs/04-ai-blueprint.md); las reglas técnicas y de integración viven en [`contracts/argus.contract.md`](../contracts/argus.contract.md).

---

# Por qué existe

Clufit no quiere ser una app que solo muestra datos. Quiere ser una app que ayuda a actuar sobre esos datos. Argus es el mecanismo que convierte el registro pasivo (entrenamientos, comidas, hábitos, sueño) en recomendaciones activas.

---

# Cómo se manifiesta en el producto

- **Insight del día** en el Dashboard.
- **Próximo paso sugerido** dentro de cada objetivo.
- **Recomendaciones contextuales** en Fitness, Recuperación, Nutrición, Productividad y Disciplina.
- **Insights comparativos** cuando hay una sincronización activa.
- **Decisión silenciosa** de qué notificaciones enviar y cuándo.

---

# Motores internos

- Context Engine — comprende qué está pasando ahora.
- Procrastination Engine — calcula el Índice de Procrastinación.
- Recommendation Engine — genera recomendaciones explicables.
- Synchronization Intelligence — analiza la dinámica entre compañeros.
- Challenge Intelligence — analiza retos activos.
- Notification Intelligence — decide cuándo notificar.

Cada uno se detalla en `contracts/argus.contract.md`.

---

# Límite fundamental

Argus analiza, detecta, recomienda y explica. Nunca modifica datos, nunca decide por el usuario y nunca actúa sin confirmación explícita.
