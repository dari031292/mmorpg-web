# Arquitectura de Alto Nivel

## Principio central

La arquitectura debe separar claramente:

- presentación
- simulación del mundo
- comunicación en red
- persistencia
- contenido del juego

Esto NO es burocracia. Es lo que evita que el proyecto se convierta en una mezcla imposible de mantener.

## Vista general

```text
Cliente Web
  - Render 2D
  - Input
  - UI/HUD
  - Interpolación visual
  - Cliente de red

          <WebSocket>

Servidor Autoritativo
  - Sesiones
  - Simulación de mapa
  - Movimiento y colisiones
  - NPCs
  - Eventos
  - Persistencia
```

## Estructura actual del monorepo

```txt
apps/
  client/
  server/
packages/
  shared/
```

### `apps/client`
Contiene la aplicación web, el shell React y el rendering base del juego con PixiJS.

### `apps/server`
Contiene el servidor autoritativo inicial, el entrypoint HTTP y el WebSocket server.

### `packages/shared`
Contiene contratos compartidos, constantes del juego y tipos reutilizables entre cliente y servidor.

## Responsabilidades del cliente

- capturar input del usuario
- renderizar mapa y entidades
- representar estado recibido del servidor
- interpolar o suavizar movimiento cuando sea necesario
- mostrar UI del juego

## Responsabilidades del servidor

- autenticar o identificar sesiones
- mantener el estado real del mundo
- validar movimiento
- resolver colisiones
- controlar NPCs
- ejecutar eventos del mapa o del dominio
- persistir estado relevante
- difundir actualizaciones a clientes conectados

## Módulos lógicos sugeridos

### Cliente

#### `rendering`
Responsable de tiles, capas visuales, entidades y cámara.

#### `network`
Responsable de conexión WebSocket, encoding/decoding de mensajes y manejo de reconexión.

#### `game-state`
Estado local de representación. No debe convertirse en la fuente de verdad del mundo.

#### `ui`
Inventario, chat, diálogos, HUD y paneles.

### Servidor

#### `session`
Conexiones, identificación y ciclo de vida del jugador conectado.

#### `world`
Mapas activos, entidades presentes y visibilidad por zona.

#### `movement`
Validación de desplazamiento, reglas de colisión y cambios de mapa.

#### `npc`
Lógica básica de NPCs y comportamiento simple.

#### `events`
Triggers, scripts simples o acciones configurables del mundo.

#### `persistence`
Repositorios, carga y guardado de estado.

#### `protocol`
Contratos de mensajes cliente-servidor.

## Estado técnico ya implementado

La base actual ya incluye:

- handshake inicial del servidor hacia el cliente con mensaje `server/hello`
- mensaje `client/ping`
- respuesta `server/pong`
- constante compartida de `TILE_SIZE`
- constante compartida de `SERVER_PORT`

Esto todavía NO es gameplay. Pero sí fija los primeros límites correctos entre transporte, protocolo y representación.

## Boundaries importantes

### 1. Rendering no decide reglas del juego
El cliente dibuja. El servidor decide.

### 2. Persistencia no define dominio
La base de datos guarda el estado, pero no debe gobernar las reglas del mundo.

### 3. Networking no debe mezclar semántica con transporte
Los mensajes deben representar intención o estado, no detalles accidentales del socket.

### 4. Lógica reusable debe vivir separada
Todo lo que pueda formar parte del engine futuro debe evitar depender de React, Pixi o detalles concretos de infraestructura.

## Módulos potencialmente extraíbles a futuro como engine

- modelo de entidades
- sistema de mapas y capas
- colisiones sobre tilemaps
- protocolo de replicación
- runtime de eventos
- utilidades de pathing o navegación simple

## Evolución esperada

Etapa 1: arquitectura mínima para un vertical slice.  
Etapa 2: separación progresiva de módulos compartidos.  
Etapa 3: extracción de capacidades generales y nacimiento del engine.
