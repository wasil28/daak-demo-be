import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { PesanController } from './pesan.controller';

@Module({
  controllers: [HealthController, PesanController],
})
export class AppModule {}
