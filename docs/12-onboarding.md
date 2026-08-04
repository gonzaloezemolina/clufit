# 12 - Onboarding

Versión: 1.0

---

# Objetivo

El onboarding tiene como único objetivo permitir que Argus comience a comprender el contexto del usuario con la menor fricción posible.

No busca configurar toda la aplicación.

No busca completar un perfil exhaustivo.

No busca solicitar información innecesaria.

El usuario debe poder comenzar a utilizar Clufit en menos de un minuto.

---

# Principios

## Mobile First

El onboarding está diseñado exclusivamente para dispositivos móviles.

Todas las pantallas deberán poder completarse con una sola mano.

---

## Progressive Profiling

Sólo se solicitará la información estrictamente necesaria.

Los datos adicionales podrán completarse posteriormente desde Perfil o mediante tarjetas contextuales dentro de la aplicación.

---

## Context First

Cada dato solicitado deberá aportar valor inmediato para Argus.

Si un dato no mejora la experiencia inicial, no pertenece al onboarding.

---

## Sincronización Opcional

La sincronización entre usuarios forma parte de la identidad de Clufit.

Sin embargo, nunca será obligatoria.

El usuario podrá invitar a un compañero en cualquier momento.

---

# Flujo

## Intro

Antes del onboarding, el usuario visualizará tres pantallas de presentación.

Estas pantallas no solicitan información.

Su único objetivo es comunicar la propuesta de valor de Clufit.

---

### Screen 1

**Build better habits. Together.**

> Clufit helps you build consistent habits and achieve your goals, alone or with someone else.

---

### Screen 2

**Everything in one place.**

> Track your workouts, recovery, nutrition and productivity with the help of Argus.

---

### Screen 3

**Grow together.**

> Compete with friends, complete challenges and stay consistent every day.

CTA

**Get Started**

---

# Step 1 — About You

Objetivo

Obtener la información mínima necesaria para personalizar la experiencia.

Campos

- First Name
- Birthday
- Height
- Weight
- Gender (Optional)

CTA

**Continue**

---

# Step 2 — Your Goal

Objetivo

Definir el objetivo principal del usuario.

Pregunta

**What's your main goal?**

Opciones

- Build Muscle
- Lose Weight
- Improve Health
- Become More Productive
- Stay Consistent
- Sleep Better
- Create My Own

Pregunta

**When do you want to achieve it?**

Campo

Date Picker

CTA

**Continue**

---

# Step 3 — Your Lifestyle

Objetivo

Permitir que Argus comprenda la rutina general del usuario.

Preguntas

**How many days do you train each week?**

Selector

0–7

---

**Do you go to a gym?**

Yes / No

---

**What time do you usually wake up?**

Time Picker

---

**What time do you usually go to sleep?**

Time Picker

CTA

**Continue**

---

# Step 4 — Notifications

Objetivo

Permitir que el usuario elija qué tipo de notificaciones desea recibir.

Opciones

- Workout Reminders
- Water Reminders
- Challenges
- Argus Insights
- Partner Activity

CTA

**Continue**

---

# Step 5 — Permissions

Objetivo

Solicitar los permisos necesarios para que Argus pueda comprender el contexto del usuario.

Mensaje

> Argus uses this information to understand your context, detect patterns and provide better insights.
>
> Your data is never used to control your device.

Permisos

- Apple Health
- Apple Watch
- Screen Time

CTA

**Continue**

---

# Step 6 — Partner (Optional)

Objetivo

Presentar el sistema de sincronización sin obligar al usuario a utilizarlo.

Pregunta

**Do you train with someone else?**

Descripción

Invite a friend, partner or gym buddy and grow together.

Botones

- Invite Partner
- Skip for now

Texto secundario

> You can invite someone at any time.

---

# Step 7 — Ready

Objetivo

Finalizar el onboarding e ingresar al Dashboard.

Título

**You're all set.**

Texto

Your first goal has been created.

Argus is now learning your habits.

CTA

**Go to Dashboard**

---

# Progressive Profiling

La información que no sea imprescindible durante el onboarding deberá solicitarse posteriormente mediante la propia experiencia de uso.

Ejemplos

- Connect Apple Watch
- Complete your profile
- Add your profile picture
- Create your first workout
- Create your first challenge
- Invite your first partner

Estas acciones aparecerán como tarjetas dentro del Dashboard y nunca impedirán utilizar la aplicación.

---

# Decisiones

## Decision 001

El onboarding nunca deberá superar los 7 pasos principales.

---

## Decision 002

El usuario deberá comenzar a utilizar Clufit en menos de un minuto.

---

## Decision 003

Toda la información adicional será obtenida mediante Progressive Profiling.

---

## Decision 004

La sincronización entre usuarios nunca será obligatoria durante el onboarding.

---

## Decision 005

Cada dato solicitado deberá aportar valor directo a Argus o a la experiencia inicial del usuario.

---

# Resultado Esperado

Al finalizar el onboarding:

- El usuario tendrá un objetivo principal.
- Argus contará con suficiente contexto para comenzar a generar Insights.
- Los permisos esenciales estarán configurados.
- El Dashboard estará listo para utilizarse.
- El usuario podrá invitar un compañero inmediatamente o hacerlo más adelante sin modificar el funcionamiento de la aplicación.