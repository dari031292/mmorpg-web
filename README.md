# MMORPG Web

Proyecto para construir un MMORPG 2D web con estética vintage inspirada en Argentum Online, priorizando una base técnica sólida antes de extraer un engine reutilizable.

## Objetivo

Construir primero un juego funcional con fundamentos correctos:

- cliente web 2D
- servidor autoritativo
- mapas por tilemap
- personajes, NPCs y colisiones
- eventos de juego
- persistencia

El engine no se construirá al inicio como producto separado. Se extraerá después, a partir de los módulos que demuestren valor real y estabilidad.

## Documentación

- `docs/vision.md` — visión del producto
- `docs/scope.md` — alcance del MVP y fuera de alcance
- `docs/tech-stack.md` — stack tecnológico inicial
- `docs/architecture.md` — arquitectura de alto nivel
- `docs/networking.md` — modelo de red inicial
- `docs/roadmap.md` — roadmap por fases
- `docs/glossary.md` — vocabulario compartido
- `docs/adr/` — decisiones arquitectónicas registradas

## Estado

Proyecto en fase de fundación técnica.

Actualmente ya existe:

- documentación base de producto, arquitectura y decisiones
- bootstrap inicial de monorepo con `pnpm`
- cliente web base con `React + PixiJS`
- servidor base con `Node.js + WebSocket`
- paquete compartido para contratos y constantes

## Estructura inicial del repositorio

```txt
apps/
  client/
  server/
packages/
  shared/
docs/
  adr/
```

## Stack decidido

- **Monorepo:** pnpm workspaces
- **Cliente:** Vite + React + TypeScript + PixiJS
- **Servidor:** Node.js + TypeScript + ws
- **Shared:** tipos, constantes y protocolo compartido
- **Persistencia:** PostgreSQL + Drizzle ORM

## Próximo objetivo

Construir el primer vertical slice técnico:

1. render de tilemap base
2. conexión cliente-servidor
3. spawn del jugador
4. movimiento validado por servidor
5. replicación básica de estado

## Principios

1. Game-first, engine-later.
2. Servidor autoritativo desde el inicio.
3. Simplicidad antes que sobreingeniería.
4. Arquitectura modular para futura extracción de engine.
5. Documentar decisiones antes de escalar complejidad.
