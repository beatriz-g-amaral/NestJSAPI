import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { EventosService } from '../Services/event.service';
import { Eventos } from '../Entity/event.entity';

@Controller('eventos')
export class EventoController {
  constructor(private readonly eventoService: EventosService) {}

  @Post()
  async createEvent(@Body() newEvent: Eventos): Promise<Eventos> {
    return this.eventoService.createEvent(newEvent);
  }

  @Get()
  async getAllEvents(): Promise<Eventos[]> {
    return this.eventoService.loadEvents();
  }
  @Delete(':id')
  async deleteEvent(@Param('id') eventId: number): Promise<void> {
    await this.eventoService.deleteEvent(eventId);
  }
}
