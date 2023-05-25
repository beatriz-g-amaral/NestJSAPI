import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Eventos } from '../Entity/event.entity';

@Injectable()
export class EventosService {
  constructor(
    @InjectRepository(Eventos)
    private eventoRepository: Repository<Eventos>,
  ) {}

  async createEvent(newEvent: Eventos): Promise<Eventos> {
    try {
      const createdEvent = await this.eventoRepository.save(newEvent);
      return createdEvent;
    } catch (error) {
      console.error('Erro ao criar o evento:', error);
      throw new Error(
        'Erro ao criar o evento. Verifique o console para mais detalhes.',
      );
    }
  }
  async deleteEvent(eventId: number): Promise<void> {
    await this.eventoRepository.delete(eventId);
  }

  async loadEvents(): Promise<Eventos[]> {
    try {
      const events = await this.eventoRepository.find();
      return events;
    } catch (error) {
      console.error('Erro ao carregar os eventos:', error);
      throw new Error(
        'Erro ao carregar os eventos. Verifique o console para mais detalhes.',
      );
    }
  }
}
