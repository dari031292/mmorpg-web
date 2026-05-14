# Alcance del Proyecto

## Objetivo del MVP

Construir un MMORPG web 2D inicial, con mundo basado en tilemaps y una base técnica robusta para soportar simulación autoritativa, persistencia y evolución incremental del juego.

## Incluido en el MVP

### Mundo y mapas
- carga de mapas 2D basados en tiles
- definición de zonas transitables y bloqueadas
- puntos de spawn

### Personajes
- creación o identificación básica de personaje
- posición y movimiento dentro del mapa
- representación visible para otros jugadores

### Colisiones
- colisiones con tiles bloqueados
- validación de movimiento en servidor

### NPCs
- spawn de NPCs en mapas
- comportamiento simple inicial
- interacción básica con jugador

### Eventos
- activadores simples por tile, proximidad o interacción
- mensajes, teletransportes o acciones de estado básico

### Persistencia
- almacenamiento del estado mínimo del personaje
- posición, mapa actual y datos base del progreso

### Multiplayer base
- presencia de múltiples jugadores en una misma zona
- sincronización básica de entidades visibles

## Fuera de alcance inicial

- combate avanzado
- economía compleja
- crafting
- clanes o guilds
- housing
- marketplace
- editor visual completo
- sharding avanzado o arquitectura distribuida compleja
- motor reusable como producto separado

## Riesgos conocidos

1. Definir tarde el modelo de red puede contaminar cliente y servidor.
2. Mezclar lógica de simulación con rendering complica la futura extracción del engine.
3. Intentar soportar demasiados jugadores desde el día uno puede frenar el avance.
4. Persistir demasiado estado demasiado temprano puede volver rígido el dominio.

## Supuestos iniciales

- el cliente principal será navegador de escritorio
- el servidor será Node.js
- el mundo inicial será 2D tile-based
- el estilo visual priorizará legibilidad sobre efectos complejos

## Preguntas aún abiertas

- cuántos jugadores objetivo por mapa o zona
- si habrá tick rate fijo o procesamiento híbrido por eventos
- qué formato de mapas se adoptará
- si el repositorio será monorepo desde el inicio
