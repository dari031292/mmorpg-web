import { createServer } from 'node:http';
import { WebSocketServer } from 'ws';
import {
  SERVER_PORT,
  createServerHelloMessage,
  type ClientToServerMessage,
} from '@mmorpg/shared';

const server = createServer((_request, response) => {
  response.writeHead(200, { 'content-type': 'application/json' });
  response.end(
    JSON.stringify({
      name: 'mmorpg-server',
      status: 'ok',
    }),
  );
});

const webSocketServer = new WebSocketServer({ server });

webSocketServer.on('connection', (socket) => {
  socket.send(JSON.stringify(createServerHelloMessage()));

  socket.on('message', (rawMessage) => {
    const parsed = safeParseMessage(rawMessage.toString());

    if (!parsed) {
      socket.send(
        JSON.stringify({
          type: 'server/error',
          payload: { message: 'Invalid message payload' },
        }),
      );
      return;
    }

    if (parsed.type === 'client/ping') {
      socket.send(
        JSON.stringify({
          type: 'server/pong',
          payload: {
            timestamp: Date.now(),
          },
        }),
      );
    }
  });
});

server.listen(SERVER_PORT, () => {
  console.log(`MMORPG server listening on http://localhost:${SERVER_PORT}`);
});

function safeParseMessage(rawMessage: string): ClientToServerMessage | null {
  try {
    return JSON.parse(rawMessage) as ClientToServerMessage;
  } catch {
    return null;
  }
}
