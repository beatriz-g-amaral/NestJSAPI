import {
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway()
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AppGateway');
  private users: string[] = [];

  handleConnection(client: Socket) {
    this.logger.log(`⚡: ${client.id} user just connected!`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`🔥: ${client.id} user disconnected`);
    this.users = this.users.filter((user) => user !== client.id);
    this.server.emit('newUserResponse', this.users);
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, message: string) {
    this.server.emit('messageResponse', message);
  }

  @SubscribeMessage('typing')
  handleTyping(client: Socket, data: any) {
    client.broadcast.emit('typingResponse', data);
  }

  @SubscribeMessage('newUser')
  handleNewUser(client: Socket, user: string) {
    this.users.push(user);
    this.server.emit('newUserResponse', this.users);
  }
}
