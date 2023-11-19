import { Server, Socket } from 'socket.io';
export declare class GatewayGateway {
    server: Server;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
}
