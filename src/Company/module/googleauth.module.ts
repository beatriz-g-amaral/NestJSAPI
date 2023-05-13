import { Module } from '@nestjs/common';

@Module({
  providers: [
    {
      provide: 'GOOGLE_AUTH_OPTIONS',
      useValue: {
        web: {
          client_id:
            '996074125764-0v7sh8t294aoan6hko6c09rp81qg6l0c.apps.googleusercontent.com',
          project_id: 'pb-budget',
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://oauth2.googleapis.com/token',
          auth_provider_x509_cert_url:
            'https://www.googleapis.com/oauth2/v1/certs',
          client_secret: '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',
        },
      },
    },
  ],
  exports: ['GOOGLE_AUTH_OPTIONS'],
})
export class GoogleAuthModule {}
export default GoogleAuthModule;
