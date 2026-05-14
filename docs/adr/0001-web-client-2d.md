# ADR 0001 — Cliente web 2D

## Estado
Aceptado

## Contexto

El proyecto busca construir un MMORPG inicial con acceso simple, estética vintage y una base técnica sólida. Se necesita una plataforma de cliente que reduzca fricción de adopción y permita iterar rápido.

## Decisión

El cliente del juego correrá en **web** y su rendering inicial será **2D**.

## Consecuencias

### Positivas
- distribución sin instalación compleja
- acceso inmediato desde navegador
- menor complejidad técnica que un cliente 3D
- mejor alineación con una estética clásica tipo Argentum Online

### Negativas
- limitaciones propias de navegador y plataforma web
- necesidad de diseñar cuidadosamente performance y networking

## Alternativas consideradas

### Cliente nativo
Más control de plataforma, pero aumenta fricción de distribución y complejidad inicial.

### Cliente 3D web
Mayor ambición visual, pero costo técnico desalineado con el objetivo actual.
