import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { Application, Graphics } from 'pixi.js';
import { TILE_SIZE } from '@mmorpg/shared';
export function GameViewport() {
    const containerRef = useRef(null);
    useEffect(() => {
        const container = containerRef.current;
        if (!container) {
            return;
        }
        const app = new Application();
        let destroyed = false;
        void (async () => {
            await app.init({
                width: 960,
                height: 540,
                background: '#1f2937',
                antialias: false,
            });
            if (destroyed) {
                app.destroy(true);
                return;
            }
            container.appendChild(app.canvas);
            const graphics = new Graphics();
            const columns = 20;
            const rows = 12;
            for (let row = 0; row < rows; row += 1) {
                for (let column = 0; column < columns; column += 1) {
                    const isEven = (row + column) % 2 === 0;
                    graphics
                        .rect(column * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE)
                        .fill(isEven ? 0x374151 : 0x4b5563)
                        .stroke({ color: 0x111827, width: 1 });
                }
            }
            app.stage.addChild(graphics);
        })();
        return () => {
            destroyed = true;
            app.destroy(true, { children: true });
        };
    }, []);
    return _jsx("div", { ref: containerRef, className: "game-canvas" });
}
