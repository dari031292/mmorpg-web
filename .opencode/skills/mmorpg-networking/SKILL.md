---
name: mmorpg-networking
description: Use when implementing or changing WebSocket flows, message contracts, authoritative server logic, movement sync, replication, ping/pong, or connection lifecycle in the MMORPG web project.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

# MMORPG Networking

## When to Use

- Cuando una tarea toque WebSocket
- Cuando cambien contratos de mensajes cliente-servidor
- Cuando se implemente conexión, reconexión, ping/pong o handshake
- Cuando se diseñe sincronización de movimiento o replicación

## Critical Patterns

### 1. Servidor autoritativo SIEMPRE
El cliente envía intención.
El servidor valida.
El servidor responde con estado aceptado o corrección.

### 2. Contratos compartidos en `packages/shared`
Los tipos de mensajes deben vivir en un lugar único. Nada de duplicar payloads entre client y server.

### 3. Mensajes con semántica clara
Los mensajes deben expresar intención o estado. No detalles accidentales del transporte.

Ejemplos sanos:

- `client/ping`
- `server/pong`
- `client/move-intent`
- `server/player-state`

Evitar nombres ambiguos o payloads inflados.

### 4. No enviar el mundo entero si no hace falta
La replicación debe ser por mapa, zona o visibilidad relevante.

### 5. Primero handshake y conexión sana, después predicción
NO arrancar por reconciliación compleja o client-side prediction si todavía no existe un loop básico estable.

## Checklist before changing protocol

- ¿El mensaje vive en `packages/shared`?
- ¿El nombre expresa intención/estado real?
- ¿Está claro quién es dueño del estado?
- ¿Cliente y servidor usan el mismo contrato?
- ¿Hace falta actualizar documentación en `docs/networking.md`?

## Commands

```bash
pnpm dev:server
pnpm dev:client
pnpm typecheck
```

## Resources

- `docs/networking.md`
- `docs/architecture.md`
- `packages/shared/src/protocol/messages.ts`
- `apps/server/src/index.ts`
