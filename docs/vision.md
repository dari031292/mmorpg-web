# Visión del Proyecto

## Resumen

Este proyecto busca construir un MMORPG 2D para web, con estética vintage y una experiencia inspirada en juegos clásicos como Argentum Online. El foco inicial no es crear un engine genérico, sino una base técnica robusta y extensible que permita validar gameplay, networking, persistencia y herramientas del mundo.

## Visión de Producto

Crear un mundo multijugador persistente, simple de jugar y simple de operar, apoyado sobre una arquitectura clara donde el cliente web represente el estado del juego y el servidor mantenga la autoridad sobre la simulación.

## Experiencia buscada

- exploración por mapas basados en tiles
- interacción con NPCs y eventos del mundo
- desplazamiento con colisiones claras
- mundo persistente
- sensación clásica, legible y directa

## Principios rectores

### 1. Base sólida antes que engine
Primero se validará el juego y su plataforma técnica. Luego se extraerán piezas reutilizables para formar un engine propio.

### 2. Simplicidad operativa
Las primeras decisiones deben privilegiar claridad de implementación, facilidad de mantenimiento y curva de aprendizaje razonable.

### 3. Web como plataforma principal
El cliente correrá en navegador. Esto reduce fricción de acceso y fuerza decisiones compatibles con distribución simple.

### 4. Autoridad del servidor
El servidor será la fuente de verdad para movimiento, colisiones, NPCs, eventos y persistencia de estado relevante.

### 5. Modularidad con intención
Aunque no se construya un engine desde el inicio, los límites entre rendering, networking, dominio del juego y persistencia deben quedar claros.

## Resultado esperado de la primera etapa

Un vertical slice jugable que incluya:

- login o identificación básica
- entrada a un mapa
- movimiento sincronizado
- colisiones
- NPCs básicos
- eventos simples
- persistencia mínima del personaje

Ese slice servirá como base para evolucionar el MMORPG y, más adelante, identificar qué partes merecen ser abstraídas como engine.
