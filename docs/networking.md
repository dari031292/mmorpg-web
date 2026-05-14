# Modelo de Red Inicial

## Objetivo

Definir un modelo de networking simple, sólido y compatible con un MMORPG web 2D de baja a media complejidad inicial.

## Decisión base

Se adopta un modelo de **servidor autoritativo** sobre **WebSocket**.

## Qué significa servidor autoritativo

El cliente NO decide el estado real del mundo.

El cliente puede:

- enviar input o intención
- predecir visualmente en forma limitada si luego se considera necesario
- interpolar estado recibido

El servidor decide:

- posición válida
- colisiones
- presencia de entidades
- resultado de interacciones con NPCs
- ejecución de eventos

## Flujo base de comunicación

### Cliente -> Servidor
Mensajes de:

- conexión e identificación
- input de movimiento
- interacción con NPC o evento
- acciones del jugador

### Servidor -> Cliente
Mensajes de:

- estado inicial del mapa/zona
- snapshots o actualizaciones de entidades visibles
- confirmación o corrección de movimiento
- eventos del mundo
- cambios persistidos relevantes

## Estrategia recomendada para la primera versión

### Modelo híbrido simple
- acciones entrantes basadas en eventos
- actualización del mundo mediante loop o tick fijo del servidor
- broadcast solo a jugadores relevantes de la zona

## Ticks

Se recomienda evaluar un tick fijo del servidor para mantener consistencia en simulación básica.

Ejemplo inicial conceptual:
- procesar inputs en cola
- aplicar movimiento
- resolver colisiones
- actualizar NPCs
- emitir cambios visibles

El tick rate exacto queda pendiente y debe surgir de pruebas, no de adivinación.

## Visibilidad por zona

No todos los clientes deben recibir todo.

El servidor debe limitar mensajes según:

- mapa actual
- proximidad relevante
- entidades visibles

Esto reduce ruido de red y prepara la arquitectura para escalar mejor.

## Sincronización de movimiento

Primera etapa recomendada:

- cliente envía intención de movimiento
- servidor valida
- servidor responde con estado aceptado
- cliente actualiza representación

Optimización futura posible:

- predicción local limitada
- reconciliación con estado del servidor

NO conviene arrancar con predicción compleja si todavía no está estabilizado el modelo base.

## Mensajes y contratos

Los mensajes deben:

- tener tipo explícito
- ser versionables
- evitar estructuras ambiguas
- vivir en contratos compartidos si se usa monorepo

## Riesgos a evitar

1. Hacer cliente autoritativo “para ir más rápido”.
2. Enviar estado completo del mundo innecesariamente.
3. Mezclar mensajes de transporte con reglas de negocio.
4. No definir estrategia de reconexión y resync.

## Decisiones pendientes

- formato exacto de mensajes
- tick rate del servidor
- estrategia de reconexión
- nivel de predicción visual del cliente
