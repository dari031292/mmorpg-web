export type ClientPingMessage = {
  type: 'client/ping';
  payload: {
    timestamp: number;
  };
};

export type ClientToServerMessage = ClientPingMessage;

export type ServerHelloMessage = {
  type: 'server/hello';
  payload: {
    serverTime: number;
    protocolVersion: number;
  };
};

export function createServerHelloMessage(): ServerHelloMessage {
  return {
    type: 'server/hello',
    payload: {
      serverTime: Date.now(),
      protocolVersion: 1,
    },
  };
}
