---
name: mmorpg-architecture
description: Use when working on client/server/shared boundaries, engine extraction decisions, module ownership, or architectural changes in the MMORPG web project.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

# MMORPG Architecture

## When to Use

- Cuando una tarea toque límites entre `apps/client`, `apps/server` y `packages/shared`
- Cuando haya que decidir ownership de estado
- Cuando se evalúe extraer lógica reusable futura de engine
- Cuando una feature pueda contaminar arquitectura por mezclar responsabilidades

## Critical Patterns

### 1. Game-first, engine-later
No crear abstracciones genéricas por ansiedad. Primero resolver el juego de forma modular. Después extraer.

### 2. Client != game authority
El cliente representa, captura input y muestra UI. El servidor decide el estado real del mundo.

### 3. Shared debe ser puro
`packages/shared` debe contener:

- tipos
- contratos de mensajes
- constantes
- utilidades puras

No debe contener:

- React
- PixiJS
- acceso a red concreto
- acceso a base de datos

### 4. Organizar por dominio, no por moda
En servidor priorizar módulos como:

- `world`
- `movement`
- `collision`
- `npc`
- `events`
- `session`

No caer en el anti-patrón de carpetas genéricas vacías tipo `helpers/services/utils` sin semántica.

### 5. Rendering no gobierna reglas
Nada de colisiones reales o autoridad del mundo viviendo en componentes React o lógica visual de Pixi.

## Decision Guide

| Si el cambio toca... | Entonces vive en... |
|---|---|
| UI, HUD, panels | `apps/client` |
| render de mapa, cámara, sprites | `apps/client` |
| tipos de mensajes, DTOs, constantes | `packages/shared` |
| validación de movimiento | `apps/server` |
| NPCs, eventos, persistencia | `apps/server` |
| utilidades puras del dominio sin dependencias de plataforma | `packages/shared` o módulo reusable evaluado con cuidado |

## Commands

```bash
pnpm typecheck
pnpm build
```

## Resources

- `README.md`
- `docs/architecture.md`
- `docs/bootstrap.md`
- `docs/tech-stack.md`
