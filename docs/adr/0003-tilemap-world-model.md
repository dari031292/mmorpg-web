# ADR 0003 — Mundo basado en tilemaps

## Estado
Aceptado

## Contexto

La referencia visual y funcional del proyecto es un MMORPG 2D clásico con mapas estilo vintage y desplazamiento claro sobre grilla o estructura equivalente.

## Decisión

El mundo se modelará inicialmente mediante **tilemaps 2D** con información explícita de capas visuales, colisiones y puntos de interés.

## Consecuencias

### Positivas
- simplifica navegación y validación de colisiones
- facilita edición de mapas
- encaja naturalmente con el estilo visual buscado
- mejora la claridad del modelo mental del mundo

### Negativas
- puede resultar rígido para mecánicas más libres a futuro
- exige diseñar bien cómo representar eventos y objetos no estrictamente ligados al tile

## Alternativas consideradas

### Mundo totalmente libre con coordenadas continuas sin estructura principal de tiles
Da más flexibilidad, pero complica innecesariamente el arranque y no responde a la inspiración original del proyecto.
