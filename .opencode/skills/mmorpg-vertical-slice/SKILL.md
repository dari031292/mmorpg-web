---
name: mmorpg-vertical-slice
description: Use when planning or implementing a new vertical slice, especially for incremental MMORPG features like connection, map loading, spawn, movement, collisions, NPCs, or persistence.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

# MMORPG Vertical Slice

## When to Use

- Cuando haya que planificar una feature incremental
- Cuando se quiera evitar inflar alcance
- Cuando una tarea atraviese client, server y shared
- Cuando haya que definir el siguiente corte implementable del proyecto

## Critical Patterns

### 1. Slice pequeño pero completo
Un vertical slice debe probar algo real de punta a punta. No solo “estructura”.

### 2. No mezclar 5 features en una sola entrega
Un slice sano tiene foco. Ejemplo:

- conexión visible cliente-servidor
- mapa inicial
- spawn de jugador
- movimiento validado por servidor

Eso YA es un slice serio.

### 3. Cada slice debe definir

- objetivo
- alcance
- fuera de alcance
- contratos nuevos
- criterio de validación

### 4. Si cambia el comportamiento del sistema, actualizar docs
No dejar README o docs mintiendo.

## Slice Template

```md
## Objetivo
[qué valida este slice]

## Incluye
- ...

## No incluye
- ...

## Cambios esperados
- client:
- server:
- shared:

## Validación
- typecheck
- build
- prueba manual esperada
```

## Decision Guide

| Si todavía no existe... | Entonces NO agregar todavía... |
|---|---|
| conexión estable | sincronización avanzada |
| mapa inicial | eventos complejos |
| movimiento validado | combate |
| persistencia básica | progresión compleja |

## Commands

```bash
pnpm typecheck
pnpm build
pnpm dev:server
pnpm dev:client
```

## Resources

- `docs/roadmap.md`
- `docs/bootstrap.md`
- `docs/architecture.md`
- `README.md`
