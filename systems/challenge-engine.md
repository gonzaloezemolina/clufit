---
title: Sistema Challenge Engine
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - synchronization.md
  - ../contracts/synchronization.contract.md
  - ../contracts/argus.contract.md
  - ../contracts/notifications.contract.md
used_by:
  - Product
  - Design
  - Engineering
  - AI
---

# Challenge Engine

# Objetivo

El Challenge Engine es el sistema que convierte el progreso compartido en un juego con reglas claras: retos y apuestas entre dos usuarios sincronizados.

Todo reto requiere una sincronización activa entre sus participantes (ver [`contracts/synchronization.contract.md`](../contracts/synchronization.contract.md)).

---

# Filosofía

La competencia debe motivar, nunca avergonzar. Los retos existen para generar compromiso entre dos personas, no para que una se sienta mal frente a la otra.

---

# Flujo General

1. Un usuario crea un reto y define sus condiciones.
2. El compañero recibe una notificación con la invitación al reto.
3. El compañero ingresa a la app, revisa las condiciones y decide aceptar o rechazar.
4. Si acepta, el reto queda activo y ambos ven su progreso en tiempo real.
5. Al finalizar el plazo, el Challenge Engine determina el resultado y notifica a ambos.

---

# Anatomía de un Reto

Un reto incluye:

- Título y descripción.
- Tipo de reto (ver Challenge Types).
- Meta a alcanzar.
- Fecha de inicio y fecha de fin.
- Recompensa (opcional).
- Castigo (opcional).
- Participantes y su progreso individual.

---

# Challenge Types (ejemplos)

- 10.000 pasos diarios.
- Cantidad de entrenamientos en un período.
- Litros de agua.
- Horas de sueño.
- Minutos de cardio.
- Peso total levantado.
- Días sin procrastinar (tiempo en redes por debajo de un umbral).

Estos tipos se apoyan directamente en los datos que ya registran Fitness, Recuperación, Nutrición y Productividad — el usuario nunca carga información adicional solo para el reto.

---

# Estados de un Reto

- **Pendiente** — invitación enviada, esperando respuesta.
- **Activo** — aceptado, en curso.
- **Rechazado** — el invitado no aceptó.
- **Finalizado** — el plazo terminó y existe un resultado.
- **Cancelado** — uno de los participantes lo canceló antes de finalizar.

---

# Argus (Challenge Intelligence)

Argus podrá:

- Detectar abandono o riesgo de perder el reto.
- Detectar ventajas claras de un participante sobre otro.
- Detectar empates ajustados cerca del final.
- Sugerir nuevos retos según el historial y los objetivos de ambos usuarios.

Argus nunca crea, acepta ni finaliza un reto automáticamente.

---

# Notificaciones

El Challenge Engine origina notificaciones de:

- Nueva invitación a un reto.
- Reto aceptado o rechazado.
- Progreso destacado (por ejemplo, el compañero tomó ventaja).
- Reto próximo a vencer.
- Resultado final del reto.

---

# Restricciones

- Todo reto requiere sincronización activa entre sus participantes.
- Un reto nunca se acepta ni se rechaza automáticamente; requiere una acción explícita del invitado.
- El Challenge Engine nunca modifica datos de otros módulos: solo lee el progreso ya registrado en ellos.

---

# Futuras Versiones

## Phase 2

- Recompensas y castigos personalizados.
- Historial de retos ganados/perdidos por usuario.

## Phase 3

- Retos grupales y de equipo.
- Rankings privados entre múltiples compañeros.
- Retos sugeridos automáticamente por Argus según el Objetivo Principal.
