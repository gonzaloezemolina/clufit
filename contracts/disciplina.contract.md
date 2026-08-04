---
title: Discipline Contract
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-04
depends_on:
  - objetivos.contract.md
  - notifications.contract.md
  - argus.contract.md
used_by:
  - Mobile
  - Backend
  - Argus
---

# Discipline Contract

# Objetivo

El módulo Disciplina tiene como objetivo ayudar al usuario a construir y sostener hábitos.

Clufit no busca acumular hábitos ilimitados ni convertirse en un tracker exhaustivo de rutinas diarias.

Su propósito es responder una única pregunta:

**¿Estás cumpliendo lo que dijiste que ibas a hacer?**

---

# Filosofía

La disciplina se construye con consistencia, no con intensidad puntual.

Clufit mide rachas y cumplimiento, no cantidad de hábitos.

Cuantos menos hábitos activos y más consistentes, mejor resultado genera el módulo.

Argus utiliza esta información para detectar riesgo de abandono, nunca para presionar al usuario.

---

# Funcionalidades

## Hábitos

El usuario podrá:

- Crear hábitos.
- Editarlos.
- Pausarlos.
- Archivarlos.
- Eliminarlos.

Cada hábito podrá incluir:

- Nombre.
- Frecuencia (diaria, semanal, días específicos).
- Horario de recordatorio.
- Objetivo o categoría asociada.

---

## Cumplimiento

Cada día, cada hábito activo tendrá únicamente tres estados posibles:

- ✅ Cumplido
- ⏳ Pendiente
- ❌ No cumplido

El registro debe poder completarse en un solo toque.

---

## Rachas

Clufit calculará automáticamente:

- Racha actual.
- Racha más larga.
- Consistencia semanal.
- Consistencia mensual.

Una racha se rompe únicamente cuando el hábito no se cumple en el día correspondiente a su frecuencia.

---

## Calendario

El calendario permitirá visualizar:

- Días cumplidos.
- Días incompletos.
- Rachas activas.
- Consistencia histórica.

---

## Estadísticas

El sistema calculará automáticamente:

- Discipline Score.
- Porcentaje de cumplimiento general.
- Hábitos más y menos consistentes.
- Evolución semanal y mensual.

---

# Argus

Argus analizará continuamente la consistencia de los hábitos del usuario.

Podrá detectar:

- Riesgo de pérdida de racha.
- Hábitos abandonados.
- Mejoras sostenidas en el tiempo.
- Relación entre disciplina y progreso de los objetivos.

Ejemplos de Insights:

- "Estás a un día de tu racha más larga."
- "Hace cuatro días que no cumplís este hábito."
- "Tu consistencia mejoró un 15% este mes."
- "Los hábitos que cumplís por la mañana tienen mejor racha."

Argus únicamente sugerirá mejoras.

Nunca creará, modificará ni eliminará hábitos automáticamente.

---

# Sincronización

Cuando exista una sincronización activa, el usuario podrá compartir:

- Hábitos y rachas.
- Consistencia semanal y mensual.
- Discipline Score.

Ambos usuarios podrán crear hábitos compartidos, donde la racha depende del cumplimiento de ambos.

Argus podrá generar insights comparativos.

Ejemplos:

- "Ambos mantienen una racha de 10 días."
- "Gonza no perdió ningún hábito esta semana."

---

# Notificaciones

El sistema podrá generar:

- Recordatorio de hábito.
- Racha en riesgo.
- Nueva racha alcanzada.
- Insights de Argus.
- Actividad del compañero en hábitos compartidos.

La frecuencia será administrada mediante el Notification Score.

---

# Restricciones

El módulo nunca:

- Creará hábitos automáticamente.
- Marcará un hábito como cumplido sin acción del usuario.
- Eliminará el historial de rachas.

Toda modificación requerirá intervención directa del usuario.

---

# Futuras Versiones

## Phase 2

- Hábitos con múltiples registros diarios.
- Plantillas de hábitos frecuentes.
- Insights predictivos sobre riesgo de abandono.

---

## Phase 3

- Hábitos grupales.
- Rankings de consistencia entre compañeros.
- Recomendación de nuevos hábitos por parte de Argus.

---

# Decisions

## Decision 001

Clufit mide consistencia, no cantidad de hábitos.

---

## Decision 002

El registro de un hábito deberá completarse en un solo toque.

---

## Decision 003

Argus podrá alertar sobre riesgo de pérdida de racha, pero nunca marcará un hábito como cumplido.

---

## Decision 004

Las rachas son el indicador central del módulo Disciplina.

---

## Decision 005

Los hábitos compartidos dependen del cumplimiento de ambos usuarios sincronizados.
