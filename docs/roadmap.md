# Roadmap Inicial

## Fase 0 — Fundaciones

Objetivo: documentar, decidir arquitectura y preparar bootstrap técnico.

- visión del producto
- alcance del MVP
- stack inicial
- arquitectura de alto nivel
- modelo de red inicial
- ADRs principales
- bootstrap técnico inicial del monorepo

### Estado actual

Completado en forma parcial con:

- documentación fundacional
- ADRs iniciales
- estructura base de monorepo
- cliente base con React + PixiJS
- servidor base con Node.js + ws
- paquete shared para protocolo y constantes

## Fase 1 — Vertical Slice Jugable

Objetivo: probar el núcleo del juego con la menor complejidad posible.

- cliente web con mapa renderizado
- conexión al servidor
- carga de un mapa inicial
- spawn de personaje
- movimiento validado por servidor
- colisiones básicas

### Slice definido para arrancar

- `docs/slices/001-foundation-movement.md`

### Intención del Slice 001

Validar el primer loop end-to-end real del proyecto:

- conexión WebSocket visible
- mapa base representado en cliente
- spawn local del jugador
- input de movimiento
- validación autoritativa del servidor
- replicación/corrección mínima del estado del jugador

## Fase 2 — Mundo Persistente Base

Objetivo: consolidar el loop central del juego.

- persistencia de personaje
- cambios de mapa
- presencia de múltiples jugadores
- NPCs básicos
- eventos simples por interacción o posición

## Fase 3 — Robustez Multijugador

Objetivo: estabilizar networking y operación del mundo.

- visibilidad por zona
- mejoras de sincronización
- reconexión y resync
- logging y observabilidad base
- pruebas de carga iniciales

## Fase 4 — Expansión de Gameplay

Objetivo: agregar sistemas de juego luego de validar plataforma.

- inventario
- combate simple
- loot o recompensas básicas
- progresión mínima

## Fase 5 — Extracción Progresiva de Engine

Objetivo: identificar componentes realmente generales.

- abstraer sistema de mapas
- abstraer runtime de entidades
- abstraer colisiones y eventos
- separar componentes reutilizables de la lógica específica del juego

## Criterios de avance

No pasar de fase por entusiasmo. Pasar de fase cuando:

- el comportamiento actual sea entendible
- la documentación acompañe las decisiones
- exista una base mínima de testing en los módulos críticos
- los límites de arquitectura sigan sanos
