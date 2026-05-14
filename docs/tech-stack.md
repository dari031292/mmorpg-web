# Stack Tecnológico

## Objetivo del stack

Elegir tecnologías que permitan avanzar con velocidad razonable, manteniendo una arquitectura limpia y compatible con la futura extracción de módulos reutilizables.

## Decisiones cerradas

- monorepo con **pnpm workspaces**
- cliente con **Vite + React + TypeScript + PixiJS**
- servidor con **Node.js + TypeScript + ws**
- paquete `shared` para contratos, constantes y tipos
- persistencia con **PostgreSQL + Drizzle ORM**

## Cliente

### Lenguaje
- **TypeScript**

### Plataforma
- **Web**

### UI
- **React** para interfaces de usuario no diegéticas y paneles de aplicación

### Bundler
- **Vite**

### Render 2D
- **PixiJS** como librería principal de rendering

#### Razón
PixiJS entrega control suficiente para construir una arquitectura propia encima, sin imponer demasiadas reglas de gameplay. Eso la vuelve más apropiada que opciones más cerradas si el objetivo futuro es extraer un engine.

## Servidor

### Runtime
- **Node.js**

### Lenguaje
- **TypeScript**

### WebSocket
- **ws**

#### Razón
El conocimiento actual del equipo favorece Node.js, lo que reduce el costo de arranque y permite concentrar el esfuerzo en arquitectura, networking y dominio del juego.

## Networking

- **WebSocket** para comunicación en tiempo real
- protocolo de mensajes propio, simple y versionable
- servidor autoritativo

## Persistencia

### Base principal
- **PostgreSQL**

### Acceso a datos
- **Drizzle ORM**

### Soporte en memoria o cache futuro
- **Redis** como opción futura para presencia, colas o pub/sub si la complejidad lo requiere

## Mapas y contenido

- tilemaps 2D
- formato a definir, idealmente compatible con herramientas estándar como Tiled si no introduce fricción innecesaria

## Testing

- unit tests para lógica pura de dominio
- integration tests para networking y persistencia
- validaciones de contrato de mensajes entre cliente y servidor

## Tooling elegido

- gestor de paquetes: **pnpm**
- linting: **ESLint**
- formateo: **Prettier**
- tests: **Vitest** o **Jest**
- bundler cliente: **Vite**

## Estructura de repositorio

### Monorepo adoptado

- `apps/client`
- `apps/server`
- `packages/shared`

#### Razón
Permite compartir tipos de mensajes, contratos y utilidades de dominio sin duplicación prematura.

## Estado actual del bootstrap

Ya existe una base técnica inicial con:

- `apps/client` con shell React y viewport PixiJS
- `apps/server` con servidor HTTP base y WebSocket server
- `packages/shared` con constantes y mensajes iniciales del protocolo

## Decisiones pendientes

- formato definitivo de assets y mapas
- estrategia de despliegue inicial
- configuración exacta de lint y test
