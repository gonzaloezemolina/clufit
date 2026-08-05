# Clufit

Monorepo de Clufit: documentación de producto + código de la aplicación.

## Documentación

- [`docs/`](docs) — Visión, principios, especificación de producto, arquitectura, base de datos, API, design system, onboarding y monetización.
- [`modules/`](modules) — Especificación de cada módulo funcional de la app.
- [`systems/`](systems) — Sistemas transversales (IA, sincronización, notificaciones, etc.).
- [`contracts/`](contracts) — Contratos técnicos (interfaces/datos) entre módulos y sistemas.
- [`examples/`](examples) — Ejemplos de flujos end-to-end.
- [`assets/design-system/`](assets/design-system) — Referencias visuales para el diseño de UI.

## Código

- [`apps/mobile/`](apps/mobile) — Aplicación móvil (React Native + Expo + Expo Router + NativeWind).
- [`apps/admin/`](apps/admin) — Panel administrativo (Next.js + Tailwind + shadcn/ui), uso interno del equipo.
- [`packages/`](packages) — Código compartido entre apps: `types`, `config`, `utils`, `api`, `ui`.

Ver [`docs/09-project-structure.md`](docs/09-project-structure.md) para la organización completa y [`docs/08-development-standards.md`](docs/08-development-standards.md) para el flujo de trabajo.

## Desarrollo

```bash
npm install

npm run mobile   # Expo
npm run admin    # Next.js admin panel
```
