import { Controller, Post, Body } from '@nestjs/common';
import { UsuarioService } from '../service/user.service';
import { UsuarioInput } from '../dto/user.input';
import { Usuario } from '../entity/user.entity';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('cadastro')
  async create(@Body() usuarioInput: UsuarioInput): Promise<Usuario> {
    return this.usuarioService.cadastrar(usuarioInput);
  }

  @Post('login')
  async login(@Body() loginDto: UsuarioInput): Promise<any> {
    return this.usuarioService.login(loginDto.nomeUsuario, loginDto.senha);
  }
}
