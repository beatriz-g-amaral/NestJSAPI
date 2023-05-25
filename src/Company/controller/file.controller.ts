import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from '../utilis/file-upload.utils';
import { EventosService } from '../Events/Services/event.service';
import { Eventos } from '../Events/Entity/event.entity';
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  Get,
  Param,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('file')
export class FileController {
  constructor(private readonly eventoService: EventosService) {}
  @Get(':imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './files' });
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadedFile(@UploadedFile() file, @Body() body: any) {
    const { nome_evento, data_evento, criado_por, evento_id } = body;

    const newEvent: Eventos = {
      nome_evento,
      data_evento,
      imagem: file.filename, // Salve apenas o nome do arquivo
      data_cadastrada: new Date(),
      criado_por,
      evento_id,
    };

    const createdEvent = await this.eventoService.createEvent(newEvent);

    const response = {
      originalname: file.originalname,
      filename: file.filename,
      event: createdEvent,
    };

    return response;
  }
}
