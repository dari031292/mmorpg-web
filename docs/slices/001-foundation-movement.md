# Vertical Slice 001 — Foundation Movement

## Objetivo

Validar el primer flujo jugable end-to-end del proyecto, conectando cliente, servidor y contratos compartidos en torno a un mapa base, spawn local y movimiento validado por servidor.

## Por qué este slice va primero

Porque antes de hablar de NPCs, eventos o persistencia, el proyecto necesita demostrar que el circuito central funciona:

- el cliente se conecta
- el servidor reconoce la sesión
- existe un estado inicial del mundo
- el jugador puede aparecer en un mapa
- el movimiento pasa por el servidor

Sin eso, todo lo demás sería decorar un edificio sin columnas.

## Incluye

### Cliente
- conexión WebSocket al servidor
- indicador visible de estado de conexión
- render de mapa base como área inicial
- representación local del jugador
- captura de input de movimiento
- envío de intención de movimiento al servidor

### Servidor
- aceptación de conexión de cliente
- asignación de estado inicial del jugador
- spawn inicial en coordenadas válidas
- validación básica de movimiento sobre grilla o tilemap
- respuesta con estado aceptado o corregido

### Shared
- contratos de mensajes para conexión y movimiento
- tipos de posición y estado mínimo del jugador
- constantes de mapa o tile size si hiciera falta ampliar el contrato

## No incluye

- multiplayer visible entre varios jugadores
- NPCs
- eventos del mapa
- persistencia en base de datos
- combate
- inventario
- predicción avanzada del cliente
- reconciliación compleja

## Resultado esperado

Al levantar cliente y servidor:

1. el cliente muestra estado de conexión
2. el cliente entra a un mapa base
3. el jugador aparece en una posición inicial válida
4. el usuario puede intentar moverse
5. el servidor valida el movimiento
6. el cliente actualiza la posición según el estado aprobado por el servidor

## Diseño funcional del slice

### Secuencia mínima

1. cliente conecta por WebSocket
2. servidor responde handshake y estado inicial
3. cliente renderiza mapa + jugador
4. cliente envía `move-intent`
5. servidor evalúa colisión/límites
6. servidor responde con `player-state`
7. cliente actualiza representación

## Ownership del estado

| Elemento | Dueño |
|---|---|
| Estado real del jugador | servidor |
| Validación de movimiento | servidor |
| Render del mapa | cliente |
| Estado visual de conexión | cliente |
| Contratos de mensajes | shared |

## Contratos esperados

No es necesario fijar nombres definitivos todavía, pero el slice debería terminar con contratos equivalentes a estos:

- `server/hello`
- `server/session-ready`
- `client/move-intent`
- `server/player-state`
- `server/error` cuando aplique

La regla importante NO es el nombre exacto. La regla importante es la semántica:

- el cliente expresa intención
- el servidor responde con estado autoritativo

## Cambios esperados por workspace

### `apps/client`
- módulo de conexión WebSocket usable desde el shell del juego
- estado visible de conexión
- integración del viewport con un mapa inicial
- lógica de input mínima
- representación visual del jugador local

### `apps/server`
- sesión básica por socket
- mensaje de estado inicial del jugador
- validación simple de movimiento
- actualización del estado del jugador en memoria

### `packages/shared`
- tipos para posición
- tipos de mensajes de sesión y movimiento
- payloads mínimos compartidos

## Criterios de validación

### Técnica
- `pnpm typecheck` pasa
- `pnpm build` pasa
- cliente y servidor levantan localmente

### Manual
- abrir cliente en navegador
- verificar conexión sin error
- ver mapa base
- ver jugador local en spawn
- mover al jugador y confirmar que responde a estado del servidor

## Riesgos del slice

1. mezclar estado visual con estado autoritativo
2. hacer que React termine controlando gameplay
3. meter colisiones reales en Pixi o en UI
4. inflar el slice agregando multiplayer/NPC/persistencia antes de tiempo

## Criterio de done

El slice se considera terminado cuando:

- el flujo completo conexión → spawn → movimiento → validación funciona
- los contratos viven en `packages/shared`
- no hay lógica autoritativa en cliente
- la documentación sigue alineada con la implementación

## Próximo slice natural después de este

Una vez estabilizado este slice, los siguientes candidatos razonables son:

1. colisiones de mapa más explícitas
2. múltiples jugadores visibles en la misma zona
3. persistencia mínima del personaje

No antes.
