import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GameViewport } from '../game/rendering/GameViewport';
export function GameShell() {
    return (_jsxs("main", { className: "game-shell", children: [_jsx("section", { className: "game-shell__viewport", children: _jsx(GameViewport, {}) }), _jsx("aside", { className: "game-shell__sidebar", children: _jsxs("div", { className: "panel", children: [_jsx("h1", { children: "MMORPG Web" }), _jsx("p", { children: "Bootstrap inicial del cliente web con React + PixiJS." }), _jsx("h2", { children: "Siguiente slice" }), _jsxs("ul", { children: [_jsx("li", { children: "Renderizar tilemap base" }), _jsx("li", { children: "Conectar WebSocket al servidor" }), _jsx("li", { children: "Spawn del jugador en mapa inicial" }), _jsx("li", { children: "Validaci\u00F3n de movimiento en servidor" })] })] }) })] }));
}
