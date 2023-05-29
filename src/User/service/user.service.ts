import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entity/user.entity';
import { FindOneOptions } from 'typeorm';
import { UsuarioInput } from '../dto/user.input';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly UsuarioRepository: Repository<Usuario>,
  ) {}

  async login(username: string, password: string) {
    const options: FindOneOptions<Usuario> = {
      where: {
        nomeUsuario: username,
        senha: password,
      },
    };
    const user = await this.UsuarioRepository.findOne(options);
    if (user) {
      return { success: true };
    } else {
      return { success: false };
    }
  }
  async cadastrar(usuarioInput: UsuarioInput): Promise<Usuario> {
    const novoUsuario = this.UsuarioRepository.create(usuarioInput);
    return this.UsuarioRepository.save(novoUsuario);
  }
}
