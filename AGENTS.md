# AGENTS.md

## Proyecto

MMORPG web 2D con estética vintage inspirado en Argentum Online.

## Dirección del proyecto

- **Game-first, engine-later**.
- Primero se construye un juego sólido.
- El engine se extraerá después, a partir de módulos que ya hayan probado valor real.

## Stack oficial

- Monorepo con `pnpm`
- Cliente: `Vite + React + TypeScript + PixiJS`
- Servidor: `Node.js + TypeScript + ws`
- Shared: contratos, tipos y constantes compartidas
- Persistencia: `PostgreSQL + Drizzle ORM`

## Arquitectura obligatoria

### Boundaries
- `apps/client` = rendering, input, UI y estado de representación
- `apps/server` = autoridad del mundo, colisiones, NPCs, eventos y persistencia
- `packages/shared` = protocolo, tipos, constantes y utilidades puras compartidas

### Reglas duras
- NO poner lógica de gameplay en React.
- NO hacer cliente autoritativo.
- NO mezclar rendering con reglas del dominio.
- NO acoplar networking a componentes visuales.
- NO meter código específico de infraestructura dentro de lógica reusable futura de engine.

## Networking

- Modelo: **servidor autoritativo**.
- Transporte: **WebSocket**.
- El cliente envía intención/input.
- El servidor valida y decide el estado real.

## Filosofía de implementación

- Avanzar por **vertical slices**.
- Cada slice debe cruzar cliente, servidor y shared solo cuando haga falta.
- Primero funcionalidad mínima correcta, después expansión.
- Evitar sobreingeniería prematura.

## Qué priorizar

1. claridad arquitectónica
2. contratos compartidos correctos
3. experiencia de desarrollo sana
4. documentación consistente con la realidad del repo
5. validación con typecheck/build antes de dar por terminado algo

## Qué evitar

- features grandes sin slice incremental
- abstracciones genéricas antes de tener un caso real
- estado duplicado sin ownership claro
- “soluciones mágicas” que oculten el flujo real del juego

## Flujo recomendado para la IA

1. leer docs relevantes antes de proponer cambios importantes
2. respetar `README.md`, `docs/architecture.md`, `docs/networking.md` y `docs/bootstrap.md`
3. si una decisión cambia la arquitectura, actualizar documentación
4. si se toca build o ejecución local, actualizar README
5. validar con build/typecheck cuando el cambio lo amerite

## Skills del proyecto

- `mmorpg-architecture`
- `mmorpg-networking`
- `mmorpg-vertical-slice`

Usar estas skills cuando la tarea toque sus áreas.
