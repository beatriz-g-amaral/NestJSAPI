import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  Res,
  Param,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from '../utilis/file-upload.utils';
// import { google } from 'googleapis';
// import * as fs from 'fs';

@Controller('file')
export class FileController {
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
  async uploadedFile(@UploadedFile() file) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    //  await this.uploadToGoogleDrive(file.path, file.originalname);
    return response;
  }

  @Post('multiple')
  @UseInterceptors(
    FilesInterceptor('image', 20, {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadMultipleFiles(@UploadedFiles() files) {
    const response = [];
    for (const file of files) {
      const fileResponse = {
        originalname: file.originalname,
        filename: file.filename,
      };
      //await this.uploadToGoogleDrive(file.path, file.originalname);
      response.push(fileResponse);
    }
    return response;
  }

  @Get(':imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './files' });
  }

  /*
  async uploadToGoogleDrive(filePath, filename) {
   const credentials = require('../module/googleauth.module');
   const auth = new google.auth.GoogleAuth({
     credentials,
     scopes: ['https://www.googleapis.com/auth/drive.file'],
   });

   const drive = google.drive({ version: 'v3', auth });

   try {
     const response = await drive.files.create({
       requestBody: {
         name: filename, // Nome do arquivo no Google Drive
       },
       media: {
         body: fs.createReadStream(filePath), // Caminho local do arquivo
       },
     });

     console.log('Arquivo enviado para o Google Drive:', response.data);
   } catch (error) {
     console.error('Erro ao enviar o arquivo para o Google Drive:', error);
     throw new Error(
       'Ocorreu um erro ao enviar o arquivo para o Google Drive.',
     );
   }
 }*/
}
