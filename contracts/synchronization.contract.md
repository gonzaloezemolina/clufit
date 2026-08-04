---
title: Synchronization Contract
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-03
depends_on:
  - profile.contract.md
  - notifications.contract.md
used_by:
  - Mobile
  - Backend
  - Argus
---

# Synchronization Contract

# Objetivo

El Sistema de Sincronización permite conectar dos usuarios dentro de Clufit para compartir información, colaborar y participar en experiencias conjuntas.

La sincronización no reemplaza la experiencia individual del usuario. Es una capa adicional que habilita funcionalidades colaborativas.

---

# Definición

Una sincronización representa una relación de confianza entre dos usuarios.

A partir de ella se habilitan permisos, retos, objetivos compartidos y análisis realizados por Argus.

---

# Requisitos

Para crear una sincronización:

- Ambos usuarios deben poseer una cuenta.
- Ambos usuarios deben aceptar la vinculación.
- Un usuario solamente podrá mantener una sincronización activa a la vez (Phase 1).

---

# Estados

## Pending

La invitación fue enviada.

El usuario aún no respondió.

---

## Accepted

La sincronización fue aceptada.

Todas las funcionalidades colaborativas quedan habilitadas.

---

## Rejected

La invitación fue rechazada.

No se comparte información.

---

## Cancelled

Uno de los usuarios eliminó la sincronización.

Toda la información compartida deja de mostrarse.

Los datos individuales nunca se eliminan.

---

# Información Compartida

La sincronización permite compartir únicamente la información autorizada.

## Dashboard

- Overall Score
- Estado del día
- Próximos eventos

---

## Fitness

- Entrenó hoy
- Rutina realizada
- Historial de entrenamientos
- Copiar rutina
- Comentarios (Phase 3)

---

## Recuperación

- Estado general
- Energía
- Sueño
- Agua

---

## Objetivos

- Objetivos compartidos
- Progreso

---

## Disciplina

- Rachas
- Hábitos completados
- Consistencia

---

## Argus

Argus podrá analizar el progreso conjunto.

Ejemplos:

- "Gonza lleva tres entrenamientos más que vos."
- "Ambos mantienen una racha de 15 días."
- "Hace cuatro días que ninguno completa su objetivo de hidratación."

Argus únicamente genera recomendaciones.

Nunca modifica información.

---

# Permisos

La sincronización habilita:

- Ver progreso del compañero.
- Ver entrenamiento del día.
- Compartir objetivos.
- Copiar rutinas.
- Crear retos.
- Recibir retos.
- Desbloquear logros conjuntos.

---

# Restricciones

La sincronización NO permite:

- Modificar datos personales del compañero.
- Modificar hábitos del compañero.
- Modificar objetivos individuales.
- Modificar rutinas sin autorización.

Toda acción que afecte al otro usuario requerirá confirmación.

---

# Eventos

El sistema genera eventos cuando:

- Se envía una invitación.
- Se acepta.
- Se rechaza.
- Se elimina.
- Se completa un reto.
- Se desbloquea un logro compartido.

Estos eventos podrán generar notificaciones e insights de Argus.

---

# Integración con Otros Sistemas

## Dashboard

Muestra un resumen del compañero.

---

## Objetivos

Permite objetivos compartidos.

---

## Fitness

Permite compartir entrenamientos y copiar rutinas.

---

## Challenge Engine

Todos los retos requieren una sincronización activa.

---

## Notifications

Genera notificaciones relacionadas con la actividad del compañero.

---

## Argus

Analiza el progreso individual y conjunto para generar recomendaciones.

---

# Reglas

- La sincronización nunca modifica información histórica.
- Puede eliminarse en cualquier momento.
- La eliminación no afecta datos personales.
- Todas las acciones quedan registradas.

---

# Futuras Versiones

Phase 2

- Objetivos compartidos avanzados.
- Comentarios sobre entrenamientos.
- Rutinas colaborativas.

Phase 3

- Sincronización grupal.
- Equipos.
- Rankings privados.
- Retos de múltiples participantes.

---

# Decisions

## Decision 001

La sincronización es el principal diferencial de Clufit.

---

## Decision 002

Toda sincronización requiere aceptación explícita de ambos usuarios.

---

## Decision 003

Un usuario solo podrá tener una sincronización activa durante la Phase 1.

---

## Decision 004

La sincronización habilita funcionalidades colaborativas, pero nunca modifica los datos individuales de cada usuario.

---

## Decision 005

Todo reto requiere una sincronización activa entre sus participantes.