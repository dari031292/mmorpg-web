import { GameViewport } from '../game/rendering/GameViewport';

export function GameShell() {
  return (
    <main className="game-shell">
      <section className="game-shell__viewport">
        <GameViewport />
      </section>

      <aside className="game-shell__sidebar">
        <div className="panel">
          <h1>MMORPG Web</h1>
          <p>Bootstrap inicial del cliente web con React + PixiJS.</p>

          <h2>Siguiente slice</h2>
          <ul>
            <li>Renderizar tilemap base</li>
            <li>Conectar WebSocket al servidor</li>
            <li>Spawn del jugador en mapa inicial</li>
            <li>Validación de movimiento en servidor</li>
          </ul>
        </div>
      </aside>
    </main>
  );
}
