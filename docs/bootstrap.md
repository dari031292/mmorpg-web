# Bootstrap Técnico del Monorepo

## Objetivo

Dejar una base de repositorio coherente con la arquitectura decidida, evitando mezclar desde el día uno rendering, networking, dominio y contratos compartidos.

## Estructura actual

```txt
apps/
  client/
    src/
  server/
    src/
packages/
  shared/
    src/
docs/
  adr/
package.json
pnpm-workspace.yaml
tsconfig.base.json
```

## Workspaces

### `apps/client`
Responsable de:

- shell de aplicación web
- UI base
- viewport del juego
- rendering 2D con PixiJS

### `apps/server`
Responsable de:

- servidor HTTP base
- WebSocket server
- ciclo de conexión inicial
- futura simulación autoritativa del mundo

### `packages/shared`
Responsable de:

- contratos de mensajes
- tipos compartidos
- constantes del dominio base

## Por qué existe `shared`

Porque duplicar contratos entre cliente y servidor es una mala práctica que termina rompiendo consistencia.

El paquete compartido permite:

- una sola fuente de verdad para tipos de mensajes
- constantes comunes del dominio técnico
- reducción de errores por drift entre apps

## Estado actual del protocolo

Hoy existe una base mínima con:

- `server/hello`
- `client/ping`
- `server/pong`

Esto sirve para validar integración temprana antes de introducir movimiento, snapshots o entidades del mundo.

## Estado actual del cliente

Hoy existe:

- aplicación Vite con React
- shell visual del juego
- viewport PixiJS
- render de grilla base usando `TILE_SIZE` compartido

## Estado actual del servidor

Hoy existe:

- servidor HTTP simple para health básico
- WebSocket server inicial
- parsing seguro mínimo de mensajes
- primer handshake de conexión

## Próximo slice técnico recomendado

1. conectar cliente al WebSocket server
2. mostrar estado real de conexión en UI
3. cargar un mapa inicial representable
4. modelar spawn de jugador
5. enviar input de movimiento
6. validar movimiento en servidor

Este slice ya quedó formalizado en:

- `docs/slices/001-foundation-movement.md`

## Criterio de calidad para avanzar

No agregar sistemas nuevos si todavía no están claros:

- límites entre `client`, `server` y `shared`
- contratos del protocolo
- ownership del estado del mundo
- responsabilidad del servidor sobre movimiento y colisiones
