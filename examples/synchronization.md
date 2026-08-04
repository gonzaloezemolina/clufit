---
title: Ejemplo — Synchronization
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - ../contracts/synchronization.contract.md
  - ../systems/synchronization.md
used_by:
  - Product
  - Design
---

# Ejemplo: Synchronization

# Escenario

Vale usa Clufit hace dos semanas. Quiere invitar a Gonza, su compañero de entrenamiento, para progresar juntos.

---

## 1. Enviar la invitación

Desde `modules/perfil.md`, Vale busca a Gonza por su usuario y envía la invitación de sincronización.

Estado: **Pending**.

---

## 2. Gonza recibe la notificación

> 🔔 "Vale te invitó a sincronizar su progreso en Clufit."

Gonza abre la app y ve la invitación con lo que implica aceptarla: qué información podrá ver de Vale (Overall Score, entrenamientos, rachas) y qué podrá compartir de sí mismo.

---

## 3. Gonza acepta

Estado: **Accepted**.

Ambos reciben una confirmación:

> 🔔 "¡Listo! Ahora Vale y vos progresan juntos en Clufit."

---

## 4. El Dashboard cambia

El Dashboard de ambos incorpora la sección "Tu compañero":

> "Gonza entrenó hoy. Lleva una racha de 4 días."

Ningún dato individual de Vale se oculta ni se reemplaza — la sección es un agregado, no un reemplazo.

---

## 5. Primer insight comparativo de Argus

Después de unos días de actividad conjunta:

> 🤖 "Ambos entrenaron 3 veces esta semana. Es un buen momento para crear un reto juntos."

Este insight enlaza directamente a la creación de un reto (ver `examples/challenge.md`).

---

## 6. Vale decide cancelar la sincronización (variante)

Meses después, Vale desactiva la sincronización desde Perfil.

- El estado pasa a **Cancelled**.
- El Dashboard de ambos deja de mostrar la sección del compañero.
- El historial individual de cada uno permanece intacto.
- Cualquiera de los dos puede volver a sincronizarse en el futuro, con el otro o con alguien distinto.

---

# Principios aplicados en este ejemplo

- La sincronización requiere aceptación explícita de ambas partes.
- Nunca reemplaza la experiencia individual, solo la complementa.
- Puede cancelarse sin pérdida de datos históricos.
- Argus utiliza la sincronización para generar valor conjunto, no comparaciones negativas.
