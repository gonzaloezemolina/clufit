---
title: Fitness Contract
version: 1.0
status: Draft
owner: Clufit
last_updated: 2026-08-03
depends_on:
  - objetivos.contract.md
  - disciplina.contract.md
  - synchronization.contract.md
  - argus.contract.md
used_by:
  - Mobile
  - Backend
  - Argus
---

# Fitness Contract

# Objetivo

El módulo Fitness permite al usuario planificar, registrar y analizar sus entrenamientos.

Está diseñado para adaptarse tanto a usuarios principiantes como avanzados, ofreciendo una experiencia flexible, personalizable y orientada al progreso continuo.

Fitness constituye el núcleo operativo de Clufit.

---

# Filosofía

El entrenamiento debe ser rápido de registrar.

La aplicación nunca debe interrumpir una sesión de entrenamiento.

El seguimiento debe sentirse natural y generar la menor fricción posible.

Argus acompaña al usuario durante todo el proceso, observando patrones y ofreciendo recomendaciones, pero nunca modifica una rutina sin autorización.

---

# Funcionalidades

## Rutinas

El usuario podrá:

- Crear rutinas.
- Editarlas.
- Duplicarlas.
- Eliminarlas.
- Archivarlas.

Cada rutina podrá contener una cantidad ilimitada de ejercicios.

---

## Ejercicios

Cada ejercicio podrá incluir:

- Nombre.
- Grupo muscular.
- Categoría.
- Equipamiento.
- Series.
- Repeticiones.
- Peso.
- Tiempo de descanso.
- Notas.

También podrán crearse ejercicios personalizados.

---

## Historial

Cada entrenamiento quedará registrado.

Se almacenará:

- Fecha.
- Duración.
- Ejercicios realizados.
- Series.
- Repeticiones.
- Peso utilizado.
- Tiempo total.

Nunca se perderá el historial.

---

## Seguimiento

Durante un entrenamiento el usuario podrá registrar:

- Peso.
- Series.
- Repeticiones.
- Series completadas.
- Descansos.
- Tiempo total.

---

## Calendario

Todos los entrenamientos aparecerán en un calendario.

Permitirá visualizar:

- Días entrenados.
- Días omitidos.
- Rachas.
- Frecuencia semanal.

---

## Estadísticas

El sistema calculará automáticamente:

- Volumen total.
- Tiempo entrenado.
- Frecuencia semanal.
- Evolución de cargas.
- Ejercicios más utilizados.
- Grupos musculares trabajados.

---

# Argus

Argus analizará continuamente el historial del usuario.

Podrá detectar:

- Estancamiento.
- Sobrecarga.
- Falta de descanso.
- Baja frecuencia.
- Mejoras de rendimiento.
- Inconsistencias.

Argus podrá recomendar:

- Cambiar una rutina.
- Modificar volumen.
- Incrementar peso.
- Reducir intensidad.
- Añadir descanso.

Todas las recomendaciones deberán ser aceptadas por el usuario antes de aplicarse.

---

# Sincronización

Cuando exista una sincronización activa se habilitarán funcionalidades adicionales.

El usuario podrá:

- Ver si su compañero entrenó.
- Ver el resumen del entrenamiento.
- Copiar una rutina compartida.
- Comparar frecuencia semanal.
- Compartir logros.
- Participar en retos relacionados con entrenamientos.

---

# Integraciones

Fitness podrá utilizar información proveniente de:

- Apple Health.
- Apple Watch.

Estas integraciones permitirán mejorar la precisión de los registros y del análisis realizado por Argus.

---

# Notificaciones

El sistema podrá generar notificaciones relacionadas con:

- Entrenamiento programado.
- Entrenamiento omitido.
- Nuevo récord.
- Racha alcanzada.
- Recomendaciones de Argus.
- Actividad del compañero.

---

# Restricciones

El módulo nunca modificará automáticamente:

- Rutinas.
- Pesos.
- Objetivos.
- Historial.

Toda modificación requerirá confirmación del usuario.

---

# Futuras Versiones

Phase 2

- Temporizador inteligente.
- Superseries.
- Dropsets.
- Circuitos.
- PR automáticos.

Phase 3

- Rutinas compartidas.
- Comentarios entre compañeros.
- Biblioteca pública de rutinas.
- IA para creación de rutinas personalizadas.

---

# Decisions

## Decision 001

Fitness constituye el núcleo operativo de Clufit.

---

## Decision 002

Todo entrenamiento quedará almacenado de forma permanente.

---

## Decision 003

Argus únicamente recomendará cambios; nunca los aplicará automáticamente.

---

## Decision 004

El registro de entrenamientos deberá minimizar la cantidad de acciones necesarias por parte del usuario.

---

## Decision 005

La sincronización enriquecerá la experiencia de entrenamiento, pero nunca afectará el progreso individual del usuario.