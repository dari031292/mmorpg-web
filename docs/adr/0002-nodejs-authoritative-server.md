# ADR 0002 — Servidor Node.js autoritativo

## Estado
Aceptado

## Contexto

El proyecto necesita una base de backend capaz de soportar multiplayer en tiempo real, con una curva de arranque razonable y foco en arquitectura antes que en micro-optimización prematura.

## Decisión

Se adopta **Node.js con TypeScript** para el servidor y un modelo de **servidor autoritativo** para la simulación del mundo.

## Consecuencias

### Positivas
- reduce costo inicial de desarrollo por conocimiento previo
- permite concentrar esfuerzo en diseño del dominio y networking
- mantiene un stack homogéneo con el cliente
- evita errores de base asociados a cliente autoritativo

### Negativas
- puede requerir optimizaciones o partición futura al crecer carga concurrente
- obliga a ser disciplinados con loops, estado y uso de CPU

## Alternativas consideradas

### Go
Muy buena opción de concurrencia, pero agrega costo de arranque hoy.

### Cliente autoritativo con validaciones parciales
Más rápido de prototipar, pero incorrecto para un MMORPG serio y difícil de corregir después.
